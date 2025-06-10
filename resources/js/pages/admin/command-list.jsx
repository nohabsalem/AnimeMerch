import AppLayout from '@/layouts/app-layout';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';
import { PenIcon, TrashIcon } from 'lucide-react';
import Footer from '../../components/footer';

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
                <div className="relative overflow-x-auto p-4 shadow-md sm:rounded-lg">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des commandes</h1>
                    <p className="text-sm text-gray-500">Gérez les commandes de votre application.</p>
                    <br />
                    {/* Tableau stylisé */}
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
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                                >
                                    <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">{cmd.username}</td>
                                    <td className="px-6 py-4">{cmd.products}</td>
                                    <td className="px-6 py-4">{cmd.total} €</td>
                                    <td className="px-6 py-4">{cmd.date}</td>
                                    <td className="px-6 py-4">{cmd.status}</td>
                                    <td className="flex items-center space-x-2 px-6 py-4">
                                        <EyeIcon className="text-gray h-6 w-6 cursor-pointer" onClick={() => alert('Consulter la commande')} />
                                        <PenIcon className="h-6 w-6 cursor-pointer" onClick={() => alert('Modifier la commande')} />
                                        <TrashIcon className="h-6 w-6 cursor-pointer text-red-600" onClick={() => alert('Supprimer la commande')} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
