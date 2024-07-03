document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.dropdown-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const allContents = document.querySelectorAll('.dropdown-content');

      allContents.forEach(c => {
        if (c !== content) c.style.display = 'none';
      });

      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
