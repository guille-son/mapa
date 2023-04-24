window.addEventListener('load',() =>{
    const container_loader = document.querySelector('.container_loader')
    container_loader.style.opacy=0,
    container_loader.style.visibility='hidden'

})

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})