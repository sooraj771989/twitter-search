import React, { Component } from "react";
import { connect } from "react-redux";
import PostsView from "../components/Posts";
import Search from "../components/Search";
import { setPosts, toggleLoading } from "../actions/PostActions";

class FetchPosts extends Component {
  componentDidMount() {
    this.getData();
    setInterval(this.getData, 30000);
  }

  getData = () => {
    const { id } = this.props.match.params;
  
    const { toggleLoading, setPosts } = this.props;

    toggleLoading(true);

    if (id === "") {
      fetch("https://aravindtwitter.herokuapp.com/twittersearch?key=adobe")
        .then(res => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then(result => {
          setPosts(result.statuses);
          toggleLoading(false);
        })
        .catch(() => {
          toggleLoading(false);
        });
    } else {
      fetch(`https://aravindtwitter.herokuapp.com/twittersearch?key=${id}`)
        .then(res => {
          if (res.status === 200) { 
            return res.json();
          }
        })
        .then(result => {
          setPosts(result.statuses);
          toggleLoading(false);
        })
        .catch(() => {
          toggleLoading(false);
        });
    }
  };

  render() {
    return (
      <div>
        <Search history={this.props.history} />
        <PostsView {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts, loading } = state;

  return {
    posts,
    loading
  };
};

const Posts = connect(
  mapStateToProps,
  {
    setPosts,
    toggleLoading
  }
)(FetchPosts);

export default Posts;
