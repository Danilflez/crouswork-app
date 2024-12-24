import {getCookie} from 'cookies-next';
import Link from 'next/link';
import React, {FC} from 'react';
import {Logo} from '../UI/Logo/Logo';
import s from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  const token = getCookie('token');
  const linksList = [
    {
      title: 'Домашняя',
      links: [
        {
          label: 'О маркетплейсе',
          href: '/#marketplace'
        },
        {
          label: 'Услуги',
          href: '/#services'
        },
        {
          label: 'Обратная связь',
          href: '/#feedback'
        }
      ]
    },
    {
      title: 'Marketplace',
      links: [
        {
          label: 'Поиск товаров',
          href: '/marketplace/products'
        },
      ]
    }
  ];

  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className='flex justify-between md:flex-col'>
          <div className='opacity-80'>
          AutoShare
          </div>
          <div className='flex gap-20 flex-grow justify-center md:justify-start lg:mt-10'>
            {linksList.map(({links, title}) => (
              <div>
                <h2 className='text-lg mb-3'>{title}</h2>
                <div className='flex flex-col gap-1 text-gray-400'>
                  {links.map(({href, label}) => (
                    <Link href={href} className='hover:opacity-70 transition-opacity'>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-between border-t-[1px] border-t-gray-500 border-opacity-10 mt-[20px] pt-[20px]'>
          <h2 className='text-gray-400 font-medium'>© AutoShare
          Marketplace</h2>
          <div className='flex gap-3'>
          </div>
        </div>
      </div>
    </div>
  );
};
