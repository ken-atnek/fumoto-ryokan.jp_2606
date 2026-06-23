/* =======================================
 * ふもと旅館 共通レイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-16
 * Last updated: 2026-06-22
 * ======================================= */

import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google';
import SvgDefs from '@/components/SvgDefs';
import { isRealProduction, metadataBase } from '@/lib/env';
import '@/styles/globals.scss';

const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  variable: '--font-zen-kaku-gothic-antique',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const siteTitle = 'ふもと旅館';
const siteDescription =
  '黒川温泉の中心に位置する館内湯巡りの宿。種類豊富な貸切風呂や露天風呂は全て源泉100％かけ流し。誰でも気軽に滞在を楽しめる良心的な宿泊料で、幅広い客層に支持される旅館です。';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  ...(isRealProduction && {
    metadataBase,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: '/',
      siteName: siteTitle,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
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
    <html lang="ja" className={zenKakuGothicAntique.variable}>
      <body>
        <SvgDefs />
        {children}
      </body>
    </html>
  );
}
