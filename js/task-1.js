const elementsAmount = document.querySelectorAll('#categories .item');
console.log('Number of categories:', elementsAmount.length);

elementsAmount.forEach(item => {
    const elementTitle = item.querySelector('h2').textContent;
    const elementCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${elementTitle}`);
    console.log(`Elements: ${elementCount}`);
})