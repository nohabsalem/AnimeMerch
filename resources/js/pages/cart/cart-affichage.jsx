import { Link } from '@inertiajs/react';
import bin from '../../assets/img/bin.svg';
import Footer from '../../components/footer';
import Header from '../../components/header';
import useCart from './cart';
export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();
    console.log('CART', cart);
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 p-4">
                <h1 className="mb-4 text-2xl font-bold">Votre panier : </h1>

                {cart.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex-auto md:flex-2/3">
                            <div className="rounded border-2 border-[#6C3989] bg-white p-4 shadow-md">
                                <h2 className="mb-4 text-xl font-bold">Vos articles :</h2>

                                <ul className="space-y-2">
                                    {cart.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 rounded border p-2">
                                            <img src={item.imageUrl} alt={item.name} className="h-35 w-35 rounded border object-cover" />
                                            <div className="flex flex-auto flex-wrap items-center justify-between gap-4 space-x-4">
                                                <div>
                                                    <strong>{item.name}</strong>
                                                    <p>Prix : {item.price} €</p>

                                                    {/* <div className="mt-2 flex items-center">
                                                        <span>Taille :</span>
                                                        <select className="ml-2 rounded border">
                                                            {item.sizes?.map((size) => (
                                                                <option key={size.id} value={size.name}>
                                                                    {size.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div> */}

                                                    <div className="mt-2 flex flex-wrap items-center">
                                                        <span>Taille :</span>
                                                        <select className="ml-2 rounded border">
                                                            {item.sizes?.map((size) => (
                                                                <option
                                                                    key={size.id}
                                                                    value={size.name}
                                                                    disabled={size.stock === 0}
                                                                    defaultValue={item.selectedSize === size.name}
                                                                >
                                                                    {size.name} {size.stock === 0 ? '(hors stock)' : ''}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <button className="cursor-pointer" onClick={() => removeFromCart(index)}>
                                                    <img src={bin} alt="Supprimer" className="h-6 w-6" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-4">Total : {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} €</p>
                            </div>
                        </div>

                        <div className="flex-auto rounded border-2 border-[#6C3989] bg-white p-4 shadow-md md:flex-1/3">
                            <h2 className="mb-4 text-xl font-bold">Récapitulatif</h2>
                            <p>Total articles : {cart.length}</p>
                            <p className="text-lg font-bold">Total : {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} €</p>

                            <button
                                className="mt-4 w-full cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                                onClick={() => clearCart()}
                            >
                                Vider le panier
                            </button>
                            <button className="mt-4 w-full cursor-pointer rounded-md bg-[#FF39B7] px-4 py-2 text-white">
                                <Link href="/payment">Passer au paiement</Link>
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
