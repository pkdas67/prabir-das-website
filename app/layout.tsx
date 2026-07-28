import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prof. Prabir Kumar Das | Statistics & Analytics Expert",
  description:
    "Official website of Prof. Prabir Kumar Das (P K Das) — Professor with 30 years of experience in Statistics, Business Analytics, and Corporate Training. Explore research publications and professional training programs.",
  keywords: [
    "Prof Prabir Kumar Das",
    "P K Das",
    "Statistics professor",
    "Business Analytics training",
    "Corporate training India",
    "Research publications",
    "Data analytics workshop",
    "Financial analytics",
  ],
  openGraph: {
    title: "Prof. Prabir Kumar Das | Statistics & Analytics Expert",
    description:
      "30 years of excellence in Statistics, Analytics & Professional Training. Explore training programs and research publications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
