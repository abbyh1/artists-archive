import React from 'react';
import { c, f, MEDIUM_LABEL, shape, monoLabel, pillPrimary, backLink } from '../theme.js';

function Media({ project, sh }) {
  if (project.medium === 'music') {
    return (
      <>
        <div style={{ width: '100%', aspectRatio: 0.84, background: c.surface, borderRadius: sh.media }} />
        <div style={{ height: 3, background: c.surface, borderRadius: 2, position: 'relative', margin: '26px 0 8px' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, height: 3, borderRadius: 2, width: '32%', background: c.accent }} />
          <div style={{ position: 'absolute', left: '32%', top: -4, width: 11, height: 11, borderRadius: '50%', background: c.accent }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: f.mono, fontSize: 10, color: c.muted }}>
          <span>0:42</span>
          <span>{project.meta}</span>
        </div>
      </>
    );
  }

  if (project.medium === 'illustration') {
    return <div style={{ width: '100%', aspectRatio: 0.9, background: c.surface, borderRadius: sh.media }} />;
  }

  if (project.medium === 'writing') {
    return (
      <div
        style={{
          width: '100%',
          minHeight: 340,
          background: c.surface,
          borderRadius: sh.media,
          padding: '36px 32px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontStyle: 'italic', fontSize: 15, lineHeight: 2, color: c.text }}>"{project.opening}"</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {[c.surface, c.surfaceAlt, c.surfaceAlt, c.surface].map((bg, i) => (
        <div key={i} style={{ aspectRatio: 1, background: bg, borderRadius: 4 }} />
      ))}
    </div>
  );
}

export default function Project({ project, saved, onToggleSave, onBack, onContinue, onTree }) {
  const sh = shape(project.finished);

  return (
    <div style={{ maxWidth: 1020, margin: '0 auto', padding: '36px 44px 110px' }}>
      <div onClick={onBack} style={backLink}>← archive</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 400px) minmax(0, 1fr)', gap: 60, alignItems: 'start' }}>
        <div>
          <Media project={project} sh={sh} />
        </div>

        <div>
          <div style={{ fontSize: 36, fontWeight: 600, lineHeight: 1.15, marginBottom: 6 }}>{project.title}</div>
          <div style={{ fontSize: 13, color: c.muted, marginBottom: 6 }}>by @{project.creator}</div>
          <div style={{ fontFamily: f.mono, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: c.muted, marginBottom: 26 }}>
            {MEDIUM_LABEL[project.medium]} · {project.finished ? 'finished' : 'in progress'} · 2026
          </div>

          <div style={{ fontStyle: 'italic', fontSize: 18, lineHeight: 1.7, color: c.textSoft, marginBottom: 30, maxWidth: 490 }}>
            "{project.longNote}"
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 38 }}>
            <div
              onClick={onToggleSave}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 18px',
                borderRadius: 999,
                fontSize: 12,
                cursor: 'pointer',
                transition: 'background 160ms ease, color 160ms ease',
                background: saved ? c.accent : 'transparent',
                color: saved ? c.bg : c.textSoft,
                border: `1px solid ${saved ? c.accent : c.border}`,
              }}
            >
              ♡ {saved ? 'saved' : 'save'}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 18px',
                borderRadius: 999,
                fontSize: 12,
                cursor: 'pointer',
                color: c.textSoft,
                border: `1px solid ${c.border}`,
              }}
            >
              ↗ share
            </div>
          </div>

          <div style={monoLabel}>ARTIST'S NOTES</div>
          <div style={{ fontSize: 14, lineHeight: 1.85, color: c.textSoft, marginBottom: 32, maxWidth: 490 }}>
            {project.artistNote}
          </div>

          {project.needs.length > 0 && (
            <>
              <div style={monoLabel}>WHAT IT NEEDS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {project.needs.map((n) => (
                  <div key={n} style={{ padding: '6px 16px', borderRadius: 999, background: c.surface, color: c.textSoft, fontSize: 12 }}>
                    {n}
                  </div>
                ))}
              </div>
            </>
          )}

          <div style={{ ...monoLabel, marginBottom: 6 }}>FILES</div>
          <div style={{ marginBottom: 32 }}>
            {project.files.map((file) => (
              <div key={file} style={{ fontSize: 13, color: c.textSoft, padding: '8px 0', borderBottom: `1px solid ${c.surface}` }}>
                {file}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 38 }}>
            {project.hashtags.map((t) => (
              <span key={t} style={{ fontFamily: f.mono, fontSize: 11, color: c.muted }}>#{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
            <div onClick={onContinue} style={pillPrimary}>CONTINUE THIS <span>→</span></div>
            <div onClick={onTree} style={{ display: 'flex', alignItems: 'center', gap: 10, color: c.accent, fontSize: 13, cursor: 'pointer' }}>
              {project.versions} version{project.versions === 1 ? '' : 's'} grew from this <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
