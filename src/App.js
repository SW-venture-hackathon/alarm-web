import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HeaderOnlyLayout from './layouts/HeaderOnlyLayout';
import MainLayout from './layouts/MainLayout';
import AlarmsPage from './pages/AlarmsPage';
import HomePage from './pages/HomePage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import QuestionsPage from './pages/QuestionsPage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 헤더와 푸터가 있는 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/alarms" element={<AlarmsPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Route>

        {/* 헤더만 있는 레이아웃 */}
        <Route element={<HeaderOnlyLayout />}>
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/questions/:id" element={<QuestionDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
