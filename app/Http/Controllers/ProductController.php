<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        // Retourne vers React via Inertia
        return Inertia::render('admin/product-list', [
            'products' => $products,
        ]);
    }

    public function indexView()
    {
        $products = Product::all();

        // Retourne vers React via Inertia
        return Inertia::render('products/list', [
            'products' => $products,
        ]);
    }

    // Création produit - Formulaire
    public function create()
    {
        return Inertia::render('admin/add-product');
    }

    // Stockage du nouveau produit
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric',
            'stock'       => 'required|integer',
            'image_path'  => 'nullable|string',
        ]);

        Product::create($validated);

        return redirect()->route('products.indexView')->with('success', 'Produit ajouté avec succès !');
    }
}
