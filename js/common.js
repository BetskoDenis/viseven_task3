let input = document.getElementById('add_plus');
let galleryWrapper = document.getElementById('gallery__wrapper');
let galleryItem = document.querySelectorAll('.gallery_item');
let modalImage = document.getElementById('modal_image');
let lineLikeDislike = document.getElementById('line_like_dislike');
let dislikeBlock = document.getElementById('dislike_block');
let likeBlock = document.getElementById('like_block');
let sendMessage = document.getElementById('send_message');
let messageInput = document.getElementById('message_input');
let commentsTape = document.getElementById('comments_tape');
let ls = Object.entries(localStorage);
let lssort = ls.sort();
let localObj = {
    like: 0,
    dislike: 0,
    comments: {},
    src: '',
    dataLocal: '',
};

//построение картинок по умолчанию
if (lssort.length == 0) {
    for (let i = 0; i < galleryItem.length; i++) {
        let figcaption = galleryItem[i].children[1];
        let figcaptionComments = figcaption.children[0];
        let figcaptionDisLike = figcaption.children[1];
        let figcaptionLike = figcaption.children[2];
        let figcaptionCommentsSpan = figcaptionComments.children[0];
        let figcaptionDislikeSpan = figcaptionDisLike.children[0];
        let figcaptionLikeSpan = figcaptionLike.children[0];
        figcaptionCommentsSpan.innerHTML = '0';
        figcaptionDislikeSpan.innerHTML = '0';
        figcaptionLikeSpan.innerHTML = '0';
        let localObj = {
            like: 0,
            dislike: 0,
            comments: {},
            src: '',
            dataLocal: galleryItem[i].getAttribute('data-local'),
        }
        let key = galleryItem[i].getAttribute('data-local');
        localStorage.setItem(key, JSON.stringify(localObj))
    }
} else {
    for (let i = 0; i < ls.length; i++) {
        if (+ls[i][0] < 1000) {
            let count = +ls[i][0];
            let lsString = ls[i][1];
            let lsObj = JSON.parse(lsString);
            let lsObjComments = lsObj.comments;
            let lsObjCommentsArr = Object.getOwnPropertyNames(lsObjComments);
            let figcaption = galleryItem[count - 1].children[1];
            let figcaptionComments = figcaption.children[0];
            let figcaptionDisLike = figcaption.children[1];
            let figcaptionLike = figcaption.children[2];
            let figcaptionDislikeSpan = figcaptionDisLike.children[0];
            let figcaptionCommentsSpan = figcaptionComments.children[0];
            let figcaptionLikeSpan = figcaptionLike.children[0];
            figcaptionDislikeSpan.innerHTML = lsObj.dislike;
            figcaptionLikeSpan.innerHTML = lsObj.like;
            figcaptionCommentsSpan.innerHTML = lsObjCommentsArr.length
        }
    }
}

