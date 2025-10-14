<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function show($filename)
    {
        $path = storage_path('app/product-images/' . $filename);
        if (!File::exists($path)) abort(404);
        return response()->file($path);
    }
}
