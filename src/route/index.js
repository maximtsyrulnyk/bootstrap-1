// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
router.get('/users', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('user-list', {
    layout: 'header',
    title: 'User list page',

    data: {
      userlist: [
        {
          id: 5123,
          name: 'Ivan',
          isAdmin: true,
          isConfirm: true,
          balance: 100,
        },
        {
          id: 6843,
          name: 'Max',
          isAdmin: false,
          isConfirm: false,
          balance: 0,
        },
        {
          id: 6843,
          name: 'Vasya',
          isAdmin: true,
          isConfirm: true,
          balance: null,
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
