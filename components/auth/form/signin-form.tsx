'use client';

import React, { useState, ChangeEvent } from 'react';
import { PasswordRevealIcon } from '@/assets/icons';
import { GoogleIcon } from '@/assets/icons';
import { FacebookIcon } from '@/assets/icons';
import { Vectorline } from '@/assets/icons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import Link from 'next/link';

const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.ok) {
        router.push(PAGE_ROUTES?.Dashboard);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <div className='w-full h-full flex-col flex justify-center'>
        <div className='max-w-[600px] w-full h-min m-auto flex flex-col gap-2'>
          <div className='left-[60%] -translate-x-1/2 top-[280px] absolute leading-[14.50px]'>
            <Vectorline />
          </div>
          {/* <div className='left-[60%] -translate-x-1/2 top-[376px] absolute text-black text-[13px] font-normal  leading-[14.50px]'>
            Or continue with
          </div> */}
          {/* <div className='left-[67%] -translate-x-1/2 top-[382px] absolute leading-[14.50px]'>
            <Vectorline />
          </div> */}
        </div>
        {/* <div className='max-w-[600px] w-full h-min m-auto flex flex-col gap-2'>
          <div className='w-[126px] h-[43px] left-[53.5%] -translate-x-1/2 top-[294px] absolute'>
            <div className='w-[126px] h-[43px] left-0 top-0 absolute bg-white rounded-[5px] border border-green-500'>
              <div className='left-[56px] top-[px] absolute text-black text-xs font-medium leading-[44px]'>
                Google
              </div>
              <div className='w-[22px] h-[22px] left-[26px] top-[10px] absolute'>
                <GoogleIcon />
              </div>
            </div>
          </div>

          <div className='w-[126px] h-[43px] left-[66%] -translate-x-1/2 top-[294px] absolute'>
            <div className='w-[126px] h-[43px] left-0 top-0 absolute bg-white rounded-[5px] border border-neutral-200'>
              <div className='w-[26px] h-[26px] left-[17px] top-[8px] absolute'>
                <div className='w-[26px] h-[26px] left-0 top-0 absolute'>
                  <FacebookIcon />
                </div>
              </div>
              <div className='left-[51px] top-[px] absolute text-black text-xs font-medium leading-[44px]'>
                Facebook
              </div>
            </div>
          </div>
        </div> */}

        <div className='left-[67%] -translate-x-1/2 top-[539px] absolute text-red-600 text-sm font-normal  leading-[14.50px] cursor-pointer'>
          <Link href={PAGE_ROUTES.Forgetpassword} className='mr-2'>
            Recover Password
          </Link>
        </div>

        <div className='w-[148px] h-5 left-[53.5%] -translate-x-1/2 top-[536px] absolute'>
          <label className='relative inline-flex items-center mb-5 cursor-pointer'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className='sr-only peer'
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-600"></div>
            <span className='ms-3 text-sm'>Remember me</span>
          </label>
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[320px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium leading-[14px]'>Email</div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Email here'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
                className='w-[70%] px-2 py- focus:outline-none '
              />
            </div>
          </div>
        </div>

        <div className='h-[77px] left-[60%] -translate-x-1/2 top-[410px] absolute flex-col justify-start items-start gap-2 inline-flex'>
          <div className='text-blue-900 text-xs font-medium  leading-[14px]'>
            Password
          </div>
          <div className='w-[400px] px-3 py-[15.50px] bg-white rounded-[10px] border border-zinc-100 justify-start items-center gap-5 inline-flex'>
            <div className='grow shrink basis-0 h-6 justify-start items-start gap-3 flex'>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
                className='w-[80%] px-2 py-  focus:outline-none '
              />
            </div>

            <div
              className='w-5 h-5 relative cursor-pointer'
              onClick={handlePasswordVisibilityToggle}>
              <PasswordRevealIcon />
            </div>
          </div>
        </div>

        <div>
          <button
            style={{ backgroundColor: '#5630FF' }}
            className='w-[400px] h-[57.75px] left-[60%] -translate-x-1/2 top-[612px] absolute text-white text-lg font-semibold  leading-[14.50px] rounded-md px-4 py-2 cursor-pointer'
            onClick={handleLogin}>
            Log in
          </button>
        </div>

        <div className='left-[60%] -translate-x-1/2 top-[234px] absolute text-black text-lg font-normal leading-[29.16px]'>
          Login into your account
        </div>
        <div className='left-[60%] -translate-x-1/2 top-[184px] absolute text-black text-4xl font-semibold  leading-[44px]'>
          Welcome Back
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
