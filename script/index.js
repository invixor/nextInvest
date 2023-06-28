//--------------burger--------------------


const burger = document.querySelector('.header__icon');
const menu = document.querySelector('.nav');
const body = document.body;
const headerBody = document.querySelector('.header__body');
const greenButton = document.querySelector('.green-button');

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
    greenButton.classList.toggle('_active');
});

//--------------/burger--------------------


//--------------offerings--------------------

const firstObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/01.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 922420,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const secondObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/02.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 577356,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const thirdObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/03.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 5630,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const fourthObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/04.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 12450,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const fifthObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/05.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 574920,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const sixthObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/01.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 900433,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const seventhObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/02.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 435320,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const eightsObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/03.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 53453,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };


  const ninthObj = {
    name: 'Oxalis',
    Address: 'Broklyn,NY',
    img:'img/offerings/04.png',
    description: 'A recognized leader in language immersion & early education, opening second school.',
    tag1: 'HOUSE',
    tag2: 'Family Busines',
    maxInvestment: 1000000,
    curInvestment: 4920,
    securityType: 'Revenue Sharing Note',
    investmentMult: '1.4x',
    maturity: 48,
    minInvestment:100
  };

  const objArray =[fifthObj,secondObj,thirdObj,fourthObj,fifthObj,sixthObj,seventhObj,eightsObj, ninthObj];

const offeringList = document.querySelector('.offerings__list');


objArray.forEach(item=>{
    const offeringsItem = document.createElement("div");
    offeringsItem.classList.add('offerings__item');
    offeringsItem.classList.add('off-item');
    
    const offPic = document.createElement("div");
    offPic.classList.add('off-item__pic')
    offPic.innerHTML = `<img src = ${item.img}></img>`;
    offeringsItem.append(offPic);

    const offTags = document.createElement("div");
    offTags.classList.add('off-item__tags');
    offTags.classList.add('tags');
    offTags.innerHTML = `<div class = "tags__item">${item.tag1}</div> <div class = "tags__item">${item.tag2}</div>`;
    offeringsItem.append(offTags);

    const offTitle = document.createElement("div");
    offTitle.classList.add('off-item__title');
    offTitle.innerHTML = `<span>${item.name}</span> <p>${item.Address}</p>`;
    offeringsItem.append(offTitle);


    const offDesc = document.createElement("div");
    offDesc.classList.add('off-item__description');
    offDesc.innerHTML = `${item.description}`;
    offeringsItem.append(offDesc);

    const offProgress = document.createElement("div");
    offProgress.classList.add('off-item__progress');
    offProgress.innerHTML = `<progress value = "${item.curInvestment}" max = "${item.maxInvestment}" ></progress> <p><span>$${item.curInvestment}</span> raised of $${item.maxInvestment}</p>`;
    offeringsItem.append(offProgress);
    
    const offProperties = document.createElement("div");
    offProperties.classList.add('item-prop');
    offProperties.classList.add ('_hidden');
    const securityProp = document.createElement("div");
    securityProp.classList.add('item-prop__property');
    securityProp.innerHTML = `<div>Security Type</div> <div>${item.securityType}</div>`;
    offProperties.append(securityProp);
    const multProp = document.createElement("div");
    multProp.classList.add('item-prop__property');
    multProp.innerHTML = `<div>Investment Multiple</div> <div>${item.investmentMult}</div>`;
    offProperties.append(multProp);
    const matProp = document.createElement("div");
    matProp.classList.add('item-prop__property');
    matProp.innerHTML = `<div>Maturity</div> <div>${item.maturity}</div>`;
    offProperties.append(matProp);
    const minProp = document.createElement("div");
    minProp.classList.add('item-prop__property');
    minProp.innerHTML = `<div>Min. Investment</div> <div>$${item.minInvestment}</div>`;
    offProperties.append(minProp);

    offeringsItem.append(offProperties);

    const offButton = document.createElement("div");
    offButton.classList.add('off-item__button');
    offButton.classList.add('_hidden');
    offButton.innerHTML = `<button>VIEW</button>`;
    offeringsItem.append(offButton);
   
    


    offeringList.append(offeringsItem);// objCreateEnd
});


