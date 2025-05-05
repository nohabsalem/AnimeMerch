import example from '@/assets/img/jotaro.svg';
import useCart from '../cart/cart';
// import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';

export const products = [
    {
        id: 1,
        imageUrl: example,
        name: 'Tee-shirt Jotaro',
        price: 29.99,
        description: 'Un tee-shirt de qualité supérieure avec un design unique de Jotaro.',
        matiere: '100% coton biologique.',

        // Images du produit :
        // images: {
        //     back: example
        sizes: [
            { id: 1, name: 'S', stock: 10 },
            { id: 2, name: 'M', stock: 5 },
            { id: 3, name: 'L', stock: 0 },
            { id: 4, name: 'XL', stock: 2 },
        ],
    },
    {
        id: 2,
        imageUrl: example,
        name: 'Titi le tshirt',
        price: 19.99,
        description: 'Titi le tshirt',
        matiere: '96% polyester, 4% coton.',

        sizes: [
            { id: 1, name: 'S', stock: 1 },
            { id: 2, name: 'M', stock: 50 },
            { id: 3, name: 'L', stock: 8 },
            { id: 4, name: 'XL', stock: 0 },
        ],
    },
    {
        id: 3,
        imageUrl: example,
        name: 'Bombardillo Crocodillo',
        price: 24.99,
        description: 'Bombardillo Crocodillo',
        matiere: '100% écailles de crocodile.',
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
