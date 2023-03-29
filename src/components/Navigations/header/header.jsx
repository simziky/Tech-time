import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../../Assets/images/techtime.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Course</Link>
            </li>
            <li>
              <Link to="#">Testimonials</Link>
            </li>
            <li>
              <Link to="#">Community</Link>
            </li>
          </ul>

          <button className="header-btn">Enroll Now</button>
        </nav>

        {/*************************Responsive hamburger Menu********************************/}
        <div className="responsive">
          <HamburgerIcon
            ref={btnRef}
            color="white"
            h={9}
            w={8}
            onClick={onOpen}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            className="drawer"
          >
            <DrawerOverlay />
            <DrawerContent className="drawer-content">
              <DrawerCloseButton />
              <DrawerHeader>{""}</DrawerHeader>

              <DrawerBody className="drawer-body">
                <ul className="drawer-ul">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Course</Link>
                  </li>
                  <li>
                    <Link to="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="#">Community</Link>
                  </li>
                </ul>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>

        {/*******************End of responsive navbar********************************/}
      </div>
    </header>
  );
};

export default Header;
