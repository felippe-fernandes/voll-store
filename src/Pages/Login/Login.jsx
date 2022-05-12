import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import styles from './styles.module.css';
import logo from '../../images/VollStore.png'
import { useNavigate  } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkDisbale = () => {
      const limitEmail = -1;
      const limitPassword = 7;
      const checkEmail = email === ''
      || email.indexOf('@') === limitEmail
      || email.indexOf('.') === limitEmail
      || email.indexOf('.') === email.length - 1;
      if (checkEmail || password.length < limitPassword) {
        setDisabled(true);
      } else { setDisabled(false); }
    };
    checkDisbale();
  }, [email, password]);

  const handleClick = () => {
    navigate('/productlist');
  };

  return (
    <div className={ styles.loginMainPage }>
      <div className={ styles.Logo }>
        <img src={ logo } alt="cooking logo" />
      </div>
      <div className={ styles.loginFormDiv }>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={ faEnvelope } />
          </InputGroup.Text>
          <FormControl
            data-testid="email-input"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={ faLock } />
          </InputGroup.Text>
          <FormControl
            data-testid="password-input"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            type="password"
            placeholder="Senha"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button
        variant="primary"
        disabled={disabled}
        onClick={handleClick}
        >Entrar</Button>
      </div>
    </div>
   
  );
}

export default Login;
