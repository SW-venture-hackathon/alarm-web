import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* 헤더와 푸터가 있는 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/todos" element={<Todos />} />
        </Route>

        {/* 헤더만 있는 레이아웃 */}
        <Route element={<HeaderOnlyLayout />}>
          <Route path="/questions" element={<Questions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
