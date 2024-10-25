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
const getThemeSwitch = () => document.querySelector('.navbar__items--right button'); // Select the theme switch element
let themeSwitch = undefined;
function toggleDocusaurusTheme(){
    if (themeSwitch) {
        // Trigger a click event on the theme switch
        themeSwitch.click();
        themeSwitch.isDark = !themeSwitch.isDark;
    }
}

// Handle theme!
window.indepColorSchemeUpdate = (forced, dark) => {
    console.log(forced, dark);
    // let trackedClasses = [document.documentElement.classList, document.body.classList];
    if(dark){
        if(!themeSwitch.isDark){
            toggleDocusaurusTheme();
        }
        // document.documentElement.dataset.theme = "dark";
        // trackedClasses.map((e) => { e.remove("light"); e.add("dark"); });
    }else{
        if(themeSwitch.isDark){
            toggleDocusaurusTheme();
        }
        // document.documentElement.dataset.theme = "light";
        // trackedClasses.map((e) => { e.remove("dark"); e.add("light"); });
    }
};

// Wait for the page to finish loading!
document.addEventListener('docusaurus-plugin-content-docs-refresh', (event) => {
    let interval = setInterval(() => {
        if((themeSwitch = getThemeSwitch()) != undefined){
            clearInterval(interval);
            themeSwitch.isDark = (document.documentElement.dataset.theme == "dark");
            setTimeout(() => document.documentElement.indepColors = true, 100);
        }
    }, 10);
});
