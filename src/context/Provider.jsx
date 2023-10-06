import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({children}) {

  const [listaMateriais, setListaMateriais] = useState([]);
  const [material, setMaterial] = useState({});
  const [produto, setProduto] = useState({});


  const value = {
    listaMateriais, 
    setListaMateriais,
    material, 
    setMaterial,
    produto, 
    setProduto
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;