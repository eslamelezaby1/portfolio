import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://eslamelezaby.vercel.app'),title:'Eslam Elezaby — The Engineer’s Field Notes',description:'Software engineer in Dubai. 5+ years building full-stack applications, backend services, and AI integrations. Available immediately.',openGraph:{title:'Eslam Elezaby — Software Engineer',description:'Notes on building useful software.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
