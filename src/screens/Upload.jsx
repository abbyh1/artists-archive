import React, { useState } from 'react';
import { c, f, pillPrimary, backLink } from '../theme.js';

const fieldLabel = {
  fontFamily: f.mono,
  fontSize: 10,
  letterSpacing: 1.5,
  color: c.muted,
  marginBottom: 10,
};

const textarea = {
  width: '100%',
  boxSizing: 'border-box',
  border: `1px solid ${c.border}`,
  borderRadius: 6,
  background: c.field,
  fontFamily: f.display,
  fontSize: 14,
  lineHeight: 1.7,
  padding: 14,
  resize: 'vertical',
  color: c.text,
  outline: 'none',
};

export default function Upload({ mode, onBack, onShare }) {
  const [dragOver, setDragOver] = useState(false);
  const isContinue = mode === 'continue';
  const stop = (e) => e.preventDefault();

  return (
    <div style={{ maxWidth: 620, margin: '0 auto', padding: '36px 44px 110px' }}>
      <div onClick={onBack} style={{ ...backLink, marginBottom: 32 }}>
        {isContinue ? '← back to midnight drive' : '← archive'}
      </div>

      <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 6 }}>
        {isContinue ? 'what are you continuing?' : 'what are you working on?'}
      </div>
      <div style={{ fontSize: 14, color: c.muted, marginBottom: 38 }}>it doesn't have to be finished.</div>

      <div
        onDragOver={stop}
        onDragEnter={(e) => { stop(e); setDragOver(true); }}
        onDragLeave={(e) => { stop(e); setDragOver(false); }}
        onDrop={(e) => { stop(e); setDragOver(false); }}
        style={{
          border: `2px dashed ${dragOver ? c.accent : c.border}`,
          background: dragOver ? '#EDE4D4' : c.surface,
          borderRadius: 8,
          padding: '56px 20px',
          textAlign: 'center',
          marginBottom: 40,
          transition: 'border-color 160ms ease, background 160ms ease',
        }}
      >
        <div style={{ fontSize: 28, color: c.muted, marginBottom: 10 }}>+</div>
        <div style={{ fontSize: 14, color: c.textSoft, marginBottom: 6 }}>drop something here</div>
        <div style={{ fontFamily: f.mono, fontSize: 10, letterSpacing: 1, color: c.mutedOnSurface }}>
          audio · image · video · writing · design
        </div>
      </div>

      <div style={fieldLabel}>TITLE</div>
      <input
        type="text"
        placeholder="untitled for now"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          border: 'none',
          borderBottom: `1px solid ${c.border}`,
          background: 'transparent',
          fontFamily: f.display,
          fontSize: 20,
          padding: '8px 0',
          marginBottom: 34,
          color: c.text,
          outline: 'none',
        }}
      />

      <div style={fieldLabel}>{isContinue ? 'HOW DID YOU CONTINUE IT?' : "WHAT'S UNFINISHED ABOUT IT?"}</div>
      <textarea
        rows={3}
        placeholder={isContinue ? 'I added a chorus but the outro still needs...' : "I made this at 2am and can't figure out..."}
        style={{ ...textarea, marginBottom: 34 }}
      />

      <div style={fieldLabel}>I'D LOVE SOMEONE TO...</div>
      <textarea
        rows={2}
        placeholder="add vocals, remix, finish it, add lyrics, surprise me"
        style={{ ...textarea, marginBottom: 40 }}
      />

      <div onClick={onShare} style={{ ...pillPrimary, padding: '13px 28px' }}>SHARE <span>→</span></div>
    </div>
  );
}
