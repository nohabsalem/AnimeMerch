<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Variant;
use App\Models\ProductImage;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        // Premier produit
        $product1 = Product::create([
            'name' => "Chemise Giorno Giovanna & Guido Mista",
            'description' => 'congratulations ! you ran a seeder',
            'image_path' => 'img/shirts/model-chemise-beige.jpg',
            'category_id' => null,
            'price' => 19.99,
            'stock' => 100,
        ]);

        $sizes1 = [
            ['size' => 'S', 'stock' => 12],
            ['size' => 'M', 'stock' => 30],
            ['size' => 'L', 'stock' => 48],
        ];

        foreach ($sizes1 as $variant) {
            Variant::create([
                'product_id' => $product1->id,
                'size' => $variant['size'],
                'stock' => $variant['stock'],
            ]);
        }

        $images1 = [
            'img/shirts/model-chemise-beige.jpg',
            'img/shirts/model-chemise-beige-vue-dos.jpg',
            'img/shirts/chemise-beige.jpg',
            'img/shirts/chemise-beige-dos.jpg',
        ];

        foreach ($images1 as $imgPath) {
            ProductImage::create([
                'product_id' => $product1->id,
                'image_path' => $imgPath,
            ]);
        }

        // Deuxième produit
        $product2 = Product::create([
            'name' => "Chemise Bruno Bucciarati",
            'description' => 'Description for second product',
            'image_path' => 'img/shirts/model-chemise-bucciarati.jpg',
            'category_id' => null,
            'price' => 29.99,
            'stock' => 50,
        ]);

        $sizes2 = [
            ['size' => 'M', 'stock' => 20],
            ['size' => 'L', 'stock' => 25],
            ['size' => 'XL', 'stock' => 10],
        ];

        foreach ($sizes2 as $variant) {
            Variant::create([
                'product_id' => $product2->id,
                'size' => $variant['size'],
                'stock' => $variant['stock'],
            ]);
        }

        $images2 = [
            'img/shirts/chemise-bucciarati.jpg',
            'img/shirts/chemise-bucciarati-vue-dos.jpg',
            'img/shirts/model-chemise-bucciarati-vue-dos.jpg',
            'img/shirts/model-chemise-bucciarati.jpg'
        ];

        foreach ($images2 as $imgPath) {
            ProductImage::create([
                'product_id' => $product2->id,
                'image_path' => $imgPath,
            ]);
        }
    }
}
