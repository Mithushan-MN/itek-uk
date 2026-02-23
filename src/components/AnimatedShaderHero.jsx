// AnimatedShaderHero.jsx
import React, { useRef, useEffect } from 'react';

// ──────────────────────────────────────────────
// Default shader (nebula / space clouds + mouse glow)
// ──────────────────────────────────────────────
const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898,78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f*f*(3.-2.*f);
  float a = rnd(i), b = rnd(i+vec2(1,0)), c = rnd(i+vec2(0,1)), d = rnd(i+1.);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

float fbm(vec2 p) {
  float t = 0., a = 1.; mat2 m = mat2(1.,-.5,.2,1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2. * m;
    a *= .5;
  }
  return t;
}

void main() {
  vec2 uv = (FC - .5 * R) / MN;
  vec2 st = uv * vec2(2,1);
  vec3 col = vec3(0);
  float bg = fbm(vec2(st.x + T * .4, -st.y * 1.2 + T * .1)) * 0.7 + 0.3;

  uv *= 1. - 0.25 * (sin(T * 0.15) * 0.5 + 0.5);

  for (float i = 1.; i < 9.; i++) {
    vec2 p = uv + 0.12 * cos(i * vec2(0.08, 0.9) + T * 0.4 + i * 2.1);
    float d = length(p);
    col += 0.004 / d * (cos(sin(i * 1.4) * vec3(1.1,2.3,3.4)) + 1.2);
    float b = noise(i + p * 1.4 + bg);
    col += 0.003 * b / length(max(p, vec2(b * 0.04, 0.)));
    col = mix(col, vec3(bg * 0.28, bg * 0.14, bg * 0.06), d * 0.7);
  }

  // subtle vignette
  float vig = 1.0 - length(uv) * 0.4;
  col *= vig * 0.35 + 0.65;

  O = vec4(col, 1.0);
}`;

// ──────────────────────────────────────────────
// WebGL Renderer Class
// ──────────────────────────────────────────────
class WebGLRenderer {
  constructor(canvas, scale) {
    this.canvas = canvas;
    this.scale = scale;
    this.gl = canvas.getContext('webgl2');
    if (!this.gl) throw new Error('WebGL2 not supported');

    this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);

    this.vertexSrc = `#version 300 es
    precision highp float;
    in vec4 position;
    void main() { gl_Position = position; }`;

    this.vertices = new Float32Array([-1,1, -1,-1, 1,1, 1,-1]);

    this.mouseMove = [0, 0];
    this.mouseCoords = [0, 0];
    this.pointerCoords = [0, 0];
    this.pointerCount = 0;

    this.shaderSource = defaultShaderSource;
    this.program = null;
  }

  updateShader(source) {
    this.shaderSource = source;
    this.setup();
  }

  updateMove(deltas) { this.mouseMove = deltas; }
  updateMouse(coords) { this.mouseCoords = coords; }
  updatePointerCoords(coords) { this.pointerCoords = coords; }
  updatePointerCount(n) { this.pointerCount = n; }

  compile(shader, source) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    }
  }

  setup() {
    const gl = this.gl;
    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);

    this.compile(vs, this.vertexSrc);
    this.compile(fs, this.shaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
    }

    this.program = program;
  }

  init() {
    const gl = this.gl;
    const program = this.program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    this.uResolution = gl.getUniformLocation(program, 'resolution');
    this.uTime       = gl.getUniformLocation(program, 'time');
  }

  render(now = 0) {
    const gl = this.gl;
    const p = this.program;
    if (!p) return;

    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(p);

    gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.uTime, now * 0.001);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

// ──────────────────────────────────────────────
// Pointer / Mouse Handler
// ──────────────────────────────────────────────
class PointerHandler {
  constructor(canvas, scale) {
    this.canvas = canvas;
    this.scale = scale;
    this.pointers = new Map();
    this.lastCoords = [0, 0];
    this.moves = [0, 0];

    const mapCoord = (x, y) => [x * scale, canvas.height - y * scale];

    const onPointer = (e) => {
      const pos = mapCoord(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      if (e.type === 'pointerdown') {
        this.pointers.set(e.pointerId, pos);
      } else if (e.type === 'pointerup' || e.type === 'pointerleave') {
        this.pointers.delete(e.pointerId);
      } else if (e.type === 'pointermove') {
        this.pointers.set(e.pointerId, pos);
        this.moves[0] += e.movementX;
        this.moves[1] += e.movementY;
      }
    };

    canvas.addEventListener('pointerdown', onPointer);
    canvas.addEventListener('pointermove', onPointer);
    canvas.addEventListener('pointerup', onPointer);
    canvas.addEventListener('pointerleave', onPointer);

    this.destroy = () => {
      canvas.removeEventListener('pointerdown', onPointer);
      canvas.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('pointerup', onPointer);
      canvas.removeEventListener('pointerleave', onPointer);
    };
  }

  get count() { return this.pointers.size; }
  get move() { return this.moves; }
  get coords() {
    return this.pointers.size > 0
      ? Array.from(this.pointers.values()).flat()
      : [0, 0];
  }
  get first() {
    return this.pointers.values().next().value || this.lastCoords;
  }
}

// ──────────────────────────────────────────────
// Hook: Shader Canvas
// ──────────────────────────────────────────────
function useShaderCanvas() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const pointersRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const dpr = window.devicePixelRatio;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      if (rendererRef.current) {
        rendererRef.current.gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const renderLoop = (now) => {
      if (!rendererRef.current || !pointersRef.current) return;
      rendererRef.current.render(now);
      rafRef.current = requestAnimationFrame(renderLoop);
    };

    // Initialize
    const dpr = window.devicePixelRatio;
    rendererRef.current = new WebGLRenderer(canvas, dpr);
    pointersRef.current = new PointerHandler(canvas, dpr);

    rendererRef.current.setup();
    rendererRef.current.init();

    updateSize();
    rafRef.current = requestAnimationFrame(renderLoop);

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (pointersRef.current) pointersRef.current.destroy();
    };
  }, []);

  return canvasRef;
}

// ──────────────────────────────────────────────
// Hero Component (ready to use)
// ──────────────────────────────────────────────
export default function AnimatedShaderHero({
  headline = { line1: "Launch Your", line2: "Future Today" },
  subtitle = "Build faster. Scale smarter. Create without limits.",
  primaryButton = { text: "Get Started", onClick: () => console.log("Get Started") },
  secondaryButton = { text: "Learn More", onClick: () => console.log("Learn More") },
  trustBadge = { text: "Trusted by innovative teams", icons: ["✨"] },
  className = "",
}) {
  const canvasRef = useShaderCanvas();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
        {/* Trust badge */}
        {trustBadge && (
          <div className="mb-10 mt-30 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-sm">
              {trustBadge.icons?.map((icon, i) => (
                <span key={i} className="text-amber-300">{icon}</span>
              ))}
              <span className="text-amber-100/90">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center max-w-5xl space-y-8">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-fade-in-up delay-100">
              {headline.line1}
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-fade-in-up delay-300">
              {headline.line2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-3xl mx-auto font-light animate-fade-in-up delay-500">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8 animate-fade-in-up delay-700">
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                className="px-8 py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:to-orange-600 text-black font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
              >
                {primaryButton.text}
              </button>
            )}

            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tailwind animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .delay-100  { animation-delay: 0.1s; }
        .delay-300  { animation-delay: 0.3s; }
        .delay-500  { animation-delay: 0.5s; }
        .delay-700  { animation-delay: 0.7s; }

        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1;   }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}