class Togglefy {
  #targetEl;

  #triggerEl;

  #toggleClassName;

  #exclusive;

  constructor(options = {}) {
    const {
      targetSelector = '.target',
      triggerSelector = '.trigger',
      exclusive = false,
      toggleClassName = 'toggle',
    } = options;

    this.#targetEl = this.#resolveElements(targetSelector);
    this.#triggerEl = this.#resolveElements(triggerSelector);
    this.#toggleClassName = toggleClassName;
    this.#exclusive = exclusive;
  }

  #resolveElements(selector) {
    if (selector instanceof HTMLElement) return [selector];

    const elements = document.querySelectorAll(selector);

    return Array.from(elements);
  }

  #toggleClass(targetEl) {
    if (this.#exclusive) {
      this.#removeClass(targetEl);
    }

    targetEl.classList.toggle(this.#toggleClassName);
  }

  #removeClass(exceptEl) {
    this.#targetEl.forEach((el) => {
      if (el !== exceptEl) {
        el.classList.remove(this.#toggleClassName);
      }
    });
  }

  init() {
    this.#triggerEl.forEach((triggerEl, index) => {
      triggerEl.addEventListener('click', () => {
        const targetEl = this.#targetEl[index] || this.#targetEl[0];

        this.#toggleClass(targetEl);
      });
    });
  }
}

export default Togglefy;
