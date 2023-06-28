import{ LitElement, html} from '../libs/lit-html.js'


class App extends LitElement{
    /**@ return {any} */
    render(){
        return html `<div>123</div>`;
    }
}
customElements.define("tc-app", App);