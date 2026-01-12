"use client"
import React, { useState } from 'react';
import { Globe, Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook, Twitter, Palette } from 'lucide-react';
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function ApenAppsLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Visit Our Website",
      subtitle: "Explore our portfolio & services",
      url: "https://apenapps.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaWhatsapp size={25} />,
      title: "WhatsApp Us",
      subtitle: "Quick chat for inquiries",
      url: "https://wa.me/923361002666",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      subtitle: "+92 336 100 2666",
      url: "tel:+923361002666",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      subtitle: "info@apenapps.com",
      url: "mailto:info@apenapps.com",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaBehance size={20} />,
      title: "Behance Portfolio",
      subtitle: "View our design work",
      url: "https://behance.net/apenapps",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={25} />,
      title: "LinkedIn",
      url: "https://linkedin.com/company/apenapps",
      color: "from-blue-700 to-blue-500"
    },
    {
      icon: <FaInstagram size={25} />,
      title: "Instagram",
      url: "https://instagram.com/apenapps",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FaFacebook size={25} />,
      title: "Facebook",
      url: "https://facebook.com/apenapps",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <FaYoutube size={25} />,
      title: "Youtube",
      url: "https://youtube.com/@apenapps",
      color: "from-gray-800 to-gray-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#8b6e23] to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -top-48 -left-48" style={{backgroundColor: '#e7b339'}}></div>
        <div className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-1/2 -right-48 animation-delay-2000" style={{backgroundColor: '#d4a02f'}}></div>
        <div className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -bottom-48 left-1/2 animation-delay-4000" style={{backgroundColor: '#e7b339'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden" style={{background: 'linear-gradient(to bottom right, #e7b339, #c9992d)'}}>
            <img 
              src="/apenapps.jpg" 
              alt="Apen Apps Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">
            Apen Apps
          </h1>
          <p className="text-xl mb-2">
            Software Services & Solutions
          </p>
          <p className="text-sm max-w-md mx-auto" style={{color: '#e7b339cc'}}>
            Building innovative software solutions for modern businesses. Let's connect and bring your ideas to life!
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="group"
              >
                <div className={`
                  w-12 h-12 rounded-full bg-gradient-to-br ${social.color} 
                  flex items-center justify-center text-white shadow-lg
                  transform hover:scale-110 transition-all duration-300
                  hover:shadow-2xl
                `}>
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="block group"
            >
              <div className={`
                relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 
                border border-white/20 hover:border-white/40
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300 shadow-xl hover:shadow-2xl
                ${hoveredIndex === index ? 'bg-white/15' : ''}
              `}>
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                  transition-opacity duration-300 bg-gradient-to-r ${link.color}
                `}></div>
                
                <div className="relative flex items-center space-x-4">
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} 
                    flex items-center justify-center text-white shadow-lg
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {link.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg transition-colors" style={hoveredIndex === index ? {color: '#f4d89f'} : {}}>
                      {link.title}
                    </h3>
                    <p className="text-sm">
                      {link.subtitle}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Google Maps Embed - Always Visible */}
        <div className="mt-6 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-lg">Our Office Location</h3>
              <a 
                href="https://maps.app.goo.gl/aYV2nzCMy1S5yeJ76"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <MapPin className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
            <div className="rounded-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3447.488398547416!2d66.98969799999999!3d30.223146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDEzJzIzLjMiTiA2NsKwNTknMjIuOSJF!5e0!3m2!1sen!2s!4v1768199152079!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apen Apps Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm" style={{color: '#e7b33999'}}>
          <p>© 2026 Apen Apps. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}