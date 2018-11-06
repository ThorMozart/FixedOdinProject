import { frontpage } from './frontpage';
import { menu } from './menu';
import { contact } from './contact';

function fajitas() {
  let faj = document.createElement('img');
  faj.setAttribute('src', './images/fajitas_allegro.png');
  faj.setAttribute('alt', 'delicious fajitas');
  faj.setAttribute('id', 'fajitas');
  return faj;
}
function bubs() {
  let name = document.createElement('h1');
  name.textContent = "Bub's";
  return name;
};
function tabs() {
  let the_tabs = document.createElement('div');
  the_tabs.setAttribute('id', 'tabs');
  let list = document.createElement('ul');
  let one = document.createElement('li');
  one.setAttribute('id', 'review');
  one.textContent = 'Home';
  let two = document.createElement('li');
  two.setAttribute('id', 'menu');
  two.textContent = 'Menu';
  let thr = document.createElement('li');
  thr.setAttribute('id', 'contact');
  thr.textContent = 'Contact';
  list.appendChild(one);
  list.appendChild(two);
  list.appendChild(thr);
  the_tabs.appendChild(list);
  return the_tabs;
}

document.body.appendChild(fajitas());
document.body.appendChild(bubs());
document.body.appendChild(tabs());
window.onload = function () {
  const content = document.getElementById('content');
  content.appendChild(frontpage());

  document.getElementById('menu').onclick = function() {
    content.removeChild(content.childNodes[1]);
    content.appendChild(menu());
    return false;
  }

  document.getElementById('review').onclick = function() {
    content.removeChild(content.childNodes[1]);
    content.appendChild(frontpage());
    return false;
  }

  document.getElementById('contact').onclick = function() {
    content.removeChild(content.childNodes[1]);
    content.appendChild(contact());
    return false;
  }
};
