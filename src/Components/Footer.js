import React from 'react';
import '../Styles/backtotop.css'
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-left">
          <p>Made with 🤍</p>
        </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pratyush Ghatole. All rights reserved.</p>
      </div>
      <Link to="About" smooth={true} duration={500}>
            <div className='upButton'>
                <button class="Btn">
                    <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                </button>
            </div>
      </Link>
    </footer>
  );
}

export default Footer;
