document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const defaultContent = document.getElementById('content0');

  // Function to show default content
  function showDefaultContent() {
      defaultContent.style.display = 'block'; // Display default content
  }

  // Show default content when the page loads
  showDefaultContent();

  // Event listeners for sidebar links
  sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const contentId = this.getAttribute('data-content');
          const contents = document.querySelectorAll('.content');

          // Hide default content
          defaultContent.style.display = 'none';

          // Show the clicked content
          document.getElementById(contentId).style.display = 'block';

          // Hide other contents
          contents.forEach(function(content) {
              if (content.id !== contentId) {
                  content.style.display = 'none';
              }
          });
      });
  });
});
