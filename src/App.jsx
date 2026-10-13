import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { useRoute } from './hooks/useRoute';
import { readSearchText } from './models/searchModel';
import { submitSearch } from './controllers/searchController';

export default function App() {
  const route = useRoute();
  const isDetailPage = route.startsWith('/detail');
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const detailText = readSearchText(route);

  function addToCart(product) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (!existingItem) return [...items, { ...product, quantity: 1 }];

      return items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  }

  return (
    <>
      <Header cartCount={cartCount} onSearch={submitSearch} />
      {isDetailPage ? (
        <DetailPage key={route} initialText={detailText} />
      ) : (
        <HomePage onAdd={addToCart} />
      )}
      <Footer />
    </>
  );
}
