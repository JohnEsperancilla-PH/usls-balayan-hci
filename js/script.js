// script.js
// Get the notification form and list elements
const notificationForm = document.getElementById('notifications-form');
const notificationList = document.getElementById('notifications-list');

// Add event listener to the notification form
notificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const notificationMessage = document.getElementById('notification-message').value;
    // Send the notification to the server using AJAX or fetch
    // For simplicity, let's assume we're using a PHP script to handle the notification
    fetch('send-notification.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `notification_message=${notificationMessage}`
    })
    .then(response => response.text())
    .then(data => {
        // Update the notification list
        const notificationListItem = document.createElement('li');
        notificationListItem.textContent = data;
        notificationList.appendChild(notificationListItem);
    });
});

// Get the news form and list elements
const newsForm = document.getElementById('news-form');
const newsList = document.getElementById('news-list');

// Add event listener to the news form
newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newsTitle = document.getElementById('news-title').value;
    const newsContent = document.getElementById('news-content').value;
    // Send the news to the server using AJAX or fetch
    // For simplicity, let's assume we're using a PHP script to handle the news upload
    fetch('upload-news.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `news_title=${newsTitle}&news_content=${newsContent}`
    })
    .then(response => response.text())
    .then(data => {
        // Update the news list
        const newsListItem = document.createElement('li');
        newsListItem.textContent = data;
        newsList.appendChild(newsListItem);
    });
});