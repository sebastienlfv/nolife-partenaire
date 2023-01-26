// burger desktop

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

// burger mobile 

const burgerButton = document.querySelector('#burger-button')
const burgerContainer = document.querySelector('.burger-container')

burgerButton.addEventListener('click', () => {
  if(burgerContainer.style.display === 'flex') {
    burgerContainer.style.display = 'none'
  } else {
    burgerContainer.style.display = 'flex'
  }
})

const buttonLvlTeam = document.querySelector('.burger-lvl-mobile')
const burgerLvl = document.querySelector('.burger-mobile-lvl')
const iconLvlBurger = document.querySelector('.fa-chevron-down')
console.log('icon',iconLvlBurger);
buttonLvlTeam.addEventListener('click', () => {
  if(burgerLvl.style.display === 'flex') {
    burgerLvl.style.display = 'none'
    iconLvlBurger.className = 'fas fa-chevron-down'
  } else {
    burgerLvl.style.display = 'flex'
    iconLvlBurger.className = 'fas fa-angle-up'
  }
})

// fetch partner
const URL = 'http://localhost:5000/api/partner'


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

const nextForm1 = document.querySelector('.button-nextForm1')
const prevForm1 = document.querySelector('.button-prevForm1')
const nextForm2 = document.querySelector('.button-nextForm2')
const prevForm2 = document.querySelector('.button-prevForm2')
const submitForm = document.querySelector('.button-sendForm')
const firstStep = document.querySelector('.first-step')
const secondStep = document.querySelector('.second-step')
const threeStep = document.querySelector('.three-step')
const typeForm = document.querySelector('.type-form')
const errorForm = document.querySelector('.error-form')

// firststep
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let genre = document.getElementById('genre')
let birthday = document.getElementById('date')
let website = document.getElementById('website')
let phone = document.getElementById('phone')
let adress = document.getElementById('adress')
let sponsor = document.getElementById('sponsor')
let nolife = document.getElementById('nolife')
let goodPartner = document.getElementById('good-partner')
let whatPartner = document.getElementById('what-partner')
let game = document.getElementById('jeux')
let plateform = document.getElementById('plateform')

//secondstep
let twitter = document.getElementById('twitter')
let twitch = document.getElementById('twitch')
let facebook = document.getElementById('facebook')
let instagram = document.getElementById('instagram')
let youtube = document.getElementById('youtube')
let tiktok = document.getElementById('tiktok')

//threestep
let linkTwitter = document.getElementById('link-twitter')
let linkTwitch = document.getElementById('link-twitch')
let linkFacebook = document.getElementById('link-facebook')
let linkInstagram = document.getElementById('link-instagram')
let linkYoutube = document.getElementById('link-youtube')
let linkTiktok = document.getElementById('link-tiktok')


nextForm1.addEventListener('click', () => {
 if(firstname.value === '' || lastname.value === '' || email.value === '' || birthday.value === '' || phone.value === '' || adress.value === '' || sponsor.value === ''
  || nolife.value === '' || goodPartner.value === '' || whatPartner.value === '' || game.value === '' || plateform.value === '') {
    errorForm.innerHTML = 'Veuillez remplir les informations obligatoire'
    return false
 } else {
  firstStep.style.display = 'none'
  secondStep.style.display = 'flex'
  secondStep.style.flexDirection = 'column'
  typeForm.innerHTML = 'Réseaux'
  prevForm1.style.display = 'flex'
  nextForm2.style.display = 'flex'
  nextForm1.style.display = 'none'
  errorForm.innerHTML = ''
 }
})

prevForm1.addEventListener('click', () => {
  firstStep.style.display = 'block'
  secondStep.style.display = 'none'
  typeForm.innerHTML = 'Vous'
  prevForm1.style.display = 'none'
  nextForm2.style.display = 'none'
  nextForm1.style.display = 'flex'
  errorForm.innerHTML = ''
})

nextForm2.addEventListener('click', () => {
  if(twitter.checked === false && twitch.checked === false && facebook.checked === false && instagram.checked === false &&
    youtube.checked === false && tiktok.checked == false) {
    errorForm.innerHTML = 'Cochez une des cases ci-dessus'
    return false
  } else {
    secondStep.style.display = 'none'
    threeStep.style.display = 'flex'
    threeStep.style.flexDirection = 'column'
    typeForm.innerHTML = 'Indiquez nous les différents liens de vos réseaux cochés précédemment'
    prevForm2.style.display = 'flex'
    prevForm1.style.display = 'none'
    nextForm2.style.display = 'none'
    submitForm.style.display = 'flex'
    errorForm.innerHTML = ''
  }
})

prevForm2.addEventListener('click', () => {
    firstStep.style.display = 'none'
    secondStep.style.display = 'flex'
    threeStep.style.display = 'none'
    secondStep.style.flexDirection = 'column'
    typeForm.innerHTML = 'Réseaux'
    prevForm1.style.display = 'flex'
    nextForm2.style.display = 'flex'
    nextForm1.style.display = 'none'
    prevForm2.style.display = 'none'
    submitForm.style.display = 'none'
    errorForm.innerHTML = ''
})

