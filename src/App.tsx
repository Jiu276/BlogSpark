import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SearchProvider, useSearch } from './context/SearchContext';
import './App.css';

function AppContent() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="app">
      <Header 
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <SearchProvider>
      <AppContent />
    </SearchProvider>
  );
}

export default App;