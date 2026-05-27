import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, Globe } from 'lucide-react';
import logoImg from '../assets/gallery/Logo of school.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t-4 border-brand-gold text-slate-300 font-sans mt-auto">
      {/* Primary Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: Identity & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center border border-slate-200">
              <img
                src={logoImg}
                alt="Shree Deupur Namuna Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-sm font-serif tracking-tight leading-tight">
                Shree Deupur Namuna
              </span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                Secondary Boarding School
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            A premium private boarding school dedicated to secondary educational excellence (Nursery to Grade 10 SEE preparation). Committed to bringing scientific rigor, computing fluency, and character education to students in Modi Rural Municipality.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-6 text-white">
          <h3 className="text-xs  font-bold uppercase tracking-wider  border-l-2 border-brand-gold pl-3 font-serif">
            Academic Links
          </h3>
          <ul className="space-y-3 text-xs">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Facilities', path: '/facilities' },
              { name: 'Admissions', path: '/admissions' },
              { name: 'Events & Activities', path: '/events' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-brand-gold transition-colors flex items-center gap-2"
                >
                  <span className="text-[10px] text-brand-gold/60">▪</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details & Socials */}
        <div className="space-y-6">
          <h3 className="text-xs  font-bold uppercase tracking-wider  border-l-2 border-brand-gold pl-3 font-serif">
            Contact Details
          </h3>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed text-slate-400">
                Patichaur, Modi Rural Municipality, Parbat, Nepal
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+97761410055" className="hover:text-brand-gold transition-colors">+977 61-410055</a>
                <a href="tel:+97798XXXXXXXX" className="text-[10px] text-slate-500 hover:text-brand-gold transition-colors">+977 98XXXXXXXX</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <a
                href="mailto:info@deupurnamuna.edu.np"
                className="hover:text-brand-gold transition-colors break-all"
              >
                info@deupurnamuna.edu.np
              </a>
            </li>
          </ul>

          {/* Social Icons Arrangement */}
          <div className="pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Shree-Deupur-Namuna-English-Secondary-Boarding-School-100054545496805/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 group"
                title="Follow us on Facebook"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 group opacity-55 cursor-not-allowed"
                title="Website Portal"
              >
                <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Locate Us Map Integration */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100 border-l-2 border-brand-gold pl-3 font-serif">
            Locate Us
          </h3>

          {/* Responsive Map Container */}
          <div className="w-full h-32 rounded overflow-hidden border border-slate-800 bg-slate-900 relative group">
            <iframe
              title="Shree Deupur Namuna Boarding School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7023.238356391483!2d83.82390196853874!3d28.24849646452814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995ebcfa02ef76f%3A0xe53ef821568e26d9!2sPatichaur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1716800000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-75 group-hover:opacity-90 transition-opacity"
            ></iframe>
          </div>

          {/* Styled Tailwind Map Button */}
          <a
            href="https://maps.app.goo.gl/42Exk8gpffw8RQes6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded bg-slate-900 border border-slate-800 hover:border-brand-gold/60 hover:bg-slate-850 transition-all duration-300 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Copyright / Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Shree Deupur Namuna English Secondary Boarding School. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[10px] tracking-wide uppercase text-slate-400">
            <span>Designed for Academic Excellence</span>
            <span className="text-brand-gold">●</span>
            <span>Patichaur, Parbat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
