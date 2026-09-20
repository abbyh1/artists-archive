import React from 'react';
import { c, f } from '../theme.js';

const row = { display: 'flex', alignItems: 'center', gap: 7 };
const swatch = { border: `1px solid #8A8072`, display: 'inline-block' };

export default function ShapeKey() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: '0 44px 42px',
        fontFamily: f.mono,
        fontSize: 9,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: c.mutedOnSurface,
      }}
    >
      <div style={row}>
        <span style={{ ...swatch, width: 13, height: 15, borderRadius: '7px 7px 2px 2px' }} />
        finished
      </div>
      <div style={row}>
        <span style={{ ...swatch, width: 14, height: 14, borderRadius: 3 }} />
        in progress
      </div>
    </div>
  );
}
