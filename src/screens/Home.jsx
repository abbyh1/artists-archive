import React from 'react';
import { c } from '../theme.js';
import { FILTER_TAGS } from '../data.js';
import Chip from '../components/Chip.jsx';
import ShapeKey from '../components/ShapeKey.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Home({ projects, filter, onFilter, onSelectProject }) {
  return (
    <>
      <div style={{ padding: '64px 44px 30px', textAlign: 'center' }}>
        <div style={{ fontSize: 54, fontWeight: 600, letterSpacing: -0.5, marginBottom: 18 }}>artist's archive</div>
        <div style={{ fontSize: 15, lineHeight: 1.8, color: c.muted }}>
          <div>unfinished work isn't failure.</div>
          <div style={{ fontStyle: 'italic' }}>it's an invitation.</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, padding: '0 44px 16px' }}>
        <Chip label="all" active={!filter} onClick={() => onFilter(null)} />
        {FILTER_TAGS.map((t) => (
          <Chip key={t} label={t} active={filter === t} onClick={() => onFilter(filter === t ? null : t)} />
        ))}
      </div>

      <ShapeKey />

      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '0 44px 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '34px 30px',
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => onSelectProject(p)} />
        ))}
      </div>
    </>
  );
}
