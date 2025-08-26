# BlogSpark - Comprehensive Content Platform

A modern comprehensive content platform built with React + TypeScript + Vite, featuring high-quality content across lifestyle, health, finance, travel, culinary arts and more.

## ✨ Features

- 📱 Responsive design supporting mobile and desktop
- 🔍 Real-time search functionality across titles, content, tags, and authors
- 🧭 Fixed navigation index with real-time active section highlighting
- 📊 Tag-based categorization with automatic category navigation
- 🎨 Modern interface design with elegant animations
- 📝 Enhanced Markdown rendering supporting tables, quotes, and images
- 🖼️ Rich content display combining text and images
- 📋 Diverse article templates (tables, flowcharts, checklists, etc.)
- 🏷️ Article tagging system and category management
- ⏱️ Reading time display
- 🎯 Medium-length content optimized for readability

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173 to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── BlogCard.tsx    # Blog card component
│   ├── BlogList.tsx    # Blog list component
│   ├── BlogPost.tsx    # Blog detail component
│   ├── CategorySection.tsx # Category section component
│   ├── Header.tsx      # Header component
│   ├── MarkdownRenderer.tsx # Markdown renderer component
│   └── NavigationIndex.tsx # Navigation index component
├── data/               # Data files
│   └── mockPosts.ts    # Mock blog data
├── hooks/              # Custom hooks
│   ├── useBlog.ts      # Blog-related logic
│   └── useNavigation.ts # Navigation-related logic
├── types/              # TypeScript type definitions
│   └── blog.ts         # Blog-related types
├── utils/              # Utility functions
│   └── dateUtils.ts    # Date processing utilities
├── App.tsx             # Main application component
├── App.css             # Main stylesheet
└── main.tsx            # Application entry point
```

## 🎯 Core Features

### Content Display
- Grid layout for content cards
- Display article titles, summaries, authors, publish dates, and tags
- Article cover image support
- High-quality content across multiple lifestyle domains

### Smart Navigation
- Fixed navigation index supporting quick chapter jumps
- Automatic current section detection with active highlighting
- Smooth scrolling effects for enhanced user experience
- Automatic tag-based article categorization

### Search Functionality
- Real-time search with multi-field matching
- Search result highlighting

### Content Details
- Complete article content display
- Markdown format support
- Back to list functionality
- Multi-domain content coverage

### Responsive Design
- Mobile-friendly interface
- Adaptive layout
- Navigation index adapts to various screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 + Flexbox + Grid
- **Code Quality**: ESLint

## 📄 Data Structure

```typescript
interface BlogPost {
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
```

## 🔧 Custom Development

### Adding New Content
Add new article data in the `src/data/mockPosts.ts` file, supporting various content types.

### Modifying Styles
Main stylesheet is located in `src/App.css`. Use CSS variables for quick theme color customization.

### Extending Features
- Integrate with real backend APIs
- Add more content categorization features
- Implement user comments and interaction systems
- Add content bookmarking and sharing functionality
- Support user submissions and content management

## 📝 License

MIT License