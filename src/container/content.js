import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Explore, Messages, Notification, Home, Bookmarks } from '../view';

const Content = () => {
    return (
        <Switch>
            <Route path="/explore">
                <Explore />
            </Route>
            <Route path="/messages">
                <Messages />
            </Route>
            <Route path="/notification">
                <Notification />
            </Route>
            <Route path="/bookmarks">
                <Bookmarks />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Redirect from="*" to="/home" />
        </Switch>
    );
}

export default Content;
