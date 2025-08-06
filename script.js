async function getProducts() {
  try {
    const response = await fetch('https://supersimplebackend.dev/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

getProducts();
