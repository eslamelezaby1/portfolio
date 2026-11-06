import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const gothTitan = localFont({src:'./fonts/GothTitan.ttf',variable:'--font-titan',display:'swap',weight:'400'});
export const metadata: Metadata = { title: 'Eslam Elezaby | Software Engineer', description: 'Software Engineer in Dubai. 5+ years building cross-platform applications, backend services, and cloud solutions.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={gothTitan.variable}><body>{children}</body></html>}
