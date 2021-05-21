import { Button, Columns, Heading, } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const EmptyData = () => {
    return (
        <Columns.Column size="half">
            <Heading>
                No post were found
            </Heading>
            <Button
                color="primary"
                renderAs={Link}
                to="/create"
            >
                Why not create one?
            </Button>
        </Columns.Column>
    );
}

export default EmptyData;