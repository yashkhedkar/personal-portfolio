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

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Add your resume download logic here
    alert('Resume download feature clicked!');
});