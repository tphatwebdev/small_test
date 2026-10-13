import { useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  InputBase,
} from '@mui/material'
import SearchRounded from '@mui/icons-material/SearchRounded'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Favorite from '@mui/icons-material/Favorite'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Instagram from '@mui/icons-material/Instagram'
import YouTube from '@mui/icons-material/YouTube'
import MenuRounded from '@mui/icons-material/MenuRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'
import { sx } from '../../sxStyles.js'

export default function Header({ cartCount, onSearch }) {
  const [query, setQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleSearch(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <Box component="header" sx={sx('site-header')}>
      {/* Top Utility Bar */}
      <Box sx={sx('utility-bar')}>
        <Container maxWidth="lg" sx={sx('utility-inner')}>
          <Box component="div" sx={sx('utility-links')}>
            <Box component="a" href="#faqs">FAQs</Box>
            <Box component="span" sx={sx('utility-sep')}>|</Box>
            <Box component="a" href="#help">Help</Box>
            <Box component="span" sx={sx('utility-sep')}>|</Box>
            <Box component="a" href="#support">Support</Box>
          </Box>
          <Box component="div" sx={sx('utility-social')}>
            <Box component="a" href="#facebook" aria-label="Facebook"><Facebook fontSize="inherit" /></Box>
            <Box component="a" href="#twitter" aria-label="Twitter"><Twitter fontSize="inherit" /></Box>
            <Box component="a" href="#linkedin" aria-label="LinkedIn"><LinkedIn fontSize="inherit" /></Box>
            <Box component="a" href="#instagram" aria-label="Instagram"><Instagram fontSize="inherit" /></Box>
            <Box component="a" href="#youtube" aria-label="YouTube"><YouTube fontSize="inherit" /></Box>
          </Box>
        </Container>
      </Box>

      {/* Main Bar with Search aligned to Home */}
      <Box component="div" sx={sx('main-header-row')}>
        <Container maxWidth="lg" sx={sx('header-container-aligned')}>
          {/* Left spacer perfectly matching Category Sidebar (250px) */}
          <Box component="div" sx={sx('header-left-spacer')} />

          {/* Right area aligned with 'Home' and hero column */}
          <Box component="div" sx={sx('header-search-and-actions')}>
            <Box component="form" onSubmit={handleSearch} sx={sx('search-form-aligned')}>
              <InputBase
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for products"
                inputProps={{ 'aria-label': 'Search products' }}
                sx={sx('search-input-field')}
              />
              <IconButton type="submit" aria-label="Search" sx={sx('search-submit-btn')}>
                <SearchRounded />
              </IconButton>
            </Box>

            <Box component="div" sx={sx('header-action-boxes')}>
              <Box component="a" href="#favorites" sx={sx('action-bordered-box')} aria-label="Favorites">
                <Favorite sx={sx('action-icon-purple')} />
                <Box component="span" sx={sx('action-count-text')}>0</Box>
              </Box>
              <Box component="a" href="#cart" sx={sx('action-bordered-box')} aria-label={`Cart, ${cartCount} items`}>
                <ShoppingCart sx={sx('action-icon-purple')} />
                <Box component="span" sx={sx('action-count-text')}>{cartCount}</Box>
              </Box>
              <IconButton
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                onClick={() => setMobileMenuOpen((open) => !open)}
                sx={sx('mobile-menu-toggle')}
              >
                {mobileMenuOpen ? <CloseRounded /> : <MenuRounded />}
              </IconButton>
            </Box>
          </Box>
        </Container>
        {mobileMenuOpen && (
          <Box component="nav" id="mobile-navigation-menu" aria-label="Main navigation" sx={sx('mobile-menu-panel')}>
            <Container maxWidth="lg" sx={sx('mobile-menu-container')}>
              <Box component="div" sx={sx('mobile-menu-links')}>
                {[
                  ['Home', '#home'],
                  ['Shop', '#shop'],
                  ['Shop Detail', '#shop'],
                  ['Pages', '#pages'],
                  ['Contact', '#contact'],
                  ['Login', '#login'],
                  ['Register', '#register'],
                ].map(([label, href]) => <Box component="a" href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</Box>)}
              </Box>
              <Box component="div" sx={sx('mobile-menu-social')} aria-label="Social media">
                <Box component="a" href="#facebook" aria-label="Facebook"><Facebook fontSize="inherit" /></Box>
                <Box component="a" href="#twitter" aria-label="Twitter"><Twitter fontSize="inherit" /></Box>
                <Box component="a" href="#linkedin" aria-label="LinkedIn"><LinkedIn fontSize="inherit" /></Box>
                <Box component="a" href="#instagram" aria-label="Instagram"><Instagram fontSize="inherit" /></Box>
                <Box component="a" href="#youtube" aria-label="YouTube"><YouTube fontSize="inherit" /></Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Box>
  )
}
