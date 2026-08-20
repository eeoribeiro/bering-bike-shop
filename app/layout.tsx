import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "Bering Bike Shop | Bicicletas e Oficina em Ponte Nova",
  description: "Bicicletas, peças, acessórios e manutenção especializada em Ponte Nova, MG.",
  openGraph: {
    title: "Bering Bike Shop | Seu próximo pedal começa aqui",
    description: "Bicicletas, peças, acessórios e oficina especializada em Ponte Nova, MG.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Bering Bike Shop" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bering Bike Shop | Seu próximo pedal começa aqui",
    description: "Bicicletas, peças, acessórios e oficina especializada em Ponte Nova, MG.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
