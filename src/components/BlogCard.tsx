import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/dateUtils';

interface BlogCardProps {
  post: BlogPost;
  onClick: (postId: string) => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      className="blog-card"
      onClick={() => onClick(post.id)}
    >
      {post.coverImage && (
        <div className="blog-card-image">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="author">{post.author}</span>
          <span className="date">{formatDate(post.publishDate)}</span>
          <span className="read-time">{post.readTime} min read</span>
        </div>
        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-summary">{post.summary}</p>
        <div className="blog-card-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}