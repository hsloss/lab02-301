const $main = $('main')
const $selector = $('#image-selector')
const allImages = []

const apiURL = 'https://raw.githubusercontent.com/hsloss/lab02-301/setup/data/page-1.json'

const HornedCreatures = function(image_url, title, description, keyword, horns){
  this.url = image_url
  this.title = title
  this.description = description
  this.keyword = keyword
  this.horns = horns
}

HornedCreatures.prototype.displayCreatures = function() {
  const $cloneCreature = $('#photo-template').clone()
  $main.append($cloneCreature)
  $cloneCreature.find('img').attr('class', 'images')
  $cloneCreature.find('img').attr('class', this.keyword)
  $cloneCreature.find('img').attr('src', this.url)
  $cloneCreature.find('img').attr('alt', this.description)
  $cloneCreature.find('h6').text(this.title)
}

$($selector).on('change', () => {
  $('section').hide()
  $(`#${event.target.value}`).show()
})

$.getJSON(apiURL)
  .then(response => {
    response.forEach(creature => {
      let newCreature = new HornedCreatures (creature.image_url, creature.title, creature.description, creature.keyword, creature.horns)
      newCreature.displayCreatures()
      allImages.push(newCreature)
    })
  })
