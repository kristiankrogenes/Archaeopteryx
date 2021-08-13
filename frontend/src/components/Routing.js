import Main from './Main.js';
import UserPage from './UserPage.js';
import ScorePage from './ScorePage.js';
import NavBar from './NavBar.js';
import CoursePage from './CoursePage.js';
import LoginPage from './LoginPage.js';
import Footer from './Footer.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Routing() {
  return (
    <div style={{minHeight: '100vh', position: 'absolute', minHeight: '100vh', minWidth: '100%'}}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/users/adduser" component={UserPage} />
          <Route exact path="/scores" component={ScorePage} />
          <Route exact path="/courses" component={CoursePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Routing;