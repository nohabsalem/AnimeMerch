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
    { name: 'dada', icon: BuildingStorefrontIcon, current: false },
    { name: 'daddy', icon: BuildingStorefrontIcon, current: false },
];

export default function AdminDashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />
                <p>Admin Dashboard</p>

                <div className="flex justify-center gap-2 border-4 border-red-700 px-1 py-4 font-medium">
                    {stats.map((item) => (
                        <div key={item.name} className="border-2 border-blue-300 px-2 py-1">
                            <span className="truncate">{item.name}</span>
                        </div>
                    ))}
                </div>

                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li className="-mx-6 mt-auto">
                        <Link href="#" className="flex items-center gap-x-4 px-6 py-3 text-sm/6 text-white">
                            <span className="sr-only">Your profile</span>
                        </Link>
                    </li>
                </ul>

                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
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
            </AppLayout>
            <Footer />
        </>
    );
}
