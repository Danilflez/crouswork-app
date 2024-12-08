'use client';

import React, {FC, useEffect, useState} from 'react';
import s from './PopularContent.module.scss';

import {ProductsList} from '../ProductsList/ProductsList';
import {useMutation, useQuery} from 'react-query';
import {GetAllCars} from '../../api';
import {customNotification} from '@/src/helpers/customNotification';

interface PopularContentProps {
  title: string;
  priceFrom: number;
  priceTo: number;
}

export const PopularContent: FC<PopularContentProps> = ({title, ...props}) => {
  const [products, setProducts] = useState([]);
  const {mutate, isLoading} = useMutation(GetAllCars);

  useEffect(() => {
    return mutate(
      { title: '', priceFrom: '', priceTo:'' },
      {
        onSuccess: (data) => {
          if (!data?.cars) return;

          setProducts(data?.cars);
        }
      }
    );
  }, []);

  return (
    <div className={s.container}>
      <ProductsList title={title} productsList={products} isLoading={isLoading} />
    </div>
  );
};
