'use client';
import Btn from '@/components/UI/Btn/Btn';
import {RiseOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {FC} from 'react';
import s from './Banner.module.scss';
import {Player} from '@lottiefiles/react-lottie-player';

import {animated, useInView} from '@react-spring/web';

// @ts-ignore
import banner from '/public/image/2020_24 1.png';
import Link from 'next/link';
import {useStore} from '../store';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  const {setOpenCalculatePrice} = useStore();

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, scale: 0.95, x: 20},
      to: {opacity: 1, scale: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='flex flex-col gap-10 items-start w-full'>
        <h1 className={s.title}>
        Предоставляем каталог <span className='text-primary-500 ml-2'>Автомобилей</span>
        </h1>
        <p className='text-base text-gray-500'>
        Наш сервис даёт возможность ознакомиться и в дальнейшем забронировать <br /> различные автомобили
        </p>
        <Link href='/marketplace'>
          <Btn >
            <span className='flex items-center gap-3'>Ознакомиться</span>
          </Btn>
          
        </Link>
      </div>
      <Image 
        src={banner} 
        alt="Автомобильный баннер" 
        className='w-[500px] md:hidden' 
        priority
      />
    </animated.div>
  );
};
