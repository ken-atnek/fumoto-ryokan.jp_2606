/* =======================================
 * ふもと旅館 TOPページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-16
 * Last updated: 2026-07-01
 * ======================================= */

import TopHero from '@/components/top/TopHero';
import TopAccess from '@/components/top/TopAccess';
import TopCuisine from '@/components/top/TopCuisine';
import TopNews from '@/components/top/TopNews';
import TopOnsen from '@/components/top/TopOnsen';
import TopParallaxVisual from '@/components/top/TopParallaxVisual';
import TopRooms from '@/components/top/TopRooms';
import TopWelcome from '@/components/top/TopWelcome';

export default function Home() {
  return (
    <>
      <TopHero />
      <TopWelcome />
      <TopNews />
      <TopParallaxVisual />
      <TopRooms />
      <TopOnsen />
      <TopCuisine />
      <TopAccess />
    </>
  );
}
