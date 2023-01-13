import React, { useRef, useState } from 'react';
import { doc, setDoc, FirestoreError } from 'firebase/firestore';
import { db, storage } from '../Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { toastConfig } from '../Toastconfig';
import Dropmenuitem from '../Components/Dropmenuitem';

const Editdatabase = () => {
  const nameRef = useRef();
  const descrRef = useRef();
  const priceRef = useRef();
  const [isFetching, setIsFetching] = useState();
  const [isCategory, setIsCategory] = useState('');

  const itemMenu = (item) => {
    setIsCategory(item);
  };

  const itemHandler = async (e) => {
    e.preventDefault();
    const id = v4();
    try {
      setIsFetching(true);
      const file = e.currentTarget.elements.files.files[0];

      const storageRef = ref(
        storage,
        `${e.currentTarget.elements.files.files[0].name + id}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (_) => {},
        (_) => {},
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await setDoc(doc(db, 'clothes', id), {
            id: id,
            category: isCategory,
            name: nameRef.current.value,
            description: descrRef.current.value,
            price: +priceRef.current.value,
            imageURL: downloadURL,
          });
          toast.success('Item was added successfully', toastConfig);
        }
      );
    } catch (error) {
      if (error instanceof FirestoreError) {
        toast.error(error.message, toastConfig);
      } else {
        toast.error(error.message, toastConfig);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className='h-full w-full'>
      <form className='flex flex-col px-8 gap-2' onSubmit={itemHandler}>
        <p className='font-bold text-3xl'>Add Item</p>
        <div>
          <input type='file' id='files' />
        </div>
        <label className='text-3xl'>Category</label>
        <Dropmenuitem onChange={itemMenu} />
        <label className='text-3xl'>Name</label>
        <input
          type='text'
          ref={nameRef}
          className='border border-gray-400 w-80 pl-2 h-9'
        />
        <label className='text-3xl'>Description</label>
        <input
          type='text'
          ref={descrRef}
          className='border border-gray-400 w-80 pl-2 h-9'
        />
        <label className='text-3xl'>Price, $</label>
        <input
          type='number'
          min='1'
          ref={priceRef}
          className='border border-gray-400 w-80 pl-2 h-9'
        />
        <div className='mt-4'>
          <button
            type='submit'
            className='font-bold text-3xl border border-black bg-slate-200 px-8 h-11 active:bg-slate-400'
            disabled={isFetching}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editdatabase;
