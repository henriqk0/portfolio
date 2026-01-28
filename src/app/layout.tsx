import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_10, Kode_Mono, Jost} from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";


const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono-sans"
});

const jostFont = Jost({
  subsets: ["latin"],
  variable: "--font-jost-sans"
})

const jerseyFont = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey-10-sans"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique de Souza Lima | Portfolio",
  description: "Henrique de Souza Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jerseyFont.variable} ${kodeMono.variable} ${jostFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        
        <div id="theme-transition-overlay" />

        {/* prevents FOUC - wrong theme "flash" */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem("theme");
              if (theme) {
                document.documentElement.setAttribute("data-theme", theme);
              }
            `,
          }}
        />
      </body>
    </html>
  
  );
}
