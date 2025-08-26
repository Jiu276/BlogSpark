import { useState, useMemo } from 'react';
import { mockPosts } from '../data/mockPosts';

export function useBlog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return mockPosts;
    
    return mockPosts.filter(post => 
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
    setSearchQuery,
    selectedPost,
    setSelectedPostId,
  };
}