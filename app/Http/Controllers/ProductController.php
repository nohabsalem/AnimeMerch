<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Vue admin : liste complète des produits
     */
    public function index()
    {
        $products = Product::all();

        return Inertia::render('admin/product-list', [
            'products' => $products,
        ]);
    }

    /**
     * Affichage d'un produit spécifique
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('products/details', [
            'product' => $product,
        ]);
    }

    /**
     * Vue publique : liste des produits avec tri et pagination
     */
    public function indexView(Request $request)
    {
        $query = Product::query();

        // 🔥 Gestion du tri selon le paramètre reçu
        switch ($request->get('sort')) {
            case 'price_asc':
                $query->orderBy('price', 'asc');
                break;
            case 'price_desc':
                $query->orderBy('price', 'desc');
                break;
            default:
                $query->latest(); // tri par défaut : date de création
                break;
        }

        // // Pagination : 12 produits par page
        // $products = $query->paginate(12)->withQueryString();

        // return Inertia::render('products/list', [
        //     'products' => $products,
        // ]);
    }

    /**
     * Formulaire pour créer un produit
     */
    public function create()
    {
        return Inertia::render('admin/add-product');
    }

    /**
     * Stockage d'un nouveau produit
     */
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
