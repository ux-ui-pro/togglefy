class $cf838c15c8b009ba$var$Togglefy {
    #targetEl;
    #triggerEl;
    #toggleClassName;
    #exclusive;
    constructor(options = {}){
        const { targetSelector: targetSelector = ".target", triggerSelector: triggerSelector = ".trigger", exclusive: exclusive = false, toggleClassName: toggleClassName = "toggle" } = options;
        this.#targetEl = this.#resolveElements(targetSelector);
        this.#triggerEl = this.#resolveElements(triggerSelector);
        this.#toggleClassName = toggleClassName;
        this.#exclusive = exclusive;
    }
    #resolveElements(selector) {
        if (selector instanceof HTMLElement) return [
            selector
        ];
        const elements = document.querySelectorAll(selector);
        return Array.from(elements);
    }
    #toggleClass(targetEl) {
        if (this.#exclusive) this.#removeClass(targetEl);
        targetEl.classList.toggle(this.#toggleClassName);
    }
    #removeClass(exceptEl) {
        this.#targetEl.forEach((el)=>{
            if (el !== exceptEl) el.classList.remove(this.#toggleClassName);
        });
    }
    init() {
        this.#triggerEl.forEach((triggerEl, index)=>{
            triggerEl.addEventListener("click", ()=>{
                const targetEl = this.#targetEl[index] || this.#targetEl[0];
                this.#toggleClass(targetEl);
            });
        });
    }
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$Togglefy;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
