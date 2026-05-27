import React from 'react';

export default function Facilities() {
  return (
    <div className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-wider text-brand-emerald bg-emerald-500/10 px-3 py-1 rounded-full uppercase border border-brand-emerald/10">
          World-Class Infrastructure
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-slate-100">
          Our Facilities
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Supporting comprehensive practical training, research, and technical literacy to enrich the secondary schooling curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {/* Facility Card 1 */}
        <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
          <div className="text-3xl p-4 rounded-lg bg-emerald-500/10 text-brand-emerald">💻</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-serif text-slate-200">Computer Laboratory</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Equipped with modern desktop computer workstations, safe local area networking, and offline/online digital reference libraries. Students gain early computing fluency, keyboard skills, and coding basics.
            </p>
          </div>
        </div>

        {/* Facility Card 2 */}
        <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
          <div className="text-3xl p-4 rounded-lg bg-emerald-500/10 text-brand-emerald">🧪</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-serif text-slate-200">Science Laboratory</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fully stocked with scientific apparatus, experiment reagents, and safety kits to aid hands-on learning in Physics, Chemistry, and Biology. Essential for SEE scientific research requirements.
            </p>
          </div>
        </div>

        {/* Facility Card 3 */}
        <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
          <div className="text-3xl p-4 rounded-lg bg-emerald-500/10 text-brand-emerald">📚</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-serif text-slate-200">Central Library</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A quiet sanctuary housing thousands of books, reference encyclopedia materials, novels, and textbooks to foster read-aloud programs and silent self-study.
            </p>
          </div>
        </div>

        {/* Facility Card 4 */}
        <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
          <div className="text-3xl p-4 rounded-lg bg-emerald-500/10 text-brand-emerald">🏡</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-serif text-slate-200">Boarding & Amenities</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Clean and separate boarding dormitories for boys and girls, nutritious dining options, strict supervision by residential wardens, and scheduled tutoring blocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
