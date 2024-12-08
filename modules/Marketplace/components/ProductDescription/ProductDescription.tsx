'use client';

import Btn from '@/components/UI/Btn/Btn';
import {getParsedDate} from '@/src/helpers/hooks';
import {CopyOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import Link from 'next/link';
import parse from 'html-react-parser';

import React, {FC, useState} from 'react';
import {IService} from '../../types';
import s from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  productInfo: IService;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({productInfo}) => {
  const [message, setMessage] = useState('Копировать ссылку');

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <h2 className='text-lg mb-3'>Описание</h2>
          <p className='text-base text-[#6C7AA0]'>
            {productInfo?.description ? parse(productInfo?.description) : null}
          </p>
        </div>
      </div>
      <div className={s.wrapper}>
        <div>
          <h2 className='text-lg mb-3'>Характеристики</h2>
          <p className='text-base text-[#6C7AA0]'>
          Марка автомобиля  :{productInfo?.brand ? parse(productInfo?.brand) : null}
          </p>
          <p className='text-base text-[#6C7AA0]'>
          Модель автомобиля
          :{productInfo?.model ? parse(productInfo?.model) : null}
          </p>
          <p className='text-base text-[#6C7AA0]'>
          Тип кузова  :{productInfo?.body_type ? parse(productInfo?.body_type) : null}
          </p>
          <p className='text-base text-[#6C7AA0]'>
          Тип топлива  :{productInfo?.engine_type ? parse(productInfo?.engine_type) : null}
          </p>
          <p className='text-base text-[#6C7AA0]'>
          Тип трансмиссии  :{productInfo?.transmission ? parse(productInfo?.transmission) : null}
          </p>
          <p className='text-base text-[#6C7AA0]'>
          Тип привода  :{productInfo?.drivetrain ? parse(productInfo?.drivetrain) : null}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <div>
        </div>
        <div>        
        </div>
        {/* <Btn className='w-max sm:w-full'>Добавить в корзину</Btn> */}
      </div>
    </div>
  );
};
