import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteData } from '../../config/siteData';
import fbcLogo from '../../../assets/images/FBC_Logo.jpeg';

const aboutLinks = [
    { label: 'What We Believe', to: '/believe' },
    { label: 'Leadership & Staff', to: '/leadership' },
    { label: 'Covenant Membership', to: '/membership' },
    { label: 'History', to: '/history' },
    { label: 'Location & Times', to: '/visit' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
            <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-glass rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full transition-all duration-300 hover:bg-white/95">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <img src={fbcLogo} alt="First Baptist Church Logo" className="h-10 w-auto" />
                    <div className="flex flex-col leading-none -mt-0.5">
                        <span className="font-sans font-normal text-[#255b98] text-2xl tracking-tight">First Baptist</span>
                        <span className="font-sans text-[#b48cbc] text-sm tracking-[0.1em] font-medium uppercase mt-0.5 ml-0.5">CHURCH</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
                    {/* About Dropdown */}
                    <div className="relative group py-2">
                        <button
                            className="hover:text-church-accent transition-colors flex items-center gap-1"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >
                            About
                            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </button>
                        <div
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-glass rounded-2xl p-2 transition-all duration-300 origin-top ${aboutOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
                        >
                            {aboutLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-church-light hover:text-church-accent rounded-xl transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/connect" className="hover:text-church-accent transition-colors py-2">Connect</Link>
                    <Link to="/sermons" className="hover:text-church-accent transition-colors py-2">Sermons</Link>
                    <Link to="/homeschool" className="hover:text-church-accent transition-colors py-2">FBC Academy</Link>
                </div>

                {/* Right CTAs */}
                <div className="flex items-center gap-3">
                    <Link to="/give" className="hidden md:block text-sm font-medium hover:text-church-accent transition-colors">Give</Link>
                    <Link
                        to="/visit"
                        className="bg-church-dark text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-church-accent transition-colors shadow-md"
                    >
                        Plan Visit
                    </Link>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-700 hover:text-church-accent transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="pointer-events-auto absolute top-full mt-3 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-glass-strong rounded-3xl p-6 flex flex-col gap-3 text-sm font-medium text-slate-700">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-normal mb-1">About</p>
                    {aboutLinks.map((link) => (
                        <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="hover:text-church-accent transition-colors pl-2">
                            {link.label}
                        </Link>
                    ))}
                    <hr className="border-slate-200 my-1" />
                    <Link to="/connect" onClick={() => setMobileOpen(false)} className="hover:text-church-accent transition-colors">Connect</Link>
                    <Link to="/sermons" onClick={() => setMobileOpen(false)} className="hover:text-church-accent transition-colors">Sermons</Link>
                    <Link to="/homeschool" onClick={() => setMobileOpen(false)} className="hover:text-church-accent transition-colors">FBC Academy</Link>
                    <Link to="/give" onClick={() => setMobileOpen(false)} className="hover:text-church-accent transition-colors">Give</Link>
                </div>
            )}
        </div>
    );
}
