import { Box, Button } from '@mui/material';
import { imageUrl } from '../../data';
import { sx } from '../../sxStyles.js';

export default function ProductCard({ product, onAdd }) {
  return (
    <Box component="div" sx={sx('figma-product-card')}>
      <Box component="div" sx={sx('product-thumb-container')}>
        {/* Top-Left Tag (SALE / NEW) */}
        {product.tag && (
          <Box component="span" sx={sx('product-tag-pill')}>
            {product.tag}
          </Box>
        )}

        {/* Top-Right Circular Seal / Badge */}
        <Box
          component="div"
          sx={[sx('product-seal-badge'), { borderColor: product.badgeColor }]}
        >
          <Box component="svg" viewBox="0 0 40 40" sx={sx('seal-starburst')}>
            <circle cx="20" cy="20" r="18" fill={product.badgeColor} />
            <path
              d="M20 5 L22 13 L30 10 L25 17 L32 22 L24 24 L27 32 L20 27 L13 32 L16 24 L8 22 L15 17 L10 10 L18 13 Z"
              fill="#fff"
              opacity="0.3"
            />
          </Box>
          <Box component="span" sx={sx('seal-text')}>
            {product.badgeText}
          </Box>
        </Box>

        {/* Product Image */}
        <Box
          component="img"
          src={imageUrl(product.image, 500)}
          alt={product.name}
          sx={sx('product-main-img')}
          loading="lazy"
        />
      </Box>

      <Box component="div" sx={sx('product-details')}>
        <Box component="span" sx={sx('product-category-label')}>
          {product.category}
        </Box>
        <Box component="h4" sx={sx('product-heading')}>
          {product.name}
        </Box>

        {/* Price Row */}
        <Box component="div" sx={sx('product-price-row')}>
          <Box component="span" sx={sx('price-current')}>
            ${product.price.toFixed(2)}
          </Box>
          {product.oldPrice && (
            <Box component="span" sx={sx('price-old')}>
              ${product.oldPrice.toFixed(2)}
            </Box>
          )}
        </Box>

        {/* Purple Add to Cart Button */}
        <Button
          variant="contained"
          sx={sx('product-add-btn')}
          onClick={() => onAdd(product)}
          fullWidth
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
