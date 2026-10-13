import { useState } from 'react'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { categories, imageUrl } from '../../data'
import { sx } from '../../sxStyles.js'

const heroPromos = [
  {
    eyebrow: 'PREFER CUSTOMER 2025',
    title: 'Winter Collection',
    action: 'Shop Now',
    image: 'photo-1483985988355-763728e1935b',
    alt: 'Fashion models wearing the winter collection jackets',
  },
  {
    eyebrow: 'PREFER CUSTOMER 2025',
    title: 'Winter Collection',
    action: 'Shop Now',
    image: 'photo-1573855619003-97b4799dcd8b',
    alt: 'Happy shoppers holding colorful shopping bags',
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [categoryOpen, setCategoryOpen] = useState(null)
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  const isCategoryExpanded = categoryOpen ?? isDesktop

  // Use the exact carousel images from the design
  const carouselImage = activeSlide === 0 ? '/images/carousel-2.jpg' : '/images/carousel-1.jpg'

  return (
    <Box component="section" sx={sx('hero-section')} id="home">
      <Container maxWidth="lg" sx={sx('hero-container')}>
        {/* Left Column: Categories Menu */}
        <Box component="aside" sx={sx('category-sidebar')}>
          <Box component="button" type="button" sx={sx('category-header')} aria-expanded={isCategoryExpanded} aria-controls="hero-category-list" onClick={() => setCategoryOpen((open) => !(open ?? isDesktop))}>
            <Box component="span" sx={sx('category-header-text')}>Categories</Box>
            <KeyboardArrowDown sx={sx('category-chevron-black', isCategoryExpanded ? 'category-chevron-open' : 'category-chevron-closed')} />
          </Box>
          {isCategoryExpanded && (
            <Box component="nav" id="hero-category-list" sx={sx('category-list')}>
              {categories.map((category) => (
                <Box component="a"
                  sx={sx('category-item')}
                  href="#shop"
                  key={category}
                >
                  {category}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Right Column: Navbar + Hero Banner + 2 Promo Banners */}
        <Box component="div" sx={sx('hero-main-area')}>
          {/* Desktop Navigation Row */}
          <Box component="div" sx={sx('desktop-navbar')}>
            <Box component="nav" sx={sx('nav-menu')}>
              {/* Home link: No underline, reddish/coral text color */}
              <Box component="a" href="#home" sx={sx('nav-link', 'nav-link-home')}>
                Home
              </Box>
              <Box component="a" href="#shop" sx={sx('nav-link')}>Shop</Box>
              <Box component="a" href="#shop" sx={sx('nav-link')}>Shop Detail</Box>
              <Box component="a" href="#pages" sx={sx('nav-link', 'nav-dropdown')}>
                Pages <KeyboardArrowDown sx={sx('nav-arrow')} />
              </Box>
              <Box component="a" href="#contact" sx={sx('nav-link')}>Contact</Box>
            </Box>
            <Box component="div" sx={sx('nav-auth')}>
              <Box component="a" href="#login" sx={sx('auth-link')}>Login</Box>
              <Box component="a" href="#register" sx={sx('auth-link')}>Register</Box>
            </Box>
          </Box>

          {/* Big Hero Banner Slider */}
          <Box component="div" sx={sx('hero-banner-slider')}>
            <Box component="img"
              src={carouselImage}
              alt="Two women in an elegant fashion campaign"
              sx={sx('hero-bg-img')}
            />
            <Box component="div" sx={sx('hero-overlay')} />
            
            {/* Perfectly Centered Content (Chữ nằm giữa hình) */}
            <Box component="div" sx={sx('hero-content')}>
              <Box component="span" sx={sx('hero-kicker')}>10% OFF YOUR FIRST ORDER</Box>
              <Typography component="h1" sx={sx('hero-title')}>
                Reasonable Price
              </Typography>
              <Button
                variant="contained"
                sx={sx('hero-shop-btn')}
                href="#shop"
              >
                Shop Now
              </Button>
            </Box>

            {/* Slider Navigation Arrows */}
            <IconButton
              sx={sx('hero-arrow-btn', 'hero-arrow-prev')}
              aria-label="Previous slide"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              sx={sx('hero-arrow-btn', 'hero-arrow-next')}
              aria-label="Next slide"
              onClick={() => setActiveSlide((prev) => (prev === 1 ? 0 : 1))}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          {/* 2 Promo Banners: Placed directly on the right side, sharing exact width with big banner */}
          <Box component="div" sx={sx('hero-promos-row')}>
            {heroPromos.map((promo, index) => (
              <Box component="div" sx={sx('hero-promo-card')} key={index}>
                <Box component="img"
                  src={imageUrl(promo.image, 900)}
                  alt={promo.alt}
                  sx={sx('hero-promo-img')}
                  loading="lazy"
                />
                <Box component="div" sx={sx('hero-promo-overlay')} />
                <Box component="div" sx={sx('hero-promo-content')}>
                  <Box component="span" sx={sx('hero-promo-eyebrow')}>{promo.eyebrow}</Box>
                  <Box component="h3" sx={sx('hero-promo-title')}>{promo.title}</Box>
                  <Box component="a" href="#shop" sx={sx('hero-promo-btn')}>
                    {promo.action}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
