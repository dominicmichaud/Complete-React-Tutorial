import { Columns, Container, Section } from 'react-bulma-components';
import DataCard from '../card/DataCard';
import EmptyData from '../emptyData/EmptyData';
import ErrorFetch from '../errorFetch/ErrorFetch';
import HeroBanner from '../hero/HeroBanner';
import useFetch from '../../hooks/useFetch';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';
import SiteFooter from '../footer/Footer';

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    const homeData = data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).slice(0, 3);

    return (
        <div className="homepage-content">
            <HeroBanner
                title="The DOJO BLOG"
            />
            <Section>
                <Container>
                    <AnimatedPageTransition>
                        <Columns
                            fullhd
                            className="post-container"
                            centered
                        >
                            {error && <ErrorFetch />}
                            {(data && error === '') && <EmptyData />}
                            {isPending && <p>Loading...</p>}
                            {homeData.map(post => (
                                <DataCard
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                    author={post.author}
                                    key={post.id}
                                />
                            ))}
                        </Columns>
                    </AnimatedPageTransition>
                </Container>
            </Section>
            <SiteFooter />
        </div>
    );
}

export default Home;
