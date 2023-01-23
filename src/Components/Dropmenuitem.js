import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const category = [
  { name: 'Overcoat' },
  { name: 'Blouse' },
  { name: 'Jeans' },
  { name: 'Shorts' },
  { name: 'Other' },
  { name: 'New Collection' },
  { name: 'Sales' },
  { name: 'Bags' },
];

const Dropmenuitem = (props) => {
  const [selected, setSelected] = useState(category[0]);
  props.onChange(selected.name);

  return (
    <div className='flex flex-start'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-80 cursor-pointer bg-white py-2 pl-3 pr-10 text-left border border-gray-400 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ExpandMoreIcon className='h-5 w-5 text-gray-400' />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {category.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropmenuitem;
