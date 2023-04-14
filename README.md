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
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

GPTXE is a Google Chrome extension that uses OpenAI's GPT-3.5 model to provide text analysis and manipulation functionalities to its users. With GPTXE, users can easily summarize content, fix typos, explain code, and check information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


  ```sh
  npm install
npm run dev
  ```

### Installation

1. Get a free API Key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/tunahankanpolat/gptxe.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API Key in `.env`
   ```js
   OPENAI_API_KEY= 'ENTER YOUR API';
   ```
5. Run Next.js server
   ```sh
   npm run dev
   ```
   Make sure that the Next.js server URL matches the URL in background.js.
6. Open Google Chrome and go to the extensions page (chrome://extensions/).
7. Turn on Developer mode.
8. Click on "Load unpacked" and select the GPTXE directory.
 
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Select the text you want to analyze or manipulate.
2. Click on the GPTXE icon button.
3. Choose the desired operation from the menu.
4. Wait for the operation to complete and view the results.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Structure -->
## Structure

### Content.js
Content.js scripts read and modify the content of a page. It listens to user events such as mouse clicks and text selections, and adds buttons and menus to the browser when certain conditions are met.

### Background.js
The background script connects to a local API that uses OpenAI's GPT-3.5 model to provide the text analysis and manipulation functionalities.

### Components
- Icon button: This is the component that appears when the user selects text on a webpage. It allows users to quickly access GPTXE's functionalities without having to right-click on the selected text.

- Menu: This component is shown when the user clicks on the icon button. It provides a list of available operations that can be performed on the selected text, such as summarization.

- Bubble: The bubble component appears when the user selects an operation from the menu. It displays the result of the operation performed on the selected text.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add Core Features
- [x] Add Readme.md file
- [ ] Add Sign up/Log in
- [ ] Add API Key entry part

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [https://github.com/mbi-at-vngrs](https://github.com/mbi-at-vngrs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