submitForm.addEventListener('click', (e) => {
  if(twitter.checked === true && linkTwitter.value === '' || twitch.checked === true && linkTwitch.value === '' || facebook === true && linkFacebook.value === '' ||
  instagram.checked === true && linkInstagram.value === '' || youtube.checked === true && linkYoutube.value === '' || tiktok.checked === true && linkTiktok.value === '') {
    errorForm.innerHTML = 'Nous avons besoins des réseaux qui vous utilisés'
    e.preventDefault()
  }
})

function sendForm() {

  // firststep
  let firstname = document.getElementById('firstname').value
  let lastname = document.getElementById('lastname').value
  let email = document.getElementById('email').value
  let genre = document.getElementById('genre').value
  let birthday = document.getElementById('date').value
  let website = document.getElementById('website').value
  let phone = document.getElementById('phone').value
  let adress = document.getElementById('adress').value
  let sponsor = document.getElementById('sponsor').value
  let nolife = document.getElementById('nolife').value
  let goodPartner = document.getElementById('good-partner').value
  let whatPartner = document.getElementById('what-partner').value
  let game = document.getElementById('jeux').value
  let plateform = document.getElementById('plateform').value

  //secondstep
  let twitter = document.getElementById('twitter').checked
  let twitch = document.getElementById('twitch').checked
  let facebook = document.getElementById('facebook').checked
  let instagram = document.getElementById('instagram').checked
  let youtube = document.getElementById('youtube').checked
  let tiktok = document.getElementById('tiktok').checked

  //threestep
  let linkTwitter = document.getElementById('link-twitter').value
  let linkTwitch = document.getElementById('link-twitch').value
  let linkFacebook = document.getElementById('link-facebook').value
  let linkInstagram = document.getElementById('link-instagram').value
  let linkYoutube = document.getElementById('link-youtube').value
  let linkTiktok = document.getElementById('link-tiktok').value

  let finalMessage = `Prénom: ${firstname}, Nom: ${lastname}, Email: ${email}, Genre: ${genre}, Date de naissance: ${birthday},
  Site: ${website}, Téléphone: ${phone}, Adresse: ${adress}, Qui sont vos sponsqors actuels ?: ${sponsor}, Comment promouvoir la marque Nolife ?: ${nolife},
  Qu'est ce qui fait de vous un bon candidat pour un partenariat: ${goodPartner}, Quel type de partenariat recherchez vous ?: ${whatPartner},
  Quel est votre jeu principal ?: ${game}, Sur quelles plateformes diffusez-vous ?: ${plateform}, Twitter: ${twitter}, Twitch: ${twitch}, Facebook: ${facebook},
  Instagram: ${instagram}, Youtube: ${youtube}, Tiktok: ${tiktok}, Lien twitter: ${linkTwitter}, Lien twitch: ${linkTwitch}, Lien facenook: ${linkFacebook},
  Lien instagram: ${linkInstagram}, Lien youtube: ${linkYoutube}, Lien tiktok: ${linkTiktok}`

  console.log(finalMessage);
}

document.getElementById("form-partenaire").addEventListener("submit", function(event) {
  event.preventDefault();
  let firstname = document.getElementById('firstname').value
  let lastname = document.getElementById('lastname').value
  let email = document.getElementById('email').value
  let genre = document.getElementById('genre').value
  let date = document.getElementById('date').value
  let website = document.getElementById('website').value
  let phone = document.getElementById('phone').value
  let adress = document.getElementById('adress').value
  let sponsor = document.getElementById('sponsor').value
  let nolife = document.getElementById('nolife').value
  let goodPartner = document.getElementById('good-partner').value
  let whatPartner = document.getElementById('what-partner').value
  let jeux = document.getElementById('jeux').value
  let plateforme = document.getElementById('plateform').value

  let linkTwitter = document.getElementById('link-twitter').value
  let linkTwitch = document.getElementById('link-twitch').value
  let linkFacebook = document.getElementById('link-facebook').value
  let linkInstagram = document.getElementById('link-instagram').value
  let linkYoutube = document.getElementById('link-youtube').value
  let linkTiktok = document.getElementById('link-tiktok').value
  var data = { firstname: firstname, lastname: lastname, genre: genre, date: date, website: website, phone: phone, adress: adress, email: email
    , nolife: nolife, goodPartner: goodPartner, whatPartner: whatPartner, jeux: jeux, plateforme: plateforme, sponsor: sponsor, linkTwitter: linkTwitter,
  linkTwitch: linkTwitch, linkFacebook: linkFacebook, linkInstagram: linkInstagram, linkYoutube: linkYoutube,
linkTiktok: linkTiktok };

  fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Données envoyées au serveur : ", data);
    })
    .catch(error => {
      console.log("Erreur lors de l'envoi des données : ", error);
    });

    errorForm.innerHTML = 'Fomurlaire validé et envoyé !'
    errorForm.style.color = 'green'

    setTimeout(() => {
      window.location.href = '../index.html'
    }, 1000)
});