import React, { useEffect, useState } from "react";
import WorldSVG from "../assets/world.svg?react";

const branchData = {
  Australia: {
    country: "Australia",
    city: "NSW",
    address: "17 Metford CI, Metford NSW 2323",
    phone: "+61 450 662 270",
  },
  Canada: {
    country: "Canada",
    city: "Toronto",
    address: "100 King Street, Toronto",
    phone: "+1 437 450 8131",
  },
  UnitedKingdom: {
    country: "United Kingdom",
    city: "London",
    address: "Hadlow Road, Welling, London, United Kingdom",
    phone: "+44 7456 095003",
  },
  SriLanka: {
    country: "Sri Lanka",
    city: "Jaffna",
    address: "Mariyamman veethy, Thirunelvely, Jaffna.",
    phone: "+94 11 123 4567",
  },
};

export default function GlobalPresence() {
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    // Iterate over all countries in branchData
    Object.keys(branchData).forEach((countryKey) => {
      const countryPaths = document.querySelectorAll(`.${countryKey.replace(/\s/g, "\\ ")}`); 
      // replace spaces for class selector

      countryPaths.forEach((path) => {
        path.style.fill = "#ef4444"; // base red
        path.style.cursor = "pointer";
        path.style.transition = "0.3s ease";

        path.addEventListener("mouseenter", handleEnter);
        path.addEventListener("mouseleave", handleLeave);
      });
    });

    function handleEnter(e) {
      const classList = Array.from(e.target.classList);
      const countryKey = classList.find((cls) => branchData[cls]);

      if (countryKey) {
        setTooltip({
          ...branchData[countryKey],
          x: e.clientX,
          y: e.clientY,
        });
        e.target.style.fill = "#dc2626"; // hover dark red
      }
    }

    function handleLeave(e) {
      const classList = Array.from(e.target.classList);
      const countryKey = classList.find((cls) => branchData[cls]);

      if (countryKey) {
        e.target.style.fill = "#ef4444"; // reset base color
      }
      setTooltip(null);
    }

    // Cleanup event listeners
    return () => {
      Object.keys(branchData).forEach((countryKey) => {
        const countryPaths = document.querySelectorAll(`.${countryKey.replace(/\s/g, "\\ ")}`);
        countryPaths.forEach((path) => {
          path.removeEventListener("mouseenter", handleEnter);
          path.removeEventListener("mouseleave", handleLeave);
        });
      });
    };
  }, []);

  return (
    <div className="relative bg-gray-950 py-20 mt-10">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-[-50px]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100">
            Our Global Presence
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Multiple branches across the world — delivering digital excellence wherever you are.
          </p>
        </div>

      <WorldSVG className="w-full fill-gray-700" />

      {tooltip && (
        <div
          className="fixed bg-white text-gray-900 p-4 rounded-xl shadow-2xl w-64 z-50 pointer-events-none"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
        >
          <h3 className="font-semibold text-lg mb-2">
            {tooltip.city}, {tooltip.country}
          </h3>
          <p className="text-sm">{tooltip.address}</p>
          <p className="text-sm mt-1 font-medium">{tooltip.phone}</p>
        </div>
      )}
    </div>
  );
}