export interface BlogPost {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  publishDate: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
}