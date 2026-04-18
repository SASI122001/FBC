import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Users,
    Heart,
    Calendar,
    Map,
    Music,
    Baby,
    DollarSign,
    Bell,
    ChevronRight,
    Play,
    Download,
    ExternalLink,
    Clock,
    MapPin,
    Phone,
    Mail,
    Youtube,
    Facebook,
    Instagram,
    Star,
    Gift,
    Mic,
    BookMarked,
    UserCheck,
    Home,
    Handshake,
    Library,
    ArrowRight,
    Newspaper,
    Video,
    Info,
} from 'lucide-react';
import { siteData } from '../config/siteData';

// ── DATA ─────────────────────────────────────────────────────────────────────

const quickLinks = [
    { id: 'ql-sermons',    icon: Play,        label: 'Sermons',         sub: 'Watch & listen',         to: '/sermons',   color: 'from-amber-500 to-orange-600' },
    { id: 'ql-connect',    icon: Users,        label: 'Connect',         sub: 'Small groups & more',    to: '/connect',   color: 'from-blue-500 to-indigo-600' },
    { id: 'ql-give',       icon: Heart,        label: 'Give Online',     sub: 'Support the mission',    to: '/give',      color: 'from-rose-500 to-pink-600' },
    { id: 'ql-visit',      icon: MapPin,       label: 'Plan a Visit',    sub: 'First time here?',       to: '/visit',     color: 'from-emerald-500 to-teal-600' },
    { id: 'ql-academy',    icon: BookOpen,     label: 'FBC Academy',     sub: 'Homeschool co-op',      to: '/homeschool', color: 'from-violet-500 to-purple-600' },
    { id: 'ql-believe',    icon: BookMarked,   label: 'What We Believe', sub: 'Doctrine & confession',  to: '/believe',   color: 'from-sky-500 to-cyan-600' },
    { id: 'ql-leadership', icon: UserCheck,    label: 'Leadership',      sub: 'Pastoral staff',         to: '/leadership', color: 'from-slate-500 to-gray-600' },
    { id: 'ql-history',    icon: Library,      label: 'Our History',     sub: 'Since 1998',             to: '/history',   color: 'from-stone-500 to-amber-700' },
];

const announcements = [
    {
        id: 'ann-1',
        badge: 'New',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        title: 'New Sermon Series: Romans — The Power of the Gospel',
        date: 'April 10, 2026',
        desc: 'Join us this Sunday as we begin an expository journey through the book of Romans, exploring justification, sanctification, and the sovereign grace of God.',
        icon: Mic,
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        id: 'ann-2',
        badge: 'Upcoming',
        badgeColor: 'bg-blue-100 text-blue-700',
        title: 'Spring Fellowship Meal — All families welcome!',
        date: 'April 20, 2026',
        desc: 'After the morning worship service, we will gather in the fellowship hall for a potluck meal. Sign up in the lobby to bring a dish.',
        icon: Handshake,
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        id: 'ann-3',
        badge: 'Reminder',
        badgeColor: 'bg-violet-100 text-violet-700',
        title: 'FBC Academy Registration Now Open for 2026–2027',
        date: 'April 14, 2026',
        desc: 'Enroll your children for the upcoming year in FBC Academy, our classical Christian homeschool co-op. Seats are limited — register today.',
        icon: BookOpen,
        iconBg: 'bg-violet-50',
        iconColor: 'text-violet-600',
    },
];

const events = [
    { id: 'ev-1', day: '13', month: 'APR', title: 'Sunday Worship', time: '10:00 AM', loc: 'Main Sanctuary',       tag: 'Worship' },
    { id: 'ev-2', day: '20', month: 'APR', title: 'Spring Potluck',  time: '12:00 PM', loc: 'Fellowship Hall',      tag: 'Fellowship' },
    { id: 'ev-3', day: '27', month: 'APR', title: 'Mens Bible Study',time: '7:00 AM',  loc: '217 N.Cross Ave',      tag: 'Study' },
    { id: 'ev-4', day: '04', month: 'MAY', title: 'Ladies Brunch',   time: '9:30 AM',  loc: 'Fellowship Hall',      tag: 'Ministry' },
    { id: 'ev-5', day: '11', month: 'MAY', title: 'Baptism Sunday',  time: '10:00 AM', loc: 'Main Sanctuary',       tag: 'Special' },
];

const resources = [
    { id: 'res-1', icon: Download,    label: 'Statement of Faith (PDF)',   href: '/believe',          ext: false },
    { id: 'res-2', icon: ExternalLink, label: '1689 London Baptist Confession', href: 'https://1689londonbaptistconfession.com', ext: true },
    { id: 'res-3', icon: ExternalLink, label: 'Give via Text: 806-555-0199', href: '/give',             ext: false },
    { id: 'res-4', icon: MapPin,       label: 'Get Directions',            href: siteData.contact.googleMapsUrl, ext: true },
    { id: 'res-5', icon: Phone,        label: siteData.contact.phone,      href: `tel:${siteData.contact.phone}`, ext: false },
    { id: 'res-6', icon: Mail,         label: siteData.contact.email,      href: `mailto:${siteData.contact.email}`, ext: false },
];

