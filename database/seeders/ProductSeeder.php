<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Seeder1 Tee-shirt',
            'price' => 19.99,
            'description' => 'congratulations ! you ran a seeder',
            'stock' => 100,
        ]);

        Product::create([
            'name' => 'Seeder2 Tee-shirt',
            'price' => 19.99,
            'description' => 'congratulations ! you ran a seeder',
            'stock' => 100,
        ]);
    }
}
