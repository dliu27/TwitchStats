# Twitch Stats ![favicon-32x32](https://user-images.githubusercontent.com/48995019/235028996-1f739050-b8a9-4618-ad5d-4f3ed03ba6dc.png)

## Demo: [Netlify](https://twitch-stats.netlify.app/) (Try 'tarik'. Open console to see fetched/cached data usage. Delete 'vuex' localStorage key to delete cache.)

Minimalistic SPA project written in Vue 3 + TailwindCSS using the Twitch API. I finished this project in a week without any experience in Vue 3 or TailwindCSS. 

Story: I wanted to learn Vue + TailwindCSS and production concepts like skeleton components, caching in a store, and just make a nice-looking application along with my interest in Twitch.

## Technical Features
- Caching all Twitch API data fetched using Vuex (Vue state management library), and vuex-persist to leverage localStorage to persist this data
- Cached data expires in 15 minutes and is refreshed accordingly
- Skeleton Loading components with animation to show while data is being loaded in
- Debouncing of search bar input
- Formatting of numbers to human-friendly format (2 hours ago, 250k views, etc)
- Hover states and clickable links for everything

## Features
* Home Page: Component to search Twitch users 

* Profile Page: Component to show analytics about Twitch user, such as username, profile picture, partner checkmark, follower count
    * Key Metrics (avg. video views, peak video views, avg. stream duration, total followers) for the past week, month, year
    * About Me (twitch broadcaster status like partner, whether channel is mature, language, last online, recent games streamed, tags
    * Top Recent Clips (10 most viewed clips in the past 2 months)
    * Recent VODs (10 recent vods)

# Screens

## Profile Page:
![image](https://user-images.githubusercontent.com/48995019/235028765-388ec821-2f83-4464-b299-4bbc6b10cfc6.png)
![image](https://user-images.githubusercontent.com/48995019/235032951-faac5b18-21aa-410c-a961-1d9e861fb888.png)

![image](https://user-images.githubusercontent.com/48995019/235030269-ad393813-b436-4a92-8346-4631ecb95f04.png)
![image](https://user-images.githubusercontent.com/48995019/235029553-098eab09-ed40-45eb-b744-68eb19d76ef5.png)
![image](https://user-images.githubusercontent.com/48995019/235030161-432aa40e-8bdd-42cd-bf0e-aedd6abea260.png)

## Home Page:
 
![image](https://user-images.githubusercontent.com/48995019/235030315-13f46c2f-0e93-4ac8-8cb9-2024a3640ace.png)
![image](https://user-images.githubusercontent.com/48995019/235030345-5eea99bc-a466-4a9d-a8ac-5d01a5f0c72f.png)

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
