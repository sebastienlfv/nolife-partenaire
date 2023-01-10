const lvlBurger = document.querySelector('.lvl-burger')
const burger = document.querySelector('.burger-niveau')

lvlBurger.addEventListener('mouseover', () => {
  burger.style.display = 'flex'
})

lvlBurger.addEventListener('mouseout', () => {
  setTimeout(() => {
    burger.style.display = 'none'
  }, 1500)
})

const ip = 'http://localhost:'
const PORT = 3005

// fetch partner
const URL = ip + PORT + '/api/partner'


fetch(URL)
  .then(function(res) {
    if(res.ok) {
      return res.json()
    }
  })
  .then(function(dataFromApi) {
    console.log('Partner', dataFromApi);
    loadPartner(dataFromApi)
  })
  .catch(err => {
    console.log(err);
  })

function loadPartner(dataFromApi) {
  const partnerContainer = document.querySelector('.partner-container')
  
  for (let i = 0; i < dataFromApi.length; i++) {
    const partnerDiv = document.createElement('div')
    partnerDiv.className = 'partner'
    partnerContainer.appendChild(partnerDiv)

    const partnerDetails = document.createElement('div')
    partnerDetails.className = 'partner-details'
    partnerDiv.appendChild(partnerDetails)

    const partnerImg = document.createElement('img')
    partnerImg.src = dataFromApi[i].partner_picture
    partnerDetails.appendChild(partnerImg)

    const partnerPseudo = document.createElement('span')
    partnerPseudo.classList = 'pseudo'
    partnerPseudo.innerHTML = dataFromApi[i].partner_pseudo
    partnerDetails.appendChild(partnerPseudo)

    const partnerLink = document.createElement('a')
    partnerLink.classList = 'twitch'
    partnerLink.href = dataFromApi[i].partner_twitch
    partnerLink.innerHTML = 'LIVE TWITCH'
    partnerLink.target = '_blank'
    partnerDetails.appendChild(partnerLink)

    const partnerIcon = document.createElement('i')
    partnerIcon.classList = 'fa-brands fa-twitch'
    partnerLink.appendChild(partnerIcon)
  }
}