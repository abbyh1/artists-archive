import React from 'react';
import { useNavigate } from 'react-router-dom';
import { c, backLink } from '../theme.js';

export default function ProfileSettings() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 620, margin: '0 auto', padding: '36px 44px 110px' }}>
      <div onClick={() => navigate('/')} style={{ ...backLink, marginBottom: 32 }}>← archive</div>

      <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>profile settings</div>
      <div style={{ fontSize: 14, color: c.muted }}>
        editing your display name, bio, and avatar isn't wired up yet — this page will manage your profile once accounts exist.
      </div>
    </div>
  );
}
