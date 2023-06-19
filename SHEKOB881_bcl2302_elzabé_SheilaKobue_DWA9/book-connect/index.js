const template = document.createElement("template");
template.innerHTML=`
<dialog class="overlay" data-list-active>
      <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-list-title></h3>
        <div class="overlay__data" data-list-subtitle></div>
        <p class="overlay__data overlay__data_secondary" data-list-description></p>
      </div>

      <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
      </div>
    </dialog>


    <dialog class="overlay" data-search-overlay>
      <div class="overlay__content">
        <form class="overlay__form" data-search-form id="search">
          <label class="overlay__field">
            <div class="overlay__label">Title</div>
            <input class="overlay__input" data-search-title name="title" placeholder="Any"></input>
          </label>

          <label class="overlay__field">
            <div class="overlay__label">Genre</div>
            <select class="overlay__input overlay__input_select" data-search-genres name="genre"></select>
          </label>

          <label class="overlay__field">
            <div class="overlay__label">Author</div>
            <select class="overlay__input overlay__input_select" data-search-authors name="author">
            </select>
          </label>
        </form>

        <div class="overlay__row">
          <button class="overlay__button" data-search-cancel>Cancel</button>
          <button class="overlay__button overlay__button_primary" type="submit" form="search">Search</button>
        </div>
      </div>
    </dialog>

    <dialog class="overlay" data-settings-overlay>
      <div class="overlay__content">
        <form class="overlay__form" data-settings-form id="settings">
          <label class="overlay__field">
            <div class="overlay__label">Theme</div>

            <select class="overlay__input overlay__input_select" data-settings-theme name="theme">
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
          </label>
        </form>

        <div class="overlay__row">
          <button class="overlay__button" data-settings-cancel>Cancel</button>
          <button class="overlay__button overlay__button_primary" type="submit" form="settings">Save</button>
        </div>
      </div>
    </dialog>
    
    <div class="backdrop"></div>
    `;

class bookConnect extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({ mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
export default bookConnect;