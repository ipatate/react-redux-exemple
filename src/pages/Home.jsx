import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { fetchPosts } from '../services/actions/posts';


class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  }

  componentDidMount() {
    const { posts } = this.props;
    if (posts.length < 1) {
      this.fetchPost();
    }
  }

  fetchPost = () => {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <h1>
          Home
        </h1>
        <div>
          <button type="button" onClick={this.fetchPost}>Reload</button>
        </div>
        <ul>
          { posts.map((elem) => <li key={elem.id}>{elem.title}</li>) }
        </ul>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  )(Home);
