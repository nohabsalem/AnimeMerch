export default function AddProduct() {
    return (
        <>
            <h1 className="text-2xl font-bold">Add Product Page</h1>
            <p>This is where you can add new products to the inventory.</p>
            {/* Additional content for adding products will go here */}

            <button onClick={() => alert('Add Product Button Clicked!')} className="mt-4 rounded-xl bg-[#FF39B7] px-10 py-2 text-white">
                Ajouter un produit
            </button>
        </>
    );
}
