import React from 'react';
import example from "@/assets/img/jotaro.svg";
import useCart from "../cart/cart";
// import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';

export const products = [
    { id: 1, imageUrl: example, name: 'Tee-shirt Jotaro', price: 29.99 },
    { id: 2, imageUrl: example, name: 'Produit 2', price: 19.99 },
    { id: 3, imageUrl: example, name: 'Produit 3', price: 24.99 },
];

export default function ProductCards() {
    const { addToCart } = useCart();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white shadow-md rounded-xl p-4 flex flex-col"

                >
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.price} €</p>
                    <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mb-2">
                        En savoir plus 🤓
                    </Link>
                    <button
                        onClick={() => {
                            // Inertia.get('/cart');
                            console.log("Ajouté au panier :", product);
                            addToCart(product);
                        }}
                        className="cursor-pointer mt-auto w-full py-2 bg-[#FF39B7] text-white rounded-md font-sm transition duration-200 hover:bg-pink-600"
                    >
                        Ajouter au panier
                    </button>

                </div>
            ))
            }
        </div >

    );
}
// }
