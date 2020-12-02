class User {

    constructor(user) {
        this.user = user
    }

    render() {

        const name = this.user.name.first + ' ' + this.user.name.last

        return document.createTextNode(name)

    }

}