/* =======================================
 * ふもと旅館 お部屋ページ コンテンツデータ
 * URL: /src/components/rooms/roomsContentData.ts
 * Referenced in: /src/components/rooms/RoomsContent.tsx
 * Created: 2026-08-15
 * Last updated: 2026-08-15
 * ======================================= */

export type RoomImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type RoomItem = {
  number: string;
  title: string;
  roomName?: string;
  linkText: string;
  linkUrl: string;
  note?: string;
  body: readonly string[];
  images: readonly RoomImage[];
};

export type RoomSection = {
  id: 'honkan' | 'bekkan';
  title: string;
  label: {
    src: string;
    width: number;
    height: number;
  };
  lead: string;
  body: readonly string[];
  rooms: readonly RoomItem[];
};

export const roomSections: readonly RoomSection[] = [
  {
    id: 'honkan',
    title: '本館',
    label: {
      src: '/images/rooms/honkan.svg',
      width: 50,
      height: 109,
    },
    lead: '和のぬくもりに、旅のあいだをとけていく。',
    body: [
      '創業以来、大切に受け継がれてきた本館和室。',
      '木の香りや梁の趣、窓から差し込むやわらかな光が、どこか懐かしい時間を紡ぎます。華美な設えではなく、黒川温泉らしい素朴な心地よさを大切にした空間です。湯めぐりを愉しみ、美味しい料理に舌鼓を打ち、静かな夜を過ごす。何もしない贅沢が、ここにはあります。',
    ],
    rooms: [
      {
        number: '01. 本館',
        title: '和室',
        linkText: '本館和室のご予約',
        linkUrl: 'https://go-fumoto6697.reservation.jp/ja/hotels/fumoto',
        note: '※お部屋の指定はできません。',
        body: [
          '昔の田舎家をイメ－ジした純和風の空間です。',
          '木のぬくもりが温かい、心落ち着く畳のお部屋です。',
          '無料Wi-Fiもご利用いただけます。',
          '※館内は禁煙となっております。',
        ],
        images: [
          {
            src: '/images/rooms/honkan-01-01.webp',
            width: 1280,
            height: 720,
            alt: '本館和室の室内',
          },
          {
            src: '/images/rooms/honkan-01-02.webp',
            width: 1280,
            height: 720,
            alt: '本館和室の窓辺',
          },
          {
            src: '/images/rooms/honkan-01-03.webp',
            width: 1280,
            height: 720,
            alt: '本館和室の座卓',
          },
          {
            src: '/images/rooms/honkan-01-04.webp',
            width: 1280,
            height: 720,
            alt: '本館和室のしつらえ',
          },
          {
            src: '/images/rooms/honkan-01-05.webp',
            width: 1280,
            height: 720,
            alt: '本館和室の客室設備',
          },
        ],
      },
      {
        number: '02. 本館',
        title: '和室(7.5畳)',
        linkText: '本館和室7.5畳のご予約',
        linkUrl: 'https://go-fumoto6697.reservation.jp/ja/hotels/fumoto',
        note: '※お部屋の指定はできません。',
        body: [
          '本館和室で、大きめのお部屋となります。',
          '',
          '無料Wi-Fiもご利用いただけます。',
          '※館内は禁煙となっております。',
        ],
        images: [
          {
            src: '/images/rooms/honkan-02-01.webp',
            width: 1280,
            height: 720,
            alt: '本館和室7.5畳の室内',
          },
          {
            src: '/images/rooms/honkan-02-02.webp',
            width: 1280,
            height: 720,
            alt: '本館和室7.5畳の窓辺',
          },
        ],
      },
    ],
  },
  {
    id: 'bekkan',
    title: '別館',
    label: {
      src: '/images/rooms/bekkan.svg',
      width: 46,
      height: 109,
    },
    lead: '誰にも急かされない贅沢。',
    body: [
      '別館「麓庵」の客室には、自家源泉かけ流しの露天風呂をご用意しました。好きな時間に、好きなだけ湯に浸かり、窓の外に広がる黒川の静けさに身を委ねる。和の落ち着きと洋の快適さを兼ね備えた空間で、時間を忘れて過ごすひとときは、旅をより豊かなものにしてくれます。客室露天風呂はもちろん、ふもと旅館自慢の貸切風呂巡りも心ゆくまで。温泉に満たされる一日をお愉しみください。',
    ],
    rooms: [
      {
        number: '01. 別館 麓庵',
        title: '露天風呂付き和洋室',
        roomName: '「ゆり・さくら」',
        linkText: '別館露天風呂付き和洋室のご予約',
        linkUrl: 'https://go-fumoto6697.reservation.jp/ja/hotels/fumoto',
        body: [
          '地元を代表する「小国杉」などを随所に採用しこの土地ならではのくつろぎの空間に仕上げています。',
        ],
        images: [
          {
            src: '/images/rooms/bekkan-01-01.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の室内',
          },
          {
            src: '/images/rooms/bekkan-01-02.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室のベッドスペース',
          },
          {
            src: '/images/rooms/bekkan-01-03.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室のくつろぎスペース',
          },
          {
            src: '/images/rooms/bekkan-01-04.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の客室露天風呂',
          },
          {
            src: '/images/rooms/bekkan-01-05.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の湯船',
          },
          {
            src: '/images/rooms/bekkan-01-06.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の浴室',
          },
          {
            src: '/images/rooms/bekkan-01-07.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の洗面',
          },
          {
            src: '/images/rooms/bekkan-01-08.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き和洋室の客室設備',
          },
        ],
      },
      {
        number: '02. 別館 麓庵',
        title: '露天風呂付き洋室',
        roomName: '「野ぎく」',
        linkText: '別館露天風呂付き洋室のご予約',
        linkUrl: 'https://go-fumoto6697.reservation.jp/ja/hotels/fumoto',
        body: ['ミニデスクではぜひゆっくりと読書などをお楽しみください。'],
        images: [
          {
            src: '/images/rooms/bekkan-02-01.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き洋室の室内',
          },
          {
            src: '/images/rooms/bekkan-02-02.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き洋室のベッドスペース',
          },
          {
            src: '/images/rooms/bekkan-02-03.webp',
            width: 1280,
            height: 800,
            alt: '別館露天風呂付き洋室の客室露天風呂',
          },
        ],
      },
    ],
  },
];
