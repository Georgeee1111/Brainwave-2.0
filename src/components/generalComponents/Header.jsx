import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../../assets";
import Button from "./Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { useState } from "react";
import { HamburgerMenu } from "../design/Header";
import { headerNavigationPropType } from "../../assets/header/HeaderComponent";

const Header = ({ navigation }) => {
  const pathname = useLocation().hash;
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };

  return (
    <>
      {openNavigation && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40"
          onClick={toggleNavigation}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="/">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold ${
                    item.url === pathname
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
              <a
                href="/SignUp"
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  openNavigation ? "" : "hidden"
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={handleClick}
              >
                New Account
              </a>
              <a
                href="/login"
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  openNavigation ? "" : "hidden"
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={handleClick}
              >
                Sign in
              </a>
            </div>
            <HamburgerMenu />
          </nav>

          <a
            href="/SignUp"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            new Account
          </a>
          <Button to="/login" className="hidden lg:flex">
            Sign in
          </Button>

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  navigation: headerNavigationPropType,
};

export default Header;
