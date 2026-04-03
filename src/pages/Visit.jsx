import { MapPin, Calendar } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { siteData } from '../config/siteData';
import churchWorshipImg from '../../assets/images/church_worship.png';

export default function Visit() {
    return (
        <>
            <PageHeader
                eyebrow="Plan a Visit"
                title="Location &amp; Times"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Details */}
                        <Reveal direction="left">
                            <h2 className="text-4xl font-serif text-church-dark mb-8">Gathering Details</h2>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
                                <h3 className="text-2xl font-serif text-church-dark mb-6 flex items-center gap-3">
                                    <Calendar className="text-church-accent w-6 h-6" /> Sundays
                                </h3>
                                <ul className="space-y-6">
                                    {siteData.services.map((s) => (
                                        <li key={s.name} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                            <div>
                                                <p className="font-bold text-church-dark text-lg">{s.name}</p>
                                                <p className="text-slate-500 text-sm">{s.subtitle}</p>
                                            </div>
                                            <span className="text-church-accent font-medium text-lg">{s.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                                <h3 className="text-xl font-serif text-church-dark mb-4">What to Expect</h3>
                                <p className="text-slate-600 font-light mb-4">
                                    Our gatherings focus heavily on the reading and preaching of Scripture, congregational singing of psalms, hymns, and spiritual songs, and prayer. The atmosphere is reverent yet joyful.
                                </p>
                                <p className="text-slate-600 font-light">
                                    Dress is generally casual to business-casual. Come as you are. Children's ministry is provided during both the 9am and 10am hours for infants through 5th grade.
                                </p>
                            </div>
                        </Reveal>

                        {/* Map */}
                        <Reveal>
                            <div className="bg-church-dark rounded-3xl p-8 text-white h-full flex flex-col">
                                <h3 className="text-2xl font-serif mb-2 flex items-center gap-2">
                                    <MapPin className="text-church-accent w-6 h-6" /> Our Campus
                                </h3>
                                <p className="text-slate-400 font-light mb-6">
                                    {siteData.contact.address}, {siteData.contact.city}
                                </p>

                                {/* Map Placeholder */}
                                <div className="flex-grow bg-slate-800 rounded-2xl relative overflow-hidden group min-h-[300px]">
                                    <img
                                        src={churchWorshipImg}
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 group-hover:mix-blend-normal transition-all duration-700"
                                        alt="Church Campus"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-12 h-12 bg-church-accent rounded-full flex items-center justify-center shadow-2xl relative">
                                            <div className="absolute -inset-2 bg-church-accent rounded-full opacity-30 animate-ping" />
                                            <MapPin className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={siteData.contact.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full py-4 border-2 border-white/20 rounded-xl text-center font-medium hover:bg-white hover:text-church-dark transition-colors block"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </>
    );
}
