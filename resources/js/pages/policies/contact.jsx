export default function Contact() {
    return (
        <>
            <main className="flex-1 p-4">
                <div className="flex min-h-screen flex-col items-center justify-center">
                    <div className="w-full max-w-md rounded-xl border-2 border-[#6C3989] bg-white p-6 shadow-md">
                        <h2 className="mb-4 text-xl font-semibold text-[#6C3989]">Contactez-nous</h2>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-1 text-sm font-medium">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="rounded border border-gray-300 p-2 focus:border-[#6C3989] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="rounded border border-gray-300 p-2 focus:border-[#6C3989] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="subject" className="mb-1 text-sm font-medium">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="rounded border border-gray-300 p-2 focus:border-[#6C3989] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="mb-1 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="rounded border border-gray-300 p-2 focus:border-[#6C3989] focus:outline-none"
                                ></textarea>
                            </div>
                            <button type="submit" className="mt-2 cursor-pointer rounded bg-[#FF39B7] px-4 py-2 text-white transition">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
