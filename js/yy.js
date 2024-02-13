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
            
            // Fetch content from text file
            fetch(contentId + '.txt') // Assuming file names are content1.txt, content2.txt, etc.
                .then(response => response.text())
                .then(text => {
                    // Show the clicked content
                    console.log('Clicked link with data-content:', contentId);
                    const contentElement = document.getElementById(contentId);
                    contentElement.innerHTML = text;
                    contentElement.style.display = 'block';
                })
                .catch(error => console.error('Error fetching content:', error));
            
            // Hide other contents
            contents.forEach(function(content) {
                if (content.id !== contentId) {
                    content.style.display = 'none';
                }
            });
        });
    });
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (e)=>{
	let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
	arrowParent.classList.toggle("showMenu");
	});
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
	sidebar.classList.toggle("close");
});

sidebar.classList.remove("close");