//построение новых картинок из localStorage
for (let i = 0; i < ls.length; i++) {
    if (lssort[i][0] >= 1000) {
        let ls = Object.entries(localStorage);
        let addItem = document.getElementById('add_item');
        let createFigure = document.createElement('figure');
        let figureLS = localStorage.getItem(lssort[i][0]);
        let arrTemp = JSON.parse(figureLS);
        galleryWrapper.insertBefore(createFigure, addItem);
        if (arrTemp.dataLocal === 1008) {
            createFigure.className = 'span9 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (arrTemp.dataLocal == 1009 || arrTemp.dataLocal == 1018 || arrTemp.dataLocal == 1027 || arrTemp.dataLocal == 1036) {
            createFigure.className = 'span14 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (arrTemp.dataLocal == 1010 || arrTemp.dataLocal == 1019 || arrTemp.dataLocal == 1028 || arrTemp.dataLocal == 1037) {
            createFigure.className = 'span15 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (arrTemp.dataLocal == 1011 || arrTemp.dataLocal == 1020 || arrTemp.dataLocal == 1029 || arrTemp.dataLocal == 1038) {
            createFigure.className = 'span11 gallery_item';
            addItem.className = 'span12 add_item';
        } else if (arrTemp.dataLocal == 1012 || arrTemp.dataLocal == 1013 || arrTemp.dataLocal == 1021 || arrTemp.dataLocal == 1022 ||
            arrTemp.dataLocal == 1030 || arrTemp.dataLocal == 1031 || arrTemp.dataLocal == 1039 || arrTemp.dataLocal == 1040) {
            createFigure.className = 'span12 gallery_item';
            addItem.className = 'span12 add_item';
        } else if (arrTemp.dataLocal == 1014 || arrTemp.dataLocal == 1023 || arrTemp.dataLocal == 1032 || arrTemp.dataLocal == 1041) {
            createFigure.className = 'span12 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (arrTemp.dataLocal == 1015 || arrTemp.dataLocal == 1024 || arrTemp.dataLocal == 1033 || arrTemp.dataLocal == 1042) {
            createFigure.className = 'span13 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (arrTemp.dataLocal == 1016 || arrTemp.dataLocal == 1025 || arrTemp.dataLocal == 1034 || arrTemp.dataLocal == 1043) {
            createFigure.className = 'span16 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (arrTemp.dataLocal == 1017 || arrTemp.dataLocal == 1026 || arrTemp.dataLocal == 1035 || arrTemp.dataLocal == 1044) {
            createFigure.className = 'span13 gallery_item';
            addItem.className = 'span13 add_item';
        }
        createFigure.setAttribute('data-local', arrTemp.dataLocal);
        let createImg = document.createElement('img');
        let createFigcaption = document.createElement('figcaption');
        let createDiv = document.createElement('div');
        let createDiv1 = document.createElement('div');
        let createDiv2 = document.createElement('div');
        let createSpan = document.createElement('span');
        let createSpan1 = document.createElement('span');
        let createSpan2 = document.createElement('span');
        let arrTempComments = arrTemp.comments;
        let commentsLSArr = Object.getOwnPropertyNames(arrTempComments);
        createImg.src = arrTemp.src;
        createFigure.appendChild(createImg);
        createFigure.appendChild(createFigcaption);
        createFigcaption.className = 'info_hover';
        createFigcaption.appendChild(createDiv);
        createDiv.className = 'comments_hover';
        createDiv.appendChild(createSpan);
        createFigcaption.appendChild(createDiv1);
        createDiv1.className = 'dislike_hover';
        createDiv1.appendChild(createSpan1);
        createFigcaption.appendChild(createDiv2);
        createDiv2.className = 'like_hover';
        createDiv2.appendChild(createSpan2);
        createSpan.innerHTML = commentsLSArr.length;
        createSpan1.innerHTML = arrTemp.dislike;
        createSpan2.innerHTML = arrTemp.like;
        createImg.setAttribute('data-local', arrTemp.dataLocal);
        galleryItem = document.querySelectorAll('.gallery_item');
    }
}

//добавление картинки по нажатию add_item
input.addEventListener("change", function () {
    let ls = Object.entries(localStorage);
    let addItem = document.getElementById('add_item');
    let key = 0;
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.src = reader.result;
        let createFigure = document.createElement('figure');
        galleryWrapper.insertBefore(createFigure, addItem);
        if (ls.length === 8) {
            createFigure.className = 'span9 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (ls.length == 9 || ls.length == 18 || ls.length == 27 || ls.length == 36) {
            createFigure.className = 'span14 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (ls.length == 10 || ls.length == 19 || ls.length == 28 || ls.length == 37) {
            createFigure.className = 'span15 gallery_item';
            addItem.className = 'span11 add_item';
        } else if (ls.length == 11 || ls.length == 20 || ls.length == 29 || ls.length == 38) {
            createFigure.className = 'span11 gallery_item';
            addItem.className = 'span12 add_item';
        } else if (ls.length == 12 || ls.length == 13 || ls.length == 21 || ls.length == 22 ||
            ls.length == 30 || ls.length == 31 || ls.length == 39 || ls.length == 40) {
            createFigure.className = 'span12 gallery_item';
            addItem.className = 'span12 add_item';
        } else if (ls.length == 14 || ls.length == 23 || ls.length == 32 || ls.length == 41) {
            createFigure.className = 'span12 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (ls.length == 15 || ls.length == 24 || ls.length == 33 || ls.length == 42) {
            createFigure.className = 'span13 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (ls.length == 16 || ls.length == 25 || ls.length == 34 || ls.length == 43) {
            createFigure.className = 'span16 gallery_item';
            addItem.className = 'span13 add_item';
        } else if (ls.length == 17 || ls.length == 26 || ls.length == 35 || ls.length == 44) {
            createFigure.className = 'span13 gallery_item';
            addItem.className = 'span13 add_item';
        }
        key = 1000 + ls.length++;
        createFigure.setAttribute('data-local', key);
        localObj.src = img.src;
        localObj.dataLocal = key;
        localStorage.setItem(key, JSON.stringify(localObj));
        let createImg = document.createElement('img');
        let createFigcaption = document.createElement('figcaption');
        let createDiv = document.createElement('div');
        let createDiv1 = document.createElement('div');
        let createDiv2 = document.createElement('div');
        let createSpan = document.createElement('span');
        let createSpan1 = document.createElement('span');
        let createSpan2 = document.createElement('span');
        createImg.src = img.src;
        createFigure.appendChild(createImg);
        createFigure.appendChild(createFigcaption);
        createFigcaption.className = 'info_hover';
        createFigcaption.appendChild(createDiv);
        createDiv.className = 'comments_hover';
        createDiv.appendChild(createSpan);
        createSpan.innerHTML = '0';
        createFigcaption.appendChild(createDiv1);
        createDiv1.className = 'dislike_hover';
        createDiv1.appendChild(createSpan1);
        createSpan1.innerHTML = '0';
        createFigcaption.appendChild(createDiv2);
        createDiv2.className = 'like_hover';
        createDiv2.appendChild(createSpan2);
        createSpan2.innerHTML = '0';
        galleryItem = document.querySelectorAll('.gallery_item');
        modalWindow();
    };
    reader.readAsDataURL(input.files[0])
});

