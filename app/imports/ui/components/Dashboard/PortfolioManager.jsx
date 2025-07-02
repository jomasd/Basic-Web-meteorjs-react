import React, { useState } from 'react';

const initialCategories = [
  {
    id: 1,
    name: 'Paintings',
    artworks: [
      { id: 1, title: 'Sunset', description: 'A beautiful sunset.' },
      { id: 2, title: 'Mountain', description: 'A tall mountain.' },
    ],
  },
  {
    id: 2,
    name: 'Sculptures',
    artworks: [{ id: 3, title: 'Statue', description: 'A marble statue.' }],
  },
];

const PortfolioManager = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [newArtwork, setNewArtwork] = useState({ title: '', description: '' });
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingArtwork, setEditingArtwork] = useState(null);

  const addCategory = () => {
    const newId = categories.length ? Math.max(categories.map(c => c.id)) + 1 : 1;
    setCategories([...categories, { id: newId, name: newCategory.name, artworks: [] }]);
    setNewCategory({ name: '' });
  };

  const addArtwork = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const newId = category.artworks.length ? Math.max(category.artworks.map(a => a.id)) + 1 : 1;
    category.artworks.push({ id: newId, ...newArtwork });
    setCategories([...categories]);
    setNewArtwork({ title: '', description: '' });
  };

  const updateCategory = () => {
    setCategories(categories.map(c => (c.id === editingCategory.id ? editingCategory : c)));
    setEditingCategory(null);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Portfolio Manager</h1>

      {/* Create Category */}
      <div>
        <h2>Create New Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory.name}
          onChange={e => setNewCategory({ name: e.target.value })}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>

      {/* List of Categories and Artworks */}
      <div>
        <h2>All Categories</h2>
        {categories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <button onClick={() => setEditingCategory(category)}>Edit</button>
            <button onClick={() => deleteCategory(category.id)}>Delete</button>

            <div>
              <h4>Artworks</h4>
              {category.artworks.map(artwork => (
                <div key={artwork.id}>
                  <p>{artwork.title}: {artwork.description}</p>
                </div>
              ))}
              <input
                type="text"
                placeholder="Artwork Title"
                value={newArtwork.title}
                onChange={e => setNewArtwork({ ...newArtwork, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Artwork Description"
                value={newArtwork.description}
                onChange={e => setNewArtwork({ ...newArtwork, description: e.target.value })}
              />
              <button onClick={() => addArtwork(category.id)}>Add Artwork</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Category */}
      {editingCategory && (
        <div>
          <h2>Edit Category</h2>
          <input
            type="text"
            value={editingCategory.name}
            onChange={e => setEditingCategory({ ...editingCategory, name: e.target.value })}
          />
          <button onClick={updateCategory}>Update Category</button>
          <button onClick={() => setEditingCategory(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PortfolioManager;
