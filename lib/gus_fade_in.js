const template = document.createElement('template')

template.innerHTML = `
<style>
.gus_fade_in {
    opacity: 0;
    transition: 1s;
}

.gus_fade_in_visible {
    opacity: 1;
}
.gus_fade_in_top {
    margin-top: 70px;
}
.gus_fade_in_bottom {
    margin-bottom: 70px;
}
.gus_fade_in_right {
    margin-right: 70px;
}
.gus_fade_in_left {
    margin-left: 70px;
}

.gus_fade_in_call {
    opacity: 1;
    transition: 2s;
}
</style>
<div class="gus_fade_in" part="fade_in">
    <slot></slot>
</div>
`

export class GusFadeIn extends HTMLElement {
    static get observedAttributes() {
        return ['offset', 'direction', 'delay'];
    }

    constructor() {
        super()
        // Create Shadow DOM
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        // Assign elements to variables
        this.fade_in = shadowRoot.querySelector('.gus_fade_in')
    }

    connectedCallback() {
        if (!this.offset) {
            this.offset = 100
        }
        if (!this.delay) {
            this.delay = 0
        }
        if (!this.direction) {
            this.direction = ''
        }
        else {
            switch(this.direction) {
                case 'top':
                    this.fade_in.classList.add('gus_fade_in_top')
                    break;
                case 'bottom':
                    this.fade_in.classList.add('gus_fade_in_bottom')
                    break;
                case 'right':
                    this.fade_in.classList.add('gus_fade_in_right')
                    break;
                case 'left':
                    this.fade_in.classList.add('gus_fade_in_left')
                    break;
            }
        }
        if (window.innerHeight > this.fade_in.getBoundingClientRect().bottom - this.fade_in.getBoundingClientRect().height + this.offset) {
            this.showElements()
        }
    }

    // To do when a attribute changed
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            switch(name) {
                case 'offset':
                    this.offset = newVal
                    break;
                case 'direction':
                    this.direction = newVal
                    break;
                case 'delay':
                    this.delay = newVal
                    break;
            }
        }
    }

    // Define methods for fade in 'offset' attribute (Int)
    get offset() {
        return parseInt(this.getAttribute('offset'))
    }

    set offset(value) {
        this.setAttribute('offset', value)
    }

    // Define methods for fade in 'direction' attribute (String)
    get direction() {
        return this.getAttribute('direction')
    }

    set direction(value) {
        this.setAttribute('direction', value)
    }

    // Define methods for fade in 'delay' attribute (Int)
    get delay() {
        return parseInt(this.getAttribute('delay'))
    }

    set delay(value) {
        this.setAttribute('delay', value)
    }

    // Re-render the fade in object
    render() {
        if (window.innerHeight > this.fade_in.getBoundingClientRect().bottom - this.fade_in.getBoundingClientRect().height + this.offset) {
            this.showElements()
        }
    }

    showElements() {
        setTimeout( (e) => {
            this.fade_in.classList.add('gus_fade_in_call')
            this.fade_in.classList.remove('gus_fade_in_top')
            this.fade_in.classList.remove('gus_fade_in_bottom')
            this.fade_in.classList.remove('gus_fade_in_right')
            this.fade_in.classList.remove('gus_fade_in_left')
        }, this.delay)
    }
}

window.customElements.define('gus-fade-in', GusFadeIn)

window.addEventListener('scroll', function() {
    let all_fade_in = document.getElementsByTagName('gus-fade-in')

    for (let i = 0; i < all_fade_in.length; i++) {
        all_fade_in[i].render()
    }
})