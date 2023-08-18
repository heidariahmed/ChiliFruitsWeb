export function setDarkMode(theme) {

    // If the current theme in localStorage is "dark"...
    if (theme === "dark") {
        // ...then use the .dark-theme class
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
}