import { BlogPost as BlogPostType } from '../types/blog';
import { formatDate } from '../utils/dateUtils';
import { MarkdownRenderer } from './MarkdownRenderer';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Articles
        </button>
        {post.coverImage && (
          <div className="blog-post-cover">
            <img src={post.coverImage} alt={post.title} />
          </div>
        )}
        <div className="blog-post-meta">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-info">
            <span className="author">By: {post.author}</span>
            <span className="date">Published: {formatDate(post.publishDate)}</span>
            <span className="read-time">Reading time: {post.readTime} minutes</span>
          </div>
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </header>
      <div className="blog-post-content">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}