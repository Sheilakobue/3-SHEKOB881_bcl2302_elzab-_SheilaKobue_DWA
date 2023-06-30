 import{ LitElement, html} from '../libs/lit-html.js'

class tcApp extends LitElement{
    static properties = {
      open:{ type: "boolean", state: true}
    }

  constructor(){
    super(),
    this.open = false;
  }
    render(){
        console.log(this.open);
        
        return html `
        <div>
          
        <main class="counter">
        <input class="counter_value" data-key="number" readonly value="0" />
        <div class="counter_actions">
            <sl-button data-key="subtract" class="counter_button counter_button_first">-</sl-button>
            <sl-button data-key="add" class="counter_button">+</sl-button>
        </div>
        </main>

        </div>
        `;
    }
}
customElements.define("tc-app", tcApp);