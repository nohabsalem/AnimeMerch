@if(session('success'))
<div style="color: green;">{{ session('success') }}</div>
@endif

<form action="{{ route('products.store') }}" method="POST">
    @csrf
    <div>
        <label for="title">Titre</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}" required>
        @error('title') <div style="color:red;">{{ $message }}</div> @enderror
    </div>
    <div>
        <label for="description">Description</label>
        <textarea name="description" id="description" required>{{ old('description') }}</textarea>
        @error('description') <div style="color:red;">{{ $message }}</div> @enderror
    </div>
    <div>
        <label for="price">Prix</label>
        <input type="number" name="price" id="price" step="0.01" value="{{ old('price') }}" required>
        @error('price') <div style="color:red;">{{ $message }}</div> @enderror
    </div>
    <div>
        <label for="stock">Stock</label>
        <input type="number" name="stock" id="stock" value="{{ old('stock') }}" required>
        @error('stock') <div style="color:red;">{{ $message }}</div> @enderror
    </div>
    <button type="submit">Ajouter</button>
</form>