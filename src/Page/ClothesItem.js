import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { getDoc, doc } from 'firebase/firestore';
import SizeGroup from '../Components/Sizegroup';

const ClothesItem = ({ product }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const oneDoc = await getDoc(doc(db, 'clothes', product));
      const dataDoc = oneDoc.data();
      console.log(dataDoc);
      setData(dataDoc);
    };
    getItem();
  }, [product]);

  return (
    <div className='w-full h-full p-10 flex justify-center'>
      <div className='flex flex-wrap gap-10 justify-center border border-sky-700 p-3 w-1/2'>
        <section>
          <img
            alt='img'
            src={data.imageURL}
            className='max-h-[600px] max-w-[450px]'
          ></img>
        </section>
        <section className='flex flex-col justify-between w-96'>
          <div>
            <div className='font-bold text-2xl'>{data.name}</div>
            <div className='text-xl'>{data.description}</div>
          </div>
          <SizeGroup />
          {/* <div>Sizes</div> */}
          <div className='flex justify-between'>
            <div className='text-3xl font-bold text-green-600'>
              {data.price}$
            </div>
            <div>add</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClothesItem;
