# twitch-api-spa-project

Twitch API SPA project written in Vue 3 + TailwindCSS in Vite. I finished this project in a week, and learned a lot about frontend and backend development. 

## Features
* Home Page: Component to search Twitch users 

* Profile Page: Component to show analytics about Twitch user, such as username, profile picture, partner checkmark, follower count
    * Key Metrics (avg. video views, peak video views, avg. stream duration, total followers) for the past week, month, year
    * About Me (twitch broadcaster status like partner, whether channel is mature, language, last online, recent games streamed, tags
    * Top Recent Clips (10 most viewed clips in the past 2 months)
    * Recent VODs (10 recent vods)

## Technical Features
- Caching all Twitch API data fetched using Vuex, and vuex-persist to leverage localStorage to persist this data
- Cached data expires in 15 minutes and is refreshed accordingly
- Skeleton Loading components to show while data is being loaded in
- Debouncing of search bar input
- Formatting of numbers to human-friendly format (2 hours ago, 250k views, etc)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

- You need a Twitch App with suitable permisssions. 
- Make a .env file in the same directory as .env_template with the same values. 
- Fill in VITE_APP_TWITCH_APP_CLIENT_ID and VITE_APP_TWITCH_APP_ACCESS_TOKEN with your Twitch Client ID and Access Token 
- To get Access Token with Client ID and Client Secret, follow this guide https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
