const template = document.createElement("template");
template.innerHTML = `
<div class = "book-connect">
    <div class="preview">
      <img class="preview__image" src="" />
      <div class="preview__info">
        <h3 class="preview__title"></h3>
        <div class="preview__author"></div>
        <div class="actions">
            <button id="toggle">close</button>
        </div>
      </div>
    </div>
</div>
`;

class BookConnect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

 connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo);
  }
}
toggleInfo = () => {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".preview").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Hide Details"
      : "View Details";
  };

   static get observedAttributes() {
  return ["title", "authors", "author", "image", "blur"];
}

attributeChangedCallback(name, oldValue, newValue) {
  if (name === "title") {
    this.shadowRoot.querySelector(".preview__title").innerText = newValue;
  } else if (name === "authors") {
    this.shadowRoot.querySelector(".preview__authors").innerText = newValue;
  } else if (name === "author") {
    // Handle specific author selection if necessary
  } else if (name === "image") {
    this.shadowRoot.querySelector(".preview__image").src = newValue;
  } else if (name === "blur") {
    this.shadowRoot.querySelector(".preview__blur").src = newValue;
    // Handle blur attribute if necessary
  }
}
}
customElements.define("book-connect", BookConnect);
export default BookConnect;

