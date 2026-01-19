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

        await getUserInfo(1),
        await getUserInfo(2),
        await getUserInfo(3),

    ])

    console.log(usersData)

})()