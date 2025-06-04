import AppLayout from '@/layouts/app-layout';
import { ArchiveBoxArrowDownIcon, BuildingStorefrontIcon, CubeIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import Footer from '../../components/footer';

const breadcrumbs = [{ title: 'Dashboard', href: '/dashboard' }];

const stats = [
    { name: 'Total commandes :', number: 45, icon: ShoppingCartIcon },
    { name: 'Utilisateurs :', number: 32, icon: UserIcon },
    { name: 'Total produits :', number: 88, icon: BuildingStorefrontIcon },
    { name: 'Produits en rupture :', number: 5, icon: BuildingStorefrontIcon },
];

export default function AdminDashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />

                <div className="flex flex-col gap-6 rounded-xl p-6">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Admin Dashboard :</h1>
                    <p className="text-sm text-gray-500">Vue d’ensemble de l’activité sur la plateforme.</p>

                    {/* Statistiques */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {stats.map((item) => (
                            <div key={item.name} className="rounded-xl border-2 border-[#FF39B7] bg-white p-4 shadow-md">
                                <span className="text-md block truncate font-medium text-[#6C3989]">{item.name}</span>
                                <span className="mt-2 block text-2xl font-bold text-[#FF39B7]">{item.number}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
                        <h2 className="mb-4 text-xl font-semibold text-[#6c3989]">Accès rapide</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex items-start gap-3 rounded-lg border border-[#F3F4F6] bg-white p-3 shadow-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                    <BuildingStorefrontIcon className="h-4 w-4 text-[#6C3989]" />
                                </div>
                                <div>
                                    <Link href="/products-view" className="text-md block font-semibold text-[#6c3989]">
                                        Produits
                                    </Link>
                                    <p className="text-xs text-gray-600">Consulter la liste les produits.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-[#F3F4F6] bg-white p-3 shadow-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                    <CubeIcon className="h-6 w-6 text-[#6C3989]" />
                                </div>
                                <div>
                                    <Link href="/products-view" className="text-md block font-semibold text-[#6c3989]">
                                        Commandes
                                    </Link>
                                    <p className="text-xs text-gray-600">Accéder aux commandes des utilisateurs.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-lg border border-[#F3F4F6] bg-white p-3 shadow-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                    <ArchiveBoxArrowDownIcon className="h-6 w-6 text-[#6C3989]" />
                                </div>
                                <div>
                                    <Link href="/users-list" className="text-md block font-semibold text-[#6c3989]">
                                        Inventaire
                                    </Link>
                                    <p className="text-xs text-gray-600"> Voir et gérer les produits.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-[#F3F4F6] bg-white p-3 shadow-sm">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6D8F4]">
                                    <UserIcon className="h-6 w-6 text-[#6C3989]" />
                                </div>
                                <div>
                                    <Link href="/users-list" className="text-md block font-semibold text-[#6c3989]">
                                        Utilisateurs
                                    </Link>
                                    <p className="text-xs text-gray-600"> Voir et gérer les utilisateurs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
