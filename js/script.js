// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!');
    
    // Basic setup
    const body = document.body;
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    
    // Add any default event listeners or initializations here
    window.addEventListener('load', function() {
        console.log('Window loaded');
    });
});

document.getElementById('viewProjectsBtn').addEventListener('click', function() {
    // Add smooth scroll to projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

//document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Add your resume download logic here
   // alert('Resume download feature clicked!');
//});


// Download Resume Functionality
document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Path to the resume file
    const resumeUrl = 'Yash Khedkar.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Yash_Khedkar_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
});
// Dark/Light Mode Switch
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'light';
}

// Toggle theme
themeSwitch.addEventListener('change', function() {
    const theme = this.checked ? 'light' : 'dark';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});