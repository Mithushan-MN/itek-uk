// Contact.jsx
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import brand1 from '../../assets/brands/betterway.png'
import brand2 from '../../assets/brands/huntsman.png';
import brand3 from '../../assets/brands/sagar.png';
import brand4 from '../../assets/brands/betterway.png';
import brand5 from '../../assets/brands/vncoe.webp';
import GlobalPresence from '../GlobalPresence';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    website: '',
    heardFrom: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const WEB3FORMS_ACCESS_KEY = 'f1240c38-7d93-4ea0-957f-29f32fbd0512'; 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please agree to the privacy terms.',
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          website: formData.website,
          heard_from: formData.heardFrom,
          message: formData.message,
          subject: `New Inquiry from ${formData.firstName} - iTek Solutions LK`,
          from_name: `${formData.firstName} ${formData.lastName}`,
        }),
      });

      const json = await response.json();

      if (json.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! We will get back to you soon.',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          position: '',
          website: '',
          heardFrom: '',
          message: '',
          consent: false,
        });
      } else {
        throw new Error(json.message || 'Something went wrong');
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email us directly.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white mt-[-135px]">
      {/* Header */}
<section className="relative py-28 md:py-40 bg-gradient-to-br from-red-950 via-black to-black text-center overflow-hidden ">
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-8 md:mb-12 mt-10">
      WE'D LOVE TO HEAR
      <br />
      FROM YOU.
    </h1>

    <p className="text-xl md:text-3xl font-medium text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12 md:mb-16">
      Leave us a message using the form, or drop us a line.
    </p>

    {/* Brand / Client / Partner Slider */}
    <div className="max-w-6xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        className="!pb-0"
      >
        {/* Replace these with your real brand/client logos */}
        {[
          { src: brand1, alt: "Client 1" },
          { src: brand2, alt: "Client 2" },
          { src: brand3, alt: "Client 3" },
          { src: brand4, alt: "Client 4" },
          { src: brand5, alt: "Client 5" },
          { src: "/logos/client-6.png", alt: "Client 6" },
          { src: "/logos/client-7.png", alt: "Client 7" },
          { src: "/logos/client-8.png", alt: "Client 8" },
        ].map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-16 md:h-16  opacity-100 hover:opacity-100 transition-opacity duration-300">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-[140px] md:max-w-[180px] object-contain grayscale-0 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

      {/* Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* left: Locations & Contact Info */}
            <div className="space-y-16">
              <h3 className="text-4xl md:text-5xl font-black text-red-500 mb-10">
                How to get in touch
              </h3>

              {/* Colombo */}
              <div className="space-y-4">
                <p className="text-3xl font-bold text-white">Jaffna</p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  iTek Solutions,<br />
                  Mariyamman veethy, Thirunelvely, <br />
                  Jaffna,<br />
                  Sri Lanka
                </p>
              </div>

              {/* Anuradhapura */}
              {/* <div className="space-y-4">
                <p className="text-3xl font-bold text-white">Anuradhapura</p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  iTek Solutions,<br />
                  No. 45/1, Maithripala Senanayake Mawatha,<br />
                  Anuradhapura,<br />
                  North Central Province,<br />
                  Sri Lanka
                </p>
              </div> */}

              {/* Quick Contact */}
              <div className="grid md:grid-cols-1 gap-8 mt-12">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                    <a href="tel:+94771234567" className="text-2xl font-bold hover:text-red-400 transition-colors">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-red-900/40 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:info@iteksolutions.lk" className="text-2xl font-bold hover:text-red-400 transition-colors break-all">
                     info@iteksolutions.lk
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4 mt-12">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
                  <button
                    key={platform}
                    className="
                      px-6 py-3 border-2 border-gray-700 text-gray-300
                      hover:border-red-600 hover:text-red-400
                      rounded-full font-medium text-base
                      transition-all duration-300
                    "
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            {/* Form */}
            <div className="bg-gray-950/70 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-950/30">
              {status.success ? (
                <div className="text-center py-20">
                  <CheckCircle2 className="w-24 h-24 mx-auto text-red-500 mb-8 animate-pulse" />
                  <h3 className="text-4xl font-bold text-white mb-6">Message Sent!</h3>
                  <p className="text-xl text-gray-300">{status.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        FIRST NAME*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="What is your first name?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        LAST NAME*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="And your surname?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email + Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        EMAIL*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Can we have your email address?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        COMPANY*
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="What is your company name?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone + Position */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="What phone number can we reach you on?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        POSITION*
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        placeholder="What is your job title?"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website + How did you hear */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        WEBSITE URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Your website URL"
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-white placeholder-gray-500 text-lg transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        HOW DID YOU HEAR ABOUT US?
                      </label>
                      <select
                        name="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                        className="w-full px-6 py-5 bg-transparent border-b-2 border-gray-700 focus:border-red-600 outline-none text-gray-400 text-lg appearance-none transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="Google">Google</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Event">Event / Conference</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3">
                      MESSAGE*
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      placeholder="How can we help?"
                      className="
                        w-full px-6 py-5 bg-transparent border-b-2 border-gray-700
                        focus:border-red-600 outline-none text-white placeholder-gray-500
                        text-lg transition-colors resize-none
                      "
                    />
                  </div>

                  {/* Privacy & Consent */}
                  <div className="flex items-start gap-4 mt-8">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-5 h-5 accent-red-600 bg-gray-900 border-gray-700 rounded cursor-pointer"
                    />
                    <p className="text-sm md:text-base text-gray-400">
                      We're committed to your privacy. By ticking the box, you consent to allow iTeksolutions to use the information you provide to contact you about our relevant services. You may unsubscribe at any time. For more information, check out our{' '}
                      <a href="/privacy-policy" className="text-red-400 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/cookie-policy" className="text-red-400 hover:underline">
                        Cookie Policy
                      </a>.
                      <br /><br />
                      By clicking submit below, you consent to allow iTeksolutions to store and process the personal information submitted above.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="
                      mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3
                      px-12 py-6 bg-red-600 hover:bg-red-700 active:bg-red-800
                      text-white font-bold text-xl rounded-full
                      transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50
                      hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {status.loading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Submit
                      </>
                    )}
                  </button>

                  {status.error && (
                    <p className="text-red-400 text-center mt-4">{status.message}</p>
                  )}
                </form>
              )}
            </div>

            
          </div>

          {/* Large Map */}
          <div className="mt-24 lg:mt-32">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-10 text-red-500">
              Find Us
            </h3>
            <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-red-950/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5561.877688362519!2d80.03242588335769!3d9.694571830579239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMariyamman%20veethy%2C%20Thirunelvely%2C%20Jaffna!5e0!3m2!1sen!2slk!4v1771918408652!5m2!1sen!2slk" 
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iteksolutions Locations"
              />
            </div>
          </div>
          <GlobalPresence/>
        </div>
      </section>
    </div>
  );
}