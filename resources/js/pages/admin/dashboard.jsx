import AppLayout from '@/layouts/app-layout';
import { BuildingStorefrontIcon, HomeIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import Footer from '../../components/footer';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const stats = [
    { name: 'Total commandes :', number: 45, icon: ShoppingCartIcon, current: false },
    { name: 'Utilisateurs :', number: 32, icon: UserIcon, current: false },
    { name: 'Total produits :', number: 88, BuildingStorefrontIcon, current: false },
];

export default function AdminDashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />

                <div className="flex flex-col gap-4 rounded-xl p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Admin Dashboard :</h1>

                    {/* Mes Stats */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {stats.map((item) => (
                            <div key={item.name} className="rounded-2xl border-2 border-[#FF39B7] bg-white p-4 shadow-md">
                                <span className="text-md block truncate font-medium text-[#6C3989]">{item.name}</span>
                                <span className="mt-2 block text-3xl font-bold text-[#FF39B7]">{item.number}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="grid auto-rows-min gap-4 border-2 border-[#6C3989] p-4 md:grid-cols-3">
                        {/* Commandes */}
                        <div className="relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <ShoppingCartIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/commandes" className="cursor-pointer text-lg font-semibold">
                                    Historique des commandes
                                </Link>
                                <p className="text-sm text-gray-600">Consulter l'historique de commande des utilisateurs.</p>
                            </div>
                        </div>

                        {/* Utilisateurs */}
                        <div className="relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <UserIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/cordonnées" className="cursor-pointer text-lg font-semibold">
                                    Utilisateurs
                                </Link>
                                <p className="text-sm text-gray-600">Consulter et gérer les utilisateurs.</p>
                            </div>
                        </div>

                        {/* Préférences de livraison */}
                        <div className="relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <HomeIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/coordonnees" className="cursor-pointer text-lg font-semibold">
                                    Préférences de livraison
                                </Link>
                                <p className="text-sm text-gray-600">Modifier les utilisateurs et les préférences de livraison des commandes.</p>
                            </div>
                        </div>

                        {/* Produits */}
                        <div className="relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <UserIcon className="h-12 w-12 text-[#6C3989]" />
                            </div>
                            <div className="ml-4">
                                <Link href="/products-view" className="cursor-pointer text-lg font-semibold">
                                    Produits
                                </Link>
                                <p className="text-sm text-gray-600">Voir les produits disponibles sur la plateforme.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
