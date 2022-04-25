// Categories
const categories = [
  { categoryId: 1, name: 'woman' },
  { categoryId: 2, name: 'man' },
  { categoryId: 3, name: 'kids' },
];

// Categories relationships
const categoriesRelationships = [
  { productId: 1, categoryId: 2 },
  { productId: 2, categoryId: 1 },
  { productId: 2, categoryId: 2 },
  { productId: 3, categoryId: 2 },
  { productId: 4, categoryId: 2 },
  { productId: 4, categoryId: 1 },
  { productId: 5, categoryId: 2 },
  { productId: 6, categoryId: 2 },
  { productId: 7, categoryId: 2 },
  { productId: 8, categoryId: 2 },
  { productId: 9, categoryId: 2 },
  { productId: 10, categoryId: 1 },
  { productId: 10, categoryId: 2 },
  { productId: 11, categoryId: 1 },
  { productId: 12, categoryId: 1 },
  { productId: 12, categoryId: 2 },
  { productId: 13, categoryId: 1 },
  { productId: 14, categoryId: 1 },
  { productId: 15, categoryId: 1 },
  { productId: 16, categoryId: 1 },
  { productId: 17, categoryId: 1 },
  { productId: 18, categoryId: 1 },
  { productId: 19, categoryId: 1 },
  { productId: 19, categoryId: 2 },
  { productId: 20, categoryId: 1 },
  { productId: 21, categoryId: 3 },
  { productId: 22, categoryId: 3 },
  { productId: 23, categoryId: 3 },
  { productId: 24, categoryId: 3 },
  { productId: 25, categoryId: 3 },
  { productId: 26, categoryId: 3 },
  { productId: 27, categoryId: 3 },
  { productId: 28, categoryId: 3 },
  { productId: 29, categoryId: 3 },
  { productId: 30, categoryId: 3 },
  { productId: 31, categoryId: 3 },
  { productId: 32, categoryId: 3 },
];

module.exports = { categories, categoriesRelationships };
