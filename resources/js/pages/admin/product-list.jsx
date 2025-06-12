import AppLayout from '@/layouts/app-layout';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';
import { PenIcon, TrashIcon } from 'lucide-react';
import ProductImage from '../../assets/img/jotaro.svg'; // import SVG
import AdminSort from '../../components/admin/sort';
import Footer from '../../components/footer';
import Searchbar from '../../components/searchbar';

export default function ProductView() {
    const breadcrumbs = [
        {
            title: 'Produits',
            href: '/products-view',
        },
    ];

    const products = [
        {
            id: 1,
            name: 'Produit 1',
            description: 'Description du produit 1',
            price: 19.99,
        },
        {
            id: 2,
            name: 'Produit 2',
            description: 'Description du produit 2',
            price: 29.99,
        },
        {
            id: 3,
            name: 'Produit 3',
            description: 'Description du produit 3',
            price: 39.99,
        },
    ];

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Produits" />
                <div className="relative p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des produits</h1>
                    <p className="text-sm text-gray-500">Gérez vos produits ici.</p>
                    <br />
                    <div className="mb-4 flex items-center justify-between">
                        <Searchbar />
                        <AdminSort />
                    </div>

                    {/* Table Desktop */}
                    <div className="hidden overflow-x-auto shadow-md sm:rounded-lg md:block">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#FF39B7] text-xs text-white uppercase">
                                <tr>
                                    <th className="px-6 py-3">Image</th>
                                    <th className="px-6 py-3">Nom</th>
                                    <th className="px-6 py-3">Description</th>
                                    <th className="px-6 py-3">Prix (€)</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b border-gray-200 odd:bg-white even:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <img src={ProductImage} alt="Jotaro" className="h-12 w-12 rounded object-cover" />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4">{product.description}</td>
                                        <td className="px-6 py-4 font-semibold text-green-600">{product.price.toFixed(2)} €</td>
                                        <td className="flex justify-start px-6 py-4">
                                            <div className="mt-3 flex justify-end space-x-2">
                                                <EyeIcon
                                                    className="h-5 w-5 cursor-pointer text-green-600"
                                                    onClick={() => alert(`Voir le produit ${product.name}`)}
                                                />
                                                <PenIcon
                                                    className="h-5 w-5 cursor-pointer text-blue-600"
                                                    onClick={() => alert(`Modifier le produit ${product.name}`)}
                                                />
                                                <TrashIcon
                                                    className="h-5 w-5 cursor-pointer text-red-600"
                                                    onClick={() => alert(`Supprimer le produit ${product.name}`)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cartes mobile */}
                    <div className="space-y-4 md:hidden">
                        {products.map((product, index) => (
                            <div key={index} className="rounded-lg bg-white p-4 shadow">
                                <div className="flex items-center space-x-4">
                                    <img src={ProductImage} alt="Jotaro" className="h-16 w-16 rounded object-cover" />
                                    <div>
                                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                        <p className="text-sm font-semibold text-green-600">{product.price.toFixed(2)} €</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-end space-x-2">
                                    <EyeIcon
                                        className="h-5 w-5 cursor-pointer text-green-600"
                                        onClick={() => alert(`Voir le produit ${product.name}`)}
                                    />
                                    <PenIcon
                                        className="h-5 w-5 cursor-pointer text-blue-600"
                                        onClick={() => alert(`Modifier le produit ${product.name}`)}
                                    />
                                    <TrashIcon
                                        className="h-5 w-5 cursor-pointer text-red-600"
                                        onClick={() => alert(`Supprimer le produit ${product.name}`)}
                                    />
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
