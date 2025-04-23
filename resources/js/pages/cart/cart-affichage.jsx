import React from 'react';
import useCart from './cart';
import { Inertia } from '@inertiajs/inertia'
// import Header from '../../components/header';
import Footer from '../../components/footer';
import bin from "../../assets/img/bin.svg"

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="flex flex-col min-h-screen">
            {/* <Header /> */}

            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Votre panier : </h1>

                {cart.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    <div className="flex">

                        <div className="w-2/3 pr-4">
                            <div className="bg-white p-4 rounded shadow-md border-2 border-[#6C3989]">
                                <ul className="space-y-2">
                                    {cart.map((item, index) => (
                                        <li key={index} className="border p-2 rounded flex justify-between items-center">
                                            {/* <div>
                                                <strong>{item.name}</strong>
                                                <p>Prix : {item.price} €</p>

                                                <div className="flex items-center mt-2">
                                                    <span>Couleur :</span>
                                                    <select className="ml-2 border rounded">
                                                        <option>exemple</option>
                                                    </select>
                                                </div>

                                                <div className="flex items-center mt-2">
                                                    <span>Taille :</span>
                                                    <select className="ml-2 border rounded">
                                                        <option>exemple</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className="flex items-start space-x-4">
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    className="w-35 h-35 object-cover rounded border"
                                                />
                                                <div>
                                                    <strong>{item.name}</strong>
                                                    <p>Prix : {item.price} €</p>

                                                    <div className="flex items-center mt-2">
                                                        <span>Couleur :</span>
                                                        <select className="ml-2 border rounded">
                                                            <option>exemple</option>
                                                        </select>
                                                    </div>

                                                    <div className="flex items-center mt-2">
                                                        <span>Taille :</span>
                                                        <select className="ml-2 border rounded">
                                                            <option>exemple</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="cursor-pointer"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <img src={bin} alt="Supprimer" className="w-6 h-6" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-4">Total : {cart.reduce((sum, item) => sum + item.price, 0)} €</p>
                            </div>
                        </div>


                        <div className="w-1/3 bg-white p-4 rounded shadow-md border-2 border-[#6C3989]">
                            <h2 className="text-xl font-bold mb-4">Récapitulatif</h2>
                            <p>Total articles : {cart.length}</p>
                            <p className="text-lg font-bold">
                                Total : {cart.reduce((sum, item) => sum + item.price, 0)} €
                            </p>

                            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 w-full"
                                onClick={() => clearCart()}>
                                Vider le panier
                            </button>

                            <button className="mt-4 px-4 py-2 bg-[#FF39B7] text-white rounded-md w-full">
                                Passer commande
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
