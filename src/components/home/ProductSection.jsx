import { useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';
import SectionBadge from './SectionBadge';
import ProductCard from './ProductCard';
import { popularProducts } from '../../data';
import { sx } from '../../sxStyles.js';

export default function ProductSection({ onAdd }) {
  const [activeTab, setActiveTab] = useState('top_rated');
  const [activeDot, setActiveDot] = useState(0);

  // Show a 3-card window and advance it by one product per slider step.
  const visibleProducts = Array.from(
    { length: Math.min(3, popularProducts.length) },
    (_, offset) =>
      popularProducts[(activeDot + offset) % popularProducts.length],
  );

  return (
    <Box component="section" sx={sx('popular-products-section')} id="shop">
      <Container maxWidth="lg">
        {/* Centered Pill Badge */}
        <SectionBadge
          title="Most Popular Products"
          badgeSx={sx('popular-products-badge')}
        />

        <Box component="div" sx={sx('popular-products-layout')}>
          {/* Left Feature Card: Radiating Rays */}
          <Box component="div" sx={sx('popular-left-feature')}>
            {/* Emerald/Mint Sunburst Radiating Rays SVG Background */}
            <Box
              component="svg"
              sx={sx('sunburst-rays')}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="100"
                y1="20"
                x2="100"
                y2="60"
                stroke="#2bb69a"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="160"
                y1="40"
                x2="130"
                y2="70"
                stroke="#2bb69a"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="180"
                y1="100"
                x2="140"
                y2="100"
                stroke="#2bb69a"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="160"
                y1="160"
                x2="130"
                y2="130"
                stroke="#2bb69a"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="100"
                x2="65"
                y2="100"
                stroke="#2bb69a"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <line
                x1="45"
                y1="150"
                x2="75"
                y2="125"
                stroke="#2bb69a"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <line
                x1="50"
                y1="50"
                x2="75"
                y2="75"
                stroke="#2bb69a"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </Box>

            <Box component="div" sx={sx('feature-text-content')}>
              <Box component="h3" sx={sx('feature-heading')}>
                Find out
                <br />
                what
                <br />
                everyone's
                <br />
                talking
                <br />
                about
              </Box>
              <Box component="a" href="#shop" sx={sx('feature-link')}>
                Browse our best
              </Box>
            </Box>
          </Box>

          {/* Right Product Slider Card */}
          <Box component="div" sx={sx('popular-right-showcase')}>
            {/* Header Tabs */}
            <Box component="div" sx={sx('showcase-tabs-header')}>
              <Box component="div" sx={sx('tabs-list')}>
                <Box
                  component="button"
                  type="button"
                  sx={sx('tab-btn', activeTab === 'top_rated' && 'active')}
                  onClick={() => setActiveTab('top_rated')}
                >
                  DESCRIPTION
                </Box>
                <Box
                  component="button"
                  type="button"
                  sx={sx('tab-btn', activeTab === 'best_seller' && 'active')}
                  onClick={() => setActiveTab('best_seller')}
                >
                  SPECIFICATIONS
                </Box>
              </Box>
            </Box>

            <Box component="div" sx={sx('showcase-view-all-row')}>
              <Box component="a" href="#shop" sx={sx('see-all-link')}>
                VIEW ALL &gt;&gt;
              </Box>
            </Box>

            {/* Products Grid / Row */}
            <Box component="div" sx={sx('showcase-products-track')}>
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} />
              ))}

              {/* Slider Next Arrow */}
              <IconButton
                sx={sx('showcase-arrow-btn')}
                aria-label="Next products"
                onClick={() =>
                  setActiveDot((prev) => (prev + 1) % popularProducts.length)
                }
              >
                <ChevronRight />
              </IconButton>
            </Box>

            {/* Pagination Dots */}
            <Box component="div" sx={sx('showcase-dots')}>
              {popularProducts.map((product, dot) => (
                <Box
                  component="button"
                  key={product.id}
                  type="button"
                  sx={sx('dot-indicator', activeDot === dot && 'active')}
                  onClick={() => setActiveDot(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