offeringsAllItems = document.querySelector('.offerings__list');
offeringsAllItems.children[6].classList.add('off-item-hidden');
offeringsAllItems.children[7].classList.add('off-item-hidden');
offeringsAllItems.children[8].classList.add('off-item-hidden');

const offeringsButton = document.querySelector('.offerings__button');
const offHiddenItems = document.querySelectorAll('.off-item-hidden');
offHiddenItems.forEach(item=>{
  item.classList.add('_hidden');
})

if (!offeringsAllItems.children[6].classList.contains('_hidden')){
  offeringsButton.querySelector('button').textContent = 'VIEW LESS';
}
if (offeringsAllItems.children[6].classList.contains('_hidden')){
  offeringsButton.querySelector('button').textContent = 'VIEW ALL PROJECTS';
}

offeringsButton.addEventListener('click', ()=>{
  offHiddenItems.forEach(item=>{
    item.classList.toggle('_hidden');
  })
 
});


const offItems = document.querySelectorAll('.off-item');

offItems.forEach(item=>{
  item.addEventListener('click', ()=>{
    
    if (item.querySelector('.tags').style.display == "none"){
      item.querySelector('.tags').style.display="flex"
    } 
    item.querySelector('.tags').style.display = 'none';
    item.querySelector('.off-item__pic').classList.toggle('_hidden');
    item.querySelector('.item-prop').classList.toggle('_hidden');
    item.querySelector('.off-item__button').classList.toggle('_hidden');
  })
})



//--------------/offerings--------------------


//--------------modals--------------------

const regModal = document.querySelector('#modal-1');
const logModal = document.querySelector('#modal-2');
const buttonBlock = document.querySelector('.nav-buttons');
const logButton = document.querySelector('.green-button');
const regButton = document.querySelector('.red-button');
const regForm = document.querySelector('#regForm');
const logForm = document.querySelector('#logForm');
let userList;
let newUser;

class User {
  constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}


regButton.addEventListener('click', ()=>{
  regModal.classList.remove('_hidden');
  body.classList.add('_lock');
})

regModal.addEventListener('click', ()=>{
  regModal.classList.add('_hidden');
  body.classList.remove('_lock');
})

regModal.querySelector('.modal-window').addEventListener('click', (e)=>{
  e.stopPropagation();
})

regForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  regModal.classList.add('_hidden');
  logButton.classList.add('_hidden');
  regButton.classList.add('_hidden');
  newUser = new User(
    document.querySelector("#regName").value,
    document.querySelector("#regEmail").value,
    document.querySelector("#regPass").value
  )
  sendData('core/signup.php', newUser);
  return newUser;

});

const sendData = async(url, data) =>{
  const response = await fetch (url,{
    method: 'POST',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error(`Error by ${url}, error status is ${response}`);
  }
  return await response.json()
};


const getData = async (url) =>{
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error by ${url}, error status is ${response}`);
  }
  return await response.json();
};

logButton.addEventListener('click', ()=>{
  logModal.classList.remove('_hidden');
  body.classList.add('_lock');
});

logModal.addEventListener('click', ()=>{
  logModal.classList.add('_hidden');
  body.classList.remove('_lock');
});

logModal.querySelector('.modal-window').addEventListener('click', (e)=>{
  e.stopPropagation();
});

window.addEventListener('load', ()=>{
  getData('core/login.php').then((data)=>{
    userList = data;
  });
  return userList;
})

let emailList = [];
logButton.addEventListener('click', ()=>{
  userList.forEach(item=>{
    emailList.push(item.email);
   })
   return emailList;
});


logForm.addEventListener ('submit', (e)=>{
  e.preventDefault();
  let userEmail = logForm.querySelector('[name = "email"]').value;
  let userPass = logForm.querySelector('[name = "password"]').value;
  let userPos = emailList.indexOf(userEmail);

  if (emailList.includes(userEmail)){
    if(userPass==userList[userPos].password){
      logModal.classList.add('_hidden');
      logButton.classList.add('_hidden');
      regButton.classList.add('_hidden');
    } else{
      alert ('Password is invalid!');
    }
  } else {
    alert ('No such User');
  }
})


//--------------/modals--------------------