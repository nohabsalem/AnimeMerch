import { Head, Link, usePage } from '@inertiajs/react';
import Banner from "../assets/img/jojo-banner.jpg"

import ProductCards from './products/cards';
import Header from "../components/header"
import Footer from "../components/footer"
export default function Welcome({ phpVersion }) {


    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl"> */}
            < Header />
            <div className="w-full flex items-center justify-center">
                <img
                    src={Banner}
                    className="w-full object-cover max-h-[350px]"
                    alt="Bannière"
                />

            </div>

            <main className="flex flex-col items-center justify-center gap-4 px-6 py-8">
                <h1 className="text-4xl font-bold text-[#6C3989]">Bienvenue sur AnimeMerch</h1>
                <p className="text-lg text-gray-700">Votre destination ultime pour les produits dérivés d'animés !</p>

                <button className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white ">
                    <Link href="/products">Shopper</Link>
                </button>
                < ProductCards />
            </main>

            < Footer />
        </>
    );
}
