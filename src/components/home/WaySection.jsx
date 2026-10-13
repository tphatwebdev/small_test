import { Box, Container } from '@mui/material';
import SectionBadge from './SectionBadge';
import { imageUrl, wayStats } from '../../data';
import { sx } from '../../sxStyles.js';

export default function WaySection() {
  return (
    <Box component="section" sx={sx('nu-skin-way-section')}>
      <Container maxWidth="lg">
        {/* Centered Pill Badge */}
        <SectionBadge
          title="The Nu Skin Way"
          badgeSx={sx('popular-products-badge')}
        />

        {/* Brand Mission & Key Numbers Row */}
        <Box component="div" sx={sx('way-stats-header')}>
          <Box component="div" sx={sx('way-brand-headline')}>
            <Box component="h3" sx={sx('way-title-main')}>
              Nu Skin
            </Box>
            <Box component="p" sx={sx('way-subtitle')}>
              Improving Lives Everyday
            </Box>
          </Box>

          <Box component="div" sx={sx('way-numbers-grid')}>
            {wayStats.map((stat) => (
              <Box component="div" sx={sx('way-stat-col')} key={stat.label}>
                <Box component="span" sx={sx('stat-big-number')}>
                  {stat.value}
                </Box>
                <Box component="span" sx={sx('stat-col-desc')}>
                  {stat.label}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Two Story Feature Blocks */}
        <Box component="div" sx={sx('way-blocks-container')}>
          {/* Block 1: Force for Good */}
          <Box component="div" sx={sx('way-block', 'way-block-1')}>
            <Box component="div" sx={sx('way-image-wrapper')}>
              <Box
                component="img"
                src={imageUrl('photo-1488521787991-ed7bbaae773c', 900)}
                alt="Smiling children benefiting from the Nu Skin Force for Good Foundation"
                sx={sx('way-card-img')}
                loading="lazy"
              />
            </Box>
            <Box component="div" sx={sx('way-card-content')}>
              <Box component="h4" sx={sx('way-card-title')}>
                Being a Force for Good
              </Box>
              <Box component="p" sx={sx('way-card-text')}>
                Some call it corporate social responsibility. We call it our
                purpose. Together we're engaged in initiatives
                worldwide-nourishing thousands of hungry childen, funding
                pediatric health and wellness services, or striving for a more
                sustainable future. And sometimes, we're simply taking
                meaningful steps to improve our local communities. whatever we
                do, we believe changing the world begins with a single action.
              </Box>
              <Box component="a" href="#about" sx={sx('way-card-link')}>
                Explore our project
              </Box>
            </Box>
          </Box>

          {/* Block 2: Nature + Science */}
          <Box component="div" sx={sx('way-block', 'way-block-2')}>
            <Box component="div" sx={sx('way-card-content')}>
              <Box component="h4" sx={sx('way-card-title')}>
                Nature + Science
              </Box>
              <Box component="p" sx={sx('way-card-text')}>
                Capturing the best in nature to bring you the best results is
                our personal misson. We combine powerful ingredients with
                innovative science and technology. The result? World-class
                products that deliver real benefits. And even though we've spent
                more than 30 years researching aging at the generic level,
                Mother Nature continually inspires us to push the boundaries of
                inquiry and innovation. We bottle what's best and bring it right
                to your door.
              </Box>
              <Box component="a" href="#science" sx={sx('way-card-link')}>
                Discover more
              </Box>
            </Box>
            <Box component="div" sx={sx('way-image-wrapper')}>
              <Box
                component="img"
                src={imageUrl('photo-1617897903246-719242758050', 900)}
                alt="Pure botanical green leaf and clinical skincare bottle"
                sx={sx('way-card-img')}
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
