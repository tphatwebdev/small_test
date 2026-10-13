import { Box, Typography } from '@mui/material';
import { sx } from '../../sxStyles.js';

export default function SectionTitle({ children, overline }) {
  return (
    <Box sx={sx('section-heading')}>
      {overline && (
        <Typography sx={sx('section-overline')}>{overline}</Typography>
      )}
      <Typography component="h2">{children}</Typography>
      <Box component="span" sx={sx('heading-rule')} />
    </Box>
  );
}
