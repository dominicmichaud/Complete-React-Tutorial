import { useRef, useEffect, useState, useContext } from 'react';
import { Box } from 'react-bulma-components';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiMoreVertical } from "react-icons/fi";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { Context } from '../../context/store';

const hiddenMenuVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
};

const MoreMenu = ({ id }) => {
    const [gState, setGState] = useContext(Context);
    const [showMenu, setShowMenu] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const handleShowMenu = (e) => {
        e.preventDefault();
        setShowMenu(true);
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowMenu(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                setGState({ postDeleted: true, shoudRefetch: true });
            } else {
                setGState({ apiError: true, apiErrorType: 'delete' });
            }
        }).catch((err) => {
            setGState({ apiError: true, apiErrorType: 'delete' });
        });
    }

    return (
        <div className="more-menu-wrapper">
            <button
                className="more-actions-btn"
                onClick={handleShowMenu}
            >
                <FiMoreVertical />
            </button>
            <AnimatePresence exitBeforeEnter>
                {showMenu && (
                    <motion.div
                        className="hidden-menu"
                        animate="animate"
                        exit="initial"
                        initial="initial"
                        variants={hiddenMenuVariants}
                        ref={wrapperRef}
                    >
                        <Box>
                            <ul>
                                <li>
                                    <Link to={`/post/${id}`} className="more-link">
                                        <BsEye />
                                        View post
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="more-link">
                                        <BsPencil />
                                        Edit post
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" onClick={handleDelete} className="more-link">
                                        <BsTrash />
                                        Remove post
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

MoreMenu.propTypes = {
    id: PropTypes.number.isRequired,
}

export default MoreMenu;