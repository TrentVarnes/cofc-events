import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  const [query, setQuery] = useState('');

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - CofC Events' : 'CofC Events'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header className="bg-gradient-to-r from-orange-100 to-red-800">
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a>
                <Image src="/images/cofclogo.png" height={40} width={150} />
              </a>
            </Link>
            <form
              onSubmit={submitHandler}
              className="mx-auto f-full hidden w-full justify-center md:flex"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="f-full rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search for an event"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2 text-black hover:text-amber-400">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
            </div>
            <div>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="Link" className="relative inline-block object-top">
                  <Menu.Button className=" text-black hover:text-amber-400">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute rounded z-50 right-0 w-56 origin-top-right bg-orange-100 shadow-lg ">
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link text-black hover:text-amber-400"
                        href="/profile"
                      >
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link text-black hover:text-amber-400"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link text-black hover:text-amber-400"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link text-black hover:text-amber-400 p-2"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2 text-black">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <div className="bar">
          <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright © 2022 CofC Events</p>
          </footer>
        </div>
      </div>
    </>
  );
}
