// user.js - Opslaan in localStorage
function saveSettings() {
    const lang = document.getElementById('lang-select').value;
    const settings = {
        language: lang,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('watch_settings', JSON.stringify(settings));
    alert("Instellingen opgeslagen!");
}

function loadSettings() {
    const saved = localStorage.getItem('watch_settings');
    if (saved) {
        const settings = JSON.parse(saved);
        document.getElementById('lang-select').value = settings.language;
    }
}
