import { Box, Container } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { sx } from '../../sxStyles.js';

const quickLinks = [
  'Home',
  'Our Story',
  'Shop Detail',
  'Shopping Cart',
  'Checkout',
  'Contact Us',
];

const categoryLinks = [
  'Home',
  'Our Story',
  'Shop Detail',
  'Shopping Cart',
  'Checkout',
  'Contact Us',
];

export default function Footer() {
  return (
    <Box component="footer" sx={sx('nuskin-footer')}>
      <Container maxWidth="lg" sx={sx('footer-container')}>
        <Box component="div" sx={sx('footer-columns-grid')}>
          {/* Column 1: Contact info */}
          <Box component="div" sx={sx('footer-col', 'footer-col-contact')}>
            <Box component="p" sx={sx('footer-intro-text')}>
              Get in touch with us and stay up to date with our latest news and
              offers.
            </Box>
            <Box component="ul" sx={sx('footer-contact-list')}>
              <li>
                <LocationOn sx={sx('contact-icon')} fontSize="small" />
                <Box component="span">75 W. Center Street - 1st Floor</Box>
              </li>
              <li>
                <Email sx={sx('contact-icon')} fontSize="small" />
                <Box component="span">support@nuskin.com</Box>
              </li>
              <li>
                <Phone sx={sx('contact-icon')} fontSize="small" />
                <Box component="span">+1 (800) 487-1000</Box>
              </li>
            </Box>
          </Box>

          {/* Column 2: Quick Links */}
          <Box
            component="div"
            sx={sx('footer-col', 'footer-col-links', 'footer-quick-links')}
          >
            <Box component="h4" sx={sx('footer-col-title')}>
              Quick Links
            </Box>
            <Box component="ul" sx={sx('footer-nav-list')}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    <ChevronRight sx={sx('link-chevron')} fontSize="small" />
                    <Box component="span">{link}</Box>
                  </a>
                </li>
              ))}
            </Box>
          </Box>

          {/* Column 3: Categories */}
          <Box component="div" sx={sx('footer-col', 'footer-col-links')}>
            <Box component="h4" sx={sx('footer-col-title')}>
              Categories
            </Box>
            <Box component="ul" sx={sx('footer-nav-list')}>
              {categoryLinks.map((cat) => (
                <li key={cat}>
                  <a href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}>
                    <ChevronRight sx={sx('link-chevron')} fontSize="small" />
                    <Box component="span">{cat}</Box>
                  </a>
                </li>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom Bar */}
        <Box component="div" sx={sx('footer-bottom-row')}>
          <Box component="p" sx={sx('copyright-text')}>
            © <strong>Tran Tien Phat</strong>. All Rights Reversed. Designed by
            HTML <strong>Codex</strong>
            <br />
            Distributed By ThemeWagon.
          </Box>

          {/* Payment Badges */}
          <Box component="div" sx={sx('payment-badges-row')}>
            <Box component="span" sx={sx('pay-badge', 'visa')}>
              VISA
            </Box>
            <Box component="span" sx={sx('pay-badge', 'mastercard')}>
              MC
            </Box>
            <Box component="span" sx={sx('pay-badge', 'maestro')}>
              Maestro
            </Box>
            <Box component="span" sx={sx('pay-badge', 'amex')}>
              AMEX
            </Box>
            <Box component="span" sx={sx('pay-badge', 'paypal')}>
              PayPal
            </Box>
            <Box component="span" sx={sx('pay-badge', 'applepay')}>
              Pay
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