// построение модального окна в соответствии с нажатой картинкой
function modalWindow() {
    let modal = document.getElementById('modal');
    let like = document.getElementById('like');
    let dislike = document.getElementById('dislike');
    let galleryItem = document.querySelectorAll('.gallery_item');
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].onclick = function () {
            galleryWrapper.classList.add('active');
            let key = galleryItem[i].getAttribute('data-local');
            let dataLocal = this.getAttribute('data-local');

            //получаем данные из локалсторедж конкретной картинки
            let ls1 = Object.entries(localStorage);
            let ls1elementString = ls1[i][1];
            let lsValue = JSON.parse(ls1elementString);
            let createImg = document.createElement('img');
            let galeryItemImg = galleryItem[i].children[0];
            let setSrc = galeryItemImg.src;
            modalImage.insertBefore(createImg, lineLikeDislike);
            createImg.src = setSrc;
            modal.classList.add('active');
            galleryWrapper.classList.add('active');

            //получаем значение нажатой картинки по ключу из localStorage
            for (let i = 0; i < localStorage.length; i++) {
                if (dataLocal == localStorage.key(i)) {
                    let ls1 = Object.entries(localStorage);
                    let ls1elementString = ls1[i][1];
                    let numberActiv = localStorage.key(i);
                    let ls1Value = ls1[i][1];
                    let ls1ValueObj = JSON.parse(ls1Value);
                    like.innerHTML = ls1ValueObj.like;
                    dislike.innerHTML = ls1ValueObj.dislike;

                    // построение коментариев из localStorage
                    function createMessage() {
                        let commentsLS = ls1ValueObj.comments;
                        let commentsLSArr = Object.getOwnPropertyNames(commentsLS);
                        for (let i = 0; i < commentsLSArr.length; ++i) {
                            let commentsLSObj = commentsLS['commentsIn' + [i + 1]];
                            let author = commentsLSObj.name;
                            let date = new Date();
                            let dateValue = commentsLSObj.date;
                            let dateLs = new Date(dateValue);
                            let message = commentsLSObj.messageTxt;
                            let commentsQuantity = document.getElementById('comments_quantity');
                            let createDiv = document.createElement('div');
                            let createDiv1 = document.createElement('div');
                            let createP = document.createElement('p');
                            let createP1 = document.createElement('p');
                            let createP2 = document.createElement('p');
                            let createSpan = document.createElement('span');
                            commentsTape.appendChild(createDiv);
                            createDiv.className = 'comments_block';
                            createDiv.id = 'comments_block' + (i + 1);
                            createDiv.appendChild(createDiv1);
                            createDiv.appendChild(createP);
                            createDiv1.className = 'comments_info_line';
                            createP.className = 'comment';
                            createP.innerHTML = message;
                            createDiv1.appendChild(createP1);
                            createP1.className = 'comments_author';
                            createP1.innerHTML = 'By ';
                            createDiv1.appendChild(createP2);
                            createP2.className = 'comments_date';
                            let diff = date - dateLs;
                            let milliseconds = diff;
                            let seconds = milliseconds / 1000;
                            let minutes = seconds / 60;
                            let hours = minutes / 60;
                            let days = hours / 24;
                            if (+days <= 0.99) {
                                createP2.innerHTML = 'Today ' + dateLs.getHours() + ':' + (dateLs.getMinutes() < 10 ? '0' + dateLs.getMinutes() : dateLs.getMinutes())
                            } else {
                                createP2.innerHTML = Math.trunc(days) + ' days ago ' + dateLs.getHours() + ':' + (dateLs.getMinutes() < 10 ? '0' + dateLs.getMinutes() : dateLs.getMinutes())
                            }
                            createP1.appendChild(createSpan);
                            createSpan.innerHTML = author;
                            commentsQuantity.innerHTML = commentsLSArr.length;
                        }
                    }
                    createMessage();

                    // функция лайков
                    function likeFunction() {
                        ls1 = Object.entries(localStorage);
                        ls1Value = ls1[i][1];
                        let counter;
                        if (ls1ValueObj.like != 0) {
                            counter = ls1ValueObj.like;
                        } else {
                            counter = 0;
                        }
                        return function () {
                            counter = ++counter;
                            ls1ValueObj.like = counter;
                            like.innerHTML = counter;
                            localStorage.setItem(numberActiv, JSON.stringify(ls1ValueObj));
                        };
                    }
                    let likeClick = likeFunction();
                    likeBlock.onclick = function () {
                        likeClick()
                    };

                    // функция дизлайков
                    function disLikeFunction() {
                        ls1 = Object.entries(localStorage);
                        ls1Value = ls1[i][1];
                        let counter;
                        if (ls1ValueObj.dislike != 0) {
                            counter = ls1ValueObj.dislike;
                        } else {
                            counter = 0;
                        }
                        return function () {
                            counter = ++counter;

                            ls1ValueObj.dislike = counter;
                            dislike.innerHTML = counter;
                            localStorage.setItem(numberActiv, JSON.stringify(ls1ValueObj));
                        };
                    }
                    let disLikeClick = disLikeFunction();
                    dislikeBlock.onclick = function () {
                        disLikeClick()
                    }

                    //функция отправки сообщения - запись в localStorage и отрисовка в модальном окне
                    function message() {
                        let inputName = document.getElementById('input_name');
                        let commentsTop = ls1ValueObj.comments;
                        let date = new Date();
                        let counter;
                        let commentsLS = ls1ValueObj.comments;
                        let commentsLSArr = Object.getOwnPropertyNames(commentsLS);
                        if (commentsLSArr.length != 0) {
                            counter = commentsLSArr.length
                        } else {
                            counter = 0;
                        }
                        return function () {
                            counter = ++counter;
                            commentsTop['commentsIn' + counter] = {
                                'name': inputName.value,
                                'date': date,
                                'messageTxt': messageInput.value
                            };
                            localStorage.setItem(numberActiv, JSON.stringify(ls1ValueObj));
                            messageInput.value = '';
                            inputName.value = '';
                        }
                    }
                    let messageClick = message();
                    sendMessage.onclick = function () {
                        messageClick();
                        // формирование отправленного сообщения
                        let commentsLS = ls1ValueObj.comments;
                        let commentsLSArr = Object.getOwnPropertyNames(commentsLS);
                        let lastItem = commentsLS['commentsIn' + commentsLSArr.length];
                        let author = lastItem.name;
                        let date = lastItem.date;
                        let message = lastItem.messageTxt;
                        let createDiv = document.createElement('div');
                        let createDiv1 = document.createElement('div');
                        let createP = document.createElement('p');
                        let createP1 = document.createElement('p');
                        let createP2 = document.createElement('p');
                        let createSpan = document.createElement('span');
                        let commentsQuantity = document.getElementById('comments_quantity');
                        commentsTape.appendChild(createDiv);
                        createDiv.className = 'comments_block';
                        createDiv.id = 'comments_block' + (i + 1);
                        createDiv.appendChild(createDiv1);
                        createDiv.appendChild(createP);
                        createDiv1.className = 'comments_info_line';
                        createP.className = 'comment';
                        createP.innerHTML = message;
                        createDiv1.appendChild(createP1);
                        createP1.className = 'comments_author';
                        createP1.innerHTML = 'By ';
                        createDiv1.appendChild(createP2);
                        createP2.className = 'comments_date';
                        createP2.innerHTML = 'Today ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                        createP1.appendChild(createSpan);
                        createSpan.innerHTML = author;
                        commentsQuantity.innerHTML = commentsLSArr.length;

                    }
                }
            }
        }
    }
}

modalWindow();

//закрытие модального окна
let closeModalId = document.getElementById('modal_button_close');
function closeModal() {
    let modalImage = document.getElementById('modal_image');
    let disLikeBlock = document.getElementById('dislike');
    let likeBlock = document.getElementById('like');
    let commentsQuantity = document.getElementById('comments_quantity');
    let commentsBlock = document.getElementsByClassName('comments_block');
    disLikeBlock.innerHTML = '';
    likeBlock.innerHTML = '';
    commentsQuantity.innerHTML = '';
    modalImage.children[0].remove();
    while (commentsBlock.length != 0) {
        commentsBlock[0].remove();
    }
    modal.classList.remove('active');
    galleryWrapper.classList.remove('active');
    window.location = window.location.href;
}
closeModalId.onclick = function () {
    closeModal()
};








