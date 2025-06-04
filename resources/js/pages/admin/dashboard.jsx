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
                            <div key={item.name} className="rounded-xl border-2 border-[#FF39B7] bg-white p-4 text-lg shadow-md">
                                <span className="text-md block truncate font-medium text-[#6C3989]">{item.name}</span>
                                <span className="mt-2 block text-2xl font-bold text-[#FF39B7]">{item.number}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Accès rapide */}
                <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-white p-6">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Accès rapide</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Produits */}
                        <div className="flex items-start gap-4 rounded-lg border border-[#F3F4F6] bg-white p-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <BuildingStorefrontIcon className="h-5 w-5 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/products-view" className="block text-sm font-semibold text-gray-900">
                                    Produits
                                </Link>
                                <p className="text-xs text-gray-600">Voir les produits disponibles sur la plateforme.</p>
                            </div>
                        </div>

                        {/* Commandes */}
                        <div className="flex items-start gap-4 rounded-lg border border-[#F3F4F6] bg-white p-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <ShoppingCartIcon className="h-5 w-5 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/commandes" className="block text-sm font-semibold text-gray-900">
                                    Commandes
                                </Link>
                                <p className="text-xs text-gray-600">Gérer les commandes des utilisateurs.</p>
                            </div>
                        </div>

                        {/* Utilisateurs */}
                        <div className="flex items-start gap-4 rounded-lg border border-[#F3F4F6] bg-white p-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <UserIcon className="h-5 w-5 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/cordonnées" className="block text-sm font-semibold text-gray-900">
                                    Utilisateurs
                                </Link>
                                <p className="text-xs text-gray-600">Consulter et gérer les utilisateurs.</p>
                            </div>
                        </div>

                        {/* Paiements */}
                        <div className="flex items-start gap-4 rounded-lg border border-[#F3F4F6] bg-white p-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E6D8F4]">
                                <HomeIcon className="h-5 w-5 text-[#6C3989]" />
                            </div>
                            <div>
                                <Link href="/paiements" className="block text-sm font-semibold text-gray-900">
                                    Paiements
                                </Link>
                                <p className="text-xs text-gray-600">Suivre et gérer les paiements clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
