import type { Metadata } from "next";
import { Anton, Open_Sans, IBM_Plex_Mono, Jost } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Marcus Rios Athlete Academy — Homeschool & Reclass Program | Sacramento, CA",
  description:
    "Marcus Rios Athlete Academy's Homeschool & Reclass Program: a 6-hour daily program combining sports performance training, academics, and mentorship for student-athletes in grades 6-12, Sacramento, CA.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Marcus Rios Athlete Academy",
  description:
    "Homeschool & Reclass Program combining sports performance training, academic support, and athlete mentorship for student-athletes in grades 6-12.",
  address: { "@type": "PostalAddress", addressLocality: "Sacramento", addressRegion: "CA" },
  sameAs: [
    "https://www.instagram.com/marcusriostraining/",
    "https://www.instagram.com/marcusriosofficial/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${openSans.variable} ${plexMono.variable} ${jost.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
