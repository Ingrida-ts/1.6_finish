function clickToBlure(block1,block2,block3) {
    let blockElem1 = document.querySelector('.' + block1);
    let blockElem2 = document.querySelector('.' + block2);
    let blockElem3 = document.querySelector('.' + block3);
  //  let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let expand = true;
    let blure = document.querySelector('.blure');
    blure.onclick = function() {  
        expand = !expand;
        blockElem1.classList.remove(block1 + '--open');
        blockElem2.classList.remove(block2 + '--open');
        blockElem3.classList.remove(block3 + '--open');
        blure.classList.remove ('opacity');
    }
}
clickToBlure('menu', 'modal-feedback','modal-call')

function clickToClose(block, btn, indexBtn) {
    let blockElem = document.querySelector('.' + block);
    let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let expand = true;
    let blure = document.querySelector('.blure');
    btnElem.onclick = function() {  
        expand = !expand;
        blockElem.classList.remove(block + '--open');
        blure.classList.remove ('opacity');
    }
}
clickToClose('menu', 'close', 0)
clickToClose('modal-feedback', 'close', 1)
clickToClose('modal-call', 'close', 2)



function clickToFeedback(block, btn, indexBtn) {
    let blockElem = document.querySelector('.' + block);
    let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let blure = document.querySelector('.blure');
    let blockElem1= document.querySelector('.modal-call');
    let blockElem2= document.querySelector('.modal-feedback');
    let expand = false;
    
    btnElem.onclick = function() {  
        
        expand = !expand;
        blockElem1.classList.remove('modal-call--open');
        blockElem2.classList.remove('modal-feedback--open');
        blure.classList.add ('opacity');
        
        blockElem.classList.toggle(block + '--open');
        
    }
}
clickToFeedback('menu', 'burger', 0)
clickToFeedback('modal-feedback', 'chat', 1)
clickToFeedback('modal-feedback', 'chat', 0)
clickToFeedback('modal-call', 'call', 1)
clickToFeedback('modal-call', 'call', 0)
