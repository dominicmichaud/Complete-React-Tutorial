import { Columns, Container, Heading, Section } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';
import HeroBanner from '../hero/HeroBanner';
import PostLoader from '../post_loader/PostLoader';
import SiteFooter from '../footer/Footer';

const PostDetail = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const { title, body, author } = data;

    const ErrorFetch = () => (
        <div className="error-fetch-wrapper">
            <Heading>
                Sumimasen masutā...
            </Heading>
            <p>
                Sorry Sensei, an error occured and we are unable to display the requested post.
            </p>
        </div>
    );

    const PostBreadcrumb = () => (
        <Columns fullhd className="breadcrumb-container">
            <Columns.Column>
                <Breadcrumb title={title} />
            </Columns.Column>
        </Columns>
    );

    return (
        <div className="post-details-content">
            <HeroBanner
                gradientBgClassname="gradient-bg-3"
                title={title}
            />
            <Section>
                <Container fullhd>
                    <AnimatedPageTransition>
                        {!error && <PostBreadcrumb />}
                        <Columns fullhd centered className="post-detail-container">
                            <Columns.Column size="half">
                                {error && <ErrorFetch />}
                                {isPending && (
                                    <PostLoader />
                                )}
                                {data.id !== undefined && (
                                    <div className="post-wrapper">
                                        <div className="author-wrapper">
                                            <p className="publish-by">Published by:</p>
                                            <p>{author}</p>
                                        </div>
                                        <div className="post-content">
                                            <div dangerouslySetInnerHTML={{ __html: body }} />
                                        </div>
                                    </div>
                                )}
                            </Columns.Column>
                        </Columns>
                    </AnimatedPageTransition>
                </Container>
            </Section>
            <SiteFooter />
        </div>
    );
}

export default PostDetail;