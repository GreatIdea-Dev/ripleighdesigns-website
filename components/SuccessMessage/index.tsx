'use client';

import Wordmark from '../Wordmark';

export default function SuccessMessage() {
  return (
    <div className='w-full px-8 flex flex-col items-center justify-center'>
      <div className='p-8 max-w-3xl flex flex-col justify-center items-center gap-4'>
        <div className='text-purple-950 w-full'>
          <Wordmark />
        </div>
        <h1 className='text-4xl h-auto text-center font-bold bg-gradient-to-bl from-purple-600 to-indigo-500 bg-clip-text text-transparent'>
          Message Successfully Sent!
        </h1>
        <p className='text-xl px-4 text-center'>
          Thanks for reaching out! We will contact you as soon as possible to discuss all of the
          details regarding your request!
        </p>
      </div>
    </div>
  );
}
