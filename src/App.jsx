import React, { useState } from 'react';
import { c, f } from './theme.js';
import { PROJECTS } from './data.js';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Project from './screens/Project.jsx';
import Tree from './screens/Tree.jsx';
import Upload from './screens/Upload.jsx';
import Profile from './screens/Profile.jsx';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [uploadMode, setUploadMode] = useState('new');
  const [filter, setFilter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [treeSelected, setTreeSelected] = useState('orig');
  const [saved, setSaved] = useState({});

  const project = selected || PROJECTS[0];
  const visible = filter ? PROJECTS.filter((p) => p.tags.includes(filter)) : PROJECTS;

  const openProject = (p) => {
    setSelected(p);
    setScreen('project');
  };

  const goUpload = (mode) => {
    setUploadMode(mode);
    setScreen('upload');
  };

  return (
    <div style={{ minHeight: '100vh', background: c.bg, fontFamily: f.display, color: c.text }}>
      <Nav
        screen={screen}
        onNavigate={(s) => (s === 'upload' ? goUpload('new') : setScreen(s))}
      />

      {screen === 'home' && (
        <Home projects={visible} filter={filter} onFilter={setFilter} onSelectProject={openProject} />
      )}

      {screen === 'project' && (
        <Project
          project={project}
          saved={!!saved[project.id]}
          onToggleSave={() => setSaved((s) => ({ ...s, [project.id]: !s[project.id] }))}
          onBack={() => setScreen('home')}
          onContinue={() => goUpload('continue')}
          onTree={() => setScreen('tree')}
        />
      )}

      {screen === 'tree' && (
        <Tree
          selectedId={treeSelected}
          onSelect={setTreeSelected}
          onBack={() => setScreen('project')}
          onContinue={() => goUpload('continue')}
        />
      )}

      {screen === 'upload' && (
        <Upload
          mode={uploadMode}
          onBack={() => (uploadMode === 'continue' ? setScreen('project') : setScreen('home'))}
          onShare={() => setScreen('home')}
        />
      )}

      {screen === 'profile' && <Profile onSelectProject={openProject} />}
    </div>
  );
}
