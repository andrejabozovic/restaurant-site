import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";

import "@/public/css/plugins/bootstrap.min.css";
import "@/public/css/plugins/owl.carousel.min.css";
import "@/public/css/plugins/owl.theme.default.min.css";
import "@/public/css/plugins/flaticon.css";
import "@/public/css/plugins/themify-icons.css";
import "@/public/css/style.css";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      </head>
      <body className="bg-blck" suppressHydrationWarning={true}>
        <Navbar lang={lang} />
        {children}
        <Footer dict={dictionary} />
      </body>
    </html>
  );
}
