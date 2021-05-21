import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import _ from "lodash";
import { Navbar } from 'react-bulma-components';
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import NinjaStarLogo from '../../images/ninjastar-logo.svg';

const logoVariants = {
    initial: {
        scale: 1,
        rotate: 0,
    },
    animated: {
        scale: 1.15,
        rotate: 180,
    },
};

const NavbarMenu = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const { innerWidth: width } = window;

    useEffect(() => {
        setShowMenu(false)
    }, [location])

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
    }

    const changeBg = () => {
        if (width > 768) {
            if (window.scrollY >= 275) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        } else {
            if (window.scrollY >= 80) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        }
    }

    window.addEventListener('scroll', _.throttle(changeBg, 1000));

    return (
        <Navbar
            transparent
            fixed="top"
            className={navBar ? 'navbar-scroll-active' : ''}
        >
            <Navbar.Brand>
                <Navbar.Item
                    to="/"
                    renderAs={Link}
                >
                    <motion.div
                        className="animated-logo"
                        initial="initial"
                        whileHover="animated"
                        variants={logoVariants}
                    >
                        <img src={NinjaStarLogo} className="main-logo" alt="Ninja Logo" />
                    </motion.div>
                </Navbar.Item>
                <Navbar.Burger
                    data-target="navMenu"
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={handleBurgerClick}
                    className={showMenu ? 'is-active' : ''}
                />
            </Navbar.Brand>
            <Navbar.Menu
                id="navMenu"
                className={showMenu ? 'is-active' : ''}
            >
                <Navbar.Container>
                    <Navbar.Item dropdown="true" hoverable="true">
                        <Navbar.Link>
                            Posts
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item
                                to="/posts"
                                renderAs={Link}
                                active={location.pathname === '/posts'}
                            >
                                All posts
                            </Navbar.Item>
                            <Navbar.Divider />
                            <Navbar.Item
                                to="/create"
                                renderAs={Link}
                                active={location.pathname === '/create'}
                                className="nav-add-post"
                            >
                                New post
                                <FiPlus />
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default NavbarMenu;