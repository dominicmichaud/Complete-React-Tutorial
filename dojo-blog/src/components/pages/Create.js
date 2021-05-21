import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Block, Box, Columns, Container, Form, Notification, Section } from 'react-bulma-components';
import { useForm, Controller } from "react-hook-form";
import FloatingActionButton from '../buttons/FloatingActionButton';
import SubmitLoader from '../helpers/SubmitLoader';
import RichTextEditor from '../rich_editor/RichTextEditor';
import { Context } from '../../context/store';
import HeroBanner from '../hero/HeroBanner';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';
import SiteFooter from '../footer/Footer';

const Create = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const [isPending, setIsPending] = useState(false);
    const [createError, setCreateError] = useState(false);
    const [gState, setGState] = useContext(Context);
    const history = useHistory();

    const onSubmit = (data) => {
        // Submit is Valid
        // create new post
        setIsPending(true);
        const { postTitle, postAuthor, postContent } = data;
        const newPost = { title: postTitle, author: postAuthor, body: postContent };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        }).then((res) => {
            if (res.ok) {
                setValue('postTitle', '');
                setValue('postAuthor', '');
                setValue('postContent', '');
                setIsPending(false);
                setGState({ postCreated: true, shouldRefetch: true });

                setTimeout(() => {
                    history.push('/');
                }, 5000);
            }
        }).catch((err) => {
            setGState({ apiError: true, apiErrorType: 'create' });
            setCreateError(true);
            setIsPending(false);
        });
    };

    const CreateErrorNotification = () => (
        <Block>
            <Notification color="danger">
                Sorry.. an error occurred and prevented the creation of the post.
                <br />
                Refresh and try again.
            </Notification>
        </Block>
    )

    return (
        <div className="create-form-content">
            <HeroBanner
                gradientBgClassname="gradient-bg-2"
                title="Add a new Post"
            />
            <Section className="form-wrapper">
                {isPending && <SubmitLoader />}
                <Container fullhd>
                    <Columns fullhd centered className="form-container">
                        <Columns.Column size="half">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <AnimatedPageTransition>
                                    <Box>
                                        <p className="required-notice">* Required</p>
                                        <Form.Field>
                                            <Form.Label>Title *</Form.Label>
                                            <Form.Control>
                                                <Controller
                                                    control={control}
                                                    name="postTitle"
                                                    rules={{ required: true }}
                                                    defaultValue=""
                                                    render={({
                                                        field: { onChange, name, value },
                                                        fieldState: { invalid }
                                                    }) => {
                                                        return (
                                                            <Form.Input
                                                                onChange={onChange}
                                                                name={name}
                                                                color={invalid ? 'danger' : 'text'}
                                                                value={value}
                                                            />
                                                        )
                                                    }}
                                                />
                                                {errors.postTitle && (
                                                    <Form.Help color="danger">This field is required</Form.Help>
                                                )}
                                            </Form.Control>
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Label>Author *</Form.Label>
                                            <Form.Control>
                                                <Controller
                                                    control={control}
                                                    name="postAuthor"
                                                    rules={{ required: true }}
                                                    defaultValue=""
                                                    render={({
                                                        field: { onChange, name, value },
                                                        fieldState: { invalid }
                                                    }) => {
                                                        return (
                                                            <Form.Select
                                                                onChange={onChange}
                                                                name={name}
                                                                value={value}
                                                                color={invalid ? 'danger' : 'text'}
                                                            >
                                                                <option value="">Choose...</option>
                                                                <option value="Travis McTwist">Travis McTwist</option>
                                                                <option value="Shaun NinjaMaster">Shaun NinjaMaster</option>
                                                                <option value="Luigi Bowser">Luigi Bowser</option>
                                                            </Form.Select>
                                                        )
                                                    }}
                                                />
                                                {errors.postAuthor && (
                                                    <Form.Help color="danger">This field is required</Form.Help>
                                                )}
                                            </Form.Control>
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Label>Body Text *</Form.Label>
                                            <Form.Control>
                                                <Controller
                                                    control={control}
                                                    name="postContent"
                                                    rules={{ required: true }}
                                                    defaultValue=""
                                                    render={({
                                                        field: { onChange, value },
                                                        fieldState: { invalid },
                                                    }) => {
                                                        return (
                                                            <RichTextEditor
                                                                handleRTEChange={onChange}
                                                                currentContent={value}
                                                                isInvalid={invalid}
                                                            />
                                                        )
                                                    }}
                                                />
                                                {errors.postContent && (
                                                    <Form.Help color="danger">This field is required</Form.Help>
                                                )}
                                            </Form.Control>
                                        </Form.Field>
                                    </Box>
                                </AnimatedPageTransition>
                                {!isPending && (
                                    <FloatingActionButton
                                        actionHandler={handleSubmit}
                                        actionName="save"
                                    />
                                )}
                            </form>
                            {createError && <CreateErrorNotification />}
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <SiteFooter />
        </div>
    );
}

export default Create;