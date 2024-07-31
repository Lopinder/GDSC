document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
    } else {
        alert('Please enter a search term.');
    }
});

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    alert(`Language selected: ${selectedLanguage}`);
 
});
document.getElementById('lead-club-button').addEventListener('click', function() {
    alert('You clicked "Lead a club".');
});

document.getElementById('join-club-button').addEventListener('click', function() {
    alert('You clicked "Join a club".');
});

document.getElementById('apply-now-button').addEventListener('click', function() {
    alert('You clicked "Apply Now".');

});

