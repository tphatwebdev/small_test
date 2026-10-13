import { Box, Container, Typography } from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { imageUrl } from '../../data';
import SectionTitle from './SectionTitle';
import { sx } from '../../sxStyles.js';

const articles = [
  {
    image: 'photo-1515377905703-c4788e51af15',
    title: 'The beauty of making time for you',
    category: 'WELLNESS · 5 MIN READ',
  },
  {
    image: 'photo-1608248543803-ba4f8c70ae0b',
    title: 'A simple routine, a softer start',
    category: 'SKINCARE · 4 MIN READ',
  },
  {
    image: 'photo-1524504388940-b1c1722653e1',
    title: 'Small rituals that feel like a reset',
    category: 'LIFESTYLE · 6 MIN READ',
  },
];

export default function JournalSection() {
  return (
    <Box component="section" sx={sx('journal-section')} id="journal">
      <Container maxWidth="xl">
        <SectionTitle overline="NOTES FROM THE NU SKIN WORLD">
          A little inspiration
        </SectionTitle>
        <Box sx={sx('journal-grid')}>
          {articles.map((article) => (
            <Box
              component="article"
              sx={sx('journal-card')}
              key={article.title}
            >
              <img src={imageUrl(article.image, 700)} alt="" loading="lazy" />
              <small>{article.category}</small>
              <Typography component="h3">{article.title}</Typography>
              <a href="#journal">
                Read the story <ArrowForwardRounded fontSize="small" />
              </a>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
