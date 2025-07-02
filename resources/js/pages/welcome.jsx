import { Head, Link } from '@inertiajs/react';
import Footer from '../components/footer';
import Header from '../components/header';
// Products Images :
import JosukeBG from '../assets/img/josuke2.svg';
import Araki from '../assets/img/models/araki-banner.jpg';
import Johnny from '../assets/img/models/johnny-ia.png';
import Jotaro from '../assets/img/models/jotaro-ia2.png';
// Components :
import Carrousel from '../components/landing/carrousel';
export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />
            <div className="h-[630px] w-full max-[640px]:h-[400px] sm:h-[630px] md:h-[630px] lg:h-[630px]">
                <img src={JosukeBG} alt="Josuke Higashikata" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col items-center justify-center py-1">
                <h1 className="mt-10 text-center text-4xl font-semibold text-[#6C3989]">Bienvenue sur AnimeMerch</h1>
                <p className="text-center text-lg text-gray-700">Votre destination ultime pour les produits dérivés d'animés !</p>
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
