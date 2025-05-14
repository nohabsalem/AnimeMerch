import example from '@/assets/img/jotaro.svg';
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
        price: 38.99,
        description: 'ID 2',
        matiere: 'Tee-shirt avec ID 2.',
        sizes: [
            { id: 1, name: 'S', stock: 12 },
            { id: 2, name: 'M', stock: 5 },
            { id: 3, name: 'L', stock: 0 },
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
            { id: 3, name: 'L', stock: 0 },
            { id: 4, name: 'XL', stock: 10 },
        ],
    },
];

export default function ProductCards() {
    const { addToCart } = useCart();

    return (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col rounded-xl bg-white p-4 shadow-md">
                    <img src={product.imageUrl} alt={product.name} className="mb-4 h-48 w-full rounded-md object-cover" />
                    <h2 className="mb-1 text-lg font-semibold">{product.name}</h2>
                    <p className="mb-4 text-gray-600">{product.price} €</p>
                    <Link href={`/products/${product.id}`} className="mb-4 text-gray-600">
                        En savoir plus
                    </Link>
                    <button
                        onClick={() => {
                            // Inertia.get('/cart');
                            alert('Produit ajouté au panier !');
                            console.log('Ajouté au panier:', product);
                            addToCart(product);
                        }}
                        className="font-sm mt-auto w-full cursor-pointer rounded-md bg-[#FF39B7] py-2 text-white transition duration-200 hover:bg-pink-600"
                    >
                        Ajouter au panier
                    </button>
                </div>
            ))}
        </div>
    );
}
// }
