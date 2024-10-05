function clickToExpand(block, btn, indexBtn) {
    indexBtn = !indexBtn ? 0 : +indexBtn;
    let blockElem = document.querySelector('.' + block);
    let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let expand = false;
    btnElem.onclick = function() {
          
            expand = !expand;
            
            blockElem.classList.toggle(block + '--expand');
            btnElem.classList.toggle (btn + '--reverse');

            if (expand){
                btnElem.textContent = 'Свернуть';  
            } else {
                btnElem.textContent = 'Показать все'; 
            }
    }
}
clickToExpand('about__text', 'arrows-link', 0)
clickToExpand('brands__list', 'arrows-link', 1)
clickToExpand('technic__list', 'arrows-link', 2)


