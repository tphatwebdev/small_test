import { Box, Container, Typography } from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { imageUrl } from '../../data';
import SectionTitle from './SectionTitle';
import { sx } from '../../sxStyles.js';

const impactStats = [
  { value: '40', suffix: '+', label: 'years of doing good' },
  { value: '50', suffix: '+', label: 'markets around the world' },
  { value: '1.2', suffix: 'M', label: 'hours given to communities' },
  { value: '1', suffix: '%', label: 'for a better tomorrow' },
];

export default function ImpactSection() {
  return (
    <Box component="section" sx={sx('impact-section')}>
      <Container maxWidth="xl">
        <SectionTitle overline="GOOD THINGS, GROWING">
          Beauty with a bigger purpose
        </SectionTitle>
        <Box sx={sx('impact-banner')}>
          <img
            src={imageUrl('photo-1542810634-71277d95dcbb', 1400)}
            alt="Community members sharing a meal"
          />
          <Box>
            <small>OUR IMPACT, TOGETHER</small>
            <Typography component="h3">
              A brighter future starts with all of us.
            </Typography>
            <p>
              Through everyday acts of good, we support stronger communities and
              a healthier future for generations to come.
            </p>
            <a href="#story">
              See what we're doing <ArrowForwardRounded fontSize="small" />
            </a>
          </Box>
        </Box>
        <Box sx={sx('impact-stats')}>
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <strong>
                {stat.value}
                <span>{stat.suffix}</span>
              </strong>
              <small>{stat.label}</small>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
