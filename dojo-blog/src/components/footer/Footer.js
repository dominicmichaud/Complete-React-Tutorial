import { Container, Content, Footer } from 'react-bulma-components';
import AnimatedPageTransition from '../helpers/AnimatedPageTransition';

const SiteFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <AnimatedPageTransition>
            <Footer className="main-footer">
                <Container>
                    <Content>
                        <p>
                            Awesome tutorial by The Net Ninja - <a href="https://netninja.dev/" rel="noreferrer" target="_blank">https://netninja.dev</a>
                            &nbsp;| <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" rel="noreferrer" target="_blank">Complete React Course (Youtube)</a>
                        </p>
                        <p>
                            Taken to the next level by &copy; DominicM - {currentYear} | <a href="https://github.com/dominicmichaud" rel="noreferrer" target="_blank">Github</a>
                        </p>
                        <h5>Assets Credits (for development purposes only)</h5>
                        <p>
                            Ninja Star SVG taken from <a rel="noreferrer" target="_blank" href="https://svgsilh.com/image/297476.html">SVG Silh</a>.
                            <br />
                            Ninja illustration taken from <a rel="noreferrer" target="_blank" href="https://www.vectorstock.com/royalty-free-vector/ninja-vector-22328748">VectorStock</a>.
                            <br />
                            Confused Ninja in 404 page taken from <a rel="noreferrer" target="_blank" href="http://getdrawings.com/get-icon#mark-of-the-ninja-icon-54.png">Get Drawings</a>
                        </p>
                    </Content>
                </Container>
            </Footer>
        </AnimatedPageTransition>
    );
}

export default SiteFooter;