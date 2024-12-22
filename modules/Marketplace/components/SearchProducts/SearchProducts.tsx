'use client';

import {useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {GetAllCars} from '../../api';
import {ProductsList} from '../ProductsList/ProductsList';
import {SearchBar} from '../SearchBar/SearchBar';

export const SearchProducts = () => {
  const {mutate, isLoading} = useMutation(GetAllCars);
  const [services, setServices] = useState([]);

  const handleFilters = (value: {title: string; priceFrom: string; priceTo: string, type: number}) => {

    mutate(
      {...value, priceFrom: value.priceFrom ?? 0, priceTo: value.priceTo ?? 0},
      {
        onSuccess: (data) => {
          if (!data?.cars) return;

          setServices(data?.cars);
        }
      }
    );
  };

  useEffect(() => {
    handleFilters({title: '', priceFrom: '', priceTo: '', type: 0});
  }, []);

  return (
    <div>
      <SearchBar handleFilters={handleFilters} />
      <ProductsList title='Список авто' productsList={services} isLoading={isLoading} />
    </div>
  );
};
