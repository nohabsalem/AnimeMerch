import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import imgExample from '../assets/img/square.png';
import Footer from '../components/footer';
const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <img src={imgExample} alt="" className="h-12 w-12" />
                            </div>
                            <div className="ml-4">
                                <Link href="/commandes" className="text-lg font-semibold">
                                    Vos commandes{' '}
                                </Link>
                                <p className="text-sm text-gray-600">Suivre, retourner ou acheter à nouveau.</p>
                            </div>
                        </div>

                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <img src={imgExample} alt="" className="h-12 w-12" />
                            </div>
                            <div className="ml-4">
                                <Link href="/cordonnées" className="text-lg font-semibold">
                                    Adresses{' '}
                                </Link>
                                <p className="text-sm text-gray-600">Modifier les adresses et les préférences de livraison des commandes.</p>
                            </div>
                        </div>

                        <div className="dark:border-sidebar-border relative flex items-center overflow-hidden rounded-xl border-2 border-[#6C3989] p-4">
                            <div className="flex-shrink-0">
                                <img src={imgExample} alt="" className="h-12 w-12" />
                            </div>
                            <div className="ml-4">
                                <Link href="/paiements" className="text-lg font-semibold">
                                    Vos paiements{' '}
                                </Link>
                                <p className="text-sm text-gray-600">
                                    Afficher toutes les transactions, gérer les modes de paiement et les paramètres.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
            <Footer />
        </>
    );
}
