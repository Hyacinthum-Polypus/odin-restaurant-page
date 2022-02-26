import {loadHome, loadMenu, loadContact} from "./page-load";

function clearContent()
{
    const content = document.getElementById('content');
    const children = document.childNodes;
    children.forEach(child => child.remove());
}

function switchTab(tab)
{
    clearContent();

    switch(tab)
    {
        case 'Home':
            loadHome();
            document.querySelectorAll('nav a').forEach(aElement => aElement.addEventListener('click', () => switchTab(aElement.textContent)));
        break;
        case 'Menu':
            loadMenu();
            document.querySelectorAll('nav a').forEach(aElement => aElement.addEventListener('click', () => switchTab(aElement.textContent)));
        break;
        case 'Contact Us':
            loadContact();
            document.querySelectorAll('nav a').forEach(aElement => aElement.addEventListener('click', () => switchTab(aElement.textContent)));
        break;
    }
}

switchTab('Home');