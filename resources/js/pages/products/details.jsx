import { Link } from "@inertiajs/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { products } from "../products/cards";
import useCart from "../cart/cart";

export default function ProductDetails({ id }) {
    const product = products.find(p => p.id === parseInt(id)); //
    const { addToCart } = useCart();
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-8">
                <h1 className="text-4xl font-bold text-[#6C3989]">Détails du produit</h1>

                <h2>{product.name}</h2>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-20 rounded-md mb-4"
                />

                <button className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white "
                    onClick={() => {
                        // Inertia.get('/cart');
                        console.log("Ajouté au panier :", product);
                        addToCart(product);
                    }}>
                    Ajouter au panier
                </button>
            </div>


            <Footer />
        </>
    )
}