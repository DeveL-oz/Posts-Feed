export async function loadPosts() {
  const response = await fetch('https://posts-4fc6c-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
  const posts = await response.json();
  return posts;
}

export async function loadComments() {
  const response = await fetch('https://posts-4fc6c-default-rtdb.europe-west1.firebasedatabase.app/comments.json');
  const comments = await response.json();
  return comments;
}

export async function sendPost(post) {
  const response = await fetch('https://posts-4fc6c-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response;
}
