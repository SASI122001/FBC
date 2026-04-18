import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';

const covenantIntro = [
    'By the grace of God, we have been led to repent of our sin and believe in Jesus Christ as our Lord and Savior. We have confessed our faith and been baptized in the name of the Father, and of the Son, and of the Holy Spirit.',
    'Now, therefore, in the presence of God and by His grace, we joyfully and solemnly covenant one with another as the members of Trinity Reformed Baptist Church.',
];

const covenantPromises = [
    'We promise to walk together in Christian love through the power of the Holy Spirit.',
    'We pledge not to forsake the assembling of ourselves for any corporate gatherings on the Lord\u2019s day and will use our spiritual gifts for the mutual edification of the church.',
    'We commit to faithfully participate in the ordinances of the church and endeavor after unity of mind in doctrine.',
    'We will both submit to the church\u2019s discipline upon ourselves and lovingly assume our responsibility to participate in the discipline of other members, as taught in Scripture.',
    'We will contribute cheerfully and regularly to this church for its general ministry and expenses, the relief of the poor, the cause of reformation and revival, and the spread of the Gospel throughout all nations.',
    'We will strive by God\u2019s grace and power to live out a faithful Christian witness in the world and, denying ungodliness and worldly lusts, strive to walk in accordance with God\u2019s Law written on our hearts, perfecting holiness in the fear of God.',
    'We pledge to participate in pastoral oversight as well as to watch over one another in brotherly love, to remember one another in prayer, to help one another in sickness and distress, and to cultivate Christian compassion and courtesy.',
    'We will be slow to take offense, always eager to seek the reconciliation Christ commands, and work to preserve the unity of the Spirit in the bond of peace.',
    'We resolve to practice personal and family worship and to train our children in the discipline and instruction of the Lord.',
    'We promise that if in the providence of God we leave this church, we will diligently seek to unite with another biblical, evangelical congregation.',
];

export default function Believe() {
    return (
        <>
            <PageHeader
                eyebrow="Our Covenant"
                title="Covenant of First Baptist Church"

            />

            <section className="py-24 bg-church-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-10 space-y-5">
                            {covenantIntro.map((p, i) => (
                                <p key={i} className="text-slate-600 font-light leading-relaxed text-lg">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </Reveal>

                    <ol className="space-y-5">
                        {covenantPromises.map((promise, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <li className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex gap-5">
                                    <span className="shrink-0 w-10 h-10 rounded-full bg-church-accent text-white font-serif font-bold flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    <p className="text-slate-600 font-light leading-relaxed flex-1">
                                        {promise}
                                    </p>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
