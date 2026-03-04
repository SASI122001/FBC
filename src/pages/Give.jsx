import { useState } from 'react';
import { Smartphone, Mail, Lock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import { siteData } from '../config/siteData';

const PRESET_AMOUNTS = [50, 100, 250];

export default function Give() {
    const [selected, setSelected] = useState(100);
    const [custom, setCustom] = useState('');
    const [frequency, setFrequency] = useState('one-time');

    return (
        <>
            <PageHeader
                eyebrow="Stewardship"
                title="Generosity"
                subtitle="Partnering together to resource the work of the ministry and the spread of the Gospel."
            />

            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Why Give */}
                        <Reveal direction="left">
                            <h2 className="text-4xl font-serif text-church-dark mb-6">Why We Give</h2>
                            <p className="text-slate-600 font-light leading-relaxed mb-4">
                                Giving is a profound act of worship. It reminds us that everything we have is a gift from God, and it loosens the grip that money can have on our hearts.
                            </p>
                            <p className="text-slate-600 font-light leading-relaxed mb-8">
                                When we give generously and cheerfully, we participate directly in the mission of the church: supporting our pastors, funding local and global missions, and caring for those in need.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-100 p-3 rounded-full text-church-dark">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-church-dark">Text to Give</h4>
                                        <p className="text-slate-500 text-sm">Text the word "GIVE" to {siteData.contact.textToGive}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-100 p-3 rounded-full text-church-dark">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-church-dark">Mail a Check</h4>
                                        <p className="text-slate-500 text-sm">{siteData.contact.address}, {siteData.contact.city}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Giving Widget */}
                        <Reveal>
                            <div className="bg-church-light p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                                <div className="text-center mb-6">
                                    <Lock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                    <h3 className="text-2xl font-serif text-church-dark">Secure Online Giving</h3>
                                    <p className="text-slate-500 text-sm">Powered by Stripe</p>
                                </div>

                                {/* Preset amounts */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {PRESET_AMOUNTS.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => { setSelected(amount); setCustom(''); }}
                                            className={`py-3 rounded-xl font-medium transition-all ${selected === amount && !custom
                                                    ? 'border-2 border-church-accent text-church-accent bg-white shadow-sm font-bold'
                                                    : 'border border-slate-300 hover:border-church-accent hover:text-church-accent bg-white'
                                                }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom amount */}
                                <div className="mb-6 relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                    <input
                                        type="number"
                                        placeholder="Custom Amount"
                                        value={custom}
                                        onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                                        className="w-full py-4 pl-8 pr-4 rounded-xl border border-slate-300 focus:border-church-accent focus:ring-1 focus:ring-church-accent outline-none transition-all"
                                    />
                                </div>

                                {/* Frequency */}
                                <div className="flex gap-4 mb-6">
                                    <button
                                        onClick={() => setFrequency('one-time')}
                                        className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${frequency === 'one-time' ? 'bg-church-dark text-white' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        One-Time
                                    </button>
                                    <button
                                        onClick={() => setFrequency('recurring')}
                                        className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${frequency === 'recurring' ? 'bg-church-dark text-white' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        Recurring
                                    </button>
                                </div>

                                <button className="block w-full text-center bg-church-accent text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-colors shadow-lg">
                                    Continue to Payment
                                </button>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </>
    );
}
