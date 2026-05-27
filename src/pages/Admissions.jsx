import React from 'react';
import { Calendar, ClipboardList, ShieldAlert, Award } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="flex-grow bg-slate-50 text-slate-800 font-sans py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1 rounded border border-brand-gold/20 uppercase">
            Enrollment Directory
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-brand-navy">
            Admissions Policy & Guidelines
          </h1>
          <p className="text-xs md:text-sm text-slate-500">
            A comprehensive guide for parents regarding student registration, class eligibility, necessary documentation, and formal intake timelines.
          </p>
        </div>

        {/* Core Guidelines Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Registration Steps */}
          <div className="glass-card p-8 rounded-lg space-y-6 bg-white">
            <div className="flex items-center gap-3 text-brand-gold">
              <ClipboardList className="w-6 h-6 shrink-0" />
              <h2 className="text-lg font-bold font-serif text-brand-navy">Registration Steps</h2>
            </div>
            <ol className="list-decimal list-inside text-xs text-slate-650 space-y-3 leading-relaxed">
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Acquire Folder:</span> Obtain a formal student registration folder from the Patichaur campus administration office.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Form Submission:</span> Complete and return the admissions form along with preceding academic transcripts and character files.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Academic Review:</span> Registered candidates will attend a structured subject-based assessment review.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Security Clearance:</span> Upon selection, complete registration fees, hostel configurations (if applicable), and security clearances.
              </li>
            </ol>
          </div>

          {/* Card 2: Intake Eligibility */}
          <div className="glass-card p-8 rounded-lg space-y-6 bg-white">
            <div className="flex items-center gap-3 text-brand-gold">
              <Award className="w-6 h-6 shrink-0" />
              <h2 className="text-lg font-bold font-serif text-brand-navy">Intake & Eligibility</h2>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-650 space-y-3 leading-relaxed">
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Primary Grades:</span> Nursery applicants must be 3+ years old at the date of term commencement.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Middle Secondary:</span> Transfer applicants for Grades 1 through 9 must supply authenticated transfer certs from their prior school.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Grade 10 SEE Desk:</span> Enrolling for Grade 10 requires special vetting regarding specific board registration deadlines.
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-800">Hostel Boarding:</span> Boarding admissions are strictly aligned with available residential dorm space.
              </li>
            </ul>
          </div>

          {/* Card 3: Key Timelines */}
          <div className="glass-card p-8 rounded-lg space-y-6 bg-white">
            <div className="flex items-center gap-3 text-brand-gold">
              <Calendar className="w-6 h-6 shrink-0" />
              <h2 className="text-lg font-bold font-serif text-brand-navy">Academic Calendar</h2>
            </div>
            <ul className="space-y-4 text-xs text-slate-650">
              <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div>
                  <p className="font-semibold text-slate-800">Intake Phase I</p>
                  <p className="text-[10px] text-slate-400">Nursery to LKG Enrollment</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-700 text-[10px] font-bold">Chaitra / Baisakh</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div>
                  <p className="font-semibold text-slate-800">Intake Phase II</p>
                  <p className="text-[10px] text-slate-400">Grades 1 to 9 Transfer Desk</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-bold">Baisakh Mid</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <div>
                  <p className="font-semibold text-slate-800">SEE Board Registry</p>
                  <p className="text-[10px] text-slate-400">Secondary Education Exam</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-accent/10 text-brand-accent text-[10px] font-bold">Ashad / Shrawan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Required Documents Checklist */}
        <div className="glass-card p-8 rounded-lg space-y-6 bg-white">
          <h2 className="text-xl font-bold font-serif text-brand-navy border-b border-slate-100 pb-2 flex items-center gap-2">
            📂 Required Enrollment Documentation Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-650">
            <ul className="list-disc list-inside space-y-2">
              <li>Three recent passport-sized color photos of the student.</li>
              <li>Official Government Birth Certificate (Photocopy).</li>
              <li>Previous Term School Marksheet / Progress Card (Original).</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Original Character Certificate (for Grade 8 & up).</li>
              <li>Transfer Certificate (TC) signed by previous headteacher.</li>
              <li>Emergency contact registration & parental ID cards.</li>
            </ul>
          </div>
        </div>

        {/* Institutional Fee & Financial Policy Disclaimer */}
        <div className="glass-card p-8 rounded-lg bg-white border-l-4 border-brand-accent space-y-4">
          <div className="flex items-center gap-3 text-brand-accent">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h3 className="text-sm font-bold uppercase tracking-wider font-serif">Fee Regulations & Payment Terms</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tuition and boarding fees are calculated on a monthly term basis and must be cleared by the 10th of every calendar month. Parents are advised to pay at the school accounts desk or through official banking transfers. For detailed tuition brackets, hostel details, and optional bus transport routes, please contact the administration office directly at Patichaur.
          </p>
        </div>

      </div>
    </div>
  );
}
