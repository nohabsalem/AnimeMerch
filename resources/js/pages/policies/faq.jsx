import { useState } from 'react';
import JotaroBg from '../../assets/img/kujo-bg.jpg';
import Footer from '../../components/footer';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Quels sont les délais de livraison ?',
            answer: 'Les délais de livraison varient entre 3 à 5 jours ouvrés selon votre localisation.',
        },
        {
            question: 'Puis-je retourner un article ?',
            answer: 'Oui, vous avez 14 jours après réception pour retourner un article, sous certaines conditions.',
        },
        {
            question: 'Quels moyens de paiement acceptez-vous ?',
            answer: 'Nous acceptons les paiements par carte bancaire, PayPal et Google Pay.',
        },
        {
            question: 'Comment puis-je suivre ma commande ?',
            answer: 'Un lien de suivi vous est envoyé par e-mail dès que la commande est expédiée.',
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div
                className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${JotaroBg})` }}
                role="img"
                aria-label="Image de fond Jotaro Kujo"
            >
                <main className="flex min-h-screen items-center justify-center">
                    <section className="w-full max-w-4xl rounded-2xl border-2 border-[#6C3989] bg-white/95 p-8 shadow-lg">
                        <header className="mb-8 text-center">
                            <h1 className="text-3xl font-extrabold text-[#6C3989]">Foire Aux Questions</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Retrouvez ici les réponses aux questions les plus fréquentes. Si vous ne trouvez pas votre bonheur, contactez-nous !
                            </p>
                        </header>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="rounded-lg border border-[#6C3989] bg-white shadow-sm transition hover:shadow-md">
                                    <button
                                        onClick={() => toggleIndex(index)}
                                        className="w-full px-6 py-4 text-left text-lg font-medium text-[#6C3989] focus:outline-none"
                                    >
                                        {faq.question}
                                    </button>
                                    {openIndex === index && <div className="px-6 pb-4 text-sm text-gray-700">{faq.answer}</div>}
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
