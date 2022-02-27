console.log("Alert!");


const navComponent = function(...args)
{
    const navElement = document.createElement('nav');
    const ulElement = document.createElement('ul');

    navElement.appendChild(ulElement);

    args.forEach(text => {
        const listElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.textContent = text;
        aElement.href = '#';
        listElement.appendChild(aElement);
        ulElement.append(listElement);
    });

    return navElement;
}

const logoComponent = function(imageSrc, logoText)
{
    const logoElement = document.createElement('div');
    logoElement.classList.add('logo');
    const logoImage = new Image();
    logoImage.src = imageSrc;
    logoImage.alt = "Restaurant Logo";
    const logoHeading = document.createElement('h1');
    logoHeading.textContent = logoText;
    logoElement.appendChild(logoImage);
    logoElement.appendChild(logoHeading);
    return logoElement;
}

const headerComponent = function()
{
    const headerElement = document.createElement('header');
    const logo = logoComponent('#', 'Restaurant');
    const nav = navComponent('Home', 'Menu', 'About Us', 'Contact Us', 'Jobs');
    headerElement.appendChild(logo);
    headerElement.appendChild(nav);
    return headerElement;
}

const ctaComponent = function()
{
    const ctaElement = document.createElement('div');
    ctaElement.classList.add('cta');
    const ctaHeading = document.createElement('h3');
    ctaHeading.textContent = "We need to need you";
    const ctaParagraph = document.createElement('p');
    ctaParagraph.textContent = "We need you we need you we need you we need you we need you we need you we need you we need you."
    const ctaButton = document.createElement('button');
    ctaButton.textContent = "Make sacrifice";

    ctaElement.appendChild(ctaHeading);
    ctaElement.appendChild(ctaParagraph);
    ctaElement.appendChild(ctaButton);

    return ctaElement;
}

const mainHomeComponent = function()
{
    const mainElement = document.createElement('main');
    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "Blurg blaggas";
    const mainParagraph = document.createElement('p');
    mainParagraph.textContent = "There is a mortal instrument to the endevor that attaches itself to the pulse. The pulse is the beating heart of the whole system. \
    Without it the whole system crashes. There is a particular sound to it, a metalic ringing.";
    const mainImage = new Image();
    mainImage.src = '#';
    mainImage.alt = 'Stock Image of children with no eyes.';
    const cta = ctaComponent();

    mainElement.appendChild(mainHeading);
    mainElement.appendChild(mainParagraph);
    mainElement.appendChild(mainImage);
    mainElement.appendChild(cta);
    
    return mainElement;
}

const mainContactComponent = function()
{
    const mainElement = document.createElement('main');
    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "Contact Us";
    const mainParagraph = document.createElement('p');
    mainParagraph.textContent = "You can contact us at the below addresses."
    const list = document.createElement('ul');
    const email = document.createElement('li');
    email.textContent = "Contacts us via email at the address Restaurant@GlobalRestaurants.com";
    const phone = document.createElement('li');
    phone.textContent = "Ring us over the phone at 0456667891";
    const address = document.createElement('li');
    address.textContent = "Mail a letter to our physical mailing address at Arkham 123 Behind You St, 2333";

    list.appendChild(email); list.appendChild(phone); list.appendChild(address);

    mainElement.appendChild(mainHeading); mainElement.appendChild(mainParagraph); mainElement.appendChild(list);

    return mainElement;
}

const foodItemComponent = function(name, imageSrc, description)
{
    const foodItem = document.createElement('div');
    const foodName = document.createElement('h3');
    foodName.textContent = name;
    const foodImage = new Image();
    foodImage.src = imageSrc;
    foodImage.alt = "Food";
    const foodParagraph = document.createElement('p');
    foodParagraph.textContent = description;

    foodItem.appendChild(foodName); foodItem.appendChild(foodImage); foodItem.appendChild(foodParagraph);

    return foodItem;
}

const mainMenuComponent = function()
{
    const mainElement = document.createElement('main');
    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "Menu";
    const list = document.createElement('ul');
    list.appendChild(foodItemComponent('Burger', '#', "Made from the finest beef sourced from local farmer, this filling meal is no competition "));
    list.appendChild(foodItemComponent('Soda', '#', "A proprietary mixture using ingredients sourced from the antartic, this drink will leave you refreshed and revitalised"));
    list.appendChild(foodItemComponent('Rotten Eyeballs', '#', ''));
    list.appendChild(foodItemComponent('Steamed Crab', '#', "One of our more exquisite dishes. Sourced from the Himalayas Mountains, these crabs are part fungus."));

    mainElement.appendChild(mainHeading); mainElement.appendChild(list);

    return mainElement;
}

const main404Component = function()
{
    const mainElement = document.createElement('main');
    const mainHeading = document.createElement('h2');
    mainHeading.textContent = "404! Content Not Found!";
    mainElement.appendChild(mainHeading);
    return mainElement;
}

const footerComponent = function()
{
    const footerElement = document.createElement('footer');
    footerElement.textContent = "©The Soul Collector 600M B.C.E.";
    return footerElement;
}

const loadHome = function()
{
    console.log("Loading home!")
    const content = document.getElementById('content');
    content.appendChild(headerComponent());
    content.appendChild(mainHomeComponent());
    content.appendChild(footerComponent());
}

const loadMenu = function()
{
    console.log("Loading menus!");
    const content = document.getElementById('content');
    content.appendChild(headerComponent());
    content.appendChild(mainMenuComponent());
    content.appendChild(footerComponent());
}

const loadContact = function()
{
    console.log("loading contacts!");
    const content = document.getElementById('content');
    content.appendChild(headerComponent());
    content.appendChild(mainContactComponent());
    content.appendChild(footerComponent());
}

const load404 = function()
{
    console.log("Empty page");
    const content = document.getElementById('content');
    content.appendChild(headerComponent());
    content.appendChild(main404Component());
    content.appendChild(footerComponent());
}

export {loadHome, loadMenu, loadContact, load404};