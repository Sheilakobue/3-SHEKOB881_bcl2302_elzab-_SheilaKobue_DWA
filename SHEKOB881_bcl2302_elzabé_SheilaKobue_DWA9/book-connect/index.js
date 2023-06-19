const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="pet-card/styles.css"/>

 element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = 
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

class bookConnect extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo.bind(this));
    this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo.bind(this));
    this.shadowRoot
      .querySelector("#greet")
      .removeEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".info").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Hide Details"
      : "View Details";
  }

  static get observedAttributes() {
    return ["name", "avatar"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name") {
      this.shadowRoot.querySelector("h2").innerText = newValue;
    } else if (name === "avatar") {
      this.shadowRoot.querySelector("img").src = newValue;
      this.shadowRoot.querySelector("img").alt = this.getAttribute("name");
    }
  }
}

customElements.define("book-connect", bookConnect);
export default bookConnect;