import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function About() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 py-16">
                <div className="w-full max-w-4xl text-gray-800">
                    <h1 className="text-center text-4xl font-extrabold text-[#6C3989]">À propos de Nous</h1>
                    <p className="mt-4 text-center text-lg text-gray-600">Découvrez qui nous sommes et ce qui nous motive chez AnimeMerch.</p>

                    <div className="mt-12 space-y-12">
                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Notre Histoire</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                AnimeMerch est né de la passion pour l'univers de l'animation japonaise et des produits dérivés. Fondé par des fans
                                pour des fans, notre mission est de proposer des produits de qualité inspirés de vos séries et personnages préférés.
                                Depuis notre lancement, nous avons à cœur d'offrir une expérience de shopping unique pour les passionnés d'animés et
                                de culture geek.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Notre Vision</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous croyons que la culture geek et l'animation japonaise doivent être accessibles à tous. AnimeMerch se veut un
                                acteur clé dans la diffusion de ces passions à travers des produits exclusifs, de qualité et à des prix abordables.
                                Notre vision est d'enrichir la vie des fans d'animés avec des objets qu'ils adorent et qui leur rappellent leurs
                                moments préférés à travers leurs séries animées préférées.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Nos Valeurs</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Nous valorisons avant tout la passion, la créativité et la qualité. Chaque produit que nous proposons est
                                soigneusement sélectionné pour garantir une expérience authentique et fidèle aux œuvres qu'il représente. Nous nous
                                engageons également à respecter l'éthique en matière de commerce, en privilégiant des pratiques responsables et
                                durables dans la fabrication de nos produits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Notre Équipe</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Notre équipe est composée de passionnés d'animés, de créateurs, de designers et de logisticiens qui travaillent tous
                                ensemble pour offrir à nos clients les meilleurs produits possibles. Nous sommes une petite équipe mais extrêmement
                                dévouée, prête à répondre aux attentes et aux besoins de notre communauté.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-[#6C3989]">Nos Engagements</h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Chez AnimeMerch, nous nous engageons à offrir une expérience d'achat sécurisée, une livraison rapide et un service
                                client à l'écoute. Nous mettons un point d'honneur à satisfaire nos clients et à les accompagner dans leur parcours
                                d'achat, en leur offrant un service personnalisé.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
