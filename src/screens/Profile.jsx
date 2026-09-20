import React, { useState } from 'react';
import { c, f } from '../theme.js';
import { PROJECTS, CONTINUED } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

const tab = (active) => ({
  padding: '7px 18px',
  borderRadius: 999,
  fontSize: 13,
  cursor: 'pointer',
  transition: 'background 160ms ease, color 160ms ease',
  background: active ? c.accent : c.surface,
  color: active ? c.bg : c.text,
  border: `1px solid ${active ? c.accent : c.surface}`,
});

export default function Profile({ onSelectProject }) {
  const [active, setActive] = useState('started');
  const cards = active === 'started' ? PROJECTS.filter((p) => p.creator === 'abby') : CONTINUED;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 44px 110px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 34 }}>
        {/* circle = artist, per the shape system */}
        <div style={{ width: 86, height: 86, borderRadius: '50%', background: c.surface, marginBottom: 18 }} />
        <div style={{ fontSize: 30, fontWeight: 600 }}>abby</div>
        <div style={{ fontSize: 13, color: c.muted, marginTop: 2 }}>collects unfinished songs</div>
        <div style={{ fontFamily: f.mono, fontSize: 10, letterSpacing: 1, color: c.muted, marginTop: 14 }}>
          12 ideas started · 8 ideas continued · 31 creations grew from their work
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
        <div onClick={() => setActive('started')} style={tab(active === 'started')}>started by me</div>
        <div onClick={() => setActive('continued')} style={tab(active === 'continued')}>continued by me</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 30 }}>
        {cards.map((p) => (
          <ProjectCard key={p.id} project={p} compact onClick={() => onSelectProject(p)} />
        ))}
      </div>
    </div>
  );
}
