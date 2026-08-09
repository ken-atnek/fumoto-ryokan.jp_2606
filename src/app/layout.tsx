/* =======================================
 * ふもと旅館 共通レイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-16
 * Last updated: 2026-06-23
 * ======================================= */

import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google';
import SvgDefs from '@/components/SvgDefs';
import { isRealProduction, metadataBase } from '@/lib/env';
import '@/styles/globals.scss';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  variable: '--font-zen-kaku-gothic-antique',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const siteTitle = '【公式】熊本 黒川温泉−ふもと旅館−≪最低価格保証≫';
const siteName = 'ふもと旅館';
const siteDescription =
  '黒川温泉の中心にあり、貸切風呂自慢の源泉湯宿。自家源泉かけ流しの本格的な温泉と、九州・熊本の新鮮な食材を使った季節感溢れるお料理をお愉しみいただけます。';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: [
      {
        url: '/favicon/favicon-light.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  ...(isRealProduction && {
    metadataBase,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: '/',
      siteName,
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
        <Header />
        <SvgDefs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
