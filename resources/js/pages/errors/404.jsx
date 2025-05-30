import { Link } from '@inertiajs/react';
import Background from '../../assets/img/jojolion.png';

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
            <div className="rounded-xl bg-white/70 p-8 text-center shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">Oups ! Cette page n'existe pas.</h1>
                <p className="mt-4 text-lg text-gray-700">Vous pouvez toujours vous rendre à l'accueil.</p>
                <button className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white">
                    <Link href="/products">Accueil</Link>
                </button>
            </div>
        </div>
    );
}
