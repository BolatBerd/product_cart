export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.onOverlayClick = this.onOverlayClick.bind(this);
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

  onOverlayClick() {
    this.close();
  }

  #initOpen(buttonId) {
    document.getElementById(buttonId).addEventListener('click', () => this.open());
  }

  #initClose() {
    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.closeHandler = this.close.bind(this);
    this.closeButton.addEventListener('click', this.closeHandler);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onOverlayClick);
    }
  }
  #destroyClose() {
    this.closeButton.removeEventListener('click', this.closeHandler);
    this.overlay.removeEventListener('click', this.onOverlayClick);
  }
}
