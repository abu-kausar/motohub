"use client";
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string, value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());

    router.push(newPathName);
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e)
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className='custom-filter__btn'>
            <span className='block truncate'>
              {selected.title}
            </span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='up down'
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className="custom-filter__options">
              {
                options.map((option) => (
                  <ListboxOption
                    key={option.title}
                    value={option}
                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.title}
                      </span>
                    )}
                  </ListboxOption>
                ))
              }
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter