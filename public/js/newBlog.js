const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/newBlog`, {
        method: 'POST',
        body: JSON.stringify({ 
            title, 
            body
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/newBlog');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
 
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
 
  