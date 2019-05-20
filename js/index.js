function displayAlbumsOnIndex(images) {
  // generate random unique numbers from images array size
  var albumNums = []
  while (albumNums.length < 3) {
    var num = Math.floor(Math.random() * images.length);
    if (albumNums.indexOf(num) === -1){
      albumNums.push(num);
    }
  }

  // select ID of image location parent
  let imageWall = document.getElementById('indexAlbums')

  for (var i = 0; i < 3; i++) {
    let newImage = document.createElement('img')

    // select image from json based on random numbers
    newImage.src = `images/${images[albumNums[i]].cover_art}`

    // apend specific cover to imageWall
    imageWall.appendChild(newImage)
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const { results } = json
      displayAlbumsOnIndex(results)
    })
    .catch((err) => {
      console.log('hit error', err)
    })
})
