// // element that will be wrapped
// var el = document.querySelector('div.wrap_me');

// // create wrapper container
// var wrapper = document.createElement('div');

// // insert wrapper before el in the DOM tree
// el.parentNode.insertBefore(wrapper, el);

// // move el into wrapper
// wrapper.appendChild(el);

function wrap(el: Element, wrapper: Element) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}


export default wrap;