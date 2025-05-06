import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 py-16">
                <div className="w-full max-w-4xl text-gray-800">
                    <h1 className="text-center text-4xl font-extrabold text-[#6C3989]">Politique de Confidentialité</h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        Bienvenue sur AnimeMerch ! Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos
                        données personnelles lorsque vous visitez et interagissez avec notre site.
                    </p>

                    <div className="mt-12 space-y-12">
                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">1. Données que nous collectons</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous collectons les données personnelles suivantes lorsque vous utilisez notre site :
                            </p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Nom, adresse e-mail et informations de contact</li>
                                <li>Adresse de livraison et de facturation</li>
                                <li>Informations de paiement (pour le traitement des commandes)</li>
                                <li>Adresse IP et données de navigation (cookies et analyses)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">2. Pourquoi nous collectons vos données</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous collectons et traitons vos données personnelles dans les buts suivants :
                            </p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Traiter les commandes et livrer les produits</li>
                                <li>Améliorer votre expérience d'achat et personnaliser le site</li>
                                <li>Assurer le service client et le support</li>
                                <li>Envoyer des newsletters et des communications marketing (si vous avez opté pour ces services)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">3. Comment nous utilisons vos données</h2>
                            <p className="mt-4 text-lg text-gray-700">Vos données personnelles peuvent être utilisées pour :</p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Traiter vos commandes et gérer votre compte</li>
                                <li>Communiquer avec vous au sujet de vos commandes et offres</li>
                                <li>Analyser l'utilisation du site et améliorer nos services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">4. Partage de vos données</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous ne vendons pas vos données personnelles. Cependant, nous pouvons partager vos informations avec des prestataires
                                de services tiers de confiance afin d'effectuer certaines tâches en notre nom, notamment :
                            </p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Traitants de paiements</li>
                                <li>Sociétés de livraison</li>
                                <li>Fournisseurs d'analyses</li>
                            </ul>
                            <p className="mt-4 text-lg text-gray-700">
                                Ces prestataires sont tenus de protéger vos informations et ne peuvent les utiliser que pour les objectifs spécifiés
                                par nos soins.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">5. Sécurité des données</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous prenons la sécurité de vos données personnelles très au sérieux et avons mis en place des mesures techniques et
                                organisationnelles appropriées pour les protéger contre tout accès, altération, divulgation ou destruction non
                                autorisés.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">6. Vos droits</h2>
                            <p className="mt-4 text-lg text-gray-700">Vous disposez des droits suivants concernant vos données personnelles :</p>
                            <ul className="mt-4 list-disc pl-6 text-lg text-gray-700">
                                <li>Droit d'accès aux données que nous détenons à votre sujet</li>
                                <li>Droit de demander des corrections ou mises à jour de vos informations</li>
                                <li>Droit de demander la suppression de vos données</li>
                                <li>Droit de vous opposer à l'utilisation de vos données à des fins marketing</li>
                                <li>Droit à la portabilité des données (recevoir une copie de vos données sous un format utilisable)</li>
                            </ul>
                            <p className="mt-4 text-lg text-gray-700">Pour exercer ces droits, veuillez nous contacter à [contact@votresite.com].</p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">7. Cookies</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers texte
                                stockés sur votre appareil qui nous permettent de collecter des informations sur vos activités de navigation. Vous
                                pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">8. Modifications de cette Politique de Confidentialité</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Toute modification sera publiée sur
                                cette page, et la date de "Dernière mise à jour" sera révisée. Nous vous encourageons à consulter cette politique
                                périodiquement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">9. Contactez-nous</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Si vous avez des questions ou des préoccupations concernant la manière dont nous traitons vos données personnelles,
                                veuillez nous contacter à :
                            </p>
                            <p className="mt-2 text-lg text-gray-700">Email : [contact@votresite.com]</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
