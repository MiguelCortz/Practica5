
function onThumbnailCLick(event){
    const image = createImg(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset+'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}


function onModalClick(){
    document.body.classList.remove('no.scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}


function createImg(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}


const albumView = document.querySelector('#album-view');
const modalView = document.querySelector('#modal-view');


for( let i = 0; i< PHOTO_LIST.length; i++){
    const PhotoSrc = PHOTO_LIST[i];
    const image = createImg(PhotoSrc);
    image.addEventListener('click', onThumbnailCLick);
    albumView.appendChild(image);/* */ 
}

/*modalView.addEventListener('click', onModalClick);*/



