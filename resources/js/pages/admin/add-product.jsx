import { Head, useForm } from '@inertiajs/react';
export default function AddProduct() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => {
                alert('🎉 Votre produit a bien été ajouté !');
            },
        });
    }

    return (
        <>
            <Head title="Ajouter un produit" />

            <h1 className="text-center text-2xl font-bold">Ajouter un produit</h1>
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        placeholder="Nom du produit"
                        id="name"
                        maxLength={50}
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="border-col w-full rounded-lg border border-[#6C3989] p-2 placeholder:italic"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>
                <div>
                    <label className="rounded-xl" htmlFor="description">
                        Description :
                    </label>
                    <textarea
                        id="description"
                        placeholder="Description du produit"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2 placeholder:italic"
                    />
                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                </div>
                <div>
                    <label htmlFor="price">Prix :</label>
                    <input
                        type="number"
                        id="price"
                        step="0.01"
                        min="0"
                        max="999.99"
                        placeholder="Prix en €"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2 placeholder:italic"
                    />
                    {errors.price && <div className="text-red-500">{errors.price}</div>}
                </div>
                <div>
                    <label htmlFor="stock">Stock :</label>
                    <input
                        type="number"
                        id="stock"
                        min="0"
                        max="99"
                        value={data.stock}
                        onChange={(e) => setData('stock', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2 placeholder:italic"
                    />
                    {errors.stock && <div className="text-red-500">{errors.stock}</div>}
                </div>

                <div className="flex justify-center">
                    <button type="submit" disabled={processing} className="rounded-lg bg-[#FF39B7] px-6 py-2 text-white hover:bg-[#FF39B7]/90">
                        Ajouter le produit
                    </button>
                </div>
            </form>
        </>
    );
}
