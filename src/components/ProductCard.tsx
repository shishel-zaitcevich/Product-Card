import { Card, CardContent, CardMedia } from '@mui/material';
import { ProductImage } from './ui/ProductImage';
import { ProductInfo } from './ui/ProductInfo';
interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

export function ProductCard(props: ProductCardProps) {
  const { title, origin, price, currency, imageUrl } = props;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        minHeight: 160,
      }}
    >
      <CardMedia sx={{ flex: '0 0 40%', p: 1 }}>
        <ProductImage title={title} imageUrl={imageUrl} />
      </CardMedia>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <ProductInfo
          title={title}
          origin={origin}
          price={price}
          currency={currency}
        />
      </CardContent>
    </Card>
  );
}
