import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oyoyo Events - Transform Your Event Planning',
  description:
    'Discover Oyoyo Events, the ultimate AI-powered event management platform designed to revolutionize your event planning experience. Say goodbye to the stress of coordination and hello to seamless, unforgettable events. Customize every detail, optimize layouts, and ensure smooth vendor-client communication. Attendees can easily find and register for events that match their interests, making each event engaging and exciting. Elevate your event planning with Oyoyo Events today!',
  keywords:
    'AI-powered event management, customize events, optimize layouts,Oyoyo, vendor-client communication, engaging events, Oyoyo Events',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
