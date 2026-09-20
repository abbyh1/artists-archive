export const c = {
  bg: '#F7F2E8',
  surface: '#DED6C7',
  surfaceAlt: '#D5CCBB',
  surfaceDeep: '#CDC4B2',
  text: '#292620',
  textSoft: '#40392F',
  muted: '#746D61',
  mutedOnSurface: '#5C544A',
  border: '#BDB3A3',
  accent: '#7A563C',
  accentHover: '#5C3F2A',
  field: '#FBF7EE',
};

export const f = {
  display: "'Playfair Display', serif",
  mono: "'Space Mono', monospace",
};

export const MEDIUM_LABEL = {
  music: 'Music',
  illustration: 'Illustration',
  writing: 'Writing',
  photo: 'Photography',
};

export const BARS = [12, 20, 30, 16, 26, 36, 18, 28, 14, 24, 34, 20, 26, 16];

/**
 * Shape system — shape carries meaning, not decoration.
 *   arch   → finished work
 *   square → work in progress
 *   circle → artist (avatars only)
 *   grid   → a collection / set
 */
export const shape = (finished) => ({
  card: finished ? '190px 190px 10px 10px' : '10px',
  inner: finished ? '120px 120px 4px 4px' : '4px',
  media: finished ? '240px 240px 10px 10px' : '10px',
  titlePad: finished ? 14 : 2,
});

export const monoLabel = {
  fontFamily: f.mono,
  fontSize: 10,
  letterSpacing: 1.5,
  color: c.muted,
  paddingBottom: 8,
  borderBottom: `1px solid ${c.border}`,
  marginBottom: 14,
};

export const pillPrimary = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 12,
  background: c.accent,
  color: c.bg,
  padding: '13px 26px',
  borderRadius: 999,
  fontFamily: f.mono,
  fontSize: 11,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  cursor: 'pointer',
  border: 'none',
};

export const backLink = {
  fontSize: 12,
  color: c.muted,
  cursor: 'pointer',
  marginBottom: 34,
};
