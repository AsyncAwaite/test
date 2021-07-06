document.addEventListener('DOMContentLoaded', function () {
  'use strict'
  
  
  const itemMenu = document.querySelectorAll('.menu__item');
  const openMobileSidebar = document.querySelector('.btn__open-sidebar');
  const sidebar = document.querySelector('.sidebar');
  const select = document.querySelector('.select');
  const selectCheck = select.querySelector('.select__title');
  const selectOptions = document.querySelector('.select__items');
  const selectOption = selectOptions.querySelectorAll('.select__item');
 
  const selectValue =  selectCheck.querySelector('.select__value');
  const department = document.querySelectorAll('[data-section]');
  


 

  function hideDepartment () { //Скрываем все секции отдела
    department.forEach(function (item) {
      item.classList.add('hide');
      item.getAttribute('data-section');
    });
  }
  function showDepartment () { //Поеазываем первый отдел
      department[0].classList.remove('hide');
      selectValue.textContent = selectOption[0].firstChild.textContent;
  }
  hideDepartment ();
  showDepartment();

  function openSelect () {
    if(selectCheck.getAttribute('data-state') === 'active'){
      selectOptions.classList.remove('select__items_open');
      selectCheck.setAttribute('data-state', '');
      selectValue.classList.remove('select__value_open');
     } else {
      selectCheck.setAttribute('data-state', 'active');
      selectOptions.classList.add('select__items_open');
      selectValue.classList.add('select__value_open');
     }
  };

  selectCheck.addEventListener('click', openSelect);
  selectOption.forEach((option, i) => {
    option.addEventListener('click', (e) => {
      selectValue.textContent = selectOption[i].firstChild.textContent;
      department.forEach(function (item, j) {
        if(department[j].getAttribute('data-section') === selectOption[i].lastChild.name)
        hideDepartment ();
        department[j].classList.remove('hide');
      });
      selectOptions.classList.remove('select__items_open');
      selectCheck.setAttribute('data-state', '');

    });
  });

  itemMenu.forEach(item => {  //Открываем выпадающий список меню 
    item.addEventListener('click', function(e) {
      if(e.target.classList.contains('menu__item_submenu') || e.target.classList.contains('menu__link_submenu')) {
        e.preventDefault();
        this.classList.toggle('menu__item_open');
        this.lastChild.classList.toggle('menu__sub_open');
       } else {
         return
      }
    });
   });

   openMobileSidebar.addEventListener('click', function() { //Открываем боковое меню на мобильных устройствах
    this.classList.add('btn__open-sidebar_hide');
    sidebar.classList.add('sidebar_open');
   });
   sidebar.addEventListener('click', function(e) { //Закрываем боковое меню на мобильных устройствах
    if (e.target === sidebar) {
      openMobileSidebar.classList.remove('btn__open-sidebar_hide');
      sidebar.classList.remove('sidebar_open');
    }
   });

});

