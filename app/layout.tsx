import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProviders } from "@/providers/QueryClientProviders";
import CreateTrack from "@/components/CreateTrack";
import HandlePlaybackControls from "@/components/HandlePlaybackControls";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Connectify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProviders>
          <ModalProvider />
          <ToastContainer />
          {children}
          <CreateTrack/>
          <HandlePlaybackControls/>
        </QueryClientProviders>
      </body>
    </html>
  );
}
