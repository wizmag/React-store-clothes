import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const choiceTypeClothes = (type) => {
  return query(collection(db, 'clothes'), where('category', '==', type));
};

const discount = 0.5;

const Clothes = ({ type }) => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(choiceTypeClothes(type));

      const res = [];
      querySnapshot.forEach((doc) => {
        res.push(doc.data());
      });
      setData(res);
    };
    getItems();
  }, [type]);

  return (
    <div className='w-full h-full p-10 overflow-hidden relative'>
      <div className='flex flex-wrap gap-8'>
        {data &&
          data.map((item) => (
            <div
              className='flex flex-col gap-2 border hover:scale-105 duration-200'
              key={item.id}
            >
              <button>
                <img
                  src={item.imageURL}
                  alt='img'
                  className='max-h-[500px] max-w-[450px]'
                ></img>
              </button>
              <div className='flex flex-col gap-1 items-center pb-2'>
                <p className='font-bold text-2xl'>{item.name}</p>
                <p className='text-sm'>{item.description}</p>
                {type === 'Sales' ? (
                  <>
                    <p className='text-3xl font-bold text-red-600 line-through'>
                      {item.price}$
                    </p>
                    <p className='text-3xl font-bold text-green-600'>
                      {item.price * discount}$
                    </p>
                  </>
                ) : (
                  <p className='text-3xl font-bold text-green-600'>
                    {item.price}$
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Clothes;
