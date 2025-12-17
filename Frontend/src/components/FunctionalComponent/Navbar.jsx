import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showReactDropdown, setShowReactDropdown] = useState(false);
  const [showHooksDropdown, setShowHooksDropdown] = useState(false);

  const hooks = [
    { name: "useState", path: "/hooks/usestate" },
    { name: "useEffect", path: "/hooks/useeffect" },
    { name: "useRef", path: "/hooks/useref" },
    { name: "useCallback", path: "/hooks/usecallback" },
    { name: "useMemo", path: "/hooks/usememo" }
  ];

  const reactTopics = [
    { name: "Props", path: "/learning-react?section=props" },
    { name: "State", path: "/learning-react?section=state" }
  ];

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        gap: '12rem'
      }}>
        <li>
          <Link 
            to="/home" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contact
          </Link>
        </li>
        <li 
          style={{ position: 'relative' }}
          onMouseEnter={() => setShowReactDropdown(true)}
          onMouseLeave={() => setShowReactDropdown(false)}
        >
          <Link to="/learning-react" style={linkStyle}>Learning React</Link>
          {showReactDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#34495e',
              minWidth: '150px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              padding: '0.5rem 0'
            }}>
              {reactTopics.map((topic, index) => (
                <Link 
                  key={index}
                  to={topic.path} 
                  style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li 
          style={{ position: 'relative' }}
          onMouseEnter={() => setShowHooksDropdown(true)}
          onMouseLeave={() => setShowHooksDropdown(false)}
        >
          <Link 
            to="/learning-hooks" 
            style={{...linkStyle, cursor: 'pointer'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Hooks
          </Link>
          {showHooksDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#34495e',
              minWidth: '150px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              padding: '0.5rem 0'
            }}>
              {hooks.map((hook, index) => (
                <Link 
                  key={index}
                  to={hook.path} 
                  style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {hook.name}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link 
            to="/login" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s'
};

export default Navbar;