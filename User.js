class User {

    constructor(user) {
        this.user = user
    }

    render() {

        const name = this.user.name.first + ' ' + this.user.name.last

        const div = document.createElement('div')
        const p = document.createElement('p')
        const img = document.createElement('img')

        div.style.fontFamily = 'sans-serif'
        div.style.display = 'flex'
        div.style.padding = '4px'
        img.style.borderRadius = '50%'
        p.style.marginLeft = '16px'

        img.src = this.user.picture.thumbnail

        p.innerText = name

        div.appendChild(img)
        div.appendChild(p)

        return div

    }

}