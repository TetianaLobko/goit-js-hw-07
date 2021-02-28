const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

 const listGalleryRef = document.querySelector('#gallery');

 const makeItemOfGallery = ({ url, alt }) => {
 
   return (`<li class='list-item'> <img src='${url}' alt='${alt}' class='image' width='450px'></li>`);

 }

const makeGallery = images.map(makeItemOfGallery).join(' ');
listGalleryRef.insertAdjacentHTML('beforeend', makeGallery);