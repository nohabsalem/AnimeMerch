import AppLayout from '@/layouts/app-layout';
import { EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';
import { PenIcon, TrashIcon } from 'lucide-react';
import AdminSort from '../../components/admin/sort';
import Footer from '../../components/footer';
import Searchbar from '../../components/searchbar';

export default function UserList() {
    const breadcrumbs = [
        {
            title: 'Utilisateurs',
            href: '/admin/users',
        },
    ];

    const users = [
        {
            id: 1,
            firstname: 'Jean',
            lastname: 'Neymar',
            email: 'jean@example.com',
            date: '01/06/2025',
            orders: 12,
        },
        {
            id: 2,
            firstname: 'Nana',
            lastname: 'Osaki',
            email: 'nana@example.com',
            date: '01/06/2025',
            orders: 5,
        },
        {
            id: 3,
            firstname: 'Shin',
            lastname: 'Okazaki',
            email: 'shin@example.com',
            date: '01/06/2025',
            orders: 18,
        },
        {
            id: 4,
            firstname: 'Kusuo',
            lastname: 'Saiki',
            email: 'kusuo@example.com',
            date: '01/06/2025',
            orders: 7,
        },
    ];

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Utilisateurs" />
                <div className="relative p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des utilisateurs</h1>
                    <p className="text-sm text-gray-500">Gérez les utilisateurs de votre application.</p>
                    <br />
                    <div className="mb-4 flex items-center justify-between">
                        <Searchbar />
                        <AdminSort />
                    </div>

                    {/* Version desktop */}
                    <div className="hidden overflow-x-auto shadow-md sm:rounded-lg md:block">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#FF39B7] text-xs text-white uppercase">
                                <tr>
                                    <th className="px-6 py-3">Nom</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Commandes</th>
                                    <th className="px-6 py-3">Inscription</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-b border-gray-200 odd:bg-white even:bg-gray-50">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-900">
                                            {user.firstname} {user.lastname}
                                        </td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.orders}</td>
                                        <td className="px-6 py-4">{user.date}</td>
                                        <td className="flex justify-start px-6 py-4">
                                            <div className="mt-3 flex justify-end space-x-2">
                                                <EyeIcon
                                                    className="h-5 w-5 cursor-pointer text-green-600"
                                                    onClick={() => (window.location.href = `/admin/users/${user.id}`)}
                                                />
                                                <PenIcon
                                                    className="h-5 w-5 cursor-pointer text-blue-600"
                                                    onClick={() => alert('Modifier utilisateur')}
                                                />
                                                <TrashIcon
                                                    className="h-5 w-5 cursor-pointer text-red-600"
                                                    onClick={() => alert('Supprimer utilisateur')}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Version mobile */}
                    <div className="space-y-4 md:hidden">
                        {users.map((user, index) => (
                            <div key={index} className="rounded-lg bg-white p-4 shadow">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-medium text-gray-900">
                                            {user.firstname} {user.lastname}
                                        </h3>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                        <p className="text-sm text-gray-400">Inscrit(e) le {user.date}</p>
                                    </div>
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                    <span className="rounded-fullpx-2 topacity-80 flex items-center gap-1 py-1">
                                        <ShoppingCartIcon className="h-6 w-6 text-[#4a0f9d]" />
                                        <p>{user.orders}</p>
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-end space-x-2">
                                    <EyeIcon
                                        className="h-5 w-5 cursor-pointer text-green-600"
                                        onClick={() => (window.location.href = `/admin/users/${user.id}`)}
                                    />
                                    <PenIcon className="h-5 w-5 cursor-pointer text-blue-600" onClick={() => alert('Modifier utilisateur')} />
                                    <TrashIcon className="h-5 w-5 cursor-pointer text-red-600" onClick={() => alert('Supprimer utilisateur')} />
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
