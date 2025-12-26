// Mobile nav toggle and small interactivity
document.addEventListener('DOMContentLoaded',function(){
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  toggle.addEventListener('click',function(){
    if(nav.style.display === 'block'){
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth < 760) nav.style.display = ''; // close mobile nav
      }
    });
  });
});
