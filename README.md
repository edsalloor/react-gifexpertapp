<div align="center">
  <h3 align="center">Gif Expert App</h3>
  <p align="center">
    A small app built in React with Hooks to search and show animated gifs.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-locally">Running Locally</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

See the App running [here][GifExpertApp-url].


### Built With

* ![JavaScript][Vanilla-JavaScript]
* ![React][React.js]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* nvm
* npm


### Installation
1. Get a Giphy API Key [here][Giphy-dashboard-url]
2. Clone the repo
   ```sh
   git clone git@github.com:edsalloor/react-gifexpertapp.git
   ```
3. Move to the project directory
   ```sh
   cd react-gifexpertapp/
   ```
4. Enter your API key in `./src/config.js`
   ```js
   export const GIPHY_API_KEY = 'ENTER YOUR API KEY';
   ```
5. Install project Node version
   ```sh
   nvm install
   ```
6. Install NPM packages
   ```sh
   npm install
   ```


### Running Locally
   ```sh
   npm start
   ```



<!-- MARKDOWN LINKS & IMAGES -->
[GifExpertApp-url]: https://edsalloor.github.io/react-gifexpertapp/
[Giphy-dashboard-url]: https://developers.giphy.com/dashboard/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Vanilla-JavaScript]: https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000
