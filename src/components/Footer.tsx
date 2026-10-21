export default function Footer() {
  return (
    <footer className="site-footer shell">
      <a className="brand" href="#home">
        rw<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Rong (Rose) Wei</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
