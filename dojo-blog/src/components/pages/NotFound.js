import { Link } from 'react-router-dom';
import { Button, Columns, Container, Section } from 'react-bulma-components';
import PageNotFoundImg from '../../images/page-not-found.png';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';
import SiteFooter from '../footer/Footer';

const NotFound = () => {
    return (
        <div className="not-found-content">
            <Section className="main-section">
                <Container fullhd>
                    <AnimatedPageTransition>
                        <Columns fullhd centered className="not-found-container">
                            <Columns.Column size="half">
                                <img src={PageNotFoundImg} alt="page not found" />
                                <p className="pt-4">
                                    The resource you are looking for is nowhere to be found. I guess it applied the first rule of a being a Master Ninja: Never to be seen.
                                    </p>
                                <Button
                                    className="mt-4"
                                    color="primary"
                                    renderAs={Link}
                                    to="/"
                                >
                                    Back to Dojo
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </AnimatedPageTransition>
                </Container>
            </Section>
            <SiteFooter />
        </div>
    );
}

export default NotFound;