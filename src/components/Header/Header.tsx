"use client";

import Link from "next/link";
import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import ThemeContext from "@/context/themeContext";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";
import { usePathname, useRouter } from "next/navigation";
import { IMenu } from "@/types/home";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const router = useRouter();
  const pathname = usePathname();

  const imgLogo = useMemo(() => {
    return darkTheme ? `/images/logo-text.png` : `/images/logo-text-dark.png`;
  }, [darkTheme]);

  const [isOpen, setIsOpen] = useState(false);

  const menus: IMenu[] = [
    {
      label: "Home",
      // icon:
      href: "/",
    },
    {
      label: "About",
      // icon:
      href: "/about",
    },
    {
      label: "Contact",
      // icon:
      href: "/contact",
    },
  ];

  const goToPage = (item: IMenu) => {
    setIsOpen(false);
    if (item.href === window.location.pathname) return;
    router.push(item.href);
  };

  return (
    <Fragment>
      <header className="container mx-auto px-4 flex justify-between items-center h-14 md:h-20">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={imgLogo}
              className="w-[110px] md:w-[180px]"
              alt={""}
              width={100}
              height={50}
            />
          </Link>
          {darkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem("hotel-theme");
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem("hotel-theme", "true");
              }}
            />
          )}
        </div>

        {/* Mobile - hamburger button*/}
        <>
          <BsList
            size={32}
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="absolute top-0">
            <Menu
              isOpen={isOpen}
              right
              customBurgerIcon={false}
              customCrossIcon={false}
              onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            >
              {menus.map((item, index) => (
                <div
                  key={index}
                  className="menu-items"
                  onClick={() => goToPage(item)}
                >
                  {item.label}
                </div>
              ))}
            </Menu>
          </div>
        </>

        {/* Desktop */}
        <div className="hidden md:flex gap-4">
          {menus.map((item, index) => (
            <div
              key={index}
              className="menu-items hover:-translate-y-2 duration-500 transition-all hover:cursor-pointer"
              onClick={() => goToPage(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
