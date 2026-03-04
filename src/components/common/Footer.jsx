import { Link } from 'react-router-dom';
import { siteData } from '../../config/siteData';
import fbcLogo from '../../../assets/images/FBC_Logo.jpeg';

export default function Footer() {
    return (
        <footer className="bg-church-dark text-slate-400 py-16 border-t border-white/5 text-sm font-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/5 pb-12">
                    <div className="flex flex-col">
                        <Link to="/" className="flex items-center gap-2 text-white mb-4">
                            <img src={fbcLogo} alt="First Baptist Church Logo" className="h-12 w-auto object-contain bg-white p-1 rounded" />
                            <div className="flex flex-col leading-none -mt-0.5">
                                <span className="font-sans font-normal text-[#255b98] text-2xl tracking-tight">First Baptist</span>
                                <span className="font-sans text-[#b48cbc] text-sm tracking-[0.1em] font-medium uppercase mt-0.5 ml-0.5">CHURCH</span>
                            </div>
                        </Link>
                        <p>{siteData.tagline}</p>
                    </div>

                    <div className="flex flex-wrap gap-12 text-left">
                        <div>
                            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">About</h4>
                            <ul className="space-y-2">
                                <li><Link to="/believe" className="hover:text-church-accent transition-colors">What We Believe</Link></li>
                                <li><Link to="/leadership" className="hover:text-church-accent transition-colors">Leadership</Link></li>
                                <li><Link to="/history" className="hover:text-church-accent transition-colors">History</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Visit</h4>
                            <ul className="space-y-2">
                                <li><Link to="/visit" className="hover:text-church-accent transition-colors">Location & Times</Link></li>
                                <li><Link to="/membership" className="hover:text-church-accent transition-colors">Membership</Link></li>
                                <li><p>{siteData.contact.address}, Lubbock</p></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Contact</h4>
                            <ul className="space-y-2">
                                <li><p>{siteData.contact.phone}</p></li>
                                <li>
                                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-church-accent transition-colors">
                                        Email Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {siteData.copyrightYear} {siteData.churchName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Admin Login</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
