import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '../types/blog';

interface NavigationSection {
  id: string;
  title: string;
  count: number;
}

export function useNavigation(posts: BlogPost[]) {
  const [activeSection, setActiveSection] = useState('latest');

  const sections: NavigationSection[] = useMemo(() => {
    const categoryMap = new Map<string, number>();
    
    posts.forEach(post => {
      post.tags.forEach(tag => {
        categoryMap.set(tag, (categoryMap.get(tag) || 0) + 1);
      });
    });

    return Array.from(categoryMap.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6) // 显示前6个最热门的标签
      .map(([tag, count]) => ({
        id: `category-${tag.toLowerCase().replace(/\s+/g, '-')}`,
        title: tag,
        count
      }));
  }, [posts]);

  const postsByCategory = useMemo(() => {
    const result: Record<string, BlogPost[]> = {};
    
    sections.forEach(section => {
      const tagName = section.title;
      result[section.id] = posts.filter(post => 
        post.tags.includes(tagName)
      );
    });
    
    return result;
  }, [posts, sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // 检查是否在顶部
      if (scrollPosition < 200) {
        setActiveSection('latest');
        return;
      }

      // 检查哪个分类区域在视口中
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return {
    sections,
    activeSection,
    setActiveSection,
    postsByCategory
  };
}