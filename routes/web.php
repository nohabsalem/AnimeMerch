<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\VariantController;

Route::get('/', function () {

    // $users = \App\Models\User::all();
    return Inertia::render('welcome', [
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

// Pages publiques (tous les rôles) : 
/**
 * Pages d'erreurs : 
 * 404 : */
Route::fallback(function () {
    return Inertia::render('errors/404');
})->name('fallback');

// Page 403 : 
Route::get('/forbidden', function () {
    return Inertia::render('errors/403');
})->name('forbidden');



Route::get('/cart', function () {
    return Inertia::render('cart/cart-affichage');
})->name('cart');

// Page Panier
Route::get('/cart', function () {
    return Inertia::render('cart/cart-affichage');
})->name('cart');

//Products Views
// Route::get('/products/{id}', function ($id) {
//     return Inertia::render('products/details', [
//         'id' => $id,
//     ]);
// });

//Page détail Produit : 
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');

//Affichage de tous les produits existants en DB :
Route::get('/products', function () {
    return Inertia::render('products/list');
})->name('products');
// Policy Pages :
Route::get('/terms-of-sale', function () {
    return Inertia::render('policies/cgv');
})->name('cgv');

Route::get('/privacy-policy', function () {
    return Inertia::render('policies/privacy-policy');
})->name('cgv');

Route::get('/about-us', function () {
    return Inertia::render('policies/about');
})->name('about');

Route::get('/faq', function () {
    return Inertia::render('policies/faq');
})->name('faq');

Route::get('/help', function () {
    return Inertia::render('policies/help');
})->name('help');

Route::get('/contact', function () {
    return Inertia::render('policies/contact');
})->name('contact');

// Payment Pages
Route::get('/payment', function () {
    return Inertia::render('commands/payment');
})->name('payments');

// Affichage de tous les produits
Route::get('/products', [ProductController::class, 'indexView'])->name('products.indexView');

Route::get('/product-image/{filename}', [ProductImageController::class, 'show'])
    ->middleware('auth');

/**Routes ADMIN
 * Celles-ci sont protégées par un middleware
 **/
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin');

    //Dashboard admin
    Route::get('/admin', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin');

    /* Les CRUD chez l'admin :
    CRUD Users : */
    Route::get('/admin/users', function () {
        return Inertia::render('admin/user-list');
    })->name('admin.users');

    /* CRUD Commandes :
Afficher toutes les commandes des users */

    Route::get('/admin/commands', function () {
        return Inertia::render('admin/command-list');
    })->name('admin.users');

    /* CRUD Produits :
    Afficher tous les produits : */
    // Route::get('/admin/products-view', function () {
    //     return Inertia::render('admin/product-list');
    // })->name('admin.products');

    // Affichage de tous les produits chez l'admin
    Route::get('/admin/products-view', [ProductController::class, 'index'])->name('products.index');

    // Ajouter des produits
    Route::get('admin/add-product', function () {
        return Inertia::render('admin/add-product');
    })->name('admin.addproducts');
});

/* Controller utilisant un CRUD grâce à la commande --resource*/
Route::resource('variants', VariantController::class);
