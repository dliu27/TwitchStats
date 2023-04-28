# twitch-api-spa-project ![favicon-32x32](https://user-images.githubusercontent.com/48995019/235028996-1f739050-b8a9-4618-ad5d-4f3ed03ba6dc.png)

# Profile Page:
![image](https://user-images.githubusercontent.com/48995019/235028765-388ec821-2f83-4464-b299-4bbc6b10cfc6.png)
![image](https://user-images.githubusercontent.com/48995019/235028805-0f2561a8-88ce-4dda-a57d-9e418a613b8d.png)
![image](https://user-images.githubusercontent.com/48995019/235028867-17122bd4-23b8-4673-8211-d2fd32460c51.png)
![image](https://user-images.githubusercontent.com/48995019/235028890-c02d32ae-d4de-4f92-8569-eb6338057631.png)

# Home Page:
 
![image](https://user-images.githubusercontent.com/48995019/235028922-50445032-1a0c-4a42-9d93-15a1f997ac97.png)
![image](https://user-images.githubusercontent.com/48995019/235028946-bb4a3d13-68d6-49ac-9b7b-df02ae369ecf.png)

Twitch API SPA project written in Vue 3 + TailwindCSS in Vite. I finished this project in a week without any experience in Vue 3 or TailwindCSS. 
In the end, I learned a lot about frontend/backend development and production-code concepts. 

## Features
* Home Page: Component to search Twitch users 

* Profile Page: Component to show analytics about Twitch user, such as username, profile picture, partner checkmark, follower count
    * Key Metrics (avg. video views, peak video views, avg. stream duration, total followers) for the past week, month, year
    * About Me (twitch broadcaster status like partner, whether channel is mature, language, last online, recent games streamed, tags
    * Top Recent Clips (10 most viewed clips in the past 2 months)
    * Recent VODs (10 recent vods)

## Technical Features
- Caching all Twitch API data fetched using Vuex (Vue state management library), and vuex-persist to leverage localStorage to persist this data
- Cached data expires in 15 minutes and is refreshed accordingly
- Skeleton Loading components with animation to show while data is being loaded in
- Debouncing of search bar input
- Formatting of numbers to human-friendly format (2 hours ago, 250k views, etc)
- Hover states and clickable links for everything


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

- You need a Twitch App with suitable permisssions. 
- Make a ```.env``` file in the same directory as ```.env_template``` with the same values. 
- Fill in ```VITE_APP_TWITCH_APP_CLIENT_ID``` and ```VITE_APP_TWITCH_APP_ACCESS_TOKEN``` with your Twitch Client ID and Access Token 
- To get Access Token with Client ID and Client Secret, follow this guide: [Twitch Credentials Flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow)


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
