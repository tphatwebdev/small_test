import { Box, Button, Container} from '@mui/material'
import { imageUrl } from '../../data'
import { sx } from '../../sxStyles.js'

export default function FeatureSection() {
  return (
    <Box component="section" sx={sx('lumispa-feature-section')}>
      <Container maxWidth="lg" sx={sx('lumispa-container')}>
        {/* Left Side: Photo with Circular Purple Badge */}
        <Box component="div" sx={sx('lumispa-visual')}>
          <Box component="div" sx={sx('lumispa-img-wrapper')}>
            <Box component="img"
              src={imageUrl('photo-1570172619644-dfd03ed5d881', 1000)}
              alt="Woman touching skin with gentle radiance and beauty device glow"
              sx={sx('lumispa-photo')}
              loading="lazy"
            />
            {/* Circular Purple Badge: sale price */}
            <Box component="div" sx={sx('lumispa-floating-badge')}>
              <Box component="span">SALE OF</Box>
              <strong>$29.99</strong>
            </Box>
          </Box>
        </Box>

        {/* Right Side: Copy & Button */}
        <Box component="div" sx={sx('lumispa-content')}>
          <Box component="span" sx={sx('lumispa-eyebrow')}>AGELOC® LUMISPA® IO</Box>
          <Box component="h2" sx={sx('lumispa-title')}>ageLOC® LumiSpa® iO</Box>
          <Box component="p" sx={sx('lumispa-subtitle')}>
            Elevate your skincare routine.
          </Box>
          <Button
            variant="contained"
            sx={sx('lumispa-action-btn')}
            href="#shop"
          >
            SAVE NOW
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
