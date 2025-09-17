function customRender(reactElement, container){ //the function that contains the HTML element duh
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement) */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement) 
}

const mainContainer = document.querySelector("#root"); //creating the root element

const reactElement = {//create a element with it's properties and attributes; 
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}

customRender(reactElement, mainContainer) // calling the render function