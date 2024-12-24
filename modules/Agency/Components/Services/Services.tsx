'use client';

import React, {FC} from 'react';
import s from './Services.module.scss';
import {animated, useInView} from '@react-spring/web';

import dev from '@/public/image/dev-icon.svg';
import design from '@/public/image/design-icon.svg';
import support from '@/public/image/support-icon.svg';
import Image from 'next/image';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

interface ServicesProps {}

export const Services: FC<ServicesProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: 20},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const Contacts: FC = () => (
    <div className={s.contacts}>
       <h3 className="text-2xl font-bold text-primary-500">Контакты</h3>
      <p className="mt-2">Адрес: улица имени А.П. Шехурдина, 2</p>
      <p className="mt-2">Телефон: +7 123 456 7890</p>
      <p className="mt-2">Электронная почта: example@example.com</p>
    </div>
  );

  const WorkHours: FC = () => (
    <div className={s.workHours}>
      <h3 className="text-2xl font-bold text-primary-500">Время работы</h3>
      <p className="mt-2">Понедельник: 9:00 - 18:00</p>
      <p className="mt-2">Вторник: 9:00 - 18:00</p>
      <p className="mt-2">Среда: 9:00 - 18:00</p>
      <p className="mt-2">Четверг: 9:00 - 18:00</p>
      <p className="mt-2">Пятница: 9:00 - 18:00</p>
      <p className="mt-2">Суббота: 10:00 - 15:00</p>
      <p className="mt-2">Воскресенье: Выходной</p>
    </div>
  );

  const SohialMedia: FC = () => (
    <div className={s.workHours}>
      <h3 className="text-2xl font-bold text-primary-500">Социальные сети</h3>
      <p className="mt-2">Telegram: https://t.me/username</p>
      <p className="mt-2">WhatsUp: https://wa.me/1234567890</p>
      <p className="mt-2">Вконтакте: https://vk.com/username</p>
    </div>
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container} id='services'>
      <div className={s.list}>
      <Contacts />
      <WorkHours />
      <SohialMedia />
      </div>
    </animated.div>
  );
};
