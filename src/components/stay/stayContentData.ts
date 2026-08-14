/* =======================================
 * ふもと旅館 過ごし方ページ コンテンツデータ
 * URL: /src/components/stay/stayContentData.ts
 * Referenced in: /src/components/stay/StayContent.tsx
 * Created: 2026-08-14
 * Last updated: 2026-08-14
 * ======================================= */

export type StayImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type TimeInfo = {
  label: string;
  clock: string;
  note?: readonly string[];
};

export type StayCard = {
  title: string;
  body: readonly string[];
  image?: StayImage;
  placeholder?: boolean;
  time?: TimeInfo;
};

export const checkIn = {
  title: '旅の楽しみは、チェックインのその先に。',
  body: [
    'ようこそ、ふもと旅館へ。これから時間を忘れて素敵な旅をお過ごしくださいませ。',
  ],
  image: {
    src: '/images/stay/check-in-block01.webp',
    width: 1024,
    height: 683,
    alt: 'ふもと旅館の館内',
  },
  subImage: {
    src: '/images/top/welcome-illust.webp',
    width: 980,
    height: 653,
    alt: '夜のふもと旅館外観',
  },
  time: {
    label: '15:00~',
    clock: '/images/stay/clock15.webp',
  },
} as const;

export const yukata = {
  title: 'さぁ、浴衣に着替えて湯の街へ。',
  body: [
    'お気に入りの浴衣をまとって。女性は豊富なデザインの浴衣と美しい帯の中から、自分らしい組み合わせをお選びいただけます。',
  ],

  image: {
    src: '/images/stay/yukata-block01.webp',
    width: 1024,
    height: 683,
    alt: '浴衣を選ぶ様子',
  },
} as const;

export const firstBranch: readonly StayCard[] = [
  {
    title: '11の湯を堪能。',
    body: [
      '館内を歩くたび、新しい湯との出会いが待っています。ふもと旅館ならではの湯めぐりを、心ゆくまでお楽しみください。',
    ],
    image: {
      src: '/images/stay/branch-block01.webp',
      width: 980,
      height: 653,
      alt: '木々に囲まれた露天風呂',
    },
    time: {
      label: '~22:00',
      clock: '/images/stay/clock22.webp',
    },
  },
  {
    title: '情緒溢れる黒川を散策。',
    body: [
      'まるで非日常の景色。風情あるれる黒川温泉の街をゆっくりご覧ください。',
    ],
    image: {
      src: '/images/stay/branch-block02.webp',
      width: 980,
      height: 653,
      alt: '黒川温泉の夜道',
    },
  },
];

export const dinner = {
  title: '湯上がりや散策後の夕食、ごちそうの時間。',
  body: [
    '夕食も旅の大きなイベントの一つ。',
    '手間を惜しまず、心を込めた料理をゆっくりお召し上がりください。',
  ],
  image: {
    src: '/images/cuisine/dinner01.webp',
    width: 900,
    height: 600,
    alt: 'ふもと旅館の夕食',
  },
  time: {
    label: '18:00~\n18:30~\n19:00~\n19:30~',
    clock: '/images/stay/clock18.webp',
    note: ['※お客様のご予定に合わせて', '30分ごとにお時間決まっております'],
  },
} as const;

export const nightBranch: readonly StayCard[] = [
  {
    title: 'まだ入ってない湯へ。',
    body: ['時間の許す限り、まだお入りになっていない湯をお愉しみください。'],
    image: {
      src: '/images/stay/night-block01.webp',
      width: 900,
      height: 600,
      alt: 'ふもと旅館の内湯',
    },
    time: {
      label: '~22:00',
      clock: '/images/stay/clock22.webp',
    },
  },
  {
    title: 'かじかショップ',
    body: ['ふもと旅館提携のショップでお買い物！お土産も揃っています。'],
    placeholder: true,
    time: {
      label: '~19:00',
      clock: '/images/stay/clock19.webp',
    },
  },
];

export const rest = {
  title: '湯上がりや散策後は、布団に身を委ねて。',
  body: [
    'お部屋にはお布団のご用意をしております。',
    '心安らぐひとときをお過ごしください。',
  ],
  image: {
    src: '/images/stay/rest-block01.webp',
    width: 980,
    height: 653,
    alt: '布団の用意をする様子',
  },
  subText: ['お戻りの頃には', 'お茶の葉のアロマで', '癒しの空間を...'],
  subImage: {
    src: '/images/stay/rest-block02.webp',
    width: 480,
    height: 245,
    alt: 'お茶を淹れる様子',
  },
} as const;

export const morningBranch: readonly StayCard[] = [
  {
    title: '朝食前のに、お気に入りの湯へもう一度。',
    body: [
      'きっとお気に入りの湯が見つかったと思います。旅の最後にもう一度入られてみてください。',
    ],
    image: {
      src: '/images/dayuse/momijinoyu01.webp',
      width: 900,
      height: 600,
      alt: '朝の露天風呂',
    },
    time: {
      label: '5:00~',
      clock: '/images/stay/clock17.webp',
    },
  },
  {
    title: 'SLOW WORK CAFE',
    body: ['ふもと旅館提携のカフェで、モーニングコーヒーを。'],
    placeholder: true,
    time: {
      label: '6:00~',
      clock: '/images/stay/clock17.webp',
    },
  },
];

export const breakfast = {
  title: '朝食は、1日の始まりに嬉しいお料理。',
  body: [
    '毎日でも食べれる、優しいメニューをご用意。季節の小鉢や自家製豆腐など、豊かな朝の時間をつくります。',
  ],
  image: {
    src: '/images/cuisine/breakfast01.webp',
    width: 900,
    height: 600,
    alt: 'ふもと旅館の朝食',
  },
  time: {
    label: '7:00~\n7:30~\n8:00~\n8:30~',
    clock: '/images/stay/clock19.webp',
    note: ['※お客様のご予定に合わせて', '30分ごとにお時間決まっております'],
  },
} as const;

export const checkout = {
  title: 'チェックアウト',
  body: [
    '10:10:00チェックアウトとなります。チェックアウト後も黒川温泉を散策できますので、最後までお愉しみください。',
  ],
  image: {
    src: '/images/stay/check-out-block01.webp',
    width: 980,
    height: 653,
    alt: 'ふもと旅館を出発するイメージ',
  },
  time: {
    label: '~10:00',
    clock: '/images/stay/clock22.webp',
  },
} as const;
