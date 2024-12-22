'use client';

import Btn from '@/components/UI/Btn/Btn';
import {SearchOutlined} from '@ant-design/icons';
import {Form, Input, InputNumber, Select, Space} from 'antd';
import React, {FC} from 'react';
import {useMutation} from 'react-query';
import s from './SearchBar.module.scss';

import {animated, useInView} from '@react-spring/web';
import {useForm} from 'antd/es/form/Form';

interface SearchBarProps {
  handleFilters: (filters) => void;
}

export const SearchBar: FC<SearchBarProps> = ({handleFilters}) => {
  const [form] = Form.useForm();
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h2 className='font-medium text-xl'>Поиск по каталогу</h2>
      <Form
        initialValues={{
          title: '',
          priceFrom: '',
          priceTo: '',
          type: 0
        }}
        onFinish={handleFilters}
        className='mt-5'
        layout='vertical'
      >
        <Space.Compact className='gap-5 w-full' >
          <Form.Item name='title' className='flex-grow w-full'>
            <Input
              placeholder="Введите"
              prefix={<SearchOutlined className='text-lg cursor-pointer text-[#6C7AA0] mr-5' />}
            />
          </Form.Item>
          <Form.Item name='type' className='w-1/3'>
            <Select options={[{label: "Марка", value: 0}, {label: "Модель", value: 1}]} />
          </Form.Item>
        </Space.Compact>
        <Space.Compact className='gap-5 flex items-center md:h-max md:flex-col'>
          <Space.Compact className='md:w-full gap-5'>
            <Form.Item label='Цена от' name='priceFrom'>
              <InputNumber<number>
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // eslint-disable-next-line no-useless-escape
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                className='w-[155px] md:w-full rounded-xl'
              />
            </Form.Item>
            <Form.Item label='Цена до' name='priceTo'>
              <InputNumber<number>
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // eslint-disable-next-line no-useless-escape
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                className='w-[155px] md:w-full rounded-xl'
              />
            </Form.Item>
          </Space.Compact>
        </Space.Compact>
        <Space.Compact className='w-full'>
          <Btn type='submit' className='mt-7 ml-auto'>
            Применить фильтры
          </Btn>
        </Space.Compact>
      </Form>
    </animated.div>
  );
};
