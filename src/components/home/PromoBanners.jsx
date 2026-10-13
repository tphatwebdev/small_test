import { Box, Container } from '@mui/material';
import { imageUrl, promoBanners } from '../../data';
import { sx } from '../../sxStyles.js';

export default function PromoBanners() {
  return (
    <Box component="section" sx={sx('promo-banners-section')}>
      <Container maxWidth="lg" sx={sx('promo-grid-container')}>
        {promoBanners.map((banner) => (
          <Box component="div" sx={sx('promo-banner-card')} key={banner.title}>
            <Box
              component="img"
              src={imageUrl(banner.image, 900)}
              alt={banner.alt}
              sx={sx('promo-banner-img')}
              loading="lazy"
            />
            <Box component="div" sx={sx('promo-banner-overlay')} />
            <Box component="div" sx={sx('promo-banner-content')}>
              <Box component="span" sx={sx('promo-eyebrow')}>
                {banner.eyebrow}
              </Box>
              <Box component="h3" sx={sx('promo-title')}>
                {banner.title}
              </Box>
              <Box component="a" href="#shop" sx={sx('promo-action')}>
                {banner.action}
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
