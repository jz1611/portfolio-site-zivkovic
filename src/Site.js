// CSS
import './Site.css';

//Dependencies
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import SiteHeader from './Components/SiteHeader/SiteHeader';
import HomePage from './Components/HomePage/HomePage';
import ContactPage from './Components/ContactPage/ContactPage';

function Site() {
    return (
        <div id='site-container'>
            <SiteHeader />
            <div id='content-container'>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </div>
        </div>
    );
}

export default Site;