import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { c, f, pillPrimary, backLink } from '../theme.js';
import { TREE } from '../data.js';

const box = (active, small) => ({
  padding: small ? '11px 16px' : '12px 18px',
  borderRadius: 8,
  cursor: 'pointer',
  transition: 'border-color 160ms ease',
  background: c.surface,
  border: `1px solid ${active ? c.accent : c.surface}`,
  textAlign: 'center',
  maxWidth: small ? 170 : 180,
});

const stem = { width: 1, height: 24, background: c.border };

function Node({ node, selectedId, onSelect, small }) {
  return (
    <div onClick={() => onSelect(node.id)} style={box(selectedId === node.id, small)}>
      <div style={{ fontSize: small ? 12 : 13, fontWeight: 500, lineHeight: 1.3 }}>{node.title}</div>
      <div style={{ fontSize: 10, color: c.mutedOnSurface, marginTop: 2 }}>by {node.creator}</div>
    </div>
  );
}

export default function Tree() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('orig');

  const byId = { orig: TREE.root };
  TREE.children.forEach((n) => {
    byId[n.id] = n;
    if (n.child) byId[n.child.id] = n.child;
  });
  const selected = byId[selectedId] || TREE.root;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 44px 110px' }}>
      <div onClick={() => navigate(`/artwork/${id}`)} style={{ ...backLink, marginBottom: 38 }}>← back to midnight drive</div>

      <div style={{ textAlign: 'center', marginBottom: 54 }}>
        <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>see where this idea went</div>
        <div style={{ fontSize: 13, color: c.muted }}>click a branch to preview what grew from "midnight drive"</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          onClick={() => setSelectedId('orig')}
          style={{ ...box(selectedId === 'orig'), padding: '13px 24px', minWidth: 170, maxWidth: 'none' }}
        >
          <div style={{ fontSize: 14, fontWeight: 600 }}>{TREE.root.title}</div>
          <div style={{ fontSize: 10, color: c.mutedOnSurface, marginTop: 2 }}>by {TREE.root.creator}</div>
        </div>
        <div style={{ width: 1, height: 26, background: c.border }} />

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 26, flexWrap: 'wrap' }}>
          <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: c.border }} />
          {TREE.children.map((n) => (
            <div key={n.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={stem} />
              <Node node={n} selectedId={selectedId} onSelect={setSelectedId} />
              {n.child && (
                <>
                  <div style={stem} />
                  <Node node={n.child} selectedId={selectedId} onSelect={setSelectedId} small />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: '60px auto 0', maxWidth: 460, padding: '28px 30px', background: c.surface, borderRadius: 10 }}>
        <div style={{ fontSize: 19, fontWeight: 600, marginBottom: 3 }}>{selected.title}</div>
        <div style={{ fontSize: 11, color: c.mutedOnSurface, marginBottom: 16 }}>by {selected.creator}</div>
        <div style={{ fontStyle: 'italic', fontSize: 14, lineHeight: 1.7, color: c.textSoft, marginBottom: 22 }}>
          "{selected.note}"
        </div>
        <div onClick={() => navigate(`/create?continueFrom=${id}`)} style={{ ...pillPrimary, padding: '11px 22px', fontSize: 10 }}>
          CONTINUE THIS <span>→</span>
        </div>
      </div>
    </div>
  );
}
