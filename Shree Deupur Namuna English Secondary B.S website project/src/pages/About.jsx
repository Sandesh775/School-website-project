import React from 'react';
import founderImg from '../assets/gallery/Founder of School.png';
import principalImg from '../assets/gallery/Principal of School.jpg';

export default function About() {
  return (
    <div className="flex-grow bg-slate-50 text-slate-800 font-sans py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* 1. Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1 rounded border border-brand-gold/20 uppercase">
            Institutional Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-brand-navy">
            About Our Institution
          </h1>
          <p className="text-xs md:text-sm text-slate-500">
            A look into the historical foundation, vision, academic pedagogy, and administrative officers of Shree Deupur Namuna.
          </p>
        </div>

        {/* 2. Symmetrical Vision & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-lg space-y-4">
            <h2 className="text-xl font-bold font-serif text-brand-navy border-b border-slate-100 pb-2">
              Our Vision & Mission
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              To provide high-quality, contemporary boarding school education in the Parbat region, ensuring students build strong characters, deep analytical capabilities, and computing fluency. We aim to nurture future leaders who are academically capable, socially responsible, and globally aware.
            </p>
          </div>

          <div className="glass-card p-8 rounded-lg space-y-4">
            <h2 className="text-xl font-bold font-serif text-brand-navy border-b border-slate-100 pb-2">
              Pedagogical Standards
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We focus heavily on academic rigor, balanced with sports and cultural activities. Our comprehensive curriculum from Nursery through Grade 10 prepares students for the Secondary Education Examination (SEE) using advanced teaching methodologies, computer literacy modules, and practical laboratory exercises.
            </p>
          </div>
        </div>

        {/* 3. Mirrored Executive Governance Section */}
        <div className="space-y-10 pt-6">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-navy">Executive Leadership Profiles</h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              Our administrative leaders are committed to everyday excellence and maintaining a high standard of boarding instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Founder Card */}
            <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start bg-white">
              <div className="w-full md:w-44 h-48 rounded bg-slate-50 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative">
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
                <h3 className="text-lg font-bold font-serif text-brand-navy leading-tight">Bringing Premier Boarding Education</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Our core mission when establishing Shree Deupur Namuna was to provide a top-tier, highly disciplined, and comprehensive boarding education right in the heart of Parbat. By blending advanced learning methodologies with modern residential facilities, we ensure that students in Modi Rural Municipality receive the academic foundation required to compete globally while staying connected to their cultural roots."
                </p>
                <div className="text-[10px] border-t border-slate-100 pt-2">
                  <p className="font-bold text-slate-800">Founder's Office</p>
                  <p className="text-slate-400">Shree Deupur Namuna Boarding School</p>
                </div>
              </div>
            </div>

            {/* Principal Card */}
            <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start bg-white">
              <div className="w-full md:w-44 h-48 rounded bg-slate-50 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative">
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
                <h3 className="text-lg font-bold font-serif text-brand-navy leading-tight">Pedagogical Rigor & Technical Fluency</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Our daily routines center strictly around academic excellence and SEE preparation. We firmly believe in balanced growth; thus, our computing disciplines and science labs are closely complemented by physical activities and our Annual Sports Week. We hold ourselves to strict standards to ensure every child leaves our gates with character, knowledge, and curiosity."
                </p>
                <div className="text-[10px] border-t border-slate-100 pt-2">
                  <p className="font-bold text-slate-800">Principal's Office</p>
                  <p className="text-slate-400">Administration & Curriculum Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Geographical Heritage */}
        <div className="glass-card p-8 rounded-lg text-center max-w-3xl mx-auto space-y-4 bg-white">
          <h2 className="text-xl font-bold font-serif text-brand-navy">Geographical Heritage</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Situated at Patichaur, Modi Rural Municipality, Parbat, Nepal, our campus boasts a serene, clean, and distraction-free environment that supports academic reflection, scientific experiments, and active sports training. We serve as a cornerstone of secondary boarding school education for the surrounding Nepalese communities.
          </p>
        </div>

      </div>
    </div>
  );
}
