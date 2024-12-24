'use client';
import React, { FC } from 'react';
import { animated, useInView } from '@react-spring/web';
import { YMaps, Map, Placemark } from 'react-yandex-maps'; // Для работы с Яндекс.Картами
import s from './Portfolio.module.scss'; // Предполагается, что этот файл содержит необходимые стили

// Компонент контактов
const Contacts: FC = () => (
  <div className={s.contacts}>
    <h2 className="text-2xl font-bold text-primary-500">Контакты</h2>
    <p className="mt-2">Адрес: Примерный адрес, Москва, Россия</p>
    <p className="mt-2">Телефон: +7 123 456 7890</p>
    <p className="mt-2">Электронная почта: example@example.com</p>
  </div>
);

interface PortfolioProps {}

export const Portfolio: FC<PortfolioProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0, x: -60 },
      to: { opacity: 1, x: 0 }
    }),
    { rootMargin: '-20% 0%' }
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1 className={s.title}>
        Где <span className="text-primary-500 ml-2">мы</span>, находимся?
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <YMaps>
            <Map
              defaultState={{
                center: [51.565850, 46.001836],
                zoom: 10,
              }}
              width="100%"
              height="400px"
            >
              <Placemark geometry={[51.565850, 46.001836]} />
            </Map>
          </YMaps>
        </div>       
      </div>
    </animated.div>
  );
};