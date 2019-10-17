import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!posts.length) {
    return <p>No Posts Found.</p>;
  }

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div className="row " key={index}>
            <div className="float-left col-md-3 image-container">
              <img src={post.user.profile_image_url_https} />
            </div>
            <div className="text-left float-left col-md-9">
              <span>{post.user.user_name}</span>
              <span>{post.created_at}</span>
              <p>{post.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
