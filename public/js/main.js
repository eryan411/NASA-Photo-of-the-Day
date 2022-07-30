document.querySelector('.getPhoto').addEventListener('click', getFetch)
document.querySelector('.toggle').addEventListener('click', toggleShip)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('iframe').src = ''
          document.querySelector('.space').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('.space').src = ''
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function toggleShip(){
  let x = document.getElementById("spaceship");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}