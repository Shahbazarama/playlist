let albumArray = []
let fullPlaylist = {}

function displayAlbumsOnPlaylist(images){
  let imageScrollView = document.getElementById('horizontalImages')

  for (var i = 0; i < images.length; i++) {
    let newCover = document.createElement('img')
    newCover.id = i
    newCover.src = `images/${images[i].cover_art}`

    newCover.addEventListener('click', function(){
      clickedAlbum (newCover.id)
    })

    imageScrollView.appendChild(newCover)
  }
}

// called when clear or submit button is pressed
function clearPlaylist(){
  fullPlaylist = {}
  var albumList = document.getElementById("selectedAlbums");
  var albumName = albumList.firstChild;

  while( albumName ) {
    albumList.removeChild( albumName );
    albumName = albumList.firstChild;
  }
}

function clickedAlbum(idNumber){


  // if the album is not in playlist yet
  if(!fullPlaylist[albumArray[idNumber]['artist']]){

    // add to javascript object playlist
    fullPlaylist[albumArray[idNumber]['artist']] = albumArray[idNumber]['title']

    // create <p></p> of album title
    let newAlbumText = document.createElement('p')
    newAlbumText.textContent = `${albumArray[idNumber].artist}: ${albumArray[idNumber].title}`

    // get parent div tag
    let albumTextView = document.getElementById('selectedAlbums')
    // apend new album to playlist view
    albumTextView.appendChild(newAlbumText)
  }
}

document.addEventListener('DOMContentLoaded', function(event){

  fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    const { results } = json
    albumArray = results
    displayAlbumsOnPlaylist(results)
  })
  .catch((err) => {
    console.log('hit error', err)
  })

  // Clear Button to remove data from playlist
  let clearButton = document.getElementById('clearbtn')
  clearButton.addEventListener('click', function(){
    clearPlaylist()
  })

  // Submit button to POST playlist to server
  let submitButton = document.getElementById('submitbtn')
  submitButton.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/post', {
        method: 'POST',
        body: JSON.stringify(fullPlaylist),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
        console.log( response )
      })
      .catch(error => console.error('Error:', error));

      // after submission, clear playlist
      clearPlaylist()
  })

})
