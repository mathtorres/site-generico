/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
const openModal = () => {
    const modalContainer = document.querySelector('.modal')
    const faqButton = document.querySelector('.faq__button')
    const btnOpenModal = document.querySelector('.btn__modal')

    btnOpenModal.addEventListener('click', () => {
        modalContainer.showModal()
    })

    faqButton.addEventListener('click', () => {
        modalContainer.showModal()
    })

}

openModal();

const closeModal = () => {
    const modalContainer = document.querySelector('.modal')
    const btnClose = document.querySelector('.btn__close')

    btnClose.addEventListener('click', () => {
        modalContainer.close()
    })

}

closeModal()