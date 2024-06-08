import { Routes } from '@/lib/data/routes';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSchedule } from 'react-icons/ai';

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';

import { useState } from 'react';
import { CiLogin } from 'react-icons/ci';

interface HeaderProps {
  loginFlag: boolean;
}

interface MenuListProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ loginFlag }) => {
  const [open, setOpen] = useState(false);
  //const router = useRouter();

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 z-10 shadow-md">
        <div className="fixed w-full">
          <nav className="flex w-full justify-between bg-white lg:h-16 lg:px-6">
            <div className="flex w-full items-center">
              <div className="block w-full">
                <ul className="select-none lg:flex">
                  <li>
                    {/* smは画像を表示しない */}
                    <Link href={Routes.INDEX.url} className="i--sm-hidden">
                        <Image
                          src="/lp/util/logo_long.png"
                          width={128}
                          height={64}
                          alt="プライム"
                        />
                      </Link>

                    <div className="flex h-14 w-full items-center justify-between lg:hidden">
                      <div className="flex px-3">
                        {!open && (
                          <svg
                            onClick={onClickOpen}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            role="img"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                          </svg>
                        )}
                        {open && (
                          <svg
                            onClick={onClickClose}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>

                      <Link href={Routes.INDEX.url} className="">
                        <Image
                          src="/lp/util/logo_long.png"
                          width={128}
                          height={64}
                          alt="プライム"
                        />
                      </Link>

                      <div className="flex px-3 py-2">
                        <Link href={Routes.INDEX.url}>
                          <CiLogin />
                        </Link>
                      </div>

                      {/* ログアウトボタン */}
                      {/* <div className="mr-2 flex w-12">
                        {loginFlag && (
                          <form method="post" action="/logout">
                            <button
                              type="submit"
                              className="focus:outline-one inline-block bg-white px-0 py-1 text-center text-xs font-medium uppercase leading-tight text-gray-500 transition ease-in-out focus:ring-0"
                            >
                              <IoIosLogOut width={128} />
                              <br />
                            </button>
                          </form>
                        )}
                      </div> */}
                    </div>
                  </li>
                  <div className="w-full h-1 header-bottom fixed lg:top-16 md:top-[52px] box"></div>
                  {open && <MenuList className="lg:hidden menu-list" />}
                  <MenuList className="hidden lg:list-item ml-4 menu-list" />
                </ul>
              </div>
            </div>

            <div className="hidden shrink-0 items-center lg:flex">
              {!loginFlag && (
                <Link href="/authlogin" className="self-center rounded px-8 py-3 menu-list">
                  ログイン
                </Link>
              )}
              {!loginFlag && (
                <Link
                  href="/accountnew"
                  className="self-center rounded bg-yellow-400 px-8 py-3 font-semibold text-gray-800"
                >
                  新規登録
                </Link>
              )}
              {loginFlag && (
                <form method="post" action="/logout">
                  <button className="self-center rounded bg-red-400 px-4 py-3 text-white">
                    ログアウト
                  </button>
                </form>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const MenuList: React.FC<MenuListProps> = ({ className }) => {
  return (
    <>
      <li className={className}>
        <Link
          href="/"
          className="flex h-12 w-full items-center border-2 bg-gray-100 lg:bg-white text-gray-800 transition duration-150 ease-in-out hover:underline lg:hover:no-underline focus:border-gray-800 focus:text-gray-400 focus:underline lg:focus:no-underline lg:h-full lg:w-auto lg:border-0 lg:border-gray-200  py-2 px-4 rounded-lg"
        >
          <AiOutlineHome className="mr-2" />
          HOME
        </Link>
      </li>
      <li className={className}>
        <Link
          href={Routes.GoogleForm.url}
          className="flex h-12 w-full items-center border-2 bg-gray-100 lg:bg-white text-gray-800 transition duration-150 ease-in-out hover:underline lg:hover:no-underline focus:border-gray-800 focus:text-gray-400 focus:underline lg:focus:no-underline lg:h-full lg:w-auto lg:border-0 lg:border-gray-200  py-2 px-4 rounded-lg"
        >
          <AiOutlineSchedule className="mr-2" />
          体験会に参加
        </Link>
      </li>
      <li className={className}>
        <Link
          href={Routes.BlogPage.url}
          className="flex h-12 w-full items-center border-2 bg-gray-100 lg:bg-white text-gray-800 transition duration-150 ease-in-out hover:underline lg:hover:no-underline focus:border-gray-800 focus:text-gray-400 focus:underline lg:focus:no-underline lg:h-full lg:w-auto lg:border-0 lg:border-gray-200  py-2 px-4 rounded-lg"
        >
          <MdOutlineArticle className="mr-2" />
          エンジニアブログ
        </Link>
      </li>
      {/* 他のメニュー項目を追加 */}
    </>
  );
};

export default Header;
