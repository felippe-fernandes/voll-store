import React, {useContext, useEffect} from 'react';
import styles from './styles.module.css'
import { getProducts } from '../../Services/Api';
import RecipesContext from '../../Context/VollContext'
import Card from '../../Components/Card/Card'

function ProductList() {
  const { productList, setProductList } = useContext(RecipesContext);

  useEffect(() => {
    const productListGenerator = async () => setProductList(await getProducts())
    productListGenerator()
  }, [setProductList])

  return (
    <div className={styles.ProductListMainPage}>
      <div className={styles.CardsContainer}>
        {productList?.length > 0
          && (
            productList.map(({
              id,
              price,
              title,
              thumbnail,
              shipping,
              available_quantity: availableQuantity,
            }) => (
              <Card
                key={ id }
                cardName={ title }
                cardPrice={ price }
                cardImage={ thumbnail.replace('I.jpg', 'W.webp') }
                id={ id }
                availableQuantity={ availableQuantity }
              />
            )))}
      </div>
    </div>
  );
}

export default ProductList;
