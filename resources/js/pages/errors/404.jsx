import JojoLion from '@/assets/img/jojolion.png';
import { Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <div
                className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${JojoLion})` }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">Oups ! Cette page n'existe pas.</h1>
                <p className="mt-4 text-lg text-white drop-shadow">Vous pouvez toujours vous rendre à l'accueil.</p>
                <button className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white">
                    <Link href="/">Accueil</Link>
                </button>
            </div>
        </>
    );
}
