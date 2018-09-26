import Login from 'components/auth/Login';
import ButtonRound from 'components/common/ButtonRound';
import InputRound from 'components/common/InputRound';
import React, { Component } from 'react';

interface IState {
  email: string;
  password: string;
}

class LoginContainer extends Component<{}, IState> {
  public state: IState = {
    email: '',
    password: '',
  };

  public render() {
    return (
      <Login>
        <form onSubmit={this.handleSubmit}>
          <InputRound
            info={{ name: 'email', type: 'email' }}
            handleChange={this.handleChange}
          />
          <InputRound
            info={{ name: 'password', type: 'password' }}
            handleChange={this.handleChange}
          />
          <ButtonRound>로그인</ButtonRound>
        </form>
      </Login>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state;
    console.log(email, password);
  };
}

export default LoginContainer;
