isOpen = false;
let cardContainerCount;
MouseOver = (id) => {

    const contentContainer = document.querySelectorAll(".contentContainer")[id - 1];
    if (!isOpen) {
        contentContainer.style.width = "90%";
        contentContainer.querySelector('.content').style.width = "80%";
        contentContainer.style.display = 'flex';
        const cardContainer = document.querySelectorAll('.cardContainer');
        cardContainerCount = cardContainer.length;

        InVisible(id);
        isOpen = true;
        contentContainer.className = 'animate__backInLeft contentContainer animate__animated';

    }
    else {

        contentContainer.className = 'animate__backOutRight contentContainer animate__animated';
        isOpen = false;

        setTimeout(() => {
            contentContainer.style.width = "0%";
            contentContainer.querySelector('.content').style.width = "0%";
            contentContainer.className = 'contentContainer ';
            contentContainer.style.display = 'none';
      
        }, 2000);

        Visible();
    }
}


InVisible = (id) => {
    const newId = id - 1;
    for (let i = 0; i < cardContainerCount; i++) {
        if (newId == i)
            return
        else {
            document.querySelectorAll(".cardContainer")[i].style.display = "none";
        }
    }
}

Visible = () => {
    for (let i = 0; i < cardContainerCount; i++) {
        document.querySelectorAll(".cardContainer")[i].style.display = "grid";
    }
}






