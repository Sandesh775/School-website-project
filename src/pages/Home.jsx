import React from 'react';
import founderImg from '../assets/gallery/Founder of School.png';
import principalImg from '../assets/gallery/Principal of School.jpg';
import schoolHeroImg from '../assets/gallery/School Hompage section picture.jpg';

// Vite-native dynamic asset resolver
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
const galleryImages = Object.keys(imageModules)
  .map((key) => {
    const filename = key.split('/').pop();
    return {
      src: imageModules[key].default || imageModules[key],
      filename,
      // Generate clean, readable captions
      caption: filename
        .replace(/\.[^/.]+$/, "") // Remove file extension
        .replace(/under gallery section in homepage/gi, "")
        .replace(/at school compound/gi, "")
        .replace(/picture/gi, "")
        .trim()
    };
  })
  .filter((img) => {
    // Filter out branding and administrative portraits from the general activities grid
    const excluded = [
      'Logo of school.png',
      'Founder of School.png',
      'Principal of School.jpg',
      'Second pic of Founder.png'
    ];
    return !excluded.includes(img.filename);
  });

export default function Home() {
  return (
    <div className="flex-grow bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. Academic Hero Section (Optimized White with Soft Color Relief) */}
      <section className="bg-white py-20 px-6 relative overflow-hidden border-b border-slate-200">
        {/* Soft elegant radial gradients / background blobs in corners for depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-[#0B132B] rounded-full filter blur-[120px] opacity-[0.06] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-[#D97706] rounded-full filter blur-[120px] opacity-[0.06] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase">
              Established for Educational Distinction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight text-slate-900">
              Shree Deupur Namuna <br />
              <span className="text-brand-gold">English Secondary Boarding School</span>
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Nestled in the serene and inspiring surroundings of <span className="text-slate-800 font-semibold">Modi Rural Municipality, Patichaur, Parbat, Nepal</span>. We provide academic leadership from Nursery through Grade 10, driving Secondary Education Examination (SEE) excellence and technical computing fluency.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/admissions"
                className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs tracking-wider uppercase rounded shadow-lg shadow-amber-500/10 transition-colors cursor-pointer"
              >
                Admissions Directory
              </a>
              <a
                href="/about"
                className="px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wider uppercase rounded shadow-sm transition-colors cursor-pointer"
              >
                Institutional Profile
              </a>
            </div>
          </div>

          {/* Right Column: Premium school image frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md lg:max-w-none rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative group bg-slate-100">
              <img 
                src={schoolHeroImg} 
                alt="Shree Deupur Namuna School Campus and Bus" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              <span className="absolute bottom-4 left-4 text-[10px] text-white font-bold tracking-wider uppercase bg-brand-navy/60 backdrop-blur-sm px-2.5 py-1 rounded">
                Patichaur Campus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Symmetrical Leadership Messages */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Administration Board</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">Institutional Governance Messages</h2>
          <p className="text-xs md:text-sm text-slate-500">
            A message of vision and everyday pedagogical commitment from our executive administration office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1: Message from the Founder */}
          <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-44 h-48 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative">
              <img 
                src={founderImg} 
                alt="Founder of School" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                Founder Message
              </span>
              <h3 className="text-xl font-bold font-serif text-brand-navy leading-tight">Bringing Premier Boarding Education</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Our core mission when establishing Shree Deupur Namuna was to provide a top-tier, highly disciplined, and comprehensive boarding education right in the heart of Parbat. By blending advanced learning methodologies with modern residential facilities, we ensure that students in Modi Rural Municipality receive the academic foundation required to compete globally while staying connected to their cultural roots."
              </p>
              <div className="text-xs border-t border-slate-100 pt-2">
                <p className="font-bold text-slate-800">Founder's Office</p>
                <p className="text-slate-400">Shree Deupur Namuna Boarding School</p>
              </div>
            </div>
          </div>

          {/* Card 2: Message from the Principal */}
          <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-44 h-48 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative">
              <img 
                src={principalImg} 
                alt="Principal of School" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-0.5 rounded bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider">
                Principal Desk
              </span>
              <h3 className="text-xl font-bold font-serif text-brand-navy leading-tight">Pedagogical Rigor & Technical Fluency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Our daily routines center strictly around academic excellence and SEE preparation. We firmly believe in balanced growth; thus, our computing disciplines and science labs are closely complemented by physical activities and our Annual Sports Week. We hold ourselves to strict standards to ensure every child leaves our gates with character, knowledge, and curiosity."
              </p>
              <div className="text-xs border-t border-slate-100 pt-2">
                <p className="font-bold text-slate-800">Principal's Office</p>
                <p className="text-slate-400">Administration & Curriculum Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Local Activities Gallery Grid */}
      <section className="bg-white border-t border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Campus Events</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">School Activities Gallery</h2>
            <p className="text-xs md:text-sm text-slate-500">
              Explore dynamic moments of science exhibitions, cultural showcases, prize distribution assemblies, and sports days in Patichaur.
            </p>
          </div>

          {/* Symmetrical masonry layout grid mapping local images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className="break-inside-avoid bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group hover:border-brand-gold transition-colors flex flex-col shadow-sm"
              >
                <div className="overflow-hidden relative bg-slate-200">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full object-cover group-hover:scale-103 transition-transform duration-300 max-h-72"
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                  <h4 className="text-xs font-bold font-serif text-brand-navy uppercase tracking-wide">
                    {img.caption}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                    Shree Deupur Namuna Gallery
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
