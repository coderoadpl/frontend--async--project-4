class App {

    constructor() {
        this.users = null
        this.isLoading = true
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
    }

    startLoading() {
        console.log('startLoading')
        this.isLoading = true
        this.hasError = null
    }

    setError(error) {
        console.log('setError')
        this.hasError = error
    }

    setUsers(users) {
        console.log('setUsers')
        this.users = users || []
    }

}