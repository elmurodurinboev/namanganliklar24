const menuBtn = document.querySelector('.site-header__toggler');
const menuModal = document.querySelector('.sitenav');
const backdrop = document.querySelector('.backdrop');

function modalOpen() {
  menuModal.classList.add('sitenav--open')
}

function modalClose() {
  menuModal.classList.remove('sitenav--open')
}

function backdropOpen() {
  backdrop.classList.add('open')
}

function backdropClose() {
  backdrop.classList.remove('open')
}

function modalHandler() {
  if (menuModal.classList.contains('sitenav--open')) {
    modalClose()
    backdropClose()
  } else {
    modalOpen()
    backdropOpen()
  }
}

menuBtn.addEventListener('click', modalHandler)
 

backdrop.addEventListener('click', function () {
  modalClose()
  backdropClose()
})