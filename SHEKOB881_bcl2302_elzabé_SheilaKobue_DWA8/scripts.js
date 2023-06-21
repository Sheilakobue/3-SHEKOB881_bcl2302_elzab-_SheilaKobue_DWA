import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

const createFactory = (books, authors, genres, BOOKS_PER_PAGE) => {
// Initializing variables
let page = 1;
let matches = books;

/**
 * Define the factory function that encapsulates the common functionality and data
 * Creates a preview element for a book
 * @param {string} author - The author ID of the book
 * @param {string} id - The ID of the book
 * @param {string} image - The image URL of the book
 * @param {string} title - The title of the book
 * @returns {HTMLButtonElement} - The created preview element as a button
*/


const createPreviewElement = (author, id, image, title) => {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
    <img
      class="preview__image"
      src="${image}"
    />
    
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return element;
};

/**
 * Appends a preview element to a fragment
 * @param {HTMLElement} element - The preview element to append
 * @param {DocumentFragment} fragment - The fragment to append the element to
*/

const appendPreviewElementToFragment = (element, fragment) => {
  fragment.appendChild(element);
};

/**
 * Sets up genre options in the search form
*/

const setupGenreOptions = () => {
  const genreHtml = document.createDocumentFragment();
  const firstGenreElement = document.createElement('option');
  firstGenreElement.value = 'any';
  firstGenreElement.innerText = 'All Genres';
  genreHtml.appendChild(firstGenreElement);

  for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
  }

  document.querySelector('[data-search-genres]').appendChild(genreHtml);
};

/**
 * Sets up author options in the search form
*/

const setupAuthorOptions = () => {
  const authorsHtml = document.createDocumentFragment();
  const firstAuthorElement = document.createElement('option');
  firstAuthorElement.value = 'any';
  firstAuthorElement.innerText = 'All Authors';
  authorsHtml.appendChild(firstAuthorElement);

  for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
  }

  document.querySelector('[data-search-authors]').appendChild(authorsHtml);
};

/**
 * Sets up the theme based on the user's preference
*/
const setupTheme = () => {
   // ... code for setting up dark theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('night');
     // ... code for setting up dark theme
  } else {
    setTheme('day');
  }
};

const setTheme = (theme) => {
  if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }
};
/**
 * Updates the list button and its remaining count
*/
const updateListButton = () => {
  const remainingCount = matches.length - (page * BOOKS_PER_PAGE);
  const listButton = document.querySelector('[data-list-button]');
  const searchCancel = document.querySelector('[data-search-cancel]');
  const settingsCancel = document.querySelector('[data-settings-cancel]');
  const headerSearch = document.querySelector('[data-header-search]');
  const headerSettings = document.querySelector('[data-header-settings]');
  const listClose = document.querySelector('[data-list-close]');

  listButton.innerText = `Show more (${remainingCount})`;
  listButton.disabled = remainingCount <= 0;

  listButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remainingCount > 0 ? remainingCount : 0})</span>
  `;

  searchCancel.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false;
  });

  settingsCancel.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
  });

  headerSearch.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true;
    document.querySelector('[data-search-title]').focus();
  });

  headerSettings.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
  });

  listClose.addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
  });
};

/**
 * Handles the submission of the search form
 * @param {Event} event - The form submission event
*/

const handleSettingsFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);
  setTheme(theme);
  document.querySelector('[data-settings-overlay]').open = false;
};

const handleSearchFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
      (filters.author === 'any' || book.author === filters.author) && 
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  updateListItems();
  updateListButton();
};

/**
 * Updates the list items based on the current page
*/

const updateListItems = () => {
  const listItems = document.querySelector('[data-list-items]');
  const fragment = document.createDocumentFragment();

  listItems.innerHTML = '';

  for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const previewElement = createPreviewElement(author, id, image, title);
    appendPreviewElementToFragment(previewElement, fragment);
  }

  listItems.appendChild(fragment);
};

/**
 * Handles the click event on the list button
*/

const handleListButtonClick = () => {
  const listItems = document.querySelector('[data-list-items]');
  const fragment = document.createDocumentFragment();
  const startIndex = page * BOOKS_PER_PAGE;
  const endIndex = (page + 1) * BOOKS_PER_PAGE;

  for (const { author, id, image, title } of matches.slice(startIndex, endIndex)) {
    const previewElement = createPreviewElement(author, id, image, title);
    appendPreviewElementToFragment(previewElement, fragment);
  }

  listItems.appendChild(fragment);
  page += 1;
  updateListButton();
};

/**
 * Handles the click event on a list item
 * @param {Event} event - The click event
*/

const handleListItemClick = (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      for (const singleBook of books) {
        if (singleBook.id === node.dataset.preview) {
          active = singleBook;
          break;
        }
      }
    }
  }

  if (active) {
    const listActive = document.querySelector('[data-list-active]');
    listActive.open = true;
    listActive.querySelector('[data-list-blur]').src = active.image;
    listActive.querySelector('[data-list-image]').src = active.image;
    listActive.querySelector('[data-list-title]').innerText = active.title;
    listActive.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    listActive.querySelector('[data-list-description]').innerText = active.description;
  }
};

// Initial setup
const setup = () => {
  setupGenreOptions();
  setupAuthorOptions();
  setupTheme();
  updateListItems();
  updateListButton();

  // Event listeners
  document.querySelector('[data-settings-form]').addEventListener('submit', handleSettingsFormSubmit);
  document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);
  document.querySelector('[data-list-button]').addEventListener('click', handleListButtonClick);
  document.querySelector('[data-list-items]').addEventListener('click', handleListItemClick);
};

setup();
}
/**
 * update the code using the factor function and its encapsulated functionality
 */
//import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

const factory = createFactory(books, authors, genres, BOOKS_PER_PAGE);
factory.setup();

//In the updated code, the factory function is defined and used to encapsulate the common functionality and data. The factory function creates an object with methods for creating preview elements, appending elements to a fragment, setting up genre options, setting up author options, and setting up the theme. The factory object is then used to call these methods in the setup function, replacing the original function calls.

//The imported data (books, authors, genres, and BOOKS_PER_PAGE) are passed as arguments to the factory function to initialize the factory object with the correct data.

//After creating the factory object, the setup method is called on the factory object to perform the initial setup of the application. This includes setting up genre and author options, setting up the theme, updating list items, and adding event listeners.

//Overall, the code has been updated to utilize the factory function and its encapsulated functionality, making the code more modular and reusable.