import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { c, f } from './theme.js';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Project from './screens/Project.jsx';
import Tree from './screens/Tree.jsx';
import Upload from './screens/Upload.jsx';
import Profile from './screens/Profile.jsx';
import SignUp from './screens/SignUp.jsx';
import Login from './screens/Login.jsx';
import EditArtwork from './screens/EditArtwork.jsx';
import ProfileSettings from './screens/ProfileSettings.jsx';
import NotFound from './screens/NotFound.jsx';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: c.bg, fontFamily: f.display, color: c.text }}>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Upload />} />
        <Route path="/artwork/:id" element={<Project />} />
        <Route path="/artwork/:id/tree" element={<Tree />} />
        <Route path="/artwork/:id/edit" element={<EditArtwork />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
