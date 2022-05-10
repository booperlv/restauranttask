const Menu = document.getElementById('MainMenu')

const MakeMenuItem = (file, name, price) => {
  let ItemDiv = document.createElement('div')
  ItemDiv.className = 'MenuItem Column'

  let Row = document.createElement('div')
  Row.className = 'MenuText Row'

  let ItemImage = document.createElement('img')
  ItemImage.className = 'MenuImage'
  ItemImage.src = file
  ItemImage.loading = "lazy"

  let ItemName = document.createElement('p')
  ItemName.className = 'MenuName'
  ItemName.innerText = name
  
  let ItemPrice = document.createElement('p')
  ItemPrice.className = 'MenuPrice'
  ItemPrice.innerText = price
  
  Row.appendChild(ItemName)
  Row.appendChild(ItemPrice)
  ItemDiv.appendChild(ItemImage)
  ItemDiv.appendChild(Row)
  
  Menu.appendChild(ItemDiv)
}

const ITEM_DATABASE = [
  //file, name, price
  ['images/menu/10.PNG', "Pintoora", '200'],
  ['images/menu/11.PNG', "Peter's Butter Ball", '200'],
  ['images/menu/12.PNG', "Potchi", '200'],
  ['images/menu/13.PNG', "Hawhaw", '200'],
  ['images/menu/14.PNG', "Lumpia", '200'],
  ['images/menu/15.PNG', "Dynamite", '200'],
  ['images/menu/16.PNG', "MikMik", '200'],
  ['images/menu/17.PNG', "Bread Pan", '200'],
  ['images/menu/18.PNG', "LaLa", '200'],
  ['images/menu/19.PNG', "Orange Swits", '200'],
  ['images/menu/4.PNG', "Iced Gem", '200'],
  ['images/menu/5.PNG', "White Rabbit", '200'],
  ['images/menu/6.PNG', "Tomi", '200'],
  ['images/menu/7.PNG', "Fruitos (Strawberry Grape Edition)", '200'],
  ['images/menu/8.PNG', "Fruitos (Assorted Flavors Edition)", '200'],
  ['images/menu/9.PNG', "Choko Choko", '200'],
]

for (Item of ITEM_DATABASE) {
  let [File, Name, Price] = Item
  MakeMenuItem(File, Name, Price)
}
