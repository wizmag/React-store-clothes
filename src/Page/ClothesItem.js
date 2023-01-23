import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { getDoc, doc } from 'firebase/firestore';

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
    <div className='w-full h-full p-10 overflow-hidden relative'>
      <div className='flex flex-wrap gap-10 justify-center'>
        <section>
          <img
            alt='img'
            src={data.imageURL}
            className='max-h-[500px] max-w-[450px]'
          ></img>
        </section>
        <section className='flex flex-col justify-between w-96'>
          <div>
            <div className='font-bold text-2xl'>{data.name}</div>
            <div className='text-xl'>{data.description}</div>
          </div>
          <div>Sizes</div>
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
