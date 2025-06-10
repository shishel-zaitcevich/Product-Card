import { Box, Typography } from '@mui/material';
import { formatPrice } from '../../utils/formatPrice';

interface ProductInfoProps {
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
}

export function ProductInfo({
  title,
  origin,
  price,
  currency,
}: ProductInfoProps) {
  const formatted = formatPrice(price, currency);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        Страна: {origin}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {formatted}
      </Typography>
    </Box>
  );
}
