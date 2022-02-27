import {loadHome, loadMenu, loadContact, load404} from "./page-load";

function clearContent()
{
    console.log("Clearning!");
    const content = document.getElementById('content');
    const children = content.childNodes;
    console.log(children);
    for(let i = 0; i < children.length;) children[0].remove();
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
        default:
            load404();
        break;
    }

    document.querySelectorAll('nav a').forEach(aElement => aElement.addEventListener('click', () => switchTab(aElement.textContent)));

}

switchTab('Home');