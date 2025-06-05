document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-tabs a');
    const tabContents = document.querySelectorAll('.tab-pane');

    function updateActiveTab(clickedTab) {
        tabs.forEach(tab => {
            tab.querySelector('.btn').classList.remove('selected-btn');
            tab.parentElement.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        clickedTab.querySelector('.btn').classList.add('selected-btn');
        clickedTab.parentElement.classList.add('active');
        const target = clickedTab.getAttribute('href');
        document.querySelector(target).classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            updateActiveTab(this);
        });
    });

    // Initialize the first active tab on page load
    const initialActiveTab = document.querySelector('.nav-tabs li.active a');
    if (initialActiveTab) {
        initialActiveTab.querySelector('.btn').classList.add('selected-btn');
    }
});