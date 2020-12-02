import { BrowserRouter as Router } from 'react-router-dom';

import * as ROUTES from './constants/app-routes';
import { Home, SignIn, SignUp, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

const App = () => {
  const user = useAuthListener();
  return (
    <Router>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
};

export default App;
