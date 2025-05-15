import { Link } from '@inertiajs/react';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Payment() {
    return (
        <>
            <Header />
            <main className="flex-1 p-4">
                <div className="flex min-h-screen flex-col">
                    <div className="rounded border-2 border-[#6C3989] bg-white p-6 shadow-md">
                        <form action="">
                            <p className="mb-6 text-2xl font-bold">Vos informations de paiement :</p>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-base font-medium text-gray-700">
                                        Numéro de carte
                                    </label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="expirationDate" className="block text-base font-medium text-gray-700">
                                        Date d'expiration
                                    </label>
                                    <input
                                        type="text"
                                        id="expirationDate"
                                        name="expirationDate"
                                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="MM/AA"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cvv" className="block text-base font-medium text-gray-700">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="XXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="billingAddress" className="block text-base font-medium text-gray-700">
                                        Adresse de facturation
                                    </label>
                                    <input
                                        type="text"
                                        id="billingAddress"
                                        name="billingAddress"
                                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="123 Rue Exemple, Ville"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="postalCode" className="block text-base font-medium text-gray-700">
                                        Code postal
                                    </label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="12345"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <div className="mt-6 flex justify-center">
                        <Link
                            href="/cart"
                            className="rounded-md border-2 border-[#FF39B7] bg-white px-5 py-2 text-base font-semibold text-[#FF39B7] transition-all duration-200 hover:bg-[#FF39B7] hover:text-white hover:shadow-lg"
                        >
                            Retour au panier
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="cursor-pointer rounded-md bg-[#6C3989] px-6 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-[#572d6f] hover:shadow-lg"
                        >
                            Valider le paiement
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
