import { Card, Image, Text, Button } from 'theme-ui';
import { ProductType } from 'src/types/product';

const ProductCardSx = {
  card: {
    maxWidth: 256,
    padding: '20px 36px',
    textAlign: 'center',
  },
  name: {
    fontZize: '20px',
    fontWeight: 400,
    color: '#a5a5a5',
    fontFamily: 'sans-serif',
    display: 'block',
    letterSpacing: '2px',
  },
  description: {
    fontSize: 1,
    display: 'block',
    color: '#595858',
    fontFamily: 'sans-serif',
    mt: 2,
    letterSpacing: 1,
  },
  price: {
    fontSize: 1,
    display: 'block',
    color: '#000',
    mt: 5,
    letterSpacing: 1,
  }
}

export const ProductCard = ({
  productDetails,
}: {
  productDetails: ProductType;
}) => (
  <Card
    key={productDetails.id}
    data-testid="product-card"
    sx={ProductCardSx.card}
    bg="white"
  >
    <Image src={productDetails.image} />
    <Text
      sx={ProductCardSx.name}
    >
      {productDetails.name}
    </Text>
    <Text
      sx={ProductCardSx.description}
    >
      {productDetails.description}
    </Text>
    <Text
      sx={ProductCardSx.price}
    >
      {productDetails.price.currency}
      {productDetails.price.amount}
    </Text>
    <Button
      mt={2}
      variant="secondary"
      sx={{
        background: '#4c4ccb',
      }}
    >
      Buy Now
    </Button>
  </Card>
);
