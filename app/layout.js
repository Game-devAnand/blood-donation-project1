import { Inter } from "next/font/google";
import "./globals.css";
import Navbar2 from "./ui/navbar";
import Footer2 from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar2 />
        {children}
      </body>
    </html>
  );
}
