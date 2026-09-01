import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/cyrillic-400.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/roboto-condensed/cyrillic-400.css";
import "@fontsource/roboto-condensed/cyrillic-600.css";
import "@fontsource/roboto-condensed/latin-400.css";
import "@fontsource/roboto-condensed/latin-600.css";
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
