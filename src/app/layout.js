// These styles apply to every route in the application
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Cavin Hartono - Portfolio",
  description:
    "Official portfolio of Muhammad Cavin Hartono Putra, Computer Science student from Bandung, Indonesia.",
  keywords: ["portfolio", "cavin", "hartono", "nextjs", "developer"],
  author: "Cavin Hartono",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="font-sans bg-white-100 text-white-800 dark:bg-gray-900 dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}
