import React from 'react';
import { c } from '../theme.js';

export default function Chip({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '7px 18px',
        fontSize: 13,
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'background 160ms ease, color 160ms ease',
        background: active ? c.accent : c.surface,
        color: active ? c.bg : c.text,
        border: `1px solid ${active ? c.accent : c.surface}`,
      }}
    >
      {label}
    </div>
  );
}
