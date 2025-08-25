import { BlogPost } from '../types/blog';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (postId: string) => void;
}

export function BlogList({ posts, onPostClick }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Articles Found</h3>
        <p>No articles have been published yet. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogCard
          key={post.id}
          post={post}
          onClick={onPostClick}
        />
      ))}
    </div>
  );
}