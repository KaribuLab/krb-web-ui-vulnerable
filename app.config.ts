const env = {
    ...process.env
}
delete env.NETLIFY_AUTH_TOKEN
delete env.NETLIFY_SITE_ID
const appConfig = defineAppConfig(env)
console.log('app.config.ts:', appConfig)
export default useAppConfig