import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';

const timeline = [
    {
        year: '1998',
        title: 'Founded in Faith',
        description:
            'First Baptist Church of Wink Texas was planted by a small group of families with a vision to preach the whole counsel of God to the city of Wink.',
        right: true,
    },
    {
        year: '2005',
        title: 'Building Our First Home',
        description:
            'After years of meeting in a school gymnasium, God provided the resources to build our first dedicated church building in Wink, Texas.',
        right: false,
    },
    {
        year: '2010',
        title: 'Growth & Pastoral Transition',
        description:
            'A new pastor accepted the call as Lead Pastor, and the church experienced a season of rapid growth, requiring multiple Sunday services.',
        right: true,
    },
    {
        year: '2018',
        title: 'Moving to N. Cross Ave',
        description:
            "By God's grace, we moved into our current campus at 217 N.Cross Ave to better accommodate our thriving children's and youth ministries.",
        right: false,
    },
];

export default function History() {
    return (
        <>
            <PageHeader
                eyebrow="Our Story"
                title="Our History"
                subtitle="God's faithfulness written in the story of our congregation."
            />

            <section className="py-24 bg-church-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Center line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 hidden md:block" />

                        {timeline.map((item, i) => (
                            <Reveal key={item.year} delay={i * 100}>
                                <div className={`relative z-10 flex items-center justify-between w-full mb-16 flex-col md:flex-row gap-6 md:gap-0`}>
                                    {item.right ? (
                                        <>
                                            <div className="md:w-5/12 text-right pr-8 hidden md:block">
                                                <h3 className="text-2xl font-serif text-church-dark">{item.title}</h3>
                                                <p className="text-slate-500 font-light mt-2">{item.description}</p>
                                            </div>
                                            <div className="md:w-2/12 flex justify-center">
                                                <div className="w-16 h-16 rounded-full bg-church-dark text-church-accent flex items-center justify-center font-bold shadow-glass text-xl border-4 border-white">
                                                    {item.year}
                                                </div>
                                            </div>
                                            <div className="md:w-5/12 pl-8 hidden md:block" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="md:w-5/12 pr-8 hidden md:block" />
                                            <div className="md:w-2/12 flex justify-center">
                                                <div className="w-16 h-16 rounded-full bg-slate-200 text-church-dark flex items-center justify-center font-bold shadow-glass text-xl border-4 border-white">
                                                    {item.year}
                                                </div>
                                            </div>
                                            <div className="md:w-5/12 text-left pl-8 hidden md:block">
                                                <h3 className="text-2xl font-serif text-church-dark">{item.title}</h3>
                                                <p className="text-slate-500 font-light mt-2">{item.description}</p>
                                            </div>
                                        </>
                                    )}
                                    {/* Mobile card */}
                                    <div className="md:hidden text-center px-4">
                                        <div className="w-14 h-14 rounded-full bg-church-dark text-church-accent flex items-center justify-center font-bold text-lg border-4 border-white mx-auto mb-4">
                                            {item.year}
                                        </div>
                                        <h3 className="text-xl font-serif text-church-dark mb-2">{item.title}</h3>
                                        <p className="text-slate-500 font-light">{item.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
