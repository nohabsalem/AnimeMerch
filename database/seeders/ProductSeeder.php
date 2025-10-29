<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Variant;
//  
class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $mainImage = 'img/shirts/chemise-beige-dos.jpg';

        $product = Product::create([
            'name' => 'My first seeder ',
            'description' => 'congratulations ! you ran a seeder',
            'image_path' => $mainImage,
            'category_id' => null,
            'price' => 19.99,
            'stock' => 100,
        ]);

        $sizes = [
            ['size' => 'S', 'stock' => 12],
            ['size' => 'M', 'stock' => 30],
            ['size' => 'L', 'stock' => 48]
        ];

        foreach ($sizes as $variant) {
            Variant::create([
                'product_id' => $product->id,
                'size' => $variant['size'],
                'stock' => $variant['stock'],
            ]);
        }

        // $images = [
        //     'img/shirts/chemise-beige-dos.jpg',
        //     'img/shirts/chemise-beige.jpg',
        //     'img/shirts/chemise-bucciarati-vue-dos.jpg',
        //     'img/shirts/chemise-bucciarati.jpg'
        // ];

        // foreach ($images as $imgPath) {
        //     ProductImage::create([
        //         'product_id' => $product->id,
        //         'image_path' => $imgPath,
        //     ]);
        // }
    }
}
