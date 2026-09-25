export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-edit flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Lakshmi Harsha Teja Kesamneni</span>
        <span>Built with Next.js, Tailwind CSS and Framer Motion</span>
      </div>
    </footer>
  );
}
