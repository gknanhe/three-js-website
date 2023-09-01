# React ThreeJs Website

## Description

a cool website created using threejs. user can upload the logos , images , textures and can also adjust color lo look how it will look on t-shirt. 

## Hosted Link (https://eloquent-concha-e8843c.netlify.app/)

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)


## Project structure

    public/
    ├── galley/
    ├── vitesvg/
    ├── threejs.png/
    ├── react.png/
    └── shirt_baked.glb/
    
    src/
    ├── assets/
    │   ├── canvas/
    │   │   ├── index.jsx/
    │   │   ├── backDrop.jsx/
    │   │   ├── SHirt.jsx/
    │   │   └── CameraRig.jsx/
    │   ├── components/
    │   │   ├── AIPicker.jsx/
    │   │   ├── colorPicker.jsx/
    │   │   ├── CustomButton.jsx/
    │   │   ├── FilePicker.jsx/
    │   │   ├── index.js/
    │   │   └── tab.jsx/
    │   ├── config/
    │   │   ├── config.jsx/
    │   │   ├── constants.js/
    │   │   ├── helper.js/
    │   │   └── motion.js/
    │   ├── pages/
    │   │   ├── Customizer.jsx/
    │   │   └── Home.jsx/
    │   ├── Store/
    │   │   └── index.js/
    │   ├── App.jsx/
    │   ├── index.css/
    │   └── main.jsx/




## Screenshots

Insert screenshots or GIFs of your project in action. You can provide a visual overview of how your project looks and works.

## Technologies Used

List the technologies and libraries that you used to build your project. Here are some examples:

- React
- Three.js
- Tailwind CSS
- React Canvas
- React Color Picker

## Installation

Provide instructions on how to install and set up your project locally. Include any prerequisites or dependencies that need to be installed.

    ```bash npm install


# Clone the repository
git clone https://github.com/gknanhe/three-js-website.git

# Navigate to the project directory
cd three-js-website

# Install dependencies
npm install


### Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Usage
Explain how to use your project. Provide examples or code snippets if necessary. Describe any user interactions and functionalities.

## Features
List the main features of your project. You can include features like:

- 3D shirt model rendering
- Adding logos and textures to the shirt
- changing shirt color
- Downloading customized shirts as images
- Animations

## Contributing
If you want to encourage contributions to your project, explain how others can contribute. You can include guidelines for submitting issues or pull requests.

License
Specify the license under which your project is distributed. You can use a common open-source license like MIT or choose one that suits your project.

Copy code
MIT License
Replace "MIT License" with the actual license you're using.

Feel free to modify and expand this template to suit your project's specific details and requirements. A well-documented README helps users and potential contributors understand your project better.






































## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
