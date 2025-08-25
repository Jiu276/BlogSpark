import { BlogPost } from '../types/blog';
import { BlogList } from './BlogList';

interface CategorySectionProps {
  id: string;
  title: string;
  posts: BlogPost[];
  onPostClick: (postId: string) => void;
}

export function CategorySection({ id, title, posts, onPostClick }: CategorySectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section id={id} className="category-section">
      <div className="category-header">
        <h2 className="category-title">{title}</h2>
        <span className="category-count">{posts.length} articles</span>
      </div>
      <BlogList posts={posts} onPostClick={onPostClick} />
    </section>
  );
}