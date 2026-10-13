import { Box, Container, Typography } from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { imageUrl, stories } from '../../data';
import SectionTitle from './SectionTitle';
import { sx } from '../../sxStyles.js';

export default function StorySection() {
  return (
    <Box component="section" sx={sx('story-section')} id="story">
      <Container maxWidth="xl">
        <SectionTitle overline="A BETTER WAY, EVERY DAY">
          Rooted in care. Made for life.
        </SectionTitle>
        <Box sx={sx('story-grid')}>
          {stories.map((story, index) => (
            <Box
              component="article"
              sx={sx('story-card', `story-${index + 1}`)}
              key={story.title}
            >
              {index === 1 && (
                <img
                  src={imageUrl(story.image, 900)}
                  alt="Botanical ingredients and skincare"
                  loading="lazy"
                />
              )}
              <Box>
                <small>{story.eyebrow}</small>
                <Typography component="h3">{story.title}</Typography>
                <p>{story.text}</p>
                <a href="#story">
                  Discover more <ArrowForwardRounded fontSize="small" />
                </a>
              </Box>
              {index === 0 && (
                <img
                  src={imageUrl(story.image, 900)}
                  alt="People coming together in their community"
                  loading="lazy"
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
