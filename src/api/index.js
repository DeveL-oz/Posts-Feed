export async function loadData(section) {
  const response = await fetch(`https://posts-4fc6c-default-rtdb.europe-west1.firebasedatabase.app/${section}.json`);
  const data = await response.json();
  return data;
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
