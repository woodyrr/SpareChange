export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    const {username, email, password, repeatPassword, name} = body
})