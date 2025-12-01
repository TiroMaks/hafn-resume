import localFont from 'next/font/local';

export const martianMono = localFont({
  src: [
    {
      path: '../public/fonts/Martian_Mono/MartianMono-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Martian_Mono/MartianMono-VariableFont_wdth,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-martian-mono',
});