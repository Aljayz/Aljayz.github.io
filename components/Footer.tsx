export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Aljayz. Built with Next.js & Tailwind CSS.
    </footer>
  );
}