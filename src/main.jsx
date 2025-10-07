import { StrictMode } from 'react'              // imports the react package that we need
import { createRoot } from 'react-dom/client'   // connects the react package to the DOM
import './index.css'                            // CSS file - React allows to add CSS not just in one file but for each different component
import 'tachyons'
import App from './containers/App'              // since we use export default (only one thing to export), we can use this syntax

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)







/* COURSE NOTES

// import App from './App.jsx'                     // it's what we see in the screen ~ equivalent to the index.html page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// React import the packages it needs and the CSS file and then 
// render the App.jsx file in the 'root' at the HTML file

*/