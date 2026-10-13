import { Box, Typography } from '@mui/material';
import { sx } from '../../sxStyles.js';

export default function SectionBadge({ title, badgeSx }) {
  return (
    <Box sx={sx('section-badge-container')}>
      <Typography component="h2" sx={[sx('section-badge-pill'), badgeSx]}>
        <Box component="span" sx={sx('badge-dash')}>
          -
        </Box>
        <Box component="span" sx={sx('badge-text')}>
          {title}
        </Box>
        <Box component="span" sx={sx('badge-dash')}>
          -
        </Box>
      </Typography>
    </Box>
  );
}
