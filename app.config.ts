const appConfig = defineAppConfig({
    mySecretKey: process.env.NUXT_PUBLIC_MY_SECRET_API_KEY,
})
console.log('app.config.ts:', appConfig)
export default appConfig