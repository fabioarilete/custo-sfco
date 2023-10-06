
const fetchMateriaisData = async () =>{
   const response = await fetch(`http://localhost:5000/listaMateriais`);
    const materiaisData = await response.json();

    return materiaisData;
  
}

export default fetchMateriaisData