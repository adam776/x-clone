import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import New from "@/components/New";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X Clone",
  description: "An X clone website with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <Sidebar />
          </div>
          <div>
          {children}
          <div>
            <New />
          </div>
          </div>
        </div>
    
      </body>
    </html>
  );
}
