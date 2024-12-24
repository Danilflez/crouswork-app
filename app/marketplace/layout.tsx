
import '@/src/styles/global.scss';
import {Metadata} from 'next';

import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Webi Marketplace',
    template: `%s | Webi Marketplace`
  },
  description: 'Купить веб сайт или веб приложение',
  keywords: [
    'веб приложение',
    'создание сайтов',
    'разработка сайтов',
    'landing',
    'e commerce',
    'самый дешевый интернет магазин'
  ],
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-full'>
      {children}
    </div>
  );
}
