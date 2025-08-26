export const authRegister = async ({name, username, email, password}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            username,
            email,
            password
        })
    })
}