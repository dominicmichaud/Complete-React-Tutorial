import { Link } from 'react-router-dom';
import { Breadcrumb as BreadC } from 'react-bulma-components';

const Breadcrumb = ({ title }) => {
    return (
        <BreadC>
            <BreadC.Item>
                <Link to='/'>Home</Link>
            </BreadC.Item>
            <BreadC.Item>
                <Link to='/posts'>All Posts</Link>
            </BreadC.Item>
            <BreadC.Item active>
                <Link to=''>{title}</Link>
            </BreadC.Item>
        </BreadC>
    );
}

export default Breadcrumb;