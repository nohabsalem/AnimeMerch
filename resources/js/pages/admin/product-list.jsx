import Footer from '@/components/footer';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
export default function ProductView() {
    const breadcrumbs = [
        {
            title: 'Produits',
            href: '/products-view',
        },
    ];

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Produits" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <h1 className="text-2xl font-medium text-[#6C3989]">Liste des produits</h1>
                    <p className="text-sm text-gray-500">Gérez les produits de votre application.</p>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
