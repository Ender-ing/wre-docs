/**
 * 
 * Handle color scheme selection
 * 
**/

// Cookie functions!
document.documentElement.getCookie = function(name){
    return (document.cookie.match(new RegExp(`^(?:.*;)?\\s*${name}\\s*=\\s*([^;]+)(?:.*)?$`))||[,null])[1];
};
document.documentElement.setCookie = function(name, value){
    document.cookie = `${name}=${value};path=/;domain=ender.ing`;
}

// Keep track of the current Docusaurus theme!
let themeSwitch = undefined;
const getThemeSwitch = () => (themeSwitch || (themeSwitch = document.querySelector('.navbar__items--right button'))); // Select the theme switch element
const isDark = () => document.documentElement.dataset.theme == "dark"; // Check the current theme!
function toggleDocusaurusTheme(){
    if (getThemeSwitch()) {
        // Trigger a click event on the theme switch
        getThemeSwitch().click();
    }
}

// Handle theme!
window.indepColorSchemeUpdate = (forced, dark) => {
    if(dark){
        if(!isDark()){
            toggleDocusaurusTheme();
        }
    }else{
        if(isDark()){
            toggleDocusaurusTheme();
        }
    }
};

// Wait for the page to finish loading!
document.addEventListener('docusaurus-plugin-content-docs-refresh', (event) => {
    document.documentElement.indepColors = true;
});
