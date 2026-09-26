import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { c, f, backLink } from '../theme.js';
import { PROJECTS, CONTINUED } from '../data.js';
import NotFound from './NotFound.jsx';

const ALL_PROJECTS = [...PROJECTS, ...CONTINUED];

export default function EditArtwork() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ALL_PROJECTS.find((p) => p.id === id);

  if (!project) return <NotFound />;

  return (
    <div style={{ maxWidth: 620, margin: '0 auto', padding: '36px 44px 110px' }}>
      <div onClick={() => navigate(`/artwork/${id}`)} style={{ ...backLink, marginBottom: 32 }}>← {project.title}</div>

      <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>edit "{project.title}"</div>
      <div style={{ fontSize: 14, color: c.muted, fontFamily: f.display }}>
        editing isn't wired up yet — this page will let the owner update or delete this artwork once it's backed by Supabase.
      </div>
    </div>
  );
}
