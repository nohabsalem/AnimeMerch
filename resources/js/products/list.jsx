// ProductList.jsx
import { Link } from '@inertiajs/react';
import useCart from './hooks/useCart'; // ← Assure-toi que le chemin est correct

export const products = [
    { id: "1", name: "Chaussures cool", description: "Des chaussures cool pour l'été", price: 49.99 },
    { id: "2", name: "T-shirt stylé", description: "Un t-shirt stylé pour l'été", price: 19.99 },
];

export default function ProductList() {
    const { addToCart } = useCart();

    return (
        <>
            <h2 className="font-bold mb-4 text-xl">Liste des produits</h2>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="border p-4 rounded-md shadow">
                        <Link href={`/produit/${product.id}`} className="text-blue-600 text-lg font-semibold block">
                            {product.name}
                        </Link>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-sm text-green-700 font-bold">{product.price} €</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Ajouter au panier
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
