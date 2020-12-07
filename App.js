class App {

    constructor() {
        this.container = null

        this.searchPhrase = ''

        this.users = null
        this.isLoading = false
        this.hasError = null
    }

    loadUsers() {
        this.startLoading()

        return fetch('https://randomuser.me/api?results=10')
            .then((response) => response.json())
            .then((data) => this.setUsers(data && data.results))
            .catch((error) => this.setError(error))
            .finally(() => this.stopLoading())

    }

    stopLoading() {
        console.log('stopLoading')
        this.isLoading = false
        this.render()
    }

    startLoading() {
        console.log('startLoading')
        this.isLoading = true
        this.hasError = null
        this.render()
    }

    setError(error) {
        console.log('setError')
        this.hasError = error
        this.render()
    }

    setUsers(users) {
        console.log('setUsers')
        this.users = users || []
        this.render()
    }

    setSearchPhrase(newSearchPhrase) {
        this.searchPhrase = newSearchPhrase
        this.render()
    }

    render() {

        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const buttonElement = new Button('Load', () => this.loadUsers())
        this.container.appendChild(buttonElement.render())

        const inputElement = new Input(this.searchPhrase, (event) => {
            this.setSearchPhrase(event.target.value)
        })
        this.container.appendChild(inputElement.render())

        if (this.hasError) {
            const messageElement = new Message('Error ocurred!')
            this.container.appendChild(messageElement.render())
            return this.container
        }

        if (this.isLoading) {
            const messageElement = new Message('Loading...')
            this.container.appendChild(messageElement.render())
            return this.container
        }

        if (!Array.isArray(this.users) || this.users.length === 0) {
            const messageElement = new Message('Nothing here!')
            this.container.appendChild(messageElement.render())
            return this.container
        }

        const filteredUsers = this.users
            .filter((user) => {
                const name = user.name.first + ' ' + user.name.last
                const nameLowerCase = name.toLowerCase()
                const searchPhraseLowerCase = this.searchPhrase.toLowerCase()
                return nameLowerCase.includes(searchPhraseLowerCase)
            })

        if (filteredUsers.length === 0) {
            const messageElement = new Message('No results after filtering!')
            this.container.appendChild(messageElement.render())
            return this.container
        }

        filteredUsers.forEach((user) => {
            const userElement = new User(user)

            this.container.appendChild(userElement.render())
        })

        return this.container

    }

}