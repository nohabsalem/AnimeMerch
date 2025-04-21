import { useState } from "react";

export default function ProductDetail({ product }) {
    const [showModal, setShowModal] = useState(false);

    const addToCart = (product) => {
        // Récupérer le panier depuis le localStorage, ou initialiser un tableau vide
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Vérifier si le produit est déjà dans le panier
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1; // Si déjà dans le panier, augmenter la quantité
        } else {
            cart.push({ ...product, quantity: 1 }); // Ajouter un nouveau produit
        }

        // Sauvegarder le panier dans le localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        setShowModal(true);  // Afficher la modale après l'ajout
    };

    if (!product) return <p>Produit introuvable</p>;

    return (
        <div>
            <h1 className="font-bold text-xl">{product.name}</h1>
            <p className="text-gray-600">
                {product.description}
                <br />
                {product.price} €
            </p>
            <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Ajouter au panier
            </button>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-lg font-bold">Produit ajouté au panier !</h2>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
