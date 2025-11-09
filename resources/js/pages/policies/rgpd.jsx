import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RGPD() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 py-16">
                <div className="w-full max-w-4xl text-gray-800">
                    <h1 className="text-center text-4xl font-extrabold text-[#6C3989]">Conformité RGPD</h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        Cette page détaille notre engagement envers le Règlement Général sur la Protection des Données (RGPD) et la manière dont nous
                        assurons la protection de vos données personnelles.
                    </p>

                    <div className="mt-12 space-y-12">
                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">1. Responsable du traitement</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Le responsable du traitement des données personnelles est AnimeMerch, situé à [adresse de l’entreprise], joignable à
                                [contact@animemerch.com].
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">2. Base légale du traitement</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous traitons vos données personnelles conformément aux bases légales prévues par le RGPD, notamment :
                            </p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Votre consentement explicite</li>
                                <li>L’exécution d’un contrat (ex. : commande de produits)</li>
                                <li>Le respect d’une obligation légale</li>
                                <li>Notre intérêt légitime à améliorer nos services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">3. Durée de conservation</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Vos données sont conservées pendant une durée proportionnée à la finalité du traitement, conformément aux obligations
                                légales et réglementaires.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">4. Transfert hors UE</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Si des données sont transférées en dehors de l’Union Européenne, nous nous assurons que des garanties adéquates sont
                                en place (clauses contractuelles types, décision d’adéquation, etc.).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">5. Exercice de vos droits</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification, d’effacement, de limitation,
                                d’opposition et de portabilité en nous contactant à :
                            </p>
                            <p className="mt-2 text-lg text-gray-700">Email : [contact@animemerch.com]</p>
                            <p className="mt-2 text-lg text-gray-700">
                                Vous avez également le droit d’introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas
                                respectés.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
