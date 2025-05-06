import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Cgv() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 py-16">
                <div className="w-full max-w-4xl text-gray-800">
                    <h1 className="text-center text-4xl font-extrabold text-[#6C3989]">Conditions Générales de Vente</h1>
                    <p className="mt-4 text-center text-lg text-gray-600">
                        Bienvenue sur AnimeMerch ! Ces conditions générales de vente régissent les relations entre vous, en tant que client, et nous,
                        AnimeMerch, en tant que vendeur. En passant une commande sur notre site, vous acceptez ces conditions.
                    </p>

                    <div className="mt-12 space-y-12">
                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 1 – Objet</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Ces conditions définissent les modalités de vente des produits proposés par AnimeMerch sur son site internet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 2 – Produits</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Les produits proposés sont ceux présentés sur le site AnimeMerch, sous réserve de disponibilité. AnimeMerch se réserve
                                le droit de modifier la sélection de produits à tout moment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 3 – Commandes</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Toute commande validée par le client sur notre site constitue une vente ferme et définitive. L'acceptation de la
                                commande se fait dès la confirmation par email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 4 – Prix</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Les prix des produits sont indiqués en euros, toutes taxes comprises (TTC). AnimeMerch se réserve le droit de modifier
                                ses prix à tout moment sans préavis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 5 – Paiement</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Le paiement est exigible dès la commande. Nous acceptons les cartes bancaires et les autres moyens de paiement
                                indiqués lors du processus de commande.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 6 – Livraison</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Les produits sont livrés à l'adresse de livraison indiquée par le client lors de la commande. Les délais de livraison
                                sont estimés et peuvent varier en fonction du transporteur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 7 – Droit de rétractation</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Conformément à la loi, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation à compter de la
                                réception de vos produits, sans avoir à justifier de motifs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 8 – Responsabilité</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                AnimeMerch ne saurait être tenu responsable des dommages directs ou indirects causés par l'utilisation des produits ou
                                du site, dans les limites permises par la loi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 9 – Données personnelles</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                AnimeMerch collecte et traite les données personnelles des clients conformément à sa Politique de Confidentialité,
                                disponible sur le site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Article 10 – Loi applicable et juridiction compétente</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Les présentes conditions sont régies par le droit français. En cas de litige, seuls les tribunaux français seront
                                compétents.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
