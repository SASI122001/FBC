import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Attend Membership Class',
        description:
            "Our quarterly membership class is a four-week journey through our church's beliefs, values, and vision. It is open to all who are considering membership.",
    },
    {
        number: '02',
        title: 'Meet with an Elder',
        description:
            'After attending the class, you will have an opportunity to meet one-on-one with one of our elders to discuss your testimony and answer any questions.',
    },
    {
        number: '03',
        title: 'Welcome to the Family',
        description:
            'New members are publicly welcomed and prayed over at a Sunday morning service. We celebrate every new member joining the covenant community.',
    },
];

export default function Membership() {
    return (
        <>
            <PageHeader
                eyebrow="Covenant Community"
                title="Covenant Membership"
                subtitle="Membership is a meaningful commitment to love, serve, and grow alongside a family of believers."
            />
            <section className="py-24 bg-church-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-church-dark mb-4">
                                Why Membership Matters
                            </h2>
                            <p className="text-slate-600 font-light leading-relaxed max-w-3xl mx-auto text-lg">
                                We believe that the Christian life was never meant to be lived in isolation. Covenant membership is a formal, Scriptural commitment to a local body of believers — a declaration that you are not just a visitor, but a part of the family.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-6 mb-16">
                        {steps.map((step, i) => (
                            <Reveal key={step.number} delay={i * 100}>
                                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 flex gap-8 items-start">
                                    <span className="text-5xl font-serif text-church-accent/30 font-bold leading-none shrink-0">{step.number}</span>
                                    <div>
                                        <h3 className="text-2xl font-serif text-church-dark mb-3">{step.title}</h3>
                                        <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="bg-church-dark rounded-3xl p-10 text-center text-white">
                            <h3 className="text-3xl font-serif mb-4">Ready to take the next step?</h3>
                            <p className="text-slate-300 font-light mb-8 max-w-xl mx-auto">
                                Register for our next membership class or contact us with any questions you have.
                            </p>
                            <Link to="/connect" className="inline-flex items-center gap-2 bg-church-accent text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-lg">
                                Get Connected <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
