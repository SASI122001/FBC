import { Link } from 'react-router-dom';
import { Users, HeartHandshake, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import smallGroupImg from '../../assets/images/small_group.png';
import churchServingImg from '../../assets/images/church_serving.png';

export default function Connect() {
    return (
        <>
            <PageHeader
                eyebrow="Get Involved"
                title="Connect With Us"
                subtitle="Join a small group, serve on a team, or explore ministries for your entire family."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Small Groups */}
                    <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                        <Reveal direction="left">
                            <img
                                src={smallGroupImg}
                                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                                alt="Small Groups"
                            />
                        </Reveal>
                        <Reveal>
                            <div className="text-church-accent mb-4"><Users className="w-10 h-10" /></div>
                            <h2 className="text-4xl font-serif text-church-dark mb-4">Small Groups</h2>
                            <p className="text-slate-600 font-light leading-relaxed mb-6">
                                We believe that spiritual growth happens best in community. Our small groups meet throughout the week in homes across Wink to share meals, pray, and discuss the Word together.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-church-dark text-white px-6 py-3 rounded-full font-medium hover:bg-church-accent transition-colors w-max"
                            >
                                Find a Group <ArrowRight className="w-4 h-4" />
                            </a>
                        </Reveal>
                    </div>

                    {/* Serve */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal direction="left" className="md:order-1 order-2">
                            <div className="text-church-accent mb-4"><HeartHandshake className="w-10 h-10" /></div>
                            <h2 className="text-4xl font-serif text-church-dark mb-4">Serve on a Team</h2>
                            <p className="text-slate-600 font-light leading-relaxed mb-6">
                                It takes hundreds of volunteers to make Sundays happen. Whether you're welcoming guests at the door, teaching kids, or brewing coffee, serving is a tangible way to love the body of Christ.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-slate-100 text-church-dark px-6 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors border border-slate-200 w-max"
                            >
                                View Serving Opportunities <ArrowRight className="w-4 h-4" />
                            </a>
                        </Reveal>
                        <Reveal className="md:order-2 order-1">
                            <img
                                src={churchServingImg}
                                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                                alt="Serving"
                            />
                        </Reveal>
                    </div>

                </div>
            </section>
        </>
    );
}
