import React from 'react';
import useCart from './cart';
// import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="flex flex-col min-h-screen">
            {/* <Header /> */}

            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Mon Panier 🛒</h1>

                {cart.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    <>
                        <ul className="space-y-2">
                            {cart.map((item, index) => (
                                <li key={index} className="border p-2 rounded flex justify-between items-center">
                                    <div>
                                        <strong>{item.name}</strong>
                                        <p>Prix : {item.price} €</p>
                                    </div>
                                    <button
                                        className="text-red-600 hover:underline"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Supprimer
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4">Total : {cart.reduce((sum, item) => sum + item.price, 0)} €</p>

                        <button
                            onClick={clearCart}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Vider le panier
                        </button>

                        <button
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Passer à la commande
                        </button>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}
