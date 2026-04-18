import { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { BookOpen, ChevronDown } from 'lucide-react';
import { confessionChapters } from '../data/confession';

export default function Confession() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <PageHeader
                eyebrow="Our Confession"
                title="The 1689 Second London Baptist Confession"
                subtitle="A historic summary of Christian doctrine that we affirm as a faithful expression of biblical truth."
            />

            <section className="py-24 bg-church-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
                            <BookOpen className="w-10 h-10 text-church-accent mb-4" />
                            <h2 className="text-3xl font-serif text-church-dark mb-4">
                                A Time-Tested Statement of Faith
                            </h2>
                            <p className="text-slate-600 font-light leading-relaxed text-lg mb-4">
                                Originally published in 1677 and publicly affirmed in 1689 by Particular Baptist
                                churches in England, the Second London Baptist Confession articulates the core
                                doctrines of the Christian faith in thirty-two chapters. It stands in the Reformed
                                confessional tradition alongside the Westminster and Savoy confessions, while
                                giving distinctive expression to Baptist convictions on the church, baptism,
                                and religious liberty.
                            </p>
                            <p className="text-slate-600 font-light leading-relaxed text-lg">
                                We commend this confession to our members as a faithful and helpful summary of
                                what Scripture teaches. It is a servant of the Word, never its master. Click any
                                chapter below to read a summary of its teaching.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif text-church-dark mb-8 text-center">
                            Chapters of the Confession
                        </h2>
                    </Reveal>

                    <div className="space-y-3">
                        {confessionChapters.map((chapter, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <Reveal key={i} delay={i * 15}>
                                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => toggle(i)}
                                            aria-expanded={isOpen}
                                            className="w-full flex items-center gap-4 px-5 md:px-6 py-4 text-left hover:bg-church-light transition-colors"
                                        >
                                            <span className="shrink-0 w-10 h-10 rounded-full bg-church-accent/10 text-church-accent font-serif font-bold flex items-center justify-center">
                                                {i + 1}
                                            </span>
                                            <span className="flex-1 text-slate-800 font-serif text-lg">
                                                {chapter.title}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-church-accent shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-5 md:px-6 pb-6 pt-1 pl-16 md:pl-20">
                                                    <p className="text-slate-600 font-light leading-relaxed">
                                                        {chapter.summary}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
