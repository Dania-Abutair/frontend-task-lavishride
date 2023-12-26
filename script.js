function showTab(tabName) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabName + 'Tab');
    selectedTab.classList.add('active');

    // Update button styles
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.getElementById(tabName + 'Button');
    activeButton.classList.add('active');
}