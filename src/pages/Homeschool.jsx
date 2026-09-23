import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen, Clock, GraduationCap, Languages,
    ArrowRight, School, Target, CalendarDays, Menu, X
} from 'lucide-react';
import { homeschoolData } from '../data/homeschool';

const navItems = [
    { key: 'mission', label: 'Mission', icon: Target },
    { key: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { key: 'courses', label: 'Core Courses', icon: GraduationCap },
    { key: 'languages', label: 'Languages', icon: Languages },
    { key: 'schedule', label: 'Daily Schedule', icon: CalendarDays },
    { key: 'grades', label: 'Grade Levels', icon: School },
    { key: 'enroll', label: 'Enroll', icon: ArrowRight },
];

export default function Homeschool() {
    const [active, setActive] = useState('mission');
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="h-[calc(100vh-7rem)] min-h-[600px] w-full overflow-hidden flex relative mt-28 bg-gradient-to-br from-slate-900 via-church-dark to-slate-950">
            {/* ── SIDE NAV ────────────────────────────────── */}
            <aside
                className={`${navOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-church-dark/90 backdrop-blur-md text-white flex flex-col shrink-0 z-20 relative`}
            >
                <button
                    type="button"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label="Toggle navigation"
                    className="h-20 flex items-center justify-center border-b border-white/10 hover:bg-white/5 transition-colors shrink-0"
                >
                    {navOpen ? <X className="w-6 h-6 text-church-accent" /> : <Menu className="w-6 h-6 text-church-accent" />}
                </button>

                <nav className="flex-1 overflow-y-auto py-4">
                    {navItems.map(({ key, label, icon: Icon }) => {
                        const isActive = active === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setActive(key)}
                                className={`w-full flex items-center gap-4 px-6 py-3.5 text-left transition-colors ${isActive
                                        ? 'bg-church-accent/15 text-church-accent border-l-4 border-church-accent'
                                        : 'text-slate-300 hover:bg-white/5 border-l-4 border-transparent'
                                    }`}
                            >
                                <Icon className="w-5 h-5 shrink-0" />
                                <span className={`font-medium whitespace-nowrap transition-opacity ${navOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                <div className={`px-6 py-4 border-t border-white/10 text-xs text-slate-500 transition-opacity ${navOpen ? 'opacity-100' : 'opacity-0'}`}>
                    FBC Academy
                </div>
            </aside>

            {/* ── MAIN PANEL ──────────────────────────────── */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Sticky page intro */}
                <header className="shrink-0 bg-white/10 backdrop-blur-md border-b border-white/20 px-6 md:px-10 py-4">
                    <div className="max-w-5xl mx-auto flex items-baseline gap-3 flex-wrap">
                        <span className="text-church-accent tracking-widest uppercase text-[11px] font-medium">
                            Academy
                        </span>
                        <h1 className="text-2xl md:text-3xl font-serif text-white">
                            FBC Academy
                        </h1>
                        <p className="text-xs md:text-sm text-slate-200 font-light">
                            Bible-centered academy overseen by First Baptist Church of Wink, Texas.
                        </p>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-5xl mx-auto px-6 md:px-10 py-6">
                    {/* Active panel */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl p-6 md:p-10">
                        {active === 'mission' && (
                            <div className="max-w-3xl">
                                <span className="inline-block px-3 py-1 bg-church-accent/10 text-church-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                                    Our Mission & Vision
                                </span>
                                <h2 className="text-2xl md:text-3xl font-serif text-church-dark mb-4">
                                    Equipping future{' '}
                                    <span className="italic text-church-accent">Christian leaders.</span>
                                </h2>
                                <p className="text-slate-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                                    {homeschoolData.mission}
                                </p>
                                <blockquote className="border-l-4 border-church-accent pl-5 py-3 italic text-slate-700 bg-slate-50 rounded-r-2xl text-sm md:text-base mb-6 shadow-sm">
                                    {homeschoolData.scripture.text}
                                    <footer className="mt-2 not-italic text-xs text-church-accent font-semibold tracking-wide">
                                        — {homeschoolData.scripture.reference}
                                    </footer>
                                </blockquote>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Link
                                        to="/believe"
                                        className="inline-flex items-center gap-2 bg-church-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-church-accent transition-colors shadow-md"
                                    >
                                        Read Our Beliefs <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => setActive('curriculum')}
                                        className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium hover:border-church-accent hover:text-church-accent transition-colors"
                                    >
                                        Explore Curriculum
                                    </button>
                                </div>
                            </div>
                        )}

                        {active === 'curriculum' && (
                            <div>
                                <h2 className="text-2xl font-serif text-church-dark mb-6">Curriculum Providers</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {homeschoolData.curriculum.map((item) => (
                                        <div
                                            key={item.name}
                                            className="bg-church-light rounded-2xl p-5 border border-slate-200 hover:border-church-accent transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-church-accent/10 flex items-center justify-center mb-3">
                                                <BookOpen className="w-5 h-5 text-church-accent" />
                                            </div>
                                            <h3 className="font-serif font-semibold text-church-dark mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-slate-500 text-sm font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === 'courses' && (
                            <div>
                                <h2 className="text-2xl font-serif text-church-dark mb-6">Core Courses</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {homeschoolData.courses.map((course) => (
                                        <div
                                            key={course}
                                            className="bg-church-light border border-slate-200 rounded-xl px-4 py-4 text-center font-medium text-church-dark hover:border-church-accent transition-colors"
                                        >
                                            {course}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === 'languages' && (
                            <div>
                                <h2 className="text-2xl font-serif text-church-dark mb-6">Foreign Languages</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {homeschoolData.foreignLanguages.map((lang) => (
                                        <div
                                            key={lang}
                                            className="flex items-center gap-3 bg-church-light rounded-xl px-5 py-4 border border-slate-200"
                                        >
                                            <span className="w-9 h-9 rounded-full bg-church-accent/10 flex items-center justify-center text-church-accent font-bold">
                                                {lang.charAt(0)}
                                            </span>
                                            <span className="text-church-dark font-medium">{lang}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {active === 'schedule' && (
                            <div>
                                <h2 className="text-2xl font-serif text-church-dark mb-6">Daily Schedule</h2>
                                <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 max-h-[50vh] overflow-y-auto">
                                    {homeschoolData.schedule.map((row, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 px-5 py-3 hover:bg-church-light transition-colors"
                                        >
                                            <Clock className="w-4 h-4 text-church-accent shrink-0" />
                                            <span className="text-slate-500 text-sm font-mono w-36 shrink-0">
                                                {row.time}
                                            </span>
                                            <span className="text-church-dark font-medium text-sm">{row.subject}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-slate-500 italic">
                                    {homeschoolData.wednesdayNote}
                                </p>
                            </div>
                        )}

                        {active === 'grades' && (
                            <div className="text-center py-8">
                                <GraduationCap className="w-12 h-12 text-church-accent mx-auto mb-4" />
                                <h2 className="text-2xl font-serif text-church-dark mb-3">Grade Levels</h2>
                                <p className="text-slate-500 font-light mb-6 max-w-lg mx-auto">
                                    We welcome students across all primary and secondary grade levels.
                                </p>
                                <div className="inline-block bg-church-dark text-white rounded-2xl px-10 py-6">
                                    <span className="text-3xl font-serif font-bold text-church-accent">
                                        {homeschoolData.gradeLevels}
                                    </span>
                                </div>
                            </div>
                        )}

                        {active === 'enroll' && (
                            <div className="text-center py-6">
                                <School className="w-12 h-12 text-church-accent mx-auto mb-4" />
                                <h2 className="text-2xl md:text-3xl font-serif text-church-dark mb-3">
                                    Ready to Enroll Your Child?
                                </h2>
                                <p className="text-slate-500 font-light mb-6 max-w-lg mx-auto">
                                    We'd love to tell you more about our FBC Academy. Reach out to learn about enrollment, tuition, and upcoming open houses.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Link
                                        to="/visit"
                                        className="inline-flex items-center justify-center gap-2 bg-church-accent text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors"
                                    >
                                        Contact Us <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="mailto:sarahewell31@gmail.com"
                                        className="inline-flex items-center justify-center gap-2 border-2 border-church-dark text-church-dark px-6 py-3 rounded-full font-medium hover:bg-church-dark hover:text-white transition-colors"
                                    >
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
