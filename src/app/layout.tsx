import type { Metadata } from 'next';
import { IBM_Plex_Sans_JP, Radio_Canada_Big } from 'next/font/google';
import { isRealProduction } from '@/lib/env';
import './globals.scss';

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: '--font-ibm-plex-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const radioCanadaBig = Radio_Canada_Big({
  variable: '--font-radio-canada-big',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: '麓旅館',
  description: '熊本県黒川温泉の麓旅館リニューアルプロジェクトです。',
  ...(isRealProduction && {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ?? 'https://www.fumotoryokan.com/'
    ),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: '麓旅館',
      description: '熊本県黒川温泉の麓旅館リニューアルプロジェクトです。',
      url: '/',
      siteName: '麓旅館',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '麓旅館',
      description: '熊本県黒川温泉の麓旅館リニューアルプロジェクトです。',
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ja'
      className={`${ibmPlexSansJp.variable} ${radioCanadaBig.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
