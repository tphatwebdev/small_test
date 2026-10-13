import { Box, Container} from '@mui/material'
import SectionBadge from './SectionBadge'
import { awardItems } from '../../data'
import { sx } from '../../sxStyles.js'

export default function AwardSection() {
  return (
    <Box component="section" sx={sx('award-section')}>
      <Container maxWidth="lg">
        {/* Centered Pill Badge */}
        <SectionBadge title="Award And Recognition" badgeSx={sx('popular-products-badge')} />

        {/* Devices Highlight Banner */}
        <Box component="div" sx={sx('devices-showcase-banner')}>
          {/* Left: Device Lineup Illustration / SVG */}
          <Box component="div" sx={sx('devices-visual')}>
            <Box component="svg"
              sx={sx('devices-svg')}
              viewBox="0 0 280 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Device 1: Galvanic Spa */}
              <g transform="translate(20, 10)">
                <rect x="10" y="15" width="22" height="75" rx="11" fill="url(#devGrad1)" stroke="#d1d5db" strokeWidth="1.5" />
                <ellipse cx="21" cy="22" rx="7" ry="5" fill="#9ca3af" />
                <rect x="18" y="45" width="6" height="15" rx="3" fill="#6b7280" />
              </g>

              {/* Device 2: LumiSpa iO */}
              <g transform="translate(75, 5)">
                <path
                  d="M18 10 C10 10 6 20 8 35 L12 85 C13 92 18 95 24 95 C30 95 35 92 36 85 L40 35 C42 20 38 10 30 10 Z"
                  fill="url(#devGrad2)"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                />
                {/* Silicone Head (Cyan accent) */}
                <ellipse cx="24" cy="18" rx="11" ry="8" fill="#0ea5e9" opacity="0.85" />
                <circle cx="24" cy="18" r="5" fill="#38bdf8" />
                <circle cx="24" cy="55" r="4" fill="#0284c7" />
              </g>

              {/* Device 3: ageLOC Boost */}
              <g transform="translate(145, 8)">
                <rect x="12" y="10" width="24" height="82" rx="12" fill="url(#devGrad1)" stroke="#d1d5db" strokeWidth="1.5" />
                <ellipse cx="24" cy="18" rx="9" ry="6" fill="#f59e0b" opacity="0.8" />
                <rect x="22" y="48" width="4" height="12" rx="2" fill="#cbd5e1" />
              </g>

              {/* Device 4: LumiSpa Accent */}
              <g transform="translate(210, 15)">
                <path
                  d="M15 15 C8 15 5 22 7 35 L10 75 C11 82 16 85 22 85 C28 85 33 82 34 75 L37 35 C39 22 36 15 29 15 Z"
                  fill="url(#devGrad2)"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                />
                <circle cx="22" cy="22" r="8" fill="#06b6d4" />
                <circle cx="22" cy="52" r="3.5" fill="#94a3b8" />
              </g>

              <defs>
                <linearGradient id="devGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="devGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>
            </Box>
          </Box>

          {/* Right: World's #1 Brand Copy */}
          <Box component="div" sx={[sx('devices-copy'), {
            textAlign: 'center',
            flex: '0 0 40%',
            maxWidth: '40%',
            '@media (max-width: 640px)': { flexBasis: '100%', maxWidth: '100%' },
          }]}>
            <Box component="span" sx={[sx('devices-kicker'), { fontSize: '25px', color: 'var(--text-dark)' }]}>WORD'S#1 COMPANY FOR</Box>
            <Box component="h3" sx={sx('devices-title')}>Beauty &amp; Wellness Device Systems</Box>
            <Box component="small" sx={[sx('devices-source'), { fontSize: '17px', color: 'var(--text-dark)' }]}>Source: Euromonitor</Box>
          </Box>
        </Box>

        {/* 6 Circular Awards Seals */}
        <Box component="div" sx={sx('awards-grid')}>
          {awardItems.map((item) => (
            <Box component="div" sx={sx('award-card')} key={item.id}>
              {/* Circular Seal Emblem */}
              <Box component="div" sx={[sx('award-seal-circle'), { borderColor: item.color }]}>
                <Box component="svg" viewBox="0 0 80 80" sx={sx('award-seal-svg')}>
                  <circle cx="40" cy="40" r="36" fill="none" stroke={item.color} strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="40" cy="40" r="32" fill={item.color} fillOpacity="0.08" />
                  {/* Inner text or laurel wreath */}
                  <path
                    d="M30 46 C25 40 25 32 32 26 C33 28 33 32 30 35 M50 46 C55 40 55 32 48 26 C47 28 47 32 50 35"
                    stroke={item.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <text
                    x="40"
                    y="43"
                    textAnchor="middle"
                    fill={item.color}
                    fontSize="15"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    AWARD
                  </text>
                  <text
                    x="40"
                    y="53"
                    textAnchor="middle"
                    fill={item.color}
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    WINNER
                  </text>
                </Box>
              </Box>

              {/* Award Labels */}
              <Box component="div" sx={sx('award-info')}>
                <Box component="strong" sx={sx('award-name')}>{item.award}</Box>
                <Box component="span" sx={sx('award-product')}>{item.product}</Box>
                <Box component="span" sx={sx('award-cat')}>{item.category}</Box>
                {item.year && <Box component="small" sx={sx('award-year')}>{item.year}</Box>}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
