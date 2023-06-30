 import{ LitElement, html} from '../libs/lit-html.js'

class tcApp extends LitElement{
   // static properties = {
     // open:{ type: "boolean", state: true}
    

  constructor(){
    super(),
    this.open = false;
  }
    render(){
                
        return html `
        <p> hello</p>
        `;
    }
}
customElements.define("tc-app", tcApp);