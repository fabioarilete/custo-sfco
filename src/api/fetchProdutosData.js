
const fetchProdutosData = async (query) =>{
  const response = await fetch(`http://localhost:5000/produtos/${query}`);
   const produtosData = await response.json();

   return produtosData;
 
}

export default fetchProdutosData