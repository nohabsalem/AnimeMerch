import { Head } from '@inertiajs/react';
import Footer from '../components/footer';
import Header from '../components/header';

import { Link } from '@inertiajs/react';
import JosukeBg from '../assets/img/josuke-wallpaper.jpg';
import Square from '../assets/img/square.png';
export default function Welcome({ phpVersion }) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />
            <img src={JosukeBg} alt="Josuke" className="full w-full object-cover" />
            <Link href="/products" className="border-2 border-black hover:text-red-800">
                Shopper
            </Link>
            {/* <main className="flex flex-col items-center justify-center gap-4 px-6 py-8"> */}

            <main className="flex flex-row items-center justify-center py-8">
                <div className="flex w-full flex-col justify-center bg-blue-700 px-2 md:w-1/2 md:px-4">
                    <p>Image 1</p>
                    <img src={Square} alt="Square" className="w-1/2" />
                </div>
                <div className="flex w-full flex-col justify-center bg-red-700 px-2 md:w-1/2 md:px-4">
                    <p>Image 2</p>
                    <img src={Square} alt="Square" className="w-1/2" />
                </div>
            </main>
            <div className="flex w-full bg-green-700">
                <p>Image 3</p>
                <img src={Square} alt="Square" />
            </div>
            <Footer />
        </>
    );
}
