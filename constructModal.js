export class Modal {
  
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleModalClose = this.handleModalClose.bind(this);
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed-new');
    this.overlay.classList.add('overlay-showed-new');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed-new');
    this.overlay.classList.remove('overlay-showed-new');
    this.#destroyClose();
  }

  handleModalClose() {
    this.close();
  }

  #initOpen(buttonId) {
    document.getElementById(buttonId).addEventListener('click', () => this.open());
  }

  #initClose() {
    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.closeButton.addEventListener('click', this.handleModalClose);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleModalClose);
    }
  }
  
  #destroyClose() {
    this.closeButton.removeEventListener('click', this.handleModalClose);
    this.overlay.removeEventListener('click', this.handleModalClose);
  }
}
