import { Link } from 'react-router-dom';
import { ArrowRight, Play, Headphones, ExternalLink } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { currentSeries, pastSeries } from '../data/sermons';

export default function Sermons() {
    return (
        <>
            <PageHeader
                eyebrow="Preaching the Word"
                title="Sermon Archive"
                subtitle="Listen to past messages, browse by series, or search by scripture."
            />

            <section className="py-24 bg-church-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Current Series Feature */}
                    <Reveal>
                        <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-sm border border-slate-200 mb-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer shadow-md">
                                    <img
                                        src={currentSeries.latestMessage.seriesImage}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        alt="Current Series"
                                    />
                                    <div className="absolute inset-0 bg-church-dark/30 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-church-dark group-hover:bg-church-accent group-hover:text-white transition-colors">
                                            <Play className="w-6 h-6 ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-church-accent font-medium text-sm tracking-widest uppercase mb-2 block">Current Series</span>
                                    <h2 className="text-4xl font-serif text-church-dark mb-4">{currentSeries.title}</h2>
                                    <p className="text-slate-600 font-light mb-6">{currentSeries.description}</p>

                                    {/* Listen button with link */}
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={currentSeries.latestMessage.listenUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-church-dark text-white px-6 py-3 rounded-full font-medium hover:bg-church-accent transition-colors inline-flex items-center gap-2"
                                        >
                                            Listen to Latest <Headphones className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={currentSeries.latestMessage.listenUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-slate-300 text-church-dark px-6 py-3 rounded-full font-medium hover:border-church-accent hover:text-church-accent transition-colors inline-flex items-center gap-2"
                                        >
                                            Open in New Tab <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Past Series Grid */}
                    <Reveal>
                        <h3 className="text-2xl font-serif text-church-dark mb-8">Past Series</h3>
                    </Reveal>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pastSeries.map((series, i) => (
                            <Reveal key={series.id} delay={i * 100}>
                                <a
                                    href={series.listenUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-church-accent transition-all"
                                >
                                    <div className="h-48 overflow-hidden relative bg-slate-800">
                                        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-3xl z-10 text-center px-4">
                                            {series.book}
                                        </div>
                                        <img
                                            src={series.image}
                                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
                                            alt={series.book}
                                        />
                                        {/* Play overlay on hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                            <div className="w-14 h-14 bg-church-accent/90 rounded-full flex items-center justify-center shadow-lg">
                                                <Play className="w-6 h-6 text-white ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold text-church-dark mb-1">{series.title}</h4>
                                        <p className="text-sm text-slate-500 mb-4">{series.count}</p>
                                        <span className="text-church-accent font-medium flex items-center gap-1 text-sm">
                                            Listen to Series <Headphones className="w-3 h-3" />
                                        </span>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
