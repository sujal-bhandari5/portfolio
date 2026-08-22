export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Sujal Bhandari</h3>
          <p>Built with React & TypeScript</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/sujal-bhandari5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sujalbhandari/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:YOUR_EMAIL">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Sujal Bhandari</span>
        <span>Built with React & TypeScript</span>
      </div>
    </footer>
  );
}