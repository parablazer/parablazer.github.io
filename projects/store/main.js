var dropDown = document.getElementsByClassName('dropdown');

dropDown.addEventListener('mouseover', function(){
  document.querySelector('ul').classList.remove('dropdown-menu');
});

dropDown.addEventListener('mouseout', function(){
  document.querySelector('ul').classList.add('dropdown-menu');
});
