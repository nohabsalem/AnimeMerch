import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PlaceHolderImg from '../../assets/img/placeholder.svg';
import PriceFilter from '../../components/filters/price';
import SizeFilter from '../../components/filters/size';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Searchbar from '../../components/searchbar';
import Sort from '../../components/sort';

export default function ProductList() {
    const { products } = usePage().props;
    const [showFilters, setShowFilters] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleToggleFilters = () => setShowFilters(!showFilters);
    const handleResetFilters = () => console.log('Réinitialisation des filtres');

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-grow flex-col items-center gap-4 px-4 py-8">
                <Searchbar />

                <div className="flex w-full max-w-7xl justify-between py-2">
                    <button
                        className="w-[220px] cursor-pointer rounded-xl border-2 border-[#FF39B7] bg-white px-2 py-1 text-sm font-medium text-[#FF39B7]"
                        onClick={handleToggleFilters}
                    >
                        {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
                    </button>

                    <Sort />
                </div>

                <div className="flex w-full max-w-7xl gap-6">
                    {!isMobile && showFilters && (
                        <div className="hidden w-[220px] flex-shrink-0 flex-col gap-6 md:flex">
                            <div className="flex flex-col items-start gap-2 border-b-2 border-[#6C3989] pb-4">
                                <button
                                    className="w-full rounded-xl border-2 border-[#6C3989] px-2 py-1 text-sm font-medium"
                                    onClick={handleResetFilters}
                                >
                                    ⨯ Réinitialiser les filtres
                                </button>
                            </div>
                            <PriceFilter />
                            <SizeFilter />
                        </div>
                    )}

                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.data.map((product) => (
                                <div
                                    key={product.id}
                                    className="bordershadow-sm mx-auto flex w-full max-w-[300px] flex-col rounded-lg"
                                    style={{ minHeight: 520 }}
                                >
                                    <div className="group relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden rounded-t-lg">
                                        <img
                                            src={product.images?.[0] || product.image_path || PlaceHolderImg}
                                            alt={product.name}
                                            className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = PlaceHolderImg;
                                            }}
                                        />
                                        {(product.images?.[1] || product.second_image) && (
                                            <img
                                                src={product.images?.[1] || product.second_image}
                                                alt={`${product.name} - Vue 2`}
                                                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = PlaceHolderImg;
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div className="flex flex-grow flex-col justify-between p-6">
                                        <h3 className="mb-2 text-xs tracking-wide text-gray-400 uppercase">
                                            {product.brand || "JOJO'S BIZARRE ADVENTURE"}
                                        </h3>
                                        <h2 className="text-lg leading-tight font-semibold">{product.name}</h2>
                                        <p className="text-xl font-bold">{product.price} €</p>
                                        <Link href={route('products.show', product.id)} className="mt-2 block text-sm text-[#6c3989]">
                                            Voir le produit
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {isMobile && showFilters && (
                    <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
                        <div className="flex items-center justify-between border-b p-4">
                            <h2 className="text-xl font-bold">Filtrer par</h2>
                            <button onClick={handleToggleFilters} className="text-2xl">
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-2">
                            <PriceFilter />
                            <SizeFilter />
                        </div>
                        <div className="flex gap-3 border-t p-4">
                            <button
                                className="flex-1 cursor-pointer rounded-full border-2 border-[#6C3989] py-2 font-medium"
                                onClick={handleResetFilters}
                            >
                                Réinitialiser
                            </button>
                            <button
                                className="flex-1 cursor-pointer rounded-full bg-[#FF39B7] py-2 font-medium text-white"
                                onClick={handleToggleFilters}
                            >
                                Appliquer
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
