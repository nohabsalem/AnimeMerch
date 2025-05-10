import { useState } from 'react';
import PriceFilter from '../../components/filters/price';
import SizeFilter from '../../components/filters/size';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Searchbar from '../../components/searchbar';
import ProductCards from './cards';

export default function ProductList() {
    const [showFilters, setShowFilters] = useState(true); // Affiché par défaut sur desktop

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-grow flex-col items-center gap-4 px-4 py-8">
                <h1 className="text-center text-4xl font-bold text-[#6C3989]">Votre recherche pour “Jojo’s Bizarre Adventure” :</h1>
                <Searchbar />

                {/* Bouton pour afficher/masquer les filtres (visible sur desktop et mobile) */}
                <div className="w-full max-w-7xl px-4 py-2">
                    <button className="rounded-xl bg-[#FF39B7] px-4 py-2 text-sm font-medium text-white" onClick={() => setShowFilters(!showFilters)}>
                        {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
                    </button>
                </div>

                <div className="flex w-full max-w-7xl gap-6">
                    {/* Colonne des filtres */}
                    {showFilters && (
                        <div className="hidden w-[220px] flex-shrink-0 flex-col gap-6 md:flex">
                            <div className="flex flex-col items-start gap-2 border-b-2 border-[#6C3989] pb-4">
                                <button
                                    className="w-full rounded-xl bg-[#FF39B7] px-2 py-1 text-sm font-medium text-white"
                                    onClick={() => console.log('Filtres appliqués')}
                                >
                                    Filtres
                                </button>
                                <button
                                    className="w-full rounded-xl border-2 border-[#6C3989] px-2 py-1 text-sm font-medium text-[#6C3989]"
                                    onClick={() => console.log('Réinitialisation des filtres')}
                                >
                                    ⨯ Réinitialiser les filtres
                                </button>
                            </div>
                            <PriceFilter />
                            <SizeFilter />
                        </div>
                    )}

                    {/* Colonne des produits */}
                    <div className="flex-1">
                        <ProductCards />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
