import { Link } from 'react-router-dom';
import {
    BookOpen, Clock, GraduationCap, Languages, DollarSign,
    ArrowRight, ChevronRight, BookMarked, Dumbbell, Sun, School
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { homeschoolData } from '../data/homeschool';
import { siteData } from '../config/siteData';
import homeschoolStudentsImg from '../../assets/images/homeschool_students.png';
/* tiny icon map for schedule rows – adds visual variety */
const subjectIcons = {
    'Arrive at School': Sun,
    'Bible / Greek / Speech': BookMarked,
    'Physical Ed.': Dumbbell,
    'Lunch': Sun,
    'Clean Up': Sun,
};

export default function Homeschool() {
    return (
        <>
            {/* ── PAGE HEADER ───────────────────────────── */}
            <PageHeader
                eyebrow="Academy"
                title="FBC Academy"
                subtitle="A Non-Profit, Bible-centered FBC Academy overseen by First Baptist Church of Wink, Texas."
            />

            {/* ── SCRIPTURE BANNER ───────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-church-accent to-amber-600">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
                        }}
                    />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10 text-center">
                    <Reveal>
                        <BookOpen className="w-8 h-8 text-white/80 mx-auto mb-4" />
                        <blockquote className="text-white text-lg md:text-xl font-serif italic leading-relaxed max-w-3xl mx-auto">
                            {homeschoolData.scripture.text}
                        </blockquote>
                        <p className="mt-4 text-white/70 font-medium tracking-widest text-sm uppercase">
                            — {homeschoolData.scripture.reference}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ── MISSION & ABOUT ────────────────────────── */}
            <section className="py-24 bg-church-light relative overflow-hidden">
                {/* decorative watermark */}
                <div className="absolute top-8 right-[-5%] text-[12rem] font-serif font-bold text-outline whitespace-nowrap opacity-30 pointer-events-none select-none">
                    ACADEMY
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal direction="left">
                            <div className="relative">
                                <img
                                    src={homeschoolStudentsImg}
                                    alt="Students learning"
                                    className="rounded-3xl shadow-2xl relative z-10"
                                />
                                <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-2 border-church-accent rounded-3xl -z-0 hidden sm:block" />
                            </div>
                        </Reveal>

                        <Reveal>
                            <span className="text-church-accent tracking-widest uppercase text-sm font-medium mb-4 block flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-church-accent" /> Our Mission
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-church-dark mb-8 leading-tight">
                                Equipping future{' '}
                                <span className="italic text-church-accent">Christian leaders.</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                                {homeschoolData.mission}
                            </p>

                            {/* Statement of faith link */}
                            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6">
                                <p className="text-slate-600 font-light">
                                    <span className="font-semibold text-church-dark">Statement of Faith:</span>{' '}
                                    We adhere to the {homeschoolData.statementOfFaith}.
                                </p>
                                <Link
                                    to="/believe"
                                    className="inline-flex items-center gap-1 text-church-accent font-medium mt-2 hover:gap-2 transition-all text-sm"
                                >
                                    Read Our Beliefs <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Non-profit badge */}
                            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5">
                                <School className="w-5 h-5 text-church-accent" />
                                <span className="text-sm font-medium text-church-dark">
                                    {homeschoolData.nonProfitNote}
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── CURRICULUM & COURSES  ──────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-church-dark mb-4">
                            Curriculum & Courses
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl font-light">
                            A rigorous, Christ-centered academic program using trusted curriculum providers.
                        </p>
                    </Reveal>

                    {/* Curriculum providers – bento grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                        {homeschoolData.curriculum.map((item, i) => (
                            <Reveal key={item.name} delay={i * 80}>
                                <div className="bg-church-light rounded-3xl p-7 border border-slate-200 hover:border-church-accent hover:shadow-xl transition-all h-full group">
                                    <div className="w-12 h-12 rounded-2xl bg-church-accent/10 flex items-center justify-center mb-5 group-hover:bg-church-accent/20 transition-colors">
                                        <BookOpen className="w-6 h-6 text-church-accent" />
                                    </div>
                                    <h3 className="text-lg font-serif text-church-dark mb-2 font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Courses + Languages row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Core Courses */}
                        <Reveal direction="left">
                            <div className="bg-church-dark rounded-3xl p-8 text-white h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-church-accent" />
                                    </div>
                                    <h3 className="text-2xl font-serif">Core Courses</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {homeschoolData.courses.map((course) => (
                                        <div
                                            key={course}
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
                                        >
                                            {course}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Foreign Languages */}
                        <Reveal>
                            <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-8 border border-slate-200 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-church-accent/10 flex items-center justify-center">
                                        <Languages className="w-5 h-5 text-church-accent" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-church-dark">Foreign Languages</h3>
                                </div>
                                <div className="space-y-3">
                                    {homeschoolData.foreignLanguages.map((lang) => (
                                        <div
                                            key={lang}
                                            className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm hover:border-church-accent transition-colors"
                                        >
                                            <span className="w-8 h-8 rounded-full bg-church-accent/10 flex items-center justify-center text-church-accent font-bold text-sm">
                                                {lang.charAt(0)}
                                            </span>
                                            <span className="text-church-dark font-medium">{lang}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── DAILY SCHEDULE ──────────────────────────── */}
            <section className="py-24 bg-church-dark relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-church-accent/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Reveal className="mb-12 text-center">
                        <span className="text-church-accent tracking-widest uppercase text-sm font-medium mb-3 block">
                            A Structured Day
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Daily Schedule</h2>
                        <p className="text-slate-400 font-light max-w-xl mx-auto">
                            Our balanced daily routine keeps students engaged with academics, physical activity, and meals.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="bg-slate-900/80 backdrop-blur-md rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                            {homeschoolData.schedule.map((row, i) => {
                                const Icon = subjectIcons[row.subject] || Clock;
                                const isBreak = ['Lunch', 'Clean Up', 'Arrive at School'].includes(row.subject);

                                return (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-5 px-6 md:px-8 py-4 border-b border-white/5 last:border-0 transition-colors hover:bg-white/5 ${isBreak ? 'bg-white/[0.02]' : ''}`}
                                    >
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isBreak ? 'bg-church-accent/20' : 'bg-white/10'}`}>
                                            <Icon className={`w-4 h-4 ${isBreak ? 'text-church-accent' : 'text-slate-400'}`} />
                                        </div>
                                        <span className="text-slate-400 text-sm font-mono w-40 shrink-0 hidden sm:block">
                                            {row.time}
                                        </span>
                                        <span className="text-slate-400 text-xs font-mono sm:hidden shrink-0 w-28">
                                            {row.time}
                                        </span>
                                        <span className={`font-medium ${isBreak ? 'text-church-accent' : 'text-white'}`}>
                                            {row.subject}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal>

                    {/* Wednesday note */}
                    <Reveal>
                        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/5 px-6 py-4">
                            <span className="w-2 h-2 bg-church-accent rounded-full shrink-0 animate-pulse" />
                            <span className="font-medium text-church-accent">Note:</span>
                            {homeschoolData.wednesdayNote}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── GRADE LEVELS & EXPENSES ────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Grade Levels */}
                        <Reveal direction="left">
                            <div className="bg-gradient-to-br from-church-dark to-slate-800 rounded-3xl p-10 text-white h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-church-accent/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="relative z-10">
                                    <GraduationCap className="w-10 h-10 text-church-accent mb-6" />
                                    <h3 className="text-3xl font-serif mb-3">Grade Levels</h3>
                                    <p className="text-slate-300 font-light mb-8">
                                        We welcome students across all primary and secondary grade levels.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <span className="text-4xl font-serif font-bold text-church-accent">
                                            {homeschoolData.gradeLevels}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Expenses */}
                        <Reveal>
                            <div className="bg-church-light rounded-3xl p-10 border border-slate-200 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-church-accent/10 flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-church-accent" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-church-dark">Expenses to Expect</h3>
                                </div>
                                <p className="text-slate-500 font-light mb-6">
                                    As a non-profit academy, we keep costs transparent. Families should plan for:
                                </p>
                                <div className="space-y-3">
                                    {homeschoolData.expenses.map((item, i) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-4 bg-white rounded-xl px-5 py-3.5 border border-slate-200 shadow-sm"
                                        >
                                            <span className="w-7 h-7 rounded-full bg-church-accent text-white text-xs font-bold flex items-center justify-center">
                                                {i + 1}
                                            </span>
                                            <span className="text-church-dark font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────── */}
            <section className="py-24 bg-church-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="bg-church-dark rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-church-accent/20 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative z-10">
                                <School className="w-10 h-10 text-church-accent mx-auto mb-4" />
                                <h3 className="text-3xl md:text-4xl font-serif mb-4">
                                    Ready to Enroll Your Child?
                                </h3>
                                <p className="text-slate-300 font-light mb-8 max-w-xl mx-auto leading-relaxed">
                                    We'd love to tell you more about our FBC Academy. Reach out to learn about enrollment, tuition, and upcoming open houses.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/connect"
                                        className="inline-flex items-center justify-center gap-2 bg-church-accent text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-lg"
                                    >
                                        Contact Us <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <a
                                        href={`mailto:${siteData.contact.email}`}
                                        className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-church-dark transition-colors"
                                    >
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
