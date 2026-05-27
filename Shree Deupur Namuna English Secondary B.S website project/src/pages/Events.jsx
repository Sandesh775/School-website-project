import React from 'react';

export default function Events() {
  return (
    <div className="flex-1 py-16 px-6 max-w-5xl mx-auto w-full space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-wider text-brand-emerald bg-emerald-500/10 px-3 py-1 rounded-full uppercase border border-brand-emerald/10">
          Campus Life in Action
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-slate-100">
          Events & Activities
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          A glimpse into the vibrant events, Sports Weeks, and extra-curricular systems defining Shree Deupur Namuna school culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {/* Event 1 */}
        <div className="glass-card p-6 rounded-xl space-y-4 text-left">
          <div className="text-2xl">🏆</div>
          <h3 className="text-lg font-bold font-serif text-slate-200">Annual Sports Week</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            An annual extravaganza featuring track & field races, volleyball, table tennis, and minor traditional athletics. Teaches healthy teamwork and sportsmanship.
          </p>
        </div>

        {/* Event 2 */}
        <div className="glass-card p-6 rounded-xl space-y-4 text-left">
          <div className="text-2xl">🎭</div>
          <h3 className="text-lg font-bold font-serif text-slate-200">Cultural & Music Programs</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Showcasing diverse Nepalese folk dances, patriotic recitals, school band displays, and drama performances during school celebrations and parents' days.
          </p>
        </div>

        {/* Event 3 */}
        <div className="glass-card p-6 rounded-xl space-y-4 text-left">
          <div className="text-2xl">🤖</div>
          <h3 className="text-lg font-bold font-serif text-slate-200">Computing & Science Expo</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Exhibiting student-crafted model designs, hardware showcases, coding scripts, and physics experiments. Fosters research enthusiasm and technological literacy.
          </p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-bold font-serif text-slate-200">ECA Programs Calendar</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Extracurricular Activities (ECA) are scheduled every Friday afternoon, hosting spelling bee challenges, debate modules, quiz tournaments, art workshops, and campus hygiene clean-up campaigns.
        </p>
      </div>
    </div>
  );
}
