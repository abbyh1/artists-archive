import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { c } from '../theme.js';
import Logo from './Logo.jsx';

const item = (active) => ({
  fontSize: 14,
  cursor: 'pointer',
  paddingBottom: 3,
  textDecoration: 'none',
  color: active ? c.accent : c.muted,
  borderBottom: active ? `1px solid ${c.accent}` : '1px solid transparent',
});

export default function Nav() {
  const { pathname } = useLocation();

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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
      <div style={{ display: 'flex', gap: 34 }}>
        <Link to="/" style={item(pathname === '/')}>explore</Link>
        <Link to="/create" style={item(pathname === '/create')}>upload</Link>
        <Link to="/profile/abby" style={item(pathname.startsWith('/profile'))}>profile</Link>
      </div>
    </div>
  );
}
