import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import sermonPreachingImg from '../../assets/images/sermon_preaching.png';
import churchWorshipImg from '../../assets/images/church_worship.png';
import worshipMusicImg from '../../assets/images/worship_music.png';

export default function Leadership() {
    const staff = [
        {
            name: 'Pastor John Doe',
            role: 'Lead Pastor',
            bio: 'Pastor John has served First Baptist Church for over 15 years, faithfully preaching the Word and shepherding the congregation.',
            image: sermonPreachingImg,
        },
        {
            name: 'Jane Smith',
            role: 'Director of Ministries',
            bio: 'Jane oversees all lay ministry programs, from small groups to serve teams, ensuring every member finds their place in the body.',
            image: churchWorshipImg,
        },
        {
            name: 'Mark Davis',
            role: 'Worship Leader',
            bio: 'Mark leads our congregation in Scripture-rich worship, guiding our music ministry with joy and excellence.',
            image: worshipMusicImg,
        },
    ];

    return (
        <>
            <PageHeader
                eyebrow="Our Team"
                title="Leadership & Staff"
                subtitle="Called to serve, equipped to lead, and committed to the Gospel."
            />
            <section className="py-24 bg-church-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {staff.map((person, i) => (
                            <Reveal key={person.name} delay={i * 100}>
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-church-accent transition-all group">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-church-accent text-sm font-medium uppercase tracking-widest mb-1">{person.role}</p>
                                        <h3 className="text-2xl font-serif text-church-dark mb-3">{person.name}</h3>
                                        <p className="text-slate-600 font-light leading-relaxed">{person.bio}</p>
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
