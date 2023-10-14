import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")
page.append(title)

const MENU_ITEMS = [
  {
    text: 'База знань',
    isActive: false,
    id: 1,
  },
  {
    text: 'Інформація',
    isActive: true,
    id: 2,
  },
]

const menu = createElement('div', 'menu')

MENU_ITEMS.forEach((menuitem) => {
  const button = createElement(
    'button',
    menuitem.isActive
      ? 'button menu-item menu-item--active'
      : 'button menu-item',
    menuitem.text,
  )

  menu.append(button)
})

page.append(menu)

const main = createElement('div', 'main')

const button = createElement('button', 'button')
const img = createElement('img')
img['src'] = '/img/community_img.png'
button.insertAdjacentElement('beforeend', img)

main.insertAdjacentElement('beforeend', button)

const title2 = createElement(
  'h2',
  'title2',
  'Що таке база знань?',
)
main.insertAdjacentElement('beforeend', title2)

const p = createElement(
  'p',
  'main-info',
  `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.`,
)
main.insertAdjacentElement('beforeend', p)

const button_orange = createElement(
  'button',
  'button button--orange',
  `Перейти до ком'юніті у Телеграм`,
)
main.insertAdjacentElement('beforeend', button_orange)

page.append(main)
