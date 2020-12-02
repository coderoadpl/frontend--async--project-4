class Button {

    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }

    render() {

        const button = document.createElement('button')

        button.innerHTML = this.label

        button.addEventListener(
            'click',
            this.onClick
        )

        return button

    }

}