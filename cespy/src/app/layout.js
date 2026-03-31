// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'CESPY | Seguridad Privada en Mérida y Yucatán',
  description:
    'Empresa de seguridad privada experta en protección intramuros, escoltas y vigilancia para empresas y residencias en Mérida. Más de 12 años de experiencia.',
  keywords: [
    'seguridad privada',
    'guardias de seguridad',
    'vigilancia merida',
    'proteccion patrimonial',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <BootstrapClient />
        <SpeedInsights />
      </body>
    </html>
  );
}

