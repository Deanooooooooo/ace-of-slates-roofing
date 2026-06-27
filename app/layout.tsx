import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/ace-of-slates-roofing"),
  title: "The Ace of Slates | Roofing Contractors",
  description:
    "Roofing contractor for South Manchester, Hyde and the High Peak, covering new roofs, slate roofing, flat roofs, repairs, leadwork and chimney restoration.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "The Ace of Slates | Roofing Contractors",
    description:
      "Slate, tile, repair, leadwork and chimney roofing services across South Manchester and the High Peak.",
    url: "https://deanooooooooo.github.io/ace-of-slates-roofing/",
    images: ["/assets/hero-roof-atmosphere.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ace of Slates | Roofing Contractors",
    description:
      "Roofing contractor for South Manchester, Hyde, the High Peak and the North West.",
    images: ["/assets/hero-roof-atmosphere.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
