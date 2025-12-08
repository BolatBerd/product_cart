export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.form);
    const values = Object.fromEntries(formData.entries());
    
    for (let key in values) {
      if (typeof values[key] === 'string') {
        values[key] = values[key].trim();
      }
    }
    return values;
  }

  validate() {
    if (!this.form.checkValidity()) {
      this.form.reportValidity();
      return false;
    }
    return true;
  }

  reset() {
    this.form.reset();
  }

  validateInput(inputName) {
    const input = this.form.elements[inputName];
    return input.checkValidity();
  }
}
