const template = document.createElement("template");
template.innerHTML=


class bookConnect extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({ mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}