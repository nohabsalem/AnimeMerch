import PriceFilter from '../../components/filters/price';
import SizeFilter from '../../components/filters/size';
import ToggleFilters from '../../components/filters/toggle';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Searchbar from '../../components/searchbar';
import ProductCards from './cards';
export default function ProductList() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-grow flex-col items-center gap-8 px-4 py-8">
                <h1 className="text-4xl font-bold text-[#6C3989]">Liste des produits :</h1>
                <Searchbar />
                <div className="flex w-full justify-center">
                    <div className="flex w-1/4 flex-col gap-6">
                        <ToggleFilters />
                        <PriceFilter />
                        <SizeFilter />
                    </div>
                    <ProductCards />
                </div>
            </main>

            <Footer />
        </div>
    );
}
