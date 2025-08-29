import { Link } from '@inertiajs/react';

export default function Error403() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>403 - Accès refusé</h1>
            <p>Vous n'avez pas la permission d'accéder à cette page.</p>
            <Link href="/">
                <button className="text-600 mt-2 cursor-pointer rounded-xl bg-[#FF39B7] px-6 py-2 font-semibold text-white">
                    Retour à l’accueil
                </button>
            </Link>{' '}
        </div>
    );
}
