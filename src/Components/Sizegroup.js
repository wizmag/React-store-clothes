import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const sizes = [
  {
    name: 'XL',
    index: 1,
  },
  {
    name: 'L',
    index: 2,
  },
  {
    name: 'M',
    index: 3,
  },
  {
    name: 'S',
    index: 4,
  },
  {
    name: 'XS',
    index: 5,
  },
];
const SizeGroup = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className='w-full px-4 py-16'>
      <div className='mx-auto w-full max-w-md'>
        <div className='text-xl font-bold'>Sizes</div>
        <RadioGroup value={selected} onChange={setSelected}>
          <div className='space-y-2'>
            {sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-700 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className='flex items-center'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {size.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default SizeGroup;
