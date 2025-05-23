import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function AdminDashboard() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Admin" />
                <p>Admin Dashboard</p>
            </AppLayout>
        </>
    );
}
