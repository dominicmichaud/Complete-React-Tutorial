import { Button, Card, Columns, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import MoreMenu from './MoreMenu';

const cardVariants = {
    initial: {
        scale: 1,
    },
    animated: {
        scale: 1.05,
    },
};

const DataCard = ({ id, title, body, author }) => {
    return (
        <Columns.Column size="one-third">
            <motion.div
                whileHover="animated"
                initial="initial"
                variants={cardVariants}
                className="card-motion-wrapper"
            >
                <Card>
                    <MoreMenu
                        id={id}
                    />
                    <Card.Image
                        size="2by1"
                        src="http://bulma.io/images/placeholders/1280x960.png"
                    />
                    <Card.Content>
                        <Heading>{title}</Heading>
                        <Heading subtitle size={6}>{author}</Heading>
                        <div className="pb-4" dangerouslySetInnerHTML={{ __html: `${body.slice(0, 125)}...` }} />
                        <Button
                            color="primary"
                            renderAs={Link}
                            to={`/post/${id}`}
                        >
                            Read more
                        </Button>
                    </Card.Content>
                </Card>
            </motion.div>
        </Columns.Column>
    );
}

DataCard.defaultProps = {
    title: "Default title",
    body: "Default content",
    author: "Author name",
};

DataCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
};

export default DataCard;