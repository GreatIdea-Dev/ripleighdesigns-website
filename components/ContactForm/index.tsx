/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';
export default function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.stopPropagation();
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'ea67efe1-0b54-4409-a013-e49ad616bfc6',
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        services: formData.get('services'),
        message: formData.get('message'),
      }),
    });
    const result = await response.json();
    if (result.success) {
      window.alert(result.message);
    }
  }
  return (
    <div className='w-full px-8 flex flex-col items-center justify-center'>
      <div className='p-8 max-w-3xl flex flex-col justify-center items-center gap-4'>
        <h1 className='text-6xl h-20 font-bold bg-gradient-to-bl from-purple-600 to-indigo-500 bg-clip-text text-transparent'>
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
              Choose a service:
            </label>
            <select
              name='services'
              className='border-2 border-gray-300 text-lg placeholder-gray-300 w-full px-2 py-3 bg-white rounded-lg focus:border-violet-500 focus-within:ring-0 focus:ring-offset-0 focus:outline-none'
            >
              <option value='t-shirts'>T-shirts</option>
              <option value='custom-branding'>Custom Branding</option>
              <option value='logos'>Logos</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div className='flex flex-col items-start justify-center w-full gap-2'>
            <label className='font-medium text-large text-gray-600' htmlFor='message'>
              Your message
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
