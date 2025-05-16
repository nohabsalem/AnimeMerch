import example from '@/assets/img/jotaro.svg';
import { useState } from 'react';
import useCart from '../cart/cart';
// import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
export const products = [
    // images: {
    //     back: example

    {
        id: 1,
        imageUrl: example,
        name: 'Jean-Neymar',
        price: 24.99,
        description: 'Jean-Neymar',
        matiere: 'Jean-Neymar de coder',
        sizes: [
            { id: 1, name: 'S', stock: 12 },
            { id: 2, name: 'M', stock: 5 },
            { id: 3, name: 'L', stock: 0 },
            { id: 4, name: 'XL', stock: 10 },
        ],
    },
    {
        id: 2,
        imageUrl: example,
        name: 'ID 2',
        price: 24.99,
        description: 'ID 2',
        matiere: 'Tee-shirt avec ID 2.',
        sizes: [
            { id: 1, name: 'S', stock: 12 },
            { id: 2, name: 'M', stock: 0 },
            { id: 3, name: 'L', stock: 10 },
            { id: 4, name: 'XL', stock: 10 },
        ],
    },
    {
        id: 3,
        imageUrl: example,
        name: 'Teeshirt bg',
        price: 24.99,
        description: 'ID 3',
        matiere: 'Beau gosse',
        sizes: [
            { id: 1, name: 'S', stock: 12 },
            { id: 2, name: 'M', stock: 5 },
            { id: 3, name: 'L', stock: 20 },
            { id: 4, name: 'XL', stock: 0 },
        ],
    },
];

export default function ProductCards() {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col rounded-2xl bg-white p-5 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                    <img src={product.imageUrl} alt={product.name} className="mb-4 h-48 w-full rounded-md object-cover" />
                    <h2 className="mb-1 text-lg font-semibold">{product.name}</h2>
                    <p className="mb-4 text-gray-600">{product.price} €</p>
                    <Link href={`/products/${product.id}`} className="mb-4 text-gray-600">
                        En savoir plus
                    </Link>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <button
                                key={size.id}
                                onClick={() => setSelectedSize(size)}
                                disabled={size.stock === 0}
                                className={`w-12 rounded-md border p-2 text-sm font-medium transition-colors ${
                                    selectedSize?.id === size.id
                                        ? 'border-pink-500 bg-pink-100 text-pink-800'
                                        : 'border-gray-300 bg-white text-gray-800 hover:border-pink-500'
                                } ${size.stock === 0 ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'cursor-pointer'}`}
                            >
                                {size.name}
                            </button>
                        ))}
                    </div>

                    <button
                        className="mt-4 rounded-md bg-[#FF39B7] px-6 py-2 text-white shadow transition hover:bg-pink-600"
                        onClick={() => {
                            if (!selectedSize) {
                                alert('Veuillez sélectionner une taille.');
                                return;
                            }

                            const productToAdd = {
                                ...product,
                                selectedSize: selectedSize.name,
                                quantity: 1,
                            };

                            addToCart(productToAdd);
                            alert(`Produit ajouté au panier !\nTaille : ${selectedSize.name}`);
                            console.log('Ajouté au panier:', productToAdd);
                        }}
                    >
                        Ajouter au panier
                    </button>
                </div>
            ))}
        </div>
    );
}
// }
