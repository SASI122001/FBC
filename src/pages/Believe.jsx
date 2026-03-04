import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { doctrines } from '../data/doctrines';

export default function Believe() {
    return (
        <>
            <PageHeader
                eyebrow="Our Doctrine"
                title="What We Believe"
                subtitle="The core, non-negotiable truths that form the foundation of our faith and practice at Fellowship Church."
            />

            <section className="py-24 bg-church-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {doctrines.map((doc, i) => (
                        <Reveal key={doc.id} delay={i * 80}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/3">
                                        <h2 className="text-3xl font-serif text-church-dark border-b-2 border-church-accent pb-4 inline-block">
                                            {doc.title}
                                        </h2>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-slate-600 font-light leading-relaxed">{doc.content}</p>
                                        <p className="text-sm text-church-accent mt-4 font-medium italic">{doc.verses}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
