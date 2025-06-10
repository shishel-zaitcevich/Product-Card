import { Container, Box } from '@mui/material';
import { ProductCard } from './components/ProductCard';
import './App.css';
import { mockProducts } from './mockData/mockProducts';

function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {mockProducts.map((product, i) => (
          <Box
            key={i}
            sx={{
              flex: {
                xs: '1 1 100%',
                sm: '1 1 48%',
                md: '1 1 30%',
              },
              maxWidth: { xs: '100%', sm: '48%', md: '30%' },
            }}
          >
            <ProductCard {...product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default App;
