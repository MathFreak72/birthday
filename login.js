const PASSWORD='nakshajith';

function login(){if(document.getElementById('pw').value===PASSWORD){sessionStorage.setItem('birthdayAuth','yes');location.href='birthday.html';}else document.getElementById('err').textContent='Incorrect password';}
