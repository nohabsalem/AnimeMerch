import AppLayout from '@/layouts/app-layout';
import { CreditCardIcon, HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import Footer from '../components/footer';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Bonjour, user.name</h1>
                    <p className="text-sm text-gray-500">Retrouvez ici toutes vos informations, outils et accès rapides pour gérer votre compte.</p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Vos commandes */}
                        <div className="flex items-start gap-3 rounded-lg border-2 border-[#6C3989] bg-white p-3 shadow-sm">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <ShoppingCartIcon className="h-6 w-6 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/commandes" className="text-md block font-semibold text-[#6C3989]">
                                    Vos commandes
                                </Link>
                                <p className="text-sm text-gray-600">Suivre, retourner ou acheter à nouveau.</p>
                            </div>
                        </div>

                        {/* Adresses */}
                        <div className="flex items-start gap-3 rounded-lg border-2 border-[#6C3989] bg-white p-3 shadow-sm">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <HomeIcon className="h-6 w-6 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/cordonnées" className="text-md block font-semibold text-[#6C3989]">
                                    Adresses
                                </Link>
                                <p className="text-sm text-gray-600">Modifier les adresses et préférences de livraison.</p>
                            </div>
                        </div>

                        {/* Paiements */}
                        <div className="flex items-start gap-3 rounded-lg border-2 border-[#6C3989] bg-white p-3 shadow-sm">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <CreditCardIcon className="h-6 w-6 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/paiements" className="text-md block font-semibold text-[#6C3989]">
                                    Vos paiements
                                </Link>
                                <p className="text-sm text-gray-600">Gérer les transactions, modes de paiement et paramètres.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
