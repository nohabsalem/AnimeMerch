import { Head, Link } from '@inertiajs/react';
import Footer from '../components/footer';
import Header from '../components/header';
// Products Images :
import JosukeBg from '../assets/img/josuke-wallpaper.jpg';
import Araki from '../assets/img/models/araki-banner.jpg';
import Johnny from '../assets/img/models/johnny-ia.png';
import Jotaro from '../assets/img/models/jotaro-ia2.png';
// Components :
import Carrousel from '../components/landing/carrousel';

export default function Welcome({ phpVersion }) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />

            <img src={JosukeBg} alt="Josuke" className="full w-full object-cover" />
            <div className="text-center">
                <h1 className="mt-10 text-center text-4xl font-semibold text-[#6C3989]">Bienvenue sur AnimeMerch</h1>
                <p className="text-lg text-gray-700">Votre destination ultime pour les produits dérivés d'animés !</p>
                <button className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white">
                    <Link href="/products">Shopper</Link>
                </button>
            </div>

            <main className="flex flex-row items-center justify-center py-8">
                <div className="flex w-full justify-center md:w-1/2">
                    <img src={Jotaro} alt="Jotaro Kujo" className="" />
                </div>
                <div className="flex w-full justify-center md:w-1/2">
                    <img src={Johnny} alt="Johnny Joestar" className="" />
                </div>
            </main>
            <div className="flex w-full">
                <img src={Araki} alt="Hirohiko Araki" />
            </div>

            <Carrousel />
            <Footer />
        </>
    );
}
