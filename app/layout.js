import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "GOAL — Global Office Automation Ltd. | Bangladesh's Trusted Partner for Premium Stationery & Office Solutions",
  description: "Bangladesh's leading stationery and office supplies distributor. Representing Faber-Castell, Casio, Uni-ball, Pentonic, Staedtler across 64 districts with 26,000+ retailers.",
  keywords: "GOAL, Global Office Automation, stationery Bangladesh, office supplies, Faber-Castell, Casio, Uni-ball, Pentonic, Staedtler, B2B distributor",
  openGraph: {
    title: "GOAL — Global Office Automation Ltd.",
    description: "Bangladesh's Trusted Partner for Premium Stationery & Office Solutions",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#333333] font-[var(--font-open-sans)]">
        {children}
      </body>
    </html>
  );
}
