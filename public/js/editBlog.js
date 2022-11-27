// const editBlog = document.querySelector('blog-id').value;

// const editFormHandler = async function(event) {
//   event.preventDefault();

//   const title = document.querySelector('#blog-title').value;
//   const body = document.querySelector('#blog-body').value;

//   await fetch(`/api/editSingleBlog/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       body
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   document.location.replace('/editBlog');
// };

// const deleteClickHandler = async function() {
//   await fetch(`/api/editSingleBlog/${id}`, {
//     method: 'DELETE'
//   });

//   document.location.replace('/editBlog');
// };

// document
//   .querySelector('#edit-blog-post')
//   .addEventListener('submit', editFormHandler);
// document
//   .querySelector('#delete-blog')
//   .addEventListener('click', deleteClickHandler);
