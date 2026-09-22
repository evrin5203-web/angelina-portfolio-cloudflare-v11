import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/cyrillic-400.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/roboto-condensed/cyrillic-400.css";
import "@fontsource/roboto-condensed/cyrillic-600.css";
import "@fontsource/roboto-condensed/latin-400.css";
import "@fontsource/roboto-condensed/latin-600.css";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const favicon = `${basePath}/favicon.png?v=angelina-2`;

export const metadata: Metadata = {
  title: "Angelina — Somewhere Around Here",
  description: "The endless portfolio world of designer and art director Angelina Bolgova.",
  other: { "codex-preview": "development" },
  icons: {
    icon: [{ url: favicon, type: "image/png", sizes: "180x180" }],
    shortcut: favicon,
    apple: favicon,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href={`${basePath}/fonts/fonts.css`} /></head>
      <body>{children}</body>
    </html>
  );
}
