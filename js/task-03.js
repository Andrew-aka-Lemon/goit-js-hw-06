const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgListRef = document.querySelector('.gallery');

const galleryItem = document.createElement('div');

const galleryItemMarkup = event => {
  const galleryImg = `<div class="gallery__item"><img src="${event.url}" alt="${event.alt}" /></div>`;

  return galleryImg;
};

const galleryElems = images.map(galleryItemMarkup);

imgListRef.insertAdjacentHTML('beforeend', galleryElems.join(''));

///////////Зроблено через createElement ///////////////

// const imgListRef = document.querySelector('.gallery');

// const galleryItem = document.createElement('div');
// const galleryItemMarkup = (elem)=> {
//   const galleryImg = document.createElement('img');
//   const galleryImgContainer = document.createElement('div');
//   galleryImgContainer.classList.add('gallery__item');
//   galleryImg.src = elem.url;
//   galleryImg.alt = elem.alt;

//   galleryImgContainer.append(galleryImg);

//   return galleryImgContainer
// };

// const galleryElems = images.map(galleryItemMarkup);

// imgListRef.append(...galleryElems);
