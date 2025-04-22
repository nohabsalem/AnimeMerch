import { Link } from "@inertiajs/react"

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-6xl font-bold text-gray-800">Oups ! Cette page n'existe pas.</h1>
                <p className="mt-4 text-lg text-gray-600">Vous pouvez toujours vous rendre à l'accueil.</p>
                <Link
                    href="/"
                    className="mt-6 px-4 py-2 bg-pink-500 text-white rounded"
                >
                    Go to Home
                </Link>
            </div>
        </>
    );
}