import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Posts from './pages/Posts';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/posts/:id" component={Posts} />
            </Switch>
        </BrowserRouter>
    );
}