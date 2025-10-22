function getSortedPosts(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json())
    .then(data => callback(data.sort((a, b) => b.title.length - a.title.length)));
}
function getSortedComments(callback) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(r => r.json())
    .then(data => callback(data.sort((a, b) => a.name.localeCompare(b.name))));
}
getSortedPosts(console.log);
getSortedComments(console.log);


function getFilteredUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(users => users.map(u => ({
      id: u.id,
      name: u.name,
      username: u.username,
      email: u.email,
      phone: u.phone
    })));
}
function getIncompleteTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(r => r.json())
    .then(todos => todos.filter(t => !t.completed));
}
getFilteredUsers().then(console.log);
getIncompleteTodos().then(console.log);

async function getSortedPostsAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data.sort((a, b) => b.title.length - a.title.length);
}
async function getSortedCommentsAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();
  return data.sort((a, b) => a.name.localeCompare(b.name));
}
async function getFilteredUsersAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data.map(u => ({
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    phone: u.phone
  }));
}
async function getIncompleteTodosAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.filter(t => !t.completed);
}
(async () => {
  console.log(await getSortedPostsAsync());
  console.log(await getSortedCommentsAsync());
  console.log(await getFilteredUsersAsync());
  console.log(await getIncompleteTodosAsync());
})();