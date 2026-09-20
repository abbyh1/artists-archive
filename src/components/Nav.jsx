import React from 'react';
import { c } from '../theme.js';
import Logo from './Logo.jsx';

const item = (active) => ({
  fontSize: 14,
  cursor: 'pointer',
  paddingBottom: 3,
  color: active ? c.accent : c.muted,
  borderBottom: active ? `1px solid ${c.accent}` : '1px solid transparent',
});

export default function Nav({ screen, onNavigate }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 44px',
        background: c.bg,
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <Logo onClick={() => onNavigate('home')} />
      <div style={{ display: 'flex', gap: 34 }}>
        <div onClick={() => onNavigate('home')} style={item(screen === 'home')}>explore</div>
        <div onClick={() => onNavigate('upload')} style={item(screen === 'upload')}>upload</div>
        <div onClick={() => onNavigate('profile')} style={item(screen === 'profile')}>profile</div>
      </div>
    </div>
  );
}
