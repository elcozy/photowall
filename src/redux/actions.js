import { database } from "../database/config";
export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingPosts() {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts,
  };
}

export function startRemovingPosts(id) {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null,
  };
  return (dispatch) => {
    return database
      .ref()
      .update(updates)
      .then(() => {
        dispatch(removePost(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function startAddingComment(comment, postId) {
  return (dispatch) => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingComments() {
  return (dispatch) => {
    return database
      .ref(`comments`)
      .once("value")
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        console.log("startLoadingComments -> comments", comments);
        dispatch(loadComments(comments));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments,
  };
}
//remove

export function removePost(id) {
  return {
    type: "REMOVE_POST",
    id,
  };
}

//adding post
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
