<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Page 404 
Route::fallback(function () {
    return Inertia::render('errors/404');
})->name('fallback');

// Cart System
Route::get('/cart', function () {
    return Inertia::render('cart/cart-affichage');
})->name('cart');



//Admin views 
Route::get('/admin', function () {
    return Inertia::render('admin/dashboard');
})->name('admin');

//CRUDS :
Route::get('/admin/users', function () {
    return Inertia::render('admin/user-list');
})->name('admin.users');

Route::get('/admin/commands', function () {
    return Inertia::render('admin/command-list');
})->name('admin.users');

Route::get('/admin/products-view', function () {
    return Inertia::render('admin/product-list');
})->name('admin.products');

// UserViews

//Products Views
Route::get('/products/{id}', function ($id) {
    return Inertia::render('products/details', [
        'id' => $id,
    ]);
});

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
