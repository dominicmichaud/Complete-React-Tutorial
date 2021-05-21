import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Create from '../pages/Create';
import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';

const RouterSwitch = () => {
    const location = useLocation();

    return (
        <AnimatePresence
            exitBeforeEnter
            initial={false}
        >
            <Switch
                location={location}
                key={location.pathname}
            >
                <Route component={Home} path="/" exact />
                <Route component={Create} path="/create" exact />
                <Route component={PostList} path="/posts" exact />
                <Route component={PostDetail} path="/post/:id" exact />
                <Route component={NotFound} path="*" exact />
            </Switch>
        </AnimatePresence>
    );
}

export default RouterSwitch;