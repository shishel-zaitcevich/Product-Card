import { Box } from '@mui/material';
import { useState } from 'react';

interface ProductImageProps {
  imageUrl: string;
  title: string;
}

const DEFAULT_IMAGE =
  'https://fractus.com.ua/wp-content/uploads/2018/06/tovar_dlya_prodazhi.jpg';

export function ProductImage({ imageUrl, title }: ProductImageProps) {
  const [src, setSrc] = useState(imageUrl || DEFAULT_IMAGE);

  const handleError = () => setSrc(DEFAULT_IMAGE);

  return (
    <Box
      component="img"
      src={src}
      alt={title}
      onError={handleError}
      sx={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: 1,
      }}
    />
  );
}
