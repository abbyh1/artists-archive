import React, { useState } from 'react';
import { c, f, MEDIUM_LABEL, BARS, shape } from '../theme.js';

function Preview({ project, sh }) {
  if (project.medium === 'music') {
    return (
      <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, paddingBottom: 10 }}>
        {BARS.map((h, i) => (
          <div key={i} style={{ width: 4, height: h, background: '#8A8072', borderRadius: 2 }} />
        ))}
      </div>
    );
  }

  if (project.medium === 'illustration') {
    return (
      <div
        style={{
          width: '100%',
          flex: 1,
          borderRadius: sh.inner,
          background: c.surfaceDeep,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontFamily: f.mono, fontSize: 9, letterSpacing: 1, color: c.mutedOnSurface }}>
          {project.finished ? 'finished' : 'in progress'}
        </span>
      </div>
    );
  }

  if (project.medium === 'writing') {
    return (
      <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 6px' }}>
        <div style={{ fontStyle: 'italic', fontSize: 13, lineHeight: 1.65, color: c.textSoft, textAlign: 'center' }}>
          "{project.opening}"
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, alignContent: 'center' }}>
      {[c.surfaceDeep, '#C3B9A5', '#C3B9A5', c.surfaceDeep].map((bg, i) => (
        <div key={i} style={{ aspectRatio: 1, background: bg, borderRadius: 3 }} />
      ))}
    </div>
  );
}

export default function ProjectCard({ project, onClick, compact = false }) {
  const [hot, setHot] = useState(false);
  const sh = shape(project.finished);
  const byline = project.originalCreator ? `continued from ${project.originalCreator}` : `by ${project.creator}`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        background: c.surface,
        padding: '26px 22px 22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: compact ? 224 : 262,
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        borderRadius: sh.card,
        transform: hot ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hot ? '0 10px 22px rgba(41,38,32,0.14)' : '0 0 0 rgba(41,38,32,0)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: compact ? 0 : 16, paddingTop: sh.titlePad }}>
        <div style={{ fontSize: compact ? 16 : 17, fontWeight: 600, lineHeight: 1.25 }}>{project.title}</div>
        <div style={{ fontSize: 11, color: c.mutedOnSurface, marginTop: 3 }}>{compact ? byline : `by ${project.creator}`}</div>
      </div>

      {compact ? <div style={{ flex: 1 }} /> : <Preview project={project} sh={sh} />}

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '11px 20px 13px',
          background: c.surfaceAlt,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          transition: 'transform 220ms ease',
          transform: hot ? 'translateY(0)' : 'translateY(101%)',
        }}
      >
        <span style={{ fontFamily: f.mono, fontSize: 9, letterSpacing: 1, textTransform: 'uppercase', color: c.mutedOnSurface }}>
          {MEDIUM_LABEL[project.medium]}
        </span>
        <span style={{ fontSize: 11, fontStyle: 'italic', color: c.textSoft, textAlign: 'right' }}>"{project.note}"</span>
      </div>
    </div>
  );
}
