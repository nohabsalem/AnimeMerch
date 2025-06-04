import { useState } from 'react';
import Jojos from '../../assets/img/jojo-faq.jpg';
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
            <main className="flex min-h-screen items-center justify-center">
                <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded border-2 border-[#6C3989] bg-white shadow-md md:flex-row">
                    <div className="h-64 w-full md:h-auto md:w-1/2">
                        <img src={Jojos} alt="Jojo's magazine" className="h-full w-full object-cover" />
                    </div>

                    <div className="w-full p-6 md:w-1/2">
                        <h2 className="mb-6 text-2xl font-semibold text-[#6C3989]">Foire Aux Questions</h2>
                        <div className="cursor-pointer space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b pb-2">
                                    <button
                                        onClick={() => toggleIndex(index)}
                                        className="w-full text-left text-lg font-medium text-[#6C3989] focus:outline-none"
                                    >
                                        {faq.question}
                                    </button>
                                    {openIndex === index && <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
