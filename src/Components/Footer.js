import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const company_item = ['About', 'Partners', 'Requisites'];
const contacts_item = [
  '52 Forest Green, South palm 435',
  '+1 234 56 78',
  'wizz-support@gmail.com',
];

const Footer = () => {
  return (
    <div className='h-full flex justify-between px-10 py-6 bg-shine1'>
      <section className='flex-1 flex justify-center'>
        <div>
          <div className='font-bold mb-3 italic'>Company</div>
          {company_item.map((item) => (
            <ul>
              <li className='cursor-pointer hover:underline' key={item}>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </section>
      <section className='flex-1 flex justify-center'>
        <div>
          <div className='font-bold mb-3 italic'>Contacts</div>
          {contacts_item.map((item) => (
            <ul>
              <li className='cursor-pointer hover:underline' key={item}>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </section>
      <section className='flex-1 flex justify-center'>
        <div>
          <div className='font-bold mb-3 italic'>Connected</div>
          <div className='flex gap-8'>
            <div className='h-10 w-10 bg-blue-600 rounded-[50%] text-white flex justify-center items-center cursor-pointer'>
              <TwitterIcon />
            </div>
            <div className='h-10 w-10 bg-amber-800 rounded-[50%] text-white flex justify-center items-center cursor-pointer'>
              <InstagramIcon />
            </div>
            <div className='h-10 w-10 bg-blue-900 rounded-[50%] text-white flex justify-center items-center cursor-pointer'>
              <FacebookIcon />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
