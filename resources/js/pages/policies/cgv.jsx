import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Cgv() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 pt-16 pb-8">
                <h1 className="text-4xl font-bold text-[#6C3989]">Conditions Générales de Vente</h1>
                <p className="mt-4 text-lg text-gray-700">Bienvenue sur AnimeMerch !</p>
                <p className="mt-2 max-w-3xl text-center text-lg text-gray-700">
                    Ces conditions générales de vente régissent les relations entre vous, en tant que client, et nous, AnimeMerch, en tant que
                    vendeur. En passant une commande sur notre site, vous acceptez ces conditions.
                </p>

                <div className="mt-8 w-full max-w-3xl space-y-6 text-gray-700">
                    <h2 className="text-2xl font-semibold">Article 1 – Objet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae velit nec justo aliquam cursus.</p>

                    <h2 className="text-2xl font-semibold">Article 2 – Produits</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

                    <h2 className="text-2xl font-semibold">Article 3 – Commandes</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <h2 className="text-2xl font-semibold">Article 4 – Prix</h2>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>

                    <h2 className="text-2xl font-semibold">Article 5 – Paiement</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>

                    <h2 className="text-2xl font-semibold">Article 6 – Livraison</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>

                    <h2 className="text-2xl font-semibold">Article 7 – Droit de rétractation</h2>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.</p>

                    <h2 className="text-2xl font-semibold">Article 8 – Responsabilité</h2>
                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</p>

                    <h2 className="text-2xl font-semibold">Article 9 – Données personnelles</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

                    <h2 className="text-2xl font-semibold">Article 10 – Loi applicable et juridiction compétente</h2>
                    <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
