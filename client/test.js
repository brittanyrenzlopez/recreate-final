import React from 'react'; 
import chai, { expect, should } from 'chai';
import {loginUser, GET_ERRORS, setCurrentUser, SET_CURRENT_USER} from './actions/authActions';
import authReducer from './reducers/authReducer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dash from './components/Dashboard';
import Watch from './components/Watch';
import Play from './components/Play';
import Read from './components/Read';
import Listen from './components/Listen';

describe('Auth Action login test'), () => {
	it('Check type'), () => {
		const action = loginUser;
		expect(action.type).toEqual(GET_ERRORS);
	}
}

describe('Auth Action currentuser test'), () => {
  it('Check type'), () => {
    const action = setCurrentUser;
    expect(action.type).toEqual(SET_CURRENT_USER);
  }
}

describe('Auth Reducer test'), () => {
	it('Check default state', () => {
		expect(authReducer(undefined, {type: 'unexpected'})).toEqual({
			isAuthenticated: false
		});
	});
}

describe('Landing Page test', () => {
 const landingPage = shallow(<Landing />);
  it('Should render a grid with className land', () => {
    landingPage.hasClass('land').should.equal(true);
   });
});

describe('Login test', () => {
 const loginPage = shallow(<Login />);
  it('Should render a div with className login', () => {
    loginPage.hasClass('login').should.equal(true);
   });
});

describe('Register test', () => {
 const registerPage = shallow(<Register />);
  it('Should render a div with className register', () => {
    registerPage.hasClass('register').should.equal(true);
   });
});

describe('Dashboard test', () => {
 const dash = shallow(<Dash />);
  it('Should render a grid with className dashBoard', () => {
    dash.hasClass('dashBoard').should.equal(true);
   });
});

describe('Watch test', () => {
 const watch = shallow(<Watch />);
  it('Should render a grid with className watchPage', () => {
    watch.hasClass('watchPage').should.equal(true);
   });
});

describe('Play test', () => {
 const play = shallow(<Play />);
  it('Should render a grid with className playPage', () => {
    play.hasClass('playPage').should.equal(true);
   });
});

describe('Read test', () => {
 const read = shallow(<Read />);
  it('Should render a grid with className readPage', () => {
    read.hasClass('readPage').should.equal(true);
   });
});

describe('Listen test', () => {
 const listen = shallow(<Listen />);
  it('Should render a grid with className listenPage', () => {
    listen.hasClass('listenPage').should.equal(true);
   });
});