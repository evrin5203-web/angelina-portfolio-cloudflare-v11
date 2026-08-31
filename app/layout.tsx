import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelina — Somewhere Around Here",
  description: "The endless portfolio world of designer and art director Angelina Bolgova.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
