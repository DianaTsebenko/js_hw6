const categoriesNumber = document.querySelectorAll('#categories .item').length;
// console.log(document.querySelectorAll('#categories .item'));
console.log(`Number of categories: ${categoriesNumber}`);

document.querySelectorAll('#categories .item').forEach(categories => {
  const categoryTitle = categories.querySelector('h2').textContent;
  const elementsCount = categories.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
