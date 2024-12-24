'use client';

import React, {FC} from 'react';
import s from './Reviews.module.scss';
import {animated, useInView} from '@react-spring/web';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import dev from '@/public/image/dev-icon.svg';
import design from '@/public/image/design-icon.svg';
import support from '@/public/image/support-icon.svg';
// import Image from 'next/image';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

interface ServicesProps {}

export const Reviews: FC<ServicesProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: 20},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const Contacts: FC = () => (
    <Card className="max-w-[400px] bg-[#292C2E] rounded-lg p-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={50}
          radius="sm"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          style={{ borderRadius: '50%' }}
          width={50}
        />
        <div className="flex flex-col">
          <p className="text-md">Дима</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Очень приятный сервис!</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Посетить сайт
        </Link>
      </CardFooter>
    </Card>
  );

  const WorkHours: FC = () => (
    <Card className="max-w-[400px] bg-[#292C2E] rounded-lg p-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={50}
          radius="sm"
          src="https://randomuser.me/api/portraits/men/4.jpg"
          style={{ borderRadius: '50%' }}
          width={50}
        />
        <div className="flex flex-col">
          <p className="text-md">Саша</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Попробовала тест драйв, очень понравилось!</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
        Посетить сайт
        </Link>
      </CardFooter>
    </Card>
  );

  const SohialMedia: FC = () => (
    <Card className="max-w-[400px] bg-[#292C2E] rounded-lg p-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={50}
          radius="sm"
          src="https://randomuser.me/api/portraits/men/2.jpg"
          style={{ borderRadius: '50%' }}
          width={50}
        />
        <div className="flex flex-col">
          <p className="text-md">Рома</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Очень много хороших машин!</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
        Посетить сайт
        </Link>
      </CardFooter>
    </Card>
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container} id='services'>
       <h1 className={s.title}>
        Отзывы
      </h1>
      <div className={s.list}>
      <Contacts />
      <WorkHours />
      <SohialMedia />
      </div>
    </animated.div>
  );
};
