import { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import { confessionChapters } from '../data/confession';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

export default function Confession() {
    const [selectedChapter, setSelectedChapter] = useState(null);

    // Listen for sidebar navigation events from ChapterView
    useEffect(() => {
        const handler = (e) => {
            setSelectedChapter(e.detail);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        window.addEventListener('confession-select', handler);
        return () => window.removeEventListener('confession-select', handler);
    }, []);

    const handleSelect = (i) => {
        setSelectedChapter(i);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (selectedChapter !== null) {
        return (
            <ChapterView
                chapter={confessionChapters[selectedChapter]}
                chapterNumber={selectedChapter + 1}
                total={confessionChapters.length}
                onBack={() => handleSelect(null)}
                onPrev={selectedChapter > 0 ? () => handleSelect(selectedChapter - 1) : null}
                onNext={selectedChapter < confessionChapters.length - 1 ? () => handleSelect(selectedChapter + 1) : null}
                currentIndex={selectedChapter}
            />
        );
    }

    return <IndexView onSelect={handleSelect} />;
}

/* ─── Index View (Table of Contents) ─────────────────────────── */
function IndexView({ onSelect }) {
    return (
        <>
            <PageHeader
                eyebrow="Our Confession"
                title="The 1689 Second London Baptist Confession"
                subtitle="A historic summary of Christian doctrine that we affirm as a faithful expression of biblical truth."
            />

            <section className="py-16 bg-church-light min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro card */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 mt-1">
                                <BookOpen className="w-8 h-8 text-church-accent" />
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl text-church-dark mb-3">
                                    Second London Baptist Confession of 1689
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-3">
                                    Originally published in 1677 and publicly affirmed in 1689 by Particular Baptist
                                    churches in England, the Second London Baptist Confession articulates the core
                                    doctrines of the Christian faith in thirty-two chapters. It stands in the Reformed
                                    confessional tradition alongside the Westminster and Savoy confessions, while giving
                                    distinctive expression to Baptist convictions on the church, baptism, and religious liberty.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    We commend this confession to our members as a faithful and helpful summary of
                                    what Scripture teaches. Click any chapter below to read its teaching.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="px-8 py-5 border-b border-slate-100 bg-slate-50">
                            <h3 className="font-serif text-xl text-church-dark">Table of Contents</h3>
                        </div>
                        <ul className="divide-y divide-slate-100">
                            {confessionChapters.map((chapter, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => onSelect(i)}
                                        className="w-full flex items-center gap-3 px-8 py-3.5 text-left
                                                   hover:bg-amber-50 transition-colors duration-150 group"
                                    >
                                        <span className="shrink-0 w-8 text-slate-400 text-sm font-mono text-right">
                                            {i + 1}.
                                        </span>
                                        <span className="flex-1 text-church-accent font-medium text-sm
                                                         group-hover:underline underline-offset-2">
                                            Chapter {i + 1}: {chapter.title}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-church-accent
                                                                  shrink-0 transition-colors" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </>
    );
}

/* ─── Chapter Detail View ─────────────────────────────────────── */
function ChapterView({ chapter, chapterNumber, total, onBack, onPrev, onNext, currentIndex }) {
    return (
        <>
            <PageHeader
                eyebrow={`Chapter ${chapterNumber} of ${total}`}
                title={`Chapter ${chapterNumber}: ${chapter.title}`}
                subtitle="The Second London Baptist Confession of 1689"
            />

            <section className="py-14 bg-church-light min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* ── Main Content ── */}
                        <div className="flex-1 min-w-0">

                            {/* Back link */}
                            <button
                                onClick={onBack}
                                className="inline-flex items-center gap-2 text-church-accent text-sm font-medium mb-8
                                           hover:underline underline-offset-2 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Table of Contents
                            </button>

                            {/* Chapter document card */}
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

                                {/* Chapter heading */}
                                <div className="px-10 pt-10 pb-6 border-b border-slate-100">
                                    <h1 className="font-serif text-3xl md:text-4xl text-church-dark leading-snug">
                                        Chapter {chapterNumber}: {chapter.title}
                                    </h1>
                                    <div className="w-full h-px bg-slate-200 mt-6" />
                                </div>

                                {/* Article body — numbered paragraphs or summary */}
                                <div className="px-10 py-8">
                                    {chapter.paragraphs ? (
                                        <ol className="space-y-6 list-decimal list-outside pl-5">
                                            {chapter.paragraphs.map((para, idx) => (
                                                <li
                                                    key={idx}
                                                    className="font-serif text-slate-800 leading-relaxed text-[1.05rem]"
                                                >
                                                    <p>{para.text}</p>
                                                    {para.refs && (
                                                        <p className="mt-2 text-church-accent text-sm font-sans">
                                                            ( {para.refs} )
                                                        </p>
                                                    )}
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p className="font-serif text-slate-800 leading-relaxed text-[1.05rem]">
                                            {chapter.summary}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Prev / Next chapter navigation */}
                            <div className="flex items-center justify-between mt-8 gap-4">
                                {onPrev ? (
                                    <button
                                        onClick={onPrev}
                                        className="inline-flex items-center gap-2 text-church-accent text-sm font-medium
                                                   hover:underline underline-offset-2 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Previous Chapter
                                    </button>
                                ) : <span />}

                                {onNext && (
                                    <button
                                        onClick={onNext}
                                        className="inline-flex items-center gap-2 text-church-accent text-sm font-medium
                                                   hover:underline underline-offset-2 transition-colors ml-auto"
                                    >
                                        Next Chapter
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ── Sidebar: Our Confession TOC ── */}
                        <aside className="w-full lg:w-64 shrink-0">
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden sticky top-24">
                                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
                                    <BookOpen className="w-4 h-4 text-slate-400" />
                                    <span className="font-serif text-base text-church-dark">Our Confession</span>
                                </div>
                                <ul className="py-2 max-h-[70vh] overflow-y-auto">
                                    {confessionChapters.map((ch, i) => (
                                        <li key={i}>
                                            <button
                                                onClick={() =>
                                                    window.dispatchEvent(
                                                        new CustomEvent('confession-select', { detail: i })
                                                    )
                                                }
                                                className={`w-full text-left px-5 py-2 text-xs leading-snug transition-colors
                                                    ${i === currentIndex
                                                        ? 'text-church-accent font-semibold bg-amber-50'
                                                        : 'text-church-accent hover:bg-amber-50'
                                                    }`}
                                            >
                                                Chapter {i + 1}: {ch.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </>
    );
}
