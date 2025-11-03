import { Head, useForm } from '@inertiajs/react';

export default function AddProduct() {
    const initialForm = {
        name: '',
        description: '',
        price: '',
        stock: '',
        image: null,
        stock_S: '',
        stock_M: '',
        stock_L: '',
        stock_XL: '',
    };

    const { data, setData, post, processing, errors } = useForm(initialForm);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('stock', data.stock);
        if (data.image) {
            formData.append('image', data.image);
        }
        ['S', 'M', 'L', 'XL'].forEach((size) => {
            formData.append(`stock_${size}`, data[`stock_${size}`] || '0');
        });

        post(route('products.store'), {
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            onSuccess: () => alert('Votre produit a bien été ajouté !'),
        });
    }

    return (
        <>
            <Head title="Ajouter un produit" />
            <h1 className="text-center text-2xl font-bold">Ajouter un produit</h1>
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4" encType="multipart/form-data">
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        maxLength={50}
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2"
                        placeholder="Nom du produit"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2"
                        placeholder="Description du produit"
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
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2"
                        placeholder="Prix en €"
                    />
                    {errors.price && <div className="text-red-500">{errors.price}</div>}
                </div>
                {/* <div>
                    <label htmlFor="stock">Stock :</label>
                    <input
                        type="number"
                        id="stock"
                        min="0"
                        max="99"
                        value={data.stock}
                        onChange={(e) => setData('stock', e.target.value)}
                        className="w-full rounded-lg border border-[#6C3989] p-2"
                    />
                    {errors.stock && <div className="text-red-500">{errors.stock}</div>}
                </div> */}
                <div>
                    <label htmlFor="image" className="font-medium text-gray-700">
                        Image :
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setData('image', e.target.files[0])}
                        className="w-full cursor-pointer rounded-lg border border-[#6C3989] p-2 text-gray-500 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-[#6C3989] file:px-4 file:py-2 file:text-white hover:file:bg-[#5a2e70]"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                <div>
                    <label className="mb-2 block font-semibold">Tailles et stocks :</label>
                    <div className="grid grid-cols-4 gap-3">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <div key={size} className="flex flex-col items-center">
                                <label>{size}</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="99"
                                    value={data[`stock_${size}`] || ''}
                                    onChange={(e) => setData(`stock_${size}`, e.target.value)}
                                    className="w-16 rounded-lg border border-[#6C3989] p-1 text-center"
                                />
                            </div>
                        ))}
                    </div>
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
