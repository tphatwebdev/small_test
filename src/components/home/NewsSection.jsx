import { useState } from 'react';
import { Box, Container } from '@mui/material';
import SectionBadge from './SectionBadge';
import { imageUrl, newsArticles } from '../../data';
import { sx } from '../../sxStyles.js';

export default function NewsSection() {
  const [activeDot, setActiveDot] = useState(0);
  const maxStartIndex = Math.max(0, newsArticles.length - 3);
  const moveCarousel = (direction) => {
    setActiveDot((current) =>
      Math.max(0, Math.min(maxStartIndex, current + direction)),
    );
  };

  return (
    <Box component="section" sx={sx('news-section')} id="journal">
      <Container maxWidth="lg">
        {/* Centered Pill Badge */}
        <SectionBadge
          title="Nu Skin In The News"
          badgeSx={sx('popular-products-badge')}
        />

        <Box component="div" sx={sx('news-section-layout')}>
          {/* Left Column: Carousel of News Cards */}
          <Box component="div" sx={sx('news-carousel-area')}>
            {/* Read More Link on top right */}
            <Box component="div" sx={sx('news-top-bar')}>
              <Box component="a" href="#news" sx={sx('read-more-link')}>
                Read More &gt;
              </Box>
            </Box>

            {/* News Cards Carousel Track */}
            <Box component="div" sx={sx('news-carousel')}>
              <Box
                component="button"
                type="button"
                sx={sx('news-carousel-control', activeDot === 0 && 'disabled')}
                onClick={() => moveCarousel(-1)}
                disabled={activeDot === 0}
                aria-label="Previous news articles"
              >
                ‹
              </Box>
              <Box component="div" sx={sx('news-cards-viewport')}>
                <Box
                  component="div"
                  sx={[
                    sx('news-cards-track'),
                    {
                      transform: `translateX(-${activeDot * 196}px)`,
                    },
                  ]}
                >
                  {newsArticles.map((article) => (
                    <Box
                      component="article"
                      sx={sx('news-card')}
                      key={article.id}
                    >
                      <Box component="div" sx={sx('news-card-thumb')}>
                        <Box
                          component="img"
                          src={imageUrl(article.image, 600)}
                          alt={article.alt}
                          sx={sx('news-card-img')}
                          loading="lazy"
                        />
                      </Box>
                      <Box component="div" sx={sx('news-card-body')}>
                        <Box component="h4" sx={sx('news-card-title')}>
                          {article.title}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                component="button"
                type="button"
                sx={sx(
                  'news-carousel-control',
                  activeDot === maxStartIndex && 'disabled',
                )}
                onClick={() => moveCarousel(1)}
                disabled={activeDot === maxStartIndex}
                aria-label="Next news articles"
              >
                ›
              </Box>
            </Box>

            {/* Carousel Dots */}
            <Box component="div" sx={sx('news-dots-row')}>
              {Array.from({ length: maxStartIndex + 1 }, (_, dot) => (
                <Box
                  component="button"
                  key={dot}
                  type="button"
                  sx={sx('news-dot', activeDot === dot && 'active')}
                  onClick={() => setActiveDot(dot)}
                  aria-label={`Go to news page ${dot + 1}`}
                />
              ))}
            </Box>
          </Box>

          {/* Right Column: Tall Lifestyle Feature Card */}
          <Box component="div" sx={sx('news-tall-feature-card')}>
            <Box
              component="img"
              src="/images/carousel-2.jpg"
              alt="Woman touching skin with beauty products on table"
              sx={sx('tall-feature-img')}
              loading="lazy"
            />
            <Box component="div" sx={sx('tall-feature-overlay')} />
            <Box component="div" sx={sx('tall-feature-text')}>
              <Box component="span" sx={sx('tall-feature-heading')}>
                News
              </Box>
              <Box component="a" href="#news" sx={sx('tall-feature-cta')}>
                SEE WHAT'S NEW
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
