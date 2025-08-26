interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ onSearch, searchQuery }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1>BlogSpark</h1>
          <p>Comprehensive Content Platform</p>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}