import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../../assets";
import Button from "./Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { useState } from "react";
import { HamburgerMenu } from "../design/Header";
import { headerNavigationPropType } from "../../assets/header/HeaderComponent";

const Header = ({ navigation }) => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleLinkClick = (event, targetId) => {
    const target = document.getElementById(targetId);

    if (target) {
      // If the target is found, it means we're trying to scroll within the same page.
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });

      if (openNavigation) {
        enablePageScroll();
        setOpenNavigation(false);
      }
    }
    // If the target is not found, we let the default behavior happen, which is navigation.
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
          <Link className="block w-[12rem] xl:mr-8" to="/#home">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </Link>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={(e) => handleLinkClick(e, item.url.split("#")[1])}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold ${
                    item.url === location.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                to="/SignUp"
                onClick={(e) => handleLinkClick(e, "SignUp")}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  openNavigation ? "" : "hidden"
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                New Account
              </Link>
              <Link
                to="/login"
                onClick={(e) => handleLinkClick(e, "login")}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  openNavigation ? "" : "hidden"
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semi-bold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                Sign in
              </Link>
            </div>
            <HamburgerMenu />
          </nav>

          <Link
            to="/SignUp"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </Link>
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
