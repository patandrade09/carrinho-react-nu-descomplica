import { useEffect } from 'react';
import Products from 'components/Products';
import Cart from 'components/Cart';
import * as S from './style';
import Loader from 'components/Loader/Loader';
import { useProducts } from 'contexts/products-context';


function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
      {isFetching && <Loader />}

      <S.TwoColumnGrid>
        <S.Side>
        </S.Side>
        <S.Main>
          <S.MainHeader>
            <p>{products?.length} itens encontrados</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  );
}

export default App;
