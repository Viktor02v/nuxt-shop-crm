// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2024-11-01',
devtools: { enabled: true },
modules: [
'@nuxtjs/tailwindcss',
'shadcn-nuxt',
'@nuxt/image',
'@nuxt/icon',
'@pinia/nuxt',
['@nuxtjs/google-fonts',
	{
		families: {
			Lato:{
				wght:[300,400,700],
				ital:[300],
			}
		}
	}
],
[
	'@vee-validate/nuxt',
	{
	autoImports: true,
	},
],
],
shadcn: {
   prefix: 'Ui',
   componentDir: './components/ui'
},
pinia:{
   storesDirs:['./store/**'],
},
})