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
 
export const metadata = { 
  title: "Course Admission", 
  description: "Find the right college after 12th, UG, or PG", 
}; 
 
export default function RootLayout({ children }) { 
  return ( 
    <html lang="en" suppressHydrationWarning> 
      <body className={`${geistSans.variable} ${geistMono.variable}`}> 
        {children} 
      </body> 
    </html> 
  ); 
} 
