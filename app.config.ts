const env = {
    ...process.env
}
delete env.NETLIFY_AUTH_TOKEN
delete env.NETLIFY_SITE_ID

export default defineAppConfig(env)