const tagColors = {
    Worship:    'bg-amber-100 text-amber-700',
    Fellowship: 'bg-blue-100 text-blue-700',
    Study:      'bg-emerald-100 text-emerald-700',
    Ministry:   'bg-rose-100 text-rose-700',
    Special:    'bg-violet-100 text-violet-700',
};

// ── HELPERS ───────────────────────────────────────────────────────────────────

function today() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Portal() {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = ['all', 'worship', 'fellowship', 'study', 'ministry'];

    const filteredEvents =
        activeTab === 'all'
            ? events
            : events.filter((e) => e.tag.toLowerCase() === activeTab);

    return (
        <div className="min-h-screen bg-[#f1f5f9] pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* ── WELCOME BANNER ──────────────────────────────────── */}
                <div
                    id="portal-welcome"
                    className="relative rounded-3xl overflow-hidden shadow-glass-strong"
                    style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #255b98 100%)',
                    }}
                >
                    {/* Decorative orb */}
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/20 blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-500/20 blur-[60px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 gap-6">
                        <div>
                            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-2 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-amber-400" />
                                {today()}
                            </p>
                            <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-3">
                                Welcome to
                                <br />
                                <span className="text-amber-400">First Baptist</span> Church
                            </h1>
                            <p className="text-slate-300 font-light max-w-lg text-base md:text-lg">
                                {siteData.tagline}
                            </p>
                        </div>

                        {/* Service times glass card */}
                        <div className="shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white min-w-[220px]">
                            <p className="text-slate-300 text-xs uppercase tracking-widest font-medium mb-4">
                                This Sunday
                            </p>
                            <div className="space-y-3">
                                {siteData.services.map((s) => (
                                    <div key={s.name} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                                            <Clock className="w-4 h-4 text-amber-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{s.name}</p>
                                            <p className="text-xs text-slate-400">{s.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/visit"
                                id="portal-plan-visit"
                                className="mt-5 block text-center bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                            >
                                Plan a Visit
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── QUICK LINKS GRID ────────────────────────────────── */}
                <section id="portal-quick-links">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-serif text-slate-800 font-semibold">Quick Links</h2>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">8 shortcuts</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {quickLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.id}
                                    id={link.id}
                                    to={link.to}
                                    className="group relative bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col gap-3"
                                >
                                    {/* Gradient icon blob */}
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm leading-tight">{link.label}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{link.sub}</p>
                                    </div>
                                    {/* Subtle hover tint */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200 rounded-2xl`} />
                                    <ChevronRight className="absolute top-4 right-4 w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all duration-200" />
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* ── MAIN CONTENT AREA (2-column) ───────────────────── */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* LEFT: Announcements + Events (2/3) */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Announcements */}
                        <section id="portal-announcements" className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-amber-500" />
                                    <h2 className="font-serif text-lg font-semibold text-slate-800">Announcements</h2>
                                </div>
                                <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2.5 py-1 rounded-full">
                                    {announcements.length} new
                                </span>
                            </div>

                            <div className="divide-y divide-slate-50">
                                {announcements.map((ann) => {
                                    const AnnIcon = ann.icon;
                                    return (
                                        <div key={ann.id} id={ann.id} className="flex gap-4 p-6 hover:bg-slate-50/60 transition-colors">
                                            <div className={`shrink-0 w-10 h-10 rounded-xl ${ann.iconBg} flex items-center justify-center`}>
                                                <AnnIcon className={`w-5 h-5 ${ann.iconColor}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-3 mb-1">
                                                    <p className="font-semibold text-slate-800 leading-snug">{ann.title}</p>
                                                    <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${ann.badgeColor}`}>
                                                        {ann.badge}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-400 mb-2">{ann.date}</p>
                                                <p className="text-sm text-slate-500 leading-relaxed">{ann.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Upcoming Events */}
                        <section id="portal-events" className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-blue-500" />
                                    <h2 className="font-serif text-lg font-semibold text-slate-800">Upcoming Events</h2>
                                </div>
                                <Link to="/connect" id="portal-all-events" className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
                                    View all <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* Filter tabs */}
                            <div className="flex gap-2 px-6 py-4 border-b border-slate-50 overflow-x-auto scrollbar-none">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        id={`portal-tab-${tab}`}
                                        onClick={() => setActiveTab(tab)}
                                        className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-150 ${
                                            activeTab === tab
                                                ? 'bg-slate-800 text-white shadow-sm'
                                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                        }`}
                                    >
                                        {tab === 'all' ? 'All Events' : tab}
                                    </button>
                                ))}
                            </div>

                            <div className="divide-y divide-slate-50">
                                {filteredEvents.length === 0 ? (
                                    <p className="text-center text-slate-400 py-10 text-sm">No events in this category.</p>
                                ) : (
                                    filteredEvents.map((ev) => (
                                        <div key={ev.id} id={ev.id} className="flex items-center gap-5 px-6 py-4 hover:bg-slate-50/60 transition-colors">
                                            {/* Date badge */}
                                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-800 flex flex-col items-center justify-center text-white">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ev.month}</span>
                                                <span className="text-xl font-bold leading-none">{ev.day}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-slate-800 text-sm">{ev.title}</p>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {ev.time}
                                                    </span>
                                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" /> {ev.loc}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[ev.tag] ?? 'bg-slate-100 text-slate-600'}`}>
                                                {ev.tag}
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>

                        {/* Latest Message Banner */}
                        <section
                            id="portal-latest-message"
                            className="relative rounded-3xl overflow-hidden shadow-sm"
                            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a2d4a 100%)' }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-500/15 blur-[60px] pointer-events-none" />
                            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                                    <Play className="w-8 h-8 text-amber-400 fill-amber-400 ml-1" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest">Latest Sermon</span>
                                    <h3 className="text-white font-serif text-xl mt-1 mb-1">Life in the Spirit — Romans 8:1–17</h3>
                                    <p className="text-slate-400 text-sm">Pastor John Doe &bull; April 6, 2026</p>
                                </div>
                                <Link
                                    to="/sermons"
                                    id="portal-watch-sermon"
                                    className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                                >
                                    Watch Now <Play className="w-4 h-4 fill-white" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT: Resources & Info (1/3) */}
                    <div className="space-y-6">

                        {/* Resources */}
                        <section id="portal-resources" className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-100">
                                <Info className="w-5 h-5 text-violet-500" />
                                <h2 className="font-serif text-lg font-semibold text-slate-800">Resources</h2>
                            </div>
                            <ul className="divide-y divide-slate-50">
                                {resources.map((res) => {
                                    const ResIcon = res.icon;
                                    const isExternal = res.ext;
                                    const content = (
                                        <div className="flex items-center gap-3 px-6 py-3.5 hover:bg-slate-50 transition-colors group">
                                            <ResIcon className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors shrink-0" />
                                            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors truncate">{res.label}</span>
                                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 ml-auto shrink-0 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    );
                                    return isExternal ? (
                                        <li key={res.id} id={res.id}>
                                            <a href={res.href} target="_blank" rel="noopener noreferrer">{content}</a>
                                        </li>
                                    ) : (
                                        <li key={res.id} id={res.id}>
                                            <Link to={res.href}>{content}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>

                        {/* Social Media */}
                        <section id="portal-social" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
                            <h2 className="font-serif text-lg font-semibold text-slate-800 mb-4">Follow Us</h2>
                            <div className="grid grid-cols-3 gap-3">
                                <a
                                    id="portal-facebook"
                                    href={siteData.socials.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors group"
                                >
                                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">Facebook</span>
                                </a>
                                <a
                                    id="portal-instagram"
                                    href={siteData.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-600 transition-colors group"
                                >
                                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">Instagram</span>
                                </a>
                                <a
                                    id="portal-youtube"
                                    href={siteData.socials.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors group"
                                >
                                    <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-semibold">YouTube</span>
                                </a>
                            </div>
                        </section>

                        {/* Give widget */}
                        <section
                            id="portal-give-widget"
                            className="rounded-3xl overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }}
                        >
                            <div className="p-6 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                        <Gift className="w-5 h-5" />
                                    </div>
                                    <h2 className="font-serif text-lg font-semibold">Give Online</h2>
                                </div>
                                <p className="text-sm text-amber-100 mb-5 leading-relaxed">
                                    Your generosity fuels gospel ministry and community impact in Wink, Texas.
                                </p>
                                <Link
                                    to="/give"
                                    id="portal-give-btn"
                                    className="block w-full text-center bg-white text-amber-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-colors"
                                >
                                    Give Now
                                </Link>
                                <p className="text-center text-xs text-amber-200 mt-3">
                                    Or text to give: {siteData.contact.textToGive}
                                </p>
                            </div>
                        </section>

                        {/* Location mini map card */}
                        <section id="portal-location" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
                            <h2 className="font-serif text-lg font-semibold text-slate-800 mb-4">Find Us</h2>
                            <div className="rounded-2xl overflow-hidden bg-slate-100 mb-4 h-36 relative">
                                {/* Static map placeholder */}
                                <iframe
                                    title="Church Location"
                                    src="https://maps.google.com/maps?q=217+N+Cross+Ave+Wink+TX+79789&output=embed&z=14"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>
                            <p className="text-sm font-semibold text-slate-800">{siteData.contact.address}</p>
                            <p className="text-xs text-slate-400 mb-4">{siteData.contact.city}</p>
                            <a
                                href={siteData.contact.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="portal-directions"
                                className="flex items-center justify-center gap-2 bg-slate-800 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-700 transition-colors"
                            >
                                <Map className="w-4 h-4" /> Get Directions
                            </a>
                        </section>
                    </div>
                </div>

                {/* ── FOOTER STRIP ─────────────────────────────────── */}
                <footer className="text-center text-xs text-slate-400 pt-4">
                    © {siteData.copyrightYear} {siteData.churchName} · Built with faith &amp; love in Wink, TX
                </footer>
            </div>
        </div>
    );
}
