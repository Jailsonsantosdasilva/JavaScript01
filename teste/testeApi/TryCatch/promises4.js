const getUserInfo = async (id) => {

    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        return data

    } catch (error) {

        console.error(error)
        
    }

}

(async () => {

    const usersData = await Promise.all([

        getUserInfo(1),
        getUserInfo(2),
        getUserInfo(3)

    ])

    console.log(usersData)

})()