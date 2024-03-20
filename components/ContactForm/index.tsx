/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import Wordmark from '../Wordmark';

export default function ContactForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '503d5901-a4ac-458b-a5e8-4e8e28d220b2',
        'First Name': formData.get('firstName'),
        'Last Name': formData.get('lastName'),
        'Email Address': formData.get('email'),
        'Phone Number': formData.get('phone'),
        'Interested in Services:': formData.get('services'),
        Message: formData.get('message'),
      }),
    });
    const result = await response.json();
    if (result.success) {
      router.push('/success');
    }
  }

  return (
    <div className='w-full px-8 flex flex-col items-center justify-center'>
      <div className='p-8 max-w-3xl flex flex-col justify-center items-center gap-4'>
        <div className='text-purple-950 w-full'>
          <Wordmark />
        </div>
        <h1 className='text-6xl h-auto pb-2 text-center font-bold bg-gradient-to-bl from-purple-600 to-indigo-500 bg-clip-text text-transparent'>
          Say Hello!
        </h1>
        <p className='text-xl px-4 text-center'>
          Drop us a line and let us know how we can turn your ideas into reality!
        </p>
      </div>
      <div className='w-full p-16 flex flex-col items-center justify-center border-2 border-violet-500 max-w-3xl rounded-3xl'>
        <form
          className='flex flex-col items-center justify-center w-full gap-4'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='firstName'>
              First Name
            </label>
            <input
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full p-2 rounded-lg focus:border-violet-500 focus:ring-0 focus:ring-offset-0 focus:outline-none'
              type='text'
              name='firstName'
              id='firstName'
              placeholder='e.g. "John"'
              required
            />
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='lastName'>
              Last Name
            </label>
            <input
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full p-2 rounded-lg focus:border-violet-500 focus:ring-0 focus:ring-offset-0 focus:outline-none'
              type='text'
              name='lastName'
              id='lastName'
              placeholder='e.g. "Doe"'
              required
            />
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='email'>
              Email Address
            </label>
            <input
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full p-2 rounded-lg focus:border-violet-500 focus-within:ring-0 focus:ring-offset-0 focus:outline-none'
              type='email'
              name='email'
              id='email'
              placeholder='e.g. "johndoe@example.com"'
              required
            />
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='phone'>
              Phone Number
            </label>
            <input
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full p-2 rounded-lg focus:border-violet-500 focus:ring-0 focus:ring-offset-0 focus:outline-none'
              type='tel'
              name='phone'
              placeholder='e.g. "555-555-5555"'
              required
            />
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='services'>
              What services are you interested in?
            </label>
            <select
              name='services'
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full px-2 py-3 bg-white rounded-lg focus:border-violet-500 focus-within:ring-0 focus:ring-offset-0 focus:outline-none'
            >
              <option value='T-Shirt Design'>T-shirts</option>
              <option value='Custom Branding'>Custom Branding</option>
              <option value='Logo Design'>Logos</option>
              <option value='Merchandise'>Merchandise</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='message'>
              Your message:
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Type your message here...'
              className='border-2 h-48 border-gray-300 text-lg placeholder-gray-300 w-full p-2 bg-white rounded-lg focus:border-violet-500 focus-within:ring-0 focus:ring-offset-0 focus:outline-none'
            />
          </div>
          <div className='w-full flex flex-row justify-center items-center pt-4'>
            <button
              type='submit'
              className='border-2 bg-violet-500 text-white text-xl px-6 py-2 cursor-pointer border-violet-500 rounded-lg hover:bg-violet-600 hover:border-violet-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
