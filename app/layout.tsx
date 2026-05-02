import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aljayz | Portfolio',
  description: 'Exploring AI • Cloud • Web • Mobile • Cybersecurity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}