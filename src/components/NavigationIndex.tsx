interface NavigationSection {
  id: string;
  title: string;
  count: number;
}

interface NavigationIndexProps {
  sections: NavigationSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function NavigationIndex({ sections, activeSection, onSectionClick }: NavigationIndexProps) {

  const scrollToSection = (sectionId: string) => {
    onSectionClick(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onSectionClick('latest');
  };

  return (
    <nav className="navigation-index">
      <div className="navigation-header">
        <h3>Navigation Index</h3>
      </div>
      
      <ul className="navigation-list">
        <li 
          className={`navigation-item ${activeSection === 'latest' ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          <span className="nav-title">Latest Articles</span>
          <span className="nav-count">{sections.find(s => s.id === 'latest')?.count || 0}</span>
        </li>
        
        {sections.filter(s => s.id !== 'latest').map(section => (
          <li 
            key={section.id}
            className={`navigation-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            <span className="nav-title">{section.title}</span>
            <span className="nav-count">{section.count}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}