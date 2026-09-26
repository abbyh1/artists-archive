import React from 'react';
import { useNavigate } from 'react-router-dom';
import { c, f, pillPrimary } from '../theme.js';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 620, margin: '0 auto', padding: '120px 44px 140px', textAlign: 'center' }}>
      <div style={{ fontFamily: f.mono, fontSize: 12, letterSpacing: 1.5, color: c.muted, marginBottom: 14 }}>404</div>
      <div style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>nothing unfinished here</div>
      <div style={{ fontSize: 14, color: c.muted, marginBottom: 38 }}>
        the page you're looking for doesn't exist, or hasn't been started yet.
      </div>
      <div onClick={() => navigate('/')} style={{ ...pillPrimary, display: 'inline-flex' }}>back to archive <span>→</span></div>
    </div>
  );
}
