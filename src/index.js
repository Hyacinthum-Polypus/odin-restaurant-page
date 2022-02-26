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
        break;
        case 'Menu':
            loadMenu();
        break;
        case 'Contact Us':
            loadContact();
        break;
    }
}

loadHome();