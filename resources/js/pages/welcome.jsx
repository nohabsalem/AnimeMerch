import { Head, Link, usePage } from '@inertiajs/react';
import Banner from "../assets/img/jojo-banner.jpg"

import ProductCards from '../products/cards';
import Footer from "../components/footer"
export default function Welcome({ phpVersion }) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl"> */}
            <header className="w-full bg-[#6C3989] text-white py-3 px-6">

                <nav className="flex items-center justify-end gap-4 bg-[#6C3989]">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-white px-5 py-1.5 text-sm leading-normal text-white hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
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
                < ProductCards />
            </main>

            < Footer />
        </>
    );
}
