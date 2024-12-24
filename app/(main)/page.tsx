import {Banner} from '@/modules/Agency/Components/Banner/Banner';
import {CalculatePrice} from '@/modules/Agency/Components/CalculatePrice/CalculatePrice';
import {Consumers} from '@/modules/Agency/Components/Consumers/Consumers';
import {Description} from '@/modules/Agency/Components/Description/Description';
import {Feedback} from '@/modules/Agency/Components/Feedback/Feedback';
import {Portfolio} from '@/modules/Agency/Components/Portfolio/Portfolio';
import {Services} from '@/modules/Agency/Components/Services/Services';
import {Reviews} from '@/modules/Agency/Components/Reviews/Reviews'
import {Images} from '@/modules/Agency/Components/Images/Images.module.scss'
import React from 'react';

export default function Page() {
  return (
    <div>
      <Banner />
      <Description />
      <Consumers />
      <Portfolio />
      <Services />
      <Reviews />
      <Feedback />
      <CalculatePrice />
    </div>
  );
}
