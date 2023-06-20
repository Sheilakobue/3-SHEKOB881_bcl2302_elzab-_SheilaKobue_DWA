const template = document.createElement("template");
template.innerHTML = `
<script>
.preview {
  border-width: 0;
  width: 100%;
  font-family: Roboto, sans-serif;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  border: 1px solid rgba(var(--color-dark), 0.15);
  background: rgba(var(--color-light), 1);
}

@media (min-width: 60rem) {
  .preview {
    padding: 1rem;
  }
}

.preview_hidden {
  display: none;
}

.preview:hover {
  background: rgba(var(--color-blue), 0.05);
}

.preview__image {
  width: 48px;
  height: 70px;
  object-fit: cover;
  background: grey;
  border-radius: 2px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
}

.preview__info {
  padding: 1rem;
}

.preview__title {
  margin: 0 0 0.5rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: rgba(var(--color-dark), 0.8)
}

.preview__author {
  color: rgba(var(--color-dark), 0.4);
}
</script>
    
    <div class="preview">
    <img class="preview__image" src="" />
    <div class="preview__info">
      <h3 class="preview__title"></h3>
      <div class="preview__author"></div>
    </div>
  </div>
`;

class BookConnect extends HTMLElement {
  constructor() {
    super();
  
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

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

  connectedCallback() {
    this.shadowRoot.querySelector(".overlay__button").addEventListener("click", () => {
      this.setAttribute("data-list-active", "");
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".overlay__button").removeEventListener("click", () => {
      this.setAttribute("data-list-active", "");
    });
  }
}
customElements.define("book-connect", BookConnect);
export default BookConnect;

/**
  toggleInfo = () => {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".info").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Hide Details"
      : "View Details";
  };
  

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector(".details h2").innerText =
      this.getAttribute();
    this.shadowRoot.querySelector().src =
      this.getAttribute();
    this.shadowRoot.querySelector().alt =
      this.getAttribute();
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo(this));
    this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .removeEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }
*/
