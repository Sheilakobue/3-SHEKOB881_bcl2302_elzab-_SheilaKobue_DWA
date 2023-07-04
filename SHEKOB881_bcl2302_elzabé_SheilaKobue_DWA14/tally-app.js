/**
 * Import LitElement, css, and html from the Lit library.
 */
import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * Constants for the maximum, minimum, and step amount of the counter.
 */
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;


/**
 * TallyApp class that extends LitElement.
 */
export class TallyApp extends LitElement {

   /**
   * Define the CSS styles for the component.
   *Custom CSS styles for the TallyApp component 
   */
  static styles = css`
  
:host {
    --color-green: #31C48D;
    --color-white: #FFFFFF;
    --color-dark-grey: #33333D;
    --color-medium-grey: hsl(240, 10%, 29%);
    --color-light-grey: #9CA3AE;
}
* {
    box-sizing: border-box;
}
html {
    height: 100vh;
}
body {
    margin: 0;
    background: var(--color-medium-grey);
    color: var(--color-white);
    font-family: roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
/* header*/
.header {
    text-align: center;
}
.header_title {
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-light-grey);
}
/*control*/
.controls {
    background:rgb(157, 204, 38);
}
/*counter*/
.counter {
    background: var(--color-dark-grey);
}
.counter_value {
    width: 100%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    background: no-repeat;
    color: var(--color-white);
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
}
.counter_actions {
    display: flex;
}
.counter_button {
    background: none;
    width: 50%;
    border-width: 0;
    color: var(--color-white);
    font-size: 3rem;
    height: 10rem;
    border-bottom: 1px solid var(--color-light-grey);
    transition: transform 0. 3s;
    transform: translateY(0);
}
.counter_button:disabled {
    opacity: 0.2
}
.counter_button:active {
    background: var(--color-medium-grey);
    transform: translateY(2%);
}
.counter_button_first {
    border-right: 3px solid var(--color-light-grey);
}
/*footer*/
.footer {
    background: var(--color-dark-grey);
    color: var(--color-light-grey);
    padding: 2rem;
    font-size: 0, 8rem;
    text-align: center;
}
.footer_link P {
    color: var(--color-white);
}
  `;

  /**
   * Properties for the TallyApp component.
   */
    static properties = {
    counterValue: { type: Number },
    counterState: { type: String },
  };

   /**
   * Constructor for the TallyApp component.
   */
  constructor() {
    super();
    this.counterValue = 0;
   
  }

   /**
   * Render function for the TallyApp component.
   */
  render() {
    return html`
      <header class="header">
        <h1 class="header_title">
          Tally counter
        </h1>
      </header>

      <aside class="controls">
        <label>
          <span>Display</span>
          <select>
            <option>Single</option>
            <option>Multiple</option>
          </select>
          <select>
            <span>Counter</span>
            <option>Counter 1</option>
            <option>Counter 2</option>
            <option>Counter 3</option>
          </select>
        </label>
        <button @click=${this.openSettings}>Settings</button>
        <sl-button data-key="Reset" class="Reset" @click=${this.resetCounter}>
          Reset
        </sl-button>
      </aside>

      <main class="counter">
        <input
          class="counter_value"
          data-key="number"
          readonly
          .value=${this.counterValue}
        />
        <div class="counter_actions">
          <sl-button
            data-key="subtract"
            class="counter_button counter_button_first"
            @click=${this.subtractValue}
          >
            -
          </sl-button>
          <sl-button
            data-key="add"
            class="counter_button"
            @click=${this.addValue}
          >
            +
          </sl-button>
        </div>
      </main>

      <footer class="footer">
        inspired by
        <a class="footer_link" href="https://tallycount.app/">Tally Counter</a>.
        Note that this is merely a student practice project for learning JavaScript.
      </footer>
    `;
  }

  /**
   * Function to open settings.
   */
  openSettings() {
    
  }

  /**
   * Function to reset the counter to 0 and set the state to 'Normal'.
   */
  resetCounter() {
    this.counterValue = 0;
    this.counterState = 'Normal';
    alert('counter has been reset');
  }

   /**
   * Function to subtract from the counter value and update the counter state accordingly.
   */
  subtractValue() {
    if (this.counterValue >= MIN_NUMBER) {
      this.counterValue--;
    }

    if (this.counterValue === 0) {
      this.counterState = 'Minimum Reached';
    } else if (this.counterValue < 10) {
      this.counterState = 'Normal';
    }
  }

  /**
   * Function to add to the counter value and update the counter state accordingly.
   */
  addValue() {
    if (this.counterValue < 10) {
      this.counterValue++;
    }

    if (this.counterValue === 10) {
      this.counterState = 'Maximum Reached';
    } else if (this.counterValue > 0) {
      this.counterState = 'Normal';
    }
  }
}

// Define the custom element 'tally-app'.
customElements.define('tally-app', TallyApp);