import { Head, Link } from '@inertiajs/react';
import Footer from '../components/footer';
import Header from '../components/header';
// Products Images :
import JosukeBG from '../assets/img/josuke2.svg';
import Araki from '../assets/img/models/hirohikoo.jpg';
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

            <main className="flex w-full flex-row flex-wrap items-stretch justify-center gap-0 max-[640px]:flex-col">
                {/* Image 1 */}
                <div className="relative aspect-[2/3] w-1/2 max-[640px]:w-full">
                    <img src={Jotaro} alt="Jotaro Kujo" className="h-full w-full object-cover" />
                    <Link
                        href="/products"
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 duration-200 hover:bg-black/30"
                        aria-label="Voir la mode femme"
                    >
                        <span className="mb-2 text-sm tracking-wide text-white">ALLER À LA MODE</span>
                        <span className="text-4xl font-bold text-white md:text-5xl">FEMME</span>
                    </Link>
                </div>

                {/* Image 2 */}
                <div className="relative aspect-[2/3] w-1/2 max-[640px]:w-full">
                    <img src={Johnny} alt="Johnny Joestar" className="h-full w-full object-cover" />
                    <Link
                        href="/products"
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 duration-200 hover:bg-black/30"
                        aria-label="Voir la mode homme"
                    >
                        <span className="mb-2 text-sm tracking-wide text-white">ALLER À LA MODE</span>
                        <span className="text-4xl font-bold text-white md:text-5xl">HOMME</span>
                    </Link>
                </div>
            </main>

            {/* <div className="flex w-full">
                <img src={Araki} alt="Hirohiko Araki" />
            </div> */}
            <div className="relative flex w-full flex-col">
                <img src={Araki} alt="Hirohiko Araki" />
                {/* Petit texte discrètement sur l'image, par exemple en haut à gauche */}
                <span className="absolute top-3 left-3 rounded px-2 py-1 text-sm text-white">
                    <a
                        href="https://www.lexpress.fr/culture/apres-le-louvre-le-mangaka-hirohiko-araki-s-offre-une-place-au-musee-a-tokyo_2019196.html?cmp_redirect=true"
                        target="_blank"
                        className="underline"
                    >
                        Hirohiko Araki, et ses oeuvres, au Centre National des Arts de Tokyo
                    </a>
                </span>
            </div>

            <Carrousel />
            <Footer />
        </>
    );
}
