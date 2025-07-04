import AppLayout from '@/layouts/app-layout';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';
import { PenIcon, TrashIcon } from 'lucide-react';
import AdminSort from '../../components/admin/sort';
import Footer from '../../components/footer';
import Searchbar from '../../components/searchbar';
export default function CommandList() {
    const breadcrumbs = [
        {
            title: 'Commandes',
            href: '/admin/commands',
        },
    ];
    const commands = [
        {
            username: 'Jean Neymar',
            products: 3,
            total: 150.0,
            date: '01/06/2025',
            status: 'En attente',
            href: '/products/1',
        },
        {
            username: 'Nana Osaki',
            products: 1,
            total: 150.0,
            date: '01/06/2025',
            status: 'En cours',
            href: '/products/2',
        },
        {
            username: 'Shin Okazaki',
            products: 35,
            total: 150.0,
            date: '01/06/2025',
            status: 'En cours',
            href: '/products/2',
        },
        {
            username: 'Saiki Kusuo',
            products: 3,
            total: 150.0,
            date: '01/06/2025',
            status: 'Livrée',
            href: '/products/3',
        },
    ];

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Commandes" />
                <div className="relative p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des commandes</h1>
                    <p className="text-sm text-gray-500">Gérez les commandes de votre application.</p>
                    <br />
                    <div className="mb-4 flex items-center justify-between">
                        <Searchbar />
                        <AdminSort />
                    </div>

                    {/* <div className="top-0 right-0 left-0 z-10 flex items-center justify-between p-4 shadow"></div> */}

                    <div className="hidden overflow-x-auto shadow-md sm:rounded-lg md:block">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#FF39B7] text-xs text-white uppercase">
                                <tr>
                                    <th className="px-6 py-3">Client</th>
                                    <th className="px-6 py-3">Produits</th>
                                    <th className="px-6 py-3">Total (€)</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Statut</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commands.map((cmd, index) => (
                                    <tr key={index} className="border-b border-gray-200 odd:bg-white even:bg-gray-50">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-900">{cmd.username}</td>
                                        <td className="px-6 py-4">{cmd.products}</td>
                                        <td className="px-6 py-4">{cmd.total} €</td>
                                        <td className="px-6 py-4">{cmd.date}</td>
                                        <td className="px-6 py-4">{cmd.status}</td>
                                        <td className="flex justify-start px-6 py-4">
                                            <div className="mt-3 flex justify-end space-x-2">
                                                <EyeIcon
                                                    className="text-gray h-5 w-5 cursor-pointer text-green-600"
                                                    onClick={() => alert('Consulter la commande')}
                                                />
                                                <PenIcon
                                                    className="h-5 w-5 cursor-pointer text-blue-600"
                                                    onClick={() => alert('Modifier la commande')}
                                                />
                                                <TrashIcon
                                                    className="h-5 w-5 cursor-pointer text-red-600"
                                                    onClick={() => alert('Supprimer la commande')}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Version mobile - Cartes */}
                    <div className="space-y-4 md:hidden">
                        {commands.map((cmd, index) => (
                            <div key={index} className="rounded-lg bg-white p-4 shadow">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-medium text-gray-900">{cmd.username}</h3>
                                        <p className="text-sm text-gray-500">{cmd.date}</p>
                                    </div>
                                    <span
                                        className={`rounded-full px-2 py-1 text-xs ${
                                            cmd.status === 'En attente'
                                                ? 'bg-blue-100 text-blue-800'
                                                : cmd.status === 'En cours'
                                                  ? 'bg-yellow-200 text-yellow-800'
                                                  : 'bg-green-100 text-green-800'
                                        }`}
                                    >
                                        {cmd.status}
                                    </span>
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="text-gray-500">Produit(s)</p>
                                        <p>{cmd.products}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Total</p>
                                        <p>{cmd.total} €</p>
                                    </div>
                                </div>

                                <div className="mt-3 flex justify-end space-x-2">
                                    <EyeIcon
                                        className="text-gray h-5 w-5 cursor-pointer text-green-600"
                                        onClick={() => alert('Consulter la commande')}
                                    />
                                    <PenIcon className="h-5 w-5 cursor-pointer text-blue-600" onClick={() => alert('Modifier la commande')} />
                                    <TrashIcon className="h-5 w-5 cursor-pointer text-red-600" onClick={() => alert('Supprimer la commande')} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
