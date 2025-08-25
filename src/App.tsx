import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { NavigationIndex } from './components/NavigationIndex';
import { CategorySection } from './components/CategorySection';
import { useBlog } from './hooks/useBlog';
import { useNavigation } from './hooks/useNavigation';
import './App.css';

function App() {
  const {
    posts,
    searchQuery,
    setSearchQuery,
    selectedPost,
    setSelectedPostId,
  } = useBlog();

  const {
    sections,
    activeSection,
    setActiveSection,
    postsByCategory
  } = useNavigation(posts);

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
  };

  return (
    <div className="app">
      <Header 
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <main className="main">
        <div className="container">
          {selectedPost ? (
            <BlogPost
              post={selectedPost}
              onBack={handleBackToList}
            />
          ) : (
            <>
              {!searchQuery ? (
                <>
                  <div className="blog-header">
                    <h2>Featured Articles</h2>
                    <p className="blog-subtitle">Discover interesting content, share life wisdom</p>
                  </div>
                  
                  {/* Latest articles section */}
                  <section id="latest" className="category-section">
                    <div className="category-header">
                      <h2 className="category-title">Latest Articles</h2>
                      <span className="category-count">{posts.length} articles</span>
                    </div>
                    <BlogList
                      posts={posts.slice(0, 3)}
                      onPostClick={handlePostClick}
                    />
                  </section>

                  {/* 分类区域 */}
                  {sections.map(section => (
                    <CategorySection
                      key={section.id}
                      id={section.id}
                      title={section.title}
                      posts={postsByCategory[section.id] || []}
                      onPostClick={handlePostClick}
                    />
                  ))}

                  {/* Navigation index */}
                  <NavigationIndex
                    sections={[
                      { id: 'latest', title: 'Latest Articles', count: posts.length },
                      ...sections
                    ]}
                    activeSection={activeSection}
                    onSectionClick={setActiveSection}
                  />
                </>
              ) : (
                <>
                  <div className="blog-header">
                    <h2>Search Results</h2>
                    <p className="search-results">
                      Results for "{searchQuery}": {posts.length} articles
                    </p>
                  </div>
                  <BlogList
                    posts={posts}
                    onPostClick={handlePostClick}
                  />
                </>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;