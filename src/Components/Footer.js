import React from 'react';

const Footer = () => {
  return (
    <div className='h-full flex justify-between'>
      <section className='flex-1'>
        <div>Company</div>
        <div>About</div>
        <div>Partners</div>
        <div>Requisites</div>
      </section>
      <section className='flex-1'>
        <div>Contacts</div>
        <div>Telephone</div>
        <div>Adress</div>
        <div>Email</div>
      </section>
      <section className='flex-1'>
        <div>Connected</div>
        <div>Twitter</div>
        <div>Instagramm</div>
        <div>Facebook</div>
      </section>
    </div>
  );
};

export default Footer;
