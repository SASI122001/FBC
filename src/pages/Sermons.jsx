import { Youtube } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { latestYouTubeVideos } from '../data/sermons';

export default function Sermons() {
    return (
        <>
            <PageHeader
                eyebrow="Preaching the Word"
                title="Sermon Archive"
                subtitle="Listen to past messages, browse by series, or search by scripture."
            />

            {/* ── Latest YouTube Messages Section ── */}
            <section className="py-20 bg-church-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 text-red-400 font-medium text-sm tracking-widest uppercase mb-3">
                                <Youtube className="w-4 h-4" /> Live &amp; Recent Messages
                            </span>
                            <h2 className="text-4xl font-serif text-white">Latest Messages from FBC</h2>
                        </div>
                    </Reveal>

                    {/* Video Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestYouTubeVideos.map((video, i) => (
                            <Reveal key={video.id} delay={i * 80}>
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video bg-slate-800 overflow-hidden">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        {/* Dark overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                        {/* Red YouTube play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-0.5">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* "Watch on YouTube" badge */}
                                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white shrink-0" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                            <span className="text-white text-xs font-medium">Watch on YouTube</span>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <div className="bg-slate-800/80 px-4 py-3">
                                        <p className="text-sm text-slate-200 font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">
                                            {video.title}
                                        </p>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    {/* View All Button */}
                    <Reveal>
                        <div className="mt-10 text-center">
                            <a
                                href="https://www.youtube.com/@firstbaptistchurchofwinktx4828/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg shadow-red-900/40"
                            >
                                <Youtube className="w-5 h-5" />
                                View All Videos on YouTube
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

        </>
    );
}
