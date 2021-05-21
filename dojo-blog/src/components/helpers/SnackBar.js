import React, { useEffect, useContext, useState } from 'react';
import { Block, Button, Container, Columns, Notification } from 'react-bulma-components';
import { AnimatePresence, motion } from "framer-motion";
import { Context } from '../../context/store';

const snackbarVariants = {
    initial: {
        opacity: 0,
        bottom: -500,
    },
    animate: {
        opacity: 1,
        bottom: 24,
    },
};

const SnackBar = () => {
    const [showSnack, setShowSnack] = useState(false);
    const [snackColor, setSnackColor] = useState('');
    const [snackMsg, setSnackMsg] = useState('Default message');
    const [gState, setGState] = useContext(Context);
    const { postCreated, postUpdated, postDeleted, apiError, apiErrorType } = gState;

    useEffect(() => {
        if (postCreated) {
            setSnackColor('success');
            setSnackMsg('Post created successfully!');
            setShowSnack(true);
        } else if (postUpdated) {
            setSnackColor('success');
            setSnackMsg('Post updated successfully!');
            setShowSnack(true);
        } else if (postDeleted) {
            setSnackColor('success');
            setSnackMsg('Post deleted successfully!');
            setShowSnack(true);
        } else if (apiError) {
            if (apiErrorType === 'fetch') {
                setSnackMsg('Error while fetching data.');
            } else if (apiErrorType === 'create') {
                setSnackMsg('Error while creating post.');
            } else if (apiErrorType === 'delete') {
                setSnackMsg('Error while deleting post.');
            }
            setSnackColor('danger');
            setShowSnack(true);
        }

        if (postCreated || postUpdated || postDeleted || apiError) {
            setTimeout(() => {
                setShowSnack(false);
                setGState({
                    postCreated: false,
                    postUpdated: false,
                    postDeleted: false,
                    apiError: false,
                    apiErrorType: ''
                });
            }, 6000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setShowSnack, setGState, postCreated, postUpdated, postDeleted, apiError]);

    return (
        <AnimatePresence exitBeforeEnter>
            {showSnack && (
                <motion.div
                    className="snackbar-wrapper"
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={snackbarVariants}
                >
                    <Container fullhd>
                        <Columns fullhd centered>
                            <Columns.Column size="one-quarter">
                                <Block>
                                    <Notification color={snackColor}>
                                        {snackMsg}
                                        <Button
                                            remove
                                            onClick={() => setShowSnack(false)}
                                        />
                                    </Notification>
                                </Block>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SnackBar;
