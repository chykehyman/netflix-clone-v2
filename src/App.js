import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
};

export default App;
