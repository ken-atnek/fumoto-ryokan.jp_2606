export type CommonNavItem = {
  href: string;
  label: string;
  svg?: string;
  class?: string;
};

export const commonNavItems: CommonNavItem[] = [
  {
    href: '/reservation/',
    label: '予約',
    svg: 'svgMenuTextReserve',
    class: 'linkReserve',
  },
  {
    href: '/access/',
    label: 'アクセス',
    svg: 'svgMenuTextAccess',
    class: 'linkAccess',
  },
  {
    href: '/#stay-plan',
    label: '過ごし方',
    svg: 'svgMenuTextSpend',
    class: 'linkSpend',
  },
  {
    href: '/cuisine/',
    label: 'お食事',
    svg: 'svgMenuTextFood',
    class: 'linkFood',
  },
  { href: '/#rooms', label: '客室', svg: 'svgMenuTextRoom', class: 'linkRoom' },
  {
    href: '/dayuse/',
    label: '日帰り入浴',
    svg: 'svgMenuTextHigaeri',
    class: 'linkHigaeri',
  },
  {
    href: '/#onsen',
    label: '温泉',
    svg: 'svgMenuTextOnsen',
    class: 'linkOnsen',
  },
  {
    href: '/history/',
    label: 'ふもと旅館のあゆみ',
    svg: 'svgMenuTextHistory',
    class: 'linkHistory',
  },
  { href: '/', label: 'トップ', svg: 'svgMenuTextTop', class: 'linkTop' },
];
