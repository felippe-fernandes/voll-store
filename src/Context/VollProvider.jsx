import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './VollContext';

function VollProvider({ children }) {
  const [productList, setProductList] = useState([])
  const objValue = { productList, setProductList};

  return (
    <RecipesContext.Provider value={ objValue }>
      {children}
    </RecipesContext.Provider>
  );
}

VollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VollProvider;
