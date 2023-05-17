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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    curInvestment: 574920,
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
    offProgress.innerHTML = `<progress value = "${item.curInvestment}" max = "${item.maxInvestment}" > <p><span>$${item.curInvestment} raised of $${item.maxInvestment}</span></p>`;
    offeringsItem.append(offProgress);
    
    const offProperties = document.createElement("div");
    offProperties.classList.add('.item-prop') //need to add hidden class
    const securityProp = document.createElement("div");
    securityProp.classList.add('.item-prop__property');
    securityProp.innerHTML = `<div>Security Type</div> <div>${item.securityType}</div>`;
    offProperties.append(securityProp);
    const multProp = document.createElement("div");
    multProp.classList.add('.item-prop__property');
    multProp.innerHTML = `<div>Investment Multiple</div> <div>${item.investmentMult}</div>`;
    offProperties.append(multProp);
    const matProp = document.createElement("div");
    matProp.classList.add('.item-prop__property');
    matProp.innerHTML = `<div>Maturity</div> <div>${item.maturity}</div>`;
    offProperties.append(matProp);
    const minProp = document.createElement("div");
    minProp.classList.add('.item-prop__property');
    minProp.innerHTML = `<div>Min. Investment</div> <div>$${item.minInvestment}</div>`;
    offProperties.append(minProp);

    offeringsItem.append(offProperties);

    const offButton = document.createElement("div");
    offButton.classList.add('off-item__button');
    offButton.innerHTML = `<button>VIEW</button>`;
    offeringsItem.append(offButton);
   
    


    offeringList.append(offeringsItem);// objCreateEnd
})

//--------------/burger--------------------