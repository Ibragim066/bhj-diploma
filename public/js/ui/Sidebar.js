/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector('a.sidebar-toggle');

    sidebarToggle.addEventListener('click', function (evt) {
      evt.preventDefault();

      const sidebarMini = document.querySelector('body.sidebar-mini');
      sidebarMini.classList.toggle('sidebar-open');
      sidebarMini.classList.toggle('sidebar-collapse')
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const sidebarMenuBtns = document.querySelectorAll('.sidebar-menu');
    sidebarMenuBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        evt.preventDefault()
        switch (evt.target.closest('li').classList[1]) {
          case 'menu-item_login':
            App.getModal('login').open()
            break
          case 'menu-item_register':
            App.getModal('register').open()
            break
          case 'menu-item_logout':
            User.logout((response) => App.setState('init'))
            break
        }
      });
    });
  }
}