import React from 'react';
import { c, f } from '../theme.js';

/** The arch mark — the same shape the UI uses for finished work. */
export default function Logo({ onClick }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer' }}>
      <div
        style={{
          width: 24,
          height: 28,
          borderRadius: '12px 12px 3px 3px',
          border: `1.5px solid ${c.text}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontFamily: f.mono, fontSize: 9, letterSpacing: 0.5, color: c.text, paddingTop: 4 }}>a·a</span>
      </div>
      <span style={{ fontFamily: f.display, fontSize: 17, fontWeight: 500, letterSpacing: 0.2, color: c.text }}>
        artist's archive
      </span>
    </div>
  );
}
