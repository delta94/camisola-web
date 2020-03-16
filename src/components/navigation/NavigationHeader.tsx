import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationLink from './NavigationLink';
import path from '../../routes/path';
import ShoppingCart from './ShoppingCart';
import LoginModal from '../auth/LoginModal';
import { getUser, isLoginSuccess } from '../../store/selectors';

const {
  PORTUGAL, BENFICA, SPORTING, PORTO, OUTROS, CRIANCAS,
} = path;
const headerLinks = new Map();

headerLinks.set(PORTUGAL, 'Portugal');
headerLinks.set(BENFICA, 'Benfica');
headerLinks.set(SPORTING, 'Sporting');
headerLinks.set(OUTROS, 'Outros');
headerLinks.set(PORTO, 'Porto');
headerLinks.set(CRIANCAS, 'Crianças');

const NavigationHeader = () => {
  const history = useHistory();
  const user = useSelector(getUser);
  const loginSuccess = useSelector(isLoginSuccess);
  const [loginModalVisible, setLoginModalVisible] = useState(false);


  useEffect(() => {
    if (loginSuccess) {
      setLoginModalVisible(false);
      history.push(path.ACCOUNT);
    }
  }, [loginSuccess]);


  const renderLogin = () => {
    if (user) {
      return <Link to={path.ACCOUNT}><div className="m-l-lg">{user?.firstName}</div> </Link>;
    }
    return <div className="m-l-lg" onClick={() => setLoginModalVisible(true)}> Login | registrar</div>;
  };

  return (
    <>
            <div style={{ backgroundColor: 'white' }}>
                <Navbar
                    className="c-lock-width"
                    sticky="top"
                    fixed="top"
                    bg="white"
                    expand="lg"
                    role="navigation"
                    as="header"
                >
                    <Navbar.Brand as="div">
                        <Link to="/">
                            <img
                                alt="home"
                                style={{ height: '6rem' }}
                                src="https://camisola10.com/wp-content/uploads/2018/10/LogoWidth200.png"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            {/* not working when modal opens {renderLinks(keys)} */}
                            <NavigationLink
                                displayName={headerLinks.get(PORTUGAL)}
                                destination="/portugal"
                            />
                            <NavigationLink
                                displayName={headerLinks.get(BENFICA)}
                                destination="/benfica"
                            />
                            <NavigationLink
                                displayName={headerLinks.get(PORTO)}
                                destination="/porto"
                            />
                            <NavigationLink
                                displayName={headerLinks.get(SPORTING)}
                                destination="/sporting"
                            />
                            <NavigationLink
                                displayName={headerLinks.get(CRIANCAS)}
                                destination="/Crianças"
                            />
                            <NavigationLink
                                displayName={headerLinks.get(OUTROS)}
                                destination="/outros"
                            />
                        </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <ShoppingCart />
                        <Navbar.Text>
                            {renderLogin()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <LoginModal show={loginModalVisible} onHide={() => setLoginModalVisible(false)}/>
    </>
  );
};

export default NavigationHeader;
