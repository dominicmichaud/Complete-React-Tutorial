import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/store';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [gState, setGState] = useContext(Context);
    const { shoudRefetch } = gState;

    useEffect(() => {
        // Cleanup function in our useEffect hook,
        // to stop a fetch request when it's not needed
        const abortCtrl = new AbortController();
        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setGState({ apiError: true, apiErrorType: 'fetch' });
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => abortCtrl.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, shoudRefetch]);

    return { data, isPending, error };
}

export default useFetch;