function handlecandyButtonClick() {
    alert("Candy Button was clicked!")
}

document.getElementById("candyButton").addEventListener("click", showRandomImage);

const images = [
    'bubblegum.jpg',
    'lollipop.jpg',
    'chocolate.jpg',
    'candycorn.jpg',
    'gummybear.jpg',
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.getElementById('randomImage')
}

imgElement.src = images[randomIndex];
imgElement.style.display = 'block';