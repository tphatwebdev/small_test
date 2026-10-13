import HeroSection from '../components/home/HeroSection';
import { Box } from '@mui/material';
import ProductSection from '../components/home/ProductSection';
import FeatureSection from '../components/home/FeatureSection';
import AwardSection from '../components/home/AwardSection';
import WaySection from '../components/home/WaySection';
import NewsSection from '../components/home/NewsSection';
import { sx } from '../sxStyles.js';

export default function HomePage({ onAdd }) {
  return (
    <Box component="main" id="home" sx={sx('home-main-content')}>
      <HeroSection />
      <ProductSection onAdd={onAdd} />
      <FeatureSection />
      <AwardSection />
      <WaySection />
      <NewsSection />
    </Box>
  );
}
