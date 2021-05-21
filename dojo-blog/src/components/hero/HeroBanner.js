import { Columns, Container, Heading, Hero } from 'react-bulma-components';
import PropTypes from 'prop-types';
import HeroImage from '../hero_image/HeroImage';

const HeroBanner = ({ gradientBgClassname, title }) => {
    return (
        <Hero size="medium" color="primary" className={gradientBgClassname}>
            <Hero.Body>
                <Container fullhd>
                    <Columns fullhd>
                        <Columns.Column size="three-fifths">
                            <Heading>
                                {title}
                            </Heading>
                        </Columns.Column>
                    </Columns>
                </Container>
                <HeroImage />
            </Hero.Body>
        </Hero>
    );
}

HeroBanner.defaultProps = {
    gradientBgClassname: 'gradient-bg',
    title: 'Default title',
};

HeroBanner.propTypes = {
    gradientBgClassname: PropTypes.string,
    title: PropTypes.string,
};

export default HeroBanner;