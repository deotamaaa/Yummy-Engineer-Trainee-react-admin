import { Dispatch, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Menu from './Menu'
import Nav from './nav'
import { connect } from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/setUserAction';
import axios from 'axios';

const Wrapper = (props: any) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('user');
        props.setUser(new User(
          data.id,
          data.firstName,
          data.lastName,
          data.email,
          data.role,
        ));
      } catch (e) {
        setRedirect(true);
      }
    })();
  }, []);

  if (redirect) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setUser: (user: User) => dispatch(setUser(user))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

