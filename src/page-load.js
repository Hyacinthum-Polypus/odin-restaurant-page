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

const mainComponent = function()
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

const footerComponent = function()
{
    const footerElement = document.createElement('footer');
    footerElement.textContent = "©The Soul Collector 600M B.C.E.";
    return footerElement;
}

const pageGen = function()
{
    const content = document.getElementById('content');
    content.appendChild(headerComponent());
    content.appendChild(mainComponent());
    content.appendChild(footerComponent());
}

export default pageGen;