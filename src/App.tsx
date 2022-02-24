import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Roles from './pages/roles/Roles';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Users from './pages/users/Users';
import RoleCreate from './pages/roles/RoleCreate';
import RolesCreate from './pages/roles/RoleCreate';
import RolesEdit from './pages/roles/RoleEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/roles'} exact component={Roles} />
        <Route path={'/roles/create'} exact component={RolesCreate} />
        <Route path={'/roles/:id/edit'} exact component={RolesEdit} />


      </BrowserRouter>
    </div >
  );
}

export default App;
