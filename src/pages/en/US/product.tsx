import { Grid } from 'theme-ui';
import { ProductType } from 'src/types/product';
import { ProductCard } from 'src/components/Product';
// eslint-disable-next-line jest/no-mocks-import
import productsList from '../../../../__mocks__/products.json';
import { Layout } from '../../../components/Layout';

const Product = () => (
  <Layout>
    <Grid gap={2} columns={[2, null, 4]} sx={{ justifyItems: 'center' }}>
      {productsList.map((item: ProductType) => (
        <ProductCard productDetails={item} key={item.id} />
      ))}
    </Grid>
  </Layout>
);

export default Product;
