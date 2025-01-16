const noButton = document.querySelector('button:nth-child(2)');
let noClicks = 0;
noButton.addEventListener('click', () => {
  noClicks++;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const randomX = Math.random() * (screenWidth - noButton.offsetWidth);
  const randomY = Math.random() * (screenHeight - noButton.offsetHeight);
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  if (noClicks == 5) {
    const message = document.createElement('p');
    message.textContent = 'You clicked "No" 5 times!';
    message.style.position = 'absolute';
    message.style.top = `${screenHeight / 2 + 50}px`;
    message.style.left = `${screenWidth / message.offsetWidth / 2}px`;
    message.style.fontWeight = 'bold';
    document.body.appendChild(message);
  }
});
const yesButton = document.querySelector('button:nth-child(1)');



yesButton.addEventListener('click', () => {
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/R.00effcd821ef99d00d468e1e2944a83a?rik=al9s4ou20dZizQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fLhoxSBy.jpg&ehk=x8hGDgoWgUNi2ALw2b2jji1fv8OVjV3VNSai7laUTpw%3d&risl=&pid=ImgRaw&r=0")';
  document.body.style.backgroundSize = 'cover';
  const message = document.querySelector('p');
  const helloWorld = document.querySelector('.text i');
   helloWorld.textContent = 'Welcome to Replit!'; 
   helloWorld.style.color = 'white';
  if (message) {
    message.style.display = 'none';
  }

  const gifs = [
    "https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_1280.png",
    "https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_1280.png",
    "https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_1280.png",
    "https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_1280.png",
  ];
  const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
  for (let i = 0; i < gifs.length; i++) {
    const gifDiv = document.createElement("div");
    gifDiv.classList.add("gif", corners[i]);
    const gifImg = document.createElement("img");
    gifImg.src = gifs[i];
    gifImg.alt = `GIF ${i + 1}`;
    gifImg.style.width = "74px";
    gifImg.style.height = "64px";
    gifDiv.appendChild(gifImg);
    document.body.appendChild(gifDiv);
  }
  
});
