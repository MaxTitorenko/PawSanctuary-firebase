let donateOpen = document.getElementById("donateOpen"),
    donateClose = document.getElementById("donateClose"),
    donateModal = document.getElementById("donateModal"),
    donateOpenMobile = document.getElementById("donateOpenMobile"),
    mobileOpen = document.getElementById("mobileOpen"),
    mobileClose = document.getElementById("mobileClose"),
    mobileMenu = document.getElementById("mobileMenu"),
    settingsClose = document.getElementById("settingsClose"),
    settingsOpen = document.getElementById("settingsOpen"),
    settingsModal = document.getElementById("settingsModal"),
    adminButton = document.getElementById("adminButton"),
    adminForm = document.getElementById("adminForm"),
    adminAddModal = document.getElementById("adminAddModal"),
    adminAddClose = document.getElementById("adminAddClose"),
    adminAddOpen = document.getElementById("adminAddOpen"),
    settingsOpenMobile = document.getElementById("settingsOpenMobile"),
    adoptionModal = document.getElementById("adoptionModal"),
    adoptionClose = document.getElementById("adoptionClose"),
    adoptNow = document.getElementById("adoptNow")


var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); 
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.addEventListener('touchmove', preventDefault, wheelOpt); 
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

donateOpen.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

donateClose.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.add("hidden")
  enableScroll()
  document.body.style.overflowY = "auto"
})

donateOpenMobile.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

mobileOpen.addEventListener("click", function(event){
  event.preventDefault()
  mobileMenu.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

mobileClose.addEventListener("click", function(event){
  event.preventDefault()
  mobileMenu.classList.add("hidden")
  enableScroll()
  document.body.style.overflowY = "auto"
})



// Donate

let donate10 = document.getElementById("donate10"),
    donate50 = document.getElementById("donate50"),
    donate100 = document.getElementById("donate100"),
    donate250 = document.getElementById("donate250"),
    donate500 = document.getElementById("donate500"),
    donate1000 = document.getElementById("donate1000"),
    donateInput = document.getElementById("donateInput")

donate10.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 10
})

donate50.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 50
})

donate100.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 100
})

donate250.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 250
})

donate500.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 500
})

donate1000.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 1000
})

// Settings

settingsOpen.addEventListener("click", function(event){
  event.preventDefault()
  settingsModal.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

settingsClose.addEventListener("click", function(event){
  event.preventDefault()
  settingsModal.classList.add("hidden")
  enableScroll()
  document.body.style.overflowY = "auto"
})

adminButton.addEventListener("click", function(event){
  event.preventDefault()
  adminForm.classList.toggle("hidden")
})



try{
  adoptNow.addEventListener("click", (event => {
    event.preventDefault()
    adoptionModal.classList.remove("hidden")
    window.scrollTo(0,0)
  }))
  
  adoptionClose.addEventListener("click", (event) => {
    event.preventDefault()
    adoptionModal.classList.add("hidden")
    adoptionContent.classList.remove("hidden")
    adoptionThanks.classList.add("hidden")
  })
}catch{}


try{
  adminAddClose.addEventListener("click", function(event){
    event.preventDefault()
    adminAddModal.classList.add("hidden")
  })

  adminAddOpen.addEventListener("click", function(event){
    event.preventDefault()
    adminAddModal.classList.remove("hidden")
  })
}catch{}

settingsOpenMobile.addEventListener("click", function(event){
  event.preventDefault()
  settingsModal.classList.remove("hidden")
})