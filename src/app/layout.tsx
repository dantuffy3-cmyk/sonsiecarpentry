import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonsie Carpentry Pty Ltd",
  description: "Premium residential renovation carpentry in the Yarra Valley, Victoria. Extensions, decks, outdoor living, and custom timber work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
