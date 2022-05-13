import React from 'react';
import styles from './styles.module.css'

function Card(props) {
  const {
    cardName,
    cardImage,
    cardPrice,
    availableQuantity,
  } = props;


  return (
    <div className={ styles.CardContainer }>
      <img src={ cardImage }
    alt={ cardName }
    className={ styles.CardImg }
    />
    <div className={ styles.CardTitleContainer }>
        <span
          className={ styles.CardTitle }
          style={ {
            display: '-webkit-box',
            overflow: 'hidden',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
          } }
        >
          {cardName}
        </span>
    <p className={ styles.Price }>
      {cardPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
    </div>
    <div className={styles.Quantity}>Quantidade disponivel: {availableQuantity}</div>
  </div>
);
}

export default Card;
