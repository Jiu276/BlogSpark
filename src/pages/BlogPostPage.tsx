import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPost } from '../components/BlogPost';
import { mockPosts } from '../data/mockPosts';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = mockPosts.find(p => p.id === id);

  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  if (!post) {
    return (
      <div className="container">
        <div className="blog-header">
          <h2>Article Not Found</h2>
          <p className="blog-subtitle">The article you're looking for doesn't exist.</p>
          <button 
            onClick={handleBack}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} onBack={handleBack} />;
}