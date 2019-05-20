document.addEventListener('DOMContentLoaded', function(event){

  fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((err) => {
    console.log('hit error', err)
  })
  /*

  // GET data from API call
  fetch('https://galvanize-student-apis.herokuapp.com/gpersonnel/roles')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      parsedJson(json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })


    // POST the data from the profile
    fetch('https://galvanize-student-apis.herokuapp.com/gpersonnel/users', {
        method: 'POST',
        body: JSON.stringify({
          firstName: firstNameEntry.value,
          lastName: lastNameEntry.value,
          role: currentRole
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        // set status message in HTML
        statusParagraph.innerHTML = response['message']

        // toggle fade class using CSS transitions
        statusParagraph.classList.toggle('fade')
        setTimeout(function() {
          statusParagraph.classList.toggle('fade')
        }, 2000);

      })
      .catch(error => console.error('Error:', error));
  */
})
