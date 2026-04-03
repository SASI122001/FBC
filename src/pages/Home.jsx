import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, Play, Library, Baby, Music, Users, Calendar } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import { siteData } from '../config/siteData';
import churchWorshipImg from '../../assets/images/church_worship.png';
import childrenMinistryImg from '../../assets/images/children_ministry.png';
import worshipMusicImg from '../../assets/images/worship_music.png';
import sermonPreachingImg from '../../assets/images/sermon_preaching.png';

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

            {/* ── ABOUT ─────────────────────────────────── */}
            <section className="py-24 relative bg-church-light overflow-hidden">
                <div className="absolute top-10 left-[-5%] text-[15rem] font-serif font-bold text-outline whitespace-nowrap opacity-50 pointer-events-none select-none">
                    THE GOSPEL
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <div className="relative">
                                <img
                                    src={churchWorshipImg}
                                    alt="Worship at First Baptist Church"
                                    className="rounded-3xl shadow-2xl z-10 relative"
                                />
                                <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border-2 border-church-accent rounded-3xl -z-10 hidden sm:block" />
                            </div>
                        </Reveal>
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-serif text-church-dark mb-8 leading-tight">
                                Rooted in the ancient path,{' '}
                                <br />
                                <span className="italic text-church-accent">living for today.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
                                We are a Confessional Baptist Church, we hold to the 1689 London Baptist Confession. We are a Church that believes in the 5 Solas: Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, and Soli Deo Gloria and we hold to the Doctrines of Grace.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                                <Link to="/believe" className="font-medium hover:text-church-accent flex items-center gap-2 group transition-colors">
                                    What We Believe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <span className="text-slate-300 hidden sm:inline">|</span>
                                <Link to="/leadership" className="font-medium hover:text-church-accent flex items-center gap-2 group transition-colors">
                                    Leadership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── BENTO GRID ─────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-church-dark mb-4">Engage &amp; Grow</h2>
                        <p className="text-lg text-slate-600 max-w-2xl font-light">
                            Find your place in our community. From the youngest to the oldest, there is a space crafted for your spiritual journey.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[250px] gap-4">
                        {/* Kids */}
                        <Reveal className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                            <img
                                src={childrenMinistryImg}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Children's Ministry"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-church-dark/90 via-church-dark/40 to-transparent" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                                    <Baby className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-2">Children &amp; Youth</h3>
                                <p className="text-slate-200 font-light mb-4 max-w-md">Partnering with parents to raise the next generation in the knowledge and love of Christ.</p>
                                <Link to="/connect" className="inline-flex items-center text-white font-medium hover:text-church-accent transition-colors w-max">
                                    Explore Kids Ministry <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </Reveal>

                        {/* Music */}
                        <Reveal className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group bg-church-dark">
                            <img
                                src={worshipMusicImg}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
                                alt="Worship Music"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white self-end">
                                    <Music className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Worship Arts</h3>
                                    <p className="text-slate-300 text-sm font-light mb-4">Scripture-rich liturgy and song.</p>
                                    <a href="#" className="inline-block px-4 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white hover:text-church-dark transition-colors">
                                        Listen to Playlist
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        {/* Small Groups */}
                        <Reveal className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group bg-slate-100 p-8 flex items-center justify-between border border-slate-200 hover:border-church-accent transition-colors">
                            <div className="relative z-10">
                                <div className="text-church-accent mb-3"><Users className="w-8 h-8" /></div>
                                <h3 className="text-2xl font-serif text-church-dark mb-1">Small Groups</h3>
                                <p className="text-slate-600 font-light">Doing life together in homes across Wink.</p>
                            </div>
                            <div className="relative z-10">
                                <Link to="/connect" className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-church-dark group-hover:bg-church-accent group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-church-accent/10 to-transparent pointer-events-none" />
                        </Reveal>

                        {/* Events */}
                        <Reveal className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group bg-church-accent p-8 text-white flex flex-col justify-center border border-transparent hover:border-white/50 transition-colors">
                            <h3 className="text-xl font-serif mb-1">Upcoming Events</h3>
                            <p className="text-white/80 text-sm font-light mb-4">See what's happening.</p>
                            <Link to="/connect" className="font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Calendar <Calendar className="w-4 h-4" />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── SERMON TEASER ─────────────────────────── */}
            <section className="py-24 bg-church-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="bg-slate-900 rounded-[2rem] p-4 md:p-8 relative overflow-hidden border border-white/5 shadow-2xl">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-church-accent/20 blur-[100px] rounded-full pointer-events-none" />
                            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                                <Link to="/sermons" className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer border border-white/10 shadow-glass">
                                    <img
                                        src={sermonPreachingImg}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                                        alt="Sermon"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 ml-1 fill-white" />
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-church-accent/30 text-church-accent text-xs uppercase tracking-widest font-medium mb-6">
                                        <span className="w-2 h-2 rounded-full bg-church-accent" /> Latest Message
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Life in the Spirit</h2>
                                    <p className="text-slate-400 font-light mb-6">Pastor John Doe • Romans 8:1-17</p>
                                    <p className="text-slate-300 mb-8 max-w-md font-light leading-relaxed">
                                        Join us as we journey through Paul's letter to the Romans, exploring the profound depths of the gospel, righteousness, and the grace of God.
                                    </p>
                                    <Link to="/sermons" className="bg-white text-church-dark px-6 py-3 rounded-full font-medium hover:bg-church-accent hover:text-white transition-colors inline-flex items-center gap-2">
                                        <Library className="w-5 h-5" /> View Sermon Library
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
