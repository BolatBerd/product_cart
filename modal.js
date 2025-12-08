export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.querySelector('.overlay');
    this.closeSelector = '.modal-close';
    this.closeBtn = this.modal.querySelector(this.closeSelector);
    this.openedClass = 'modal-showed';
    this.screenLock = 'modal-open';
    this._onKeydown = this._onKeydown.bind(this);
    this._onOverlayClick = this._onOverlayClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
    this._lastFocused = null;
  }
  
 open() {
    if (this.isOpen()) return;
    this._lastFocused = document.activeElement;
    this.modal.classList.add(this.openedClass);

    document.body.classList.add(this.screenLock);
    document.addEventListener('keydown', this._onKeydown);
    
    if (this.overlay) {
      this.overlay.addEventListener('click', this._onOverlayClick);
    }
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this._onCloseClick);
    }
    this.modal.focus();
  }

  close() { 
    if (!this.isOpen()) return;
    this.modal.classList.remove(this.openedClass);
    document.body.classList.remove(this.screenLock);
  }

  isOpen() {
    return this.modal.classList.contains(this.openedClass);
  }
  _onKeydown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }
  _onOverlayClick() {
    this.close();
  }
  _onCloseClick(e) {
    e.preventDefault();
    this.close();
  }
}
