export async function getProducts() {
    try {
        const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computadores');  
      const category = await data.json();
      return category.results;
    } catch (err) {
      console.error(err.message);
    }
  }