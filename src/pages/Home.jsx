import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { siteData } from '../config/siteData';

export default function Home() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <header className="hero-section h-screen relative flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-church-dark/40 via-church-dark/60 to-church-dark/90" />

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                    <div className="grid lg:grid-cols-12 gap-8 items-end">
                        {/* Typography */}
                        <Reveal direction="left" className="lg:col-span-8">
                            <p className="text-church-accent font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-church-accent" />
                                {siteData.heroLocation}
                            </p>
                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif text-white leading-[1.1] mb-6">
                                Truth.<br />
                                <span className="italic text-slate-300">Grace.</span><br />
                                Community.
                            </h1>
                        </Reveal>

                        {/* Glass widget */}
                        <Reveal className="lg:col-span-4 pb-4">
                            <div className="glass-panel-dark rounded-3xl p-8 text-white shadow-glass-strong transform lg:translate-y-12 border border-white/10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-serif text-xl">Join us this Sunday</h3>
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-church-accent opacity-75" />
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-church-accent" />
                                    </span>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg"><Clock className="w-5 h-5 text-church-accent" /></div>
                                        <div>
                                            {siteData.services.map((s) => (
                                                <p key={s.name} className="font-medium">{s.name} • {s.time}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg"><MapPin className="w-5 h-5 text-church-accent" /></div>
                                        <div>
                                            <p className="font-medium">{siteData.contact.address}</p>
                                            <p className="text-sm text-slate-400">{siteData.contact.city}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/visit"
                                    className="block w-full text-center bg-white text-church-dark font-medium py-3 rounded-xl hover:bg-church-accent hover:text-white transition-all duration-300"
                                >
                                    Get Directions
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </header>
        </>
    );
}
