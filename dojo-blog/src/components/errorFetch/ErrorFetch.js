import { Columns, Heading } from 'react-bulma-components';

const ErrorFetch = () => {
    return (
        <Columns.Column size="half">
            <Heading>
                Sumimasen masutā...
            </Heading>
            <p>
                Sorry Sensei, an error occured and we are unable to display the posts.
            </p>
        </Columns.Column>
    );
}

export default ErrorFetch;