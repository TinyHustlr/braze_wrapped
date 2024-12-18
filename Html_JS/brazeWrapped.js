const wrappedDialog = document.getElementById("wrapped-dialog")
const closeButton = document.getElementById("close-btn")

// opens modal
wrappedDialog.showModal()

// start siema carousel
const mySiema = new Siema({
  duration: 500,
  loop: true,
});

// listen for keydown event
setInterval(() => mySiema.next(), 6000)         

// close modal function
closeButton.addEventListener("click", ()=> {
    brazeBridge.closeMessage()
})