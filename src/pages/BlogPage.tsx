import { useNavigate } from 'react-router-dom';
import { BlogList } from '../components/BlogList';
import { useBlog } from '../hooks/useBlog';
import { useSearch } from '../context/SearchContext';

export function BlogPage() {
  const navigate = useNavigate();
  const { searchQuery } = useSearch();
  const { posts } = useBlog(searchQuery);

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <div className="blog-header">
        <h2>All Articles</h2>
        <p className="blog-subtitle">
          Browse through all {posts.length} articles in our blog
        </p>
      </div>

      <div className="blog-page-container">
        {searchQuery ? (
          <div className="search-info">
            <p className="search-results">
              Results for "{searchQuery}": {posts.length} articles
            </p>
          </div>
        ) : null}

        <BlogList
          posts={posts}
          onPostClick={handlePostClick}
        />
      </div>
    </>
  );
}