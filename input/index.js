import html from './index.html'; // import('./index.html');

const template = document.createElement('template');

class MyApp extends HTMLElement {
  constructor() {
    super();

    template.innerHTML = html;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-app', MyApp);
