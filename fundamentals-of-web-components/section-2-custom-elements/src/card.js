const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = /* html */`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <div class="card">
    <div class="card-header">
      <slot name="card-header">Card Header</slot>
    </div>
    <div part="body-of-card" class="card-body">
      <slot name="card-body">Card Body</slot>
    </div>
  </div>
  <style>
    ::slotted(*) {
      color: black !important;
    }
  </style>
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }
}

customElements.define('app-card', Card);