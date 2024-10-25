function handlecandyButtonClick() {
    alert("Candy Button was clicked!")
}

const images = [
    'images/bubblegum.jpg',
    'images/gummybear.jpg',
    'images/candycorn.jpg',
    'images/chocolate.jpg',
    'images/lollipop.jpg',
];

function showRandomImage() {
    if (images.length == 0)
        {
            //I tried to add an image at the end for the bonus here. 
            //It'll display the message but had trouble displaying my 6th "empty.jpg" image
            alert("No more candy for you!!!")
            imgElement.src = 'images/bubblegum.jpg'
        }
    else { 
        const randomIndex = Math.floor(Math.random() * images.length);
        const imgElement = document.getElementById('randomImage')
        imgElement.src = images[randomIndex];
        imgElement.style.display = 'block';
        images.splice(randomIndex, 1)
    }
}