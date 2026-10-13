import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { navigate } from '../utils/navigation';
import { sx } from '../sxStyles.js';

export default function DetailPage({ initialText }) {
  const [searchText, setSearchText] = useState(initialText);

  return (
    <Box component="main" sx={sx('detail-main')}>
      <Container maxWidth="lg">
        <Box sx={sx('breadcrumbs')}>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate('/');
            }}
          >
            Home
          </a>
          <span>/</span>
          <span>Search detail</span>
        </Box>
        <Paper sx={sx('detail-card')} elevation={0}>
          <Box sx={sx('detail-eyebrow')}>YOUR SEARCH</Box>
          <Typography component="h1">Search detail</Typography>
          <Typography sx={sx('detail-description')}>
            The words you entered on the home page are shown below. You can edit
            them here too.
          </Typography>
          <TextField
            sx={sx('detail-textarea')}
            multiline
            minRows={7}
            fullWidth
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Your search will appear here…"
            inputProps={{ 'aria-label': 'Search detail content' }}
          />
          <Box sx={sx('detail-footer')}>
            <Typography>{searchText.length} characters</Typography>
            <Button sx={sx('button-purple')} onClick={() => navigate('/')}>
              Back to home <ArrowForwardRounded />
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
