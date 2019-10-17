import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsView from '../components/Posts'
import { setPosts, toggleLoading } from '../actions/PostActions'
import Snackbar from "@material-ui/core/Snackbar";
import queryString from "query-string";

class FetchPosts extends Component {

  componentDidMount() {
    const { toggleLoading, setPosts } = this.props
    
    toggleLoading(true)

    fetch('https://aravindtwitter.herokuapp.com/twittersearch?key=adobe')
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return res.json()
      }
    })
    .then((result) => {
      console.log(result.statuses);
      setPosts(result.statuses)
      toggleLoading(false)
    })
    .catch(() => {
      toggleLoading(false)
    })
  }

  render() {
    return <PostsView {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const { posts, loading } = state

  return {
    posts,
    loading
  }
}

const Posts = connect(mapStateToProps, {
  setPosts,
  toggleLoading
})(FetchPosts)

export default Posts
