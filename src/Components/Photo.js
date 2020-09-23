// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Photo(props) {
  const post = props.post;
  // console.log("props :>> ", props);

  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img
          className="photo"
          src={post.imageLink}
          alt={post.description}
        ></img>
      </Link>

      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.startRemovingPosts(post.id);
            props.history.push("/");
          }}
        >
          Remove
        </button>
        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
// export default connect(mapStateToProps, mapDispatchToProps)(Photo);

// class Photo extends Component {
//   render() {
//     const post = this.props.post;
//     return (
//       <figure className="figure">
//         <img
//           className="photo"
//           src={post.imageLink}
//           alt={post.description}
//         ></img>
//         <figcaption>
//           <p> {post.description} </p>
//         </figcaption>
//         <div className="button-container">
//           <button className="photo"> Remove</button>
//         </div>
//       </figure>
//     );
//   }
// }
