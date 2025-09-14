import { useState, useMemo } from 'react';
import { mockPosts } from '../data/mockPosts';

export function useBlog(searchQuery: string = '') {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let posts = [...mockPosts];
    
    // Sort by publish date (newest first)
    posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    if (!searchQuery) return posts;
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedPost = useMemo(() => {
    if (!selectedPostId) return null;
    return mockPosts.find(post => post.id === selectedPostId) || null;
  }, [selectedPostId]);

  return {
    posts: filteredPosts,
    searchQuery,
    selectedPost,
    setSelectedPostId,
  };
}