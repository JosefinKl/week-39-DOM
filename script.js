const articleOne = document.querySelector('.art-1')
const h3ArtOne = articleOne.querySelector('h3');
const buttonArtOne = articleOne.querySelector('button');
const menuBar = document.getElementsByTagName('a')
const articleTwo = document.querySelector('.art-2')
const pArtTwo = articleTwo.querySelector('p')
const allPElements = document.getElementsByTagName('p')

console.log(allPElements)

h3ArtOne.innerText = 'Potato';
pArtTwo.innerText = 'Beautiful hoodie';
buttonArtOne.style.backgroundColor = 'blue'; 
articleOne.style.backgroundColor = 'red'


for (let i=0; i < menuBar.length; i++ ){
    
    if (menuBar[i].innerText === 'Home'){
        menuBar[i].innerText = 'Start';
    }
    else if (menuBar[i].innerText === 'Contact'){
        menuBar[i].innerText = 'Mail us'
    }
    
}

for (let i = 0; i < allPElements.length; i++){
    allPElements[i].style.color = 'blue'
}