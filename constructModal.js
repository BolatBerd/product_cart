export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.onOverlayClick = this.onOverlayClick.bind(this);

    this.#initOpen(buttonId);
    this.#initClose();
  }

  open() {
    this.modal.classList.add('modal-showed-new');
    this.overlay.classList.add('overlay-showed-new');
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onOverlayClick);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed-new');
    this.overlay.classList.remove('overlay-showed-new');
    this.overlay.removeEventListener('click', this.onOverlayClick);
  }

  onOverlayClick() {
    this.close();
  }

  #initOpen(buttonId) {
    document.getElementById(buttonId).addEventListener('click', () => this.open());
  }

  #initClose() {
    this.modal.querySelector('.modal-close-button').addEventListener('click', () => this.close());
  }
}
