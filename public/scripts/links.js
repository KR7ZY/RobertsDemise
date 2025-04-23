document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.link').forEach(function(element) {
      element.addEventListener('click', function() {
        const targetId = element.id
        window.location.href = targetId
      });
    });
  });