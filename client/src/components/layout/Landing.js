import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import '../Home.css';


class Landing extends Component {
    componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <Grid className="land">
        <Jumbotron>
  <h3><span>Re</span><span>create</span></h3>
          <p>Get recommendations on what you want to watch, play, read, or listen to!
          <br /><br />
          Demo Account: demo@recreate.com<br />Password: recreate</p>
          <Link to="/login">
            <Button bsStyle="primary">Start Here</Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);