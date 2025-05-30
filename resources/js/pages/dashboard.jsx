import AppLayout from '@/layouts/app-layout';
import { CreditCardIcon, HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'; // Heroicons
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
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        {/* Vos commandes */}
                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <ShoppingCartIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/commandes" className="text-lg font-semibold">
                                    Vos commandes
                                </Link>
                                <p className="text-sm text-gray-600">Suivre, retourner ou acheter à nouveau.</p>
                            </div>
                        </div>

                        {/* Adresses */}
                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <HomeIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/cordonnées" className="text-lg font-semibold">
                                    Adresses
                                </Link>
                                <p className="text-sm text-gray-600">Modifier les adresses et les préférences de livraison des commandes.</p>
                            </div>
                        </div>

                        {/* Paiements */}
                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <CreditCardIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/paiements" className="text-lg font-semibold">
                                    Vos paiements
                                </Link>
                                <p className="text-sm text-gray-600">
                                    Afficher toutes les transactions, gérer les modes de paiement et les paramètres.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
