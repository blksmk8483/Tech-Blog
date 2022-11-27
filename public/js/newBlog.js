const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ 
            title, 
            body,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post. Please try again.');
      }
    }
  };


  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post.');
      }
    }
  };
  
//   //------new 
//   const editBlog = document.querySelector('blog-id').value;

// const editFormHandler = async function(event) {
//   event.preventDefault();

//   const title = document.querySelector('#blog-title').value;
//   const body = document.querySelector('#blog-body').value;

//   await fetch(`/api/blog/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       body
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   document.location.replace('/dashboard');
// };

 
  
  document
    .querySelector('.new-blog-post')
    .addEventListener('submit', newFormHandler);
  
 
    document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);

  //   //-----new
  //   document
  // .querySelector('#edit-blog-post')
  // .addEventListener('submit', editFormHandler);