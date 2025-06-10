import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import Footer from '../../components/footer';
export default function UserList() {
    const breadcrumbs = [
        {
            title: 'Utilisateurs',
            href: '/admin/users',
        },
    ];

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Utilisateurs" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des utilisateurs</h1>
                    <p className="text-sm text-gray-500">Gérez les utilisateurs de votre application.</p>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
