
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$Togglefy {
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
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$Togglefy;


//# sourceMappingURL=index.js.map
