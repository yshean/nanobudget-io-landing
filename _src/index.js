// CSS and SASS files
// Remove the two following lines to remove the product hunt floating prompt
// import FloatingPrompt from 'producthunt-floating-prompt'
// FloatingPrompt({ name: 'Mobile App Landing Page', url: 'https://www.producthunt.com/posts/mobile-app-landing-page', bottom: '96px', width: '450px' })
// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js';
import Tobi from 'rqrauhvmra__tobi';
import './index.scss';

const tobi = new Tobi()

function addDarkmodeWidget() {
  new Darkmode().showWidget()
}
window.addEventListener('load', addDarkmodeWidget)
