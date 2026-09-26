import React from 'react';
import { useNavigate } from 'react-router-dom';
import { c, f, backLink } from '../theme.js';

const fieldLabel = {
  fontFamily: f.mono,
  fontSize: 10,
  letterSpacing: 1.5,
  color: c.muted,
  marginBottom: 10,
};

const input = {
  width: '100%',
  boxSizing: 'border-box',
  border: `1px solid ${c.border}`,
  borderRadius: 6,
  background: c.field,
  fontFamily: f.display,
  fontSize: 14,
  padding: 12,
  color: c.text,
  outline: 'none',
  marginBottom: 26,
};

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: '56px 44px 110px' }}>
      <div onClick={() => navigate('/')} style={{ ...backLink, marginBottom: 32 }}>← archive</div>

      <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>welcome back</div>
      <div style={{ fontSize: 14, color: c.muted, marginBottom: 34 }}>
        authentication isn't wired up yet — this is a placeholder for the log-in form.
      </div>

      <div style={fieldLabel}>EMAIL</div>
      <input type="email" placeholder="you@example.com" style={input} disabled />

      <div style={fieldLabel}>PASSWORD</div>
      <input type="password" placeholder="••••••••" style={input} disabled />

      <div style={{ fontSize: 13, color: c.muted }}>
        new here? <span onClick={() => navigate('/signup')} style={{ color: c.accent, cursor: 'pointer' }}>create an account</span>
      </div>
    </div>
  );
}
