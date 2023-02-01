import React from 'react';
import { ToggleAll } from 'component/atoms/index';

function SectionMain({ children }) {
   return (
      <section className='main'>
         { children }
      </section>
   );
};

SectionMain.ToggleAll = ToggleAll;

export default SectionMain;
