import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './VollContext';

function VollProvider({ children }) {
  const objValue = {

  };

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
