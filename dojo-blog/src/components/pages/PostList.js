import { Block, Box, Columns, Container, Heading, Section } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import useFetch from '../../hooks/useFetch';
import EmptyData from '../emptyData/EmptyData';
import ErrorFetch from '../errorFetch/ErrorFetch';
import HeroBanner from '../hero/HeroBanner';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';
import SiteFooter from '../footer/Footer';

const PostList = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    const allDataSorted = data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));

    return (
        <div className="homepage-content">
            <HeroBanner
                title="All Posts"
            />
            <Section>
                <Container>
                    <AnimatedPageTransition>
                        <Columns
                            fullhd
                            className="post-list-container"
                        >
                            {error && <ErrorFetch />}
                            {(data && error === '') && <EmptyData />}
                            {isPending && <p>Loading...</p>}
                            {allDataSorted.map(post => (
                                <Columns.Column fullhd size="half" key={post.id}>
                                    <Link to={`/post/${post.id}`} className="single-post">
                                        <Block>
                                            <Box>
                                                <div className="read-more-wrapper">
                                                    <FiEye className="see-post-icon" />
                                                    <span>Read more</span>
                                                </div>
                                                <div className="mask" />
                                                <Heading>
                                                    {post.title}
                                                </Heading>
                                                <Heading subtitle size={6}>
                                                    Created by {post.author}
                                                </Heading>
                                            </Box>
                                        </Block>
                                    </Link>
                                </Columns.Column>
                            ))}
                        </Columns>
                    </AnimatedPageTransition>
                </Container>
            </Section>
            <SiteFooter />
        </div>
    );
}

export default PostList;