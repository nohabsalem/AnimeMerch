import { Link } from '@inertiajs/react';

export default function Aide() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 px-4">
            <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-800">Page d’aide</h1>
                <p className="mb-2 text-gray-600">Si vous avez besoin d’assistance, n’hésitez pas à contacter notre équipe de support.</p>
                <p className="mb-2 text-gray-600">
                    Vous pouvez nous écrire à : <br />
                    <a href="mailto:animemerch-aide@exemple.com" className="text-blue-600 hover:underline">
                        <i>Animemerch-aide@exemple.com</i>
                    </a>
                </p>
                <p className="mb-2 text-gray-600">
                    Ou visitez notre{' '}
                    <a href="/faq" className="text-blue-600 hover:underline">
                        page FAQ
                    </a>{' '}
                    pour les questions fréquentes.
                </p>
                <p className="mb-1 text-gray-600">Merci pour votre patience !</p>
                <p className="mb-1 text-gray-600">Nous sommes là pour vous aider.</p>
                <p className="mb-4 text-gray-600">Votre satisfaction est notre priorité.</p>

                <Link href="/">
                    <button className="text-600 mt-2 cursor-pointer rounded-xl bg-[#FF39B7] px-6 py-2 font-semibold text-white">
                        Retour à l’accueil
                    </button>
                </Link>
            </div>
        </div>
    );
}
