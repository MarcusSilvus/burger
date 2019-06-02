var burgerTemplate = (burgerName, id, id_dovoured) => {

  var burgerContainer = $('<div>').attr({
    class: 'content-burger__list',
    id: id
  });

  var img = $('<img>').attr({
    src: '',
    alt: ''
  });

  var name = $('<p>');

  var button = $('<button>').attr({
    'data-id': id,
    class: 'btn btn-primary devoured',
    'data-state': is_devoured
  });

  name.html(burgerName);
  button.html('Eat burger');

  burgerContainer.append(img, name, button);

  return burgerContainer
};

var displayNewBurger = (burger) => {
  var name = burger.burger_name;
  var id = burger.id;
  var is_devoured = burger.is_devoured;

  var newBurger = burgerTemplate(name, id , is_devoured);

  $('.content-burger').prepend(newBurger);
};

var addBurgerFail = (response) => {
  alert('burger not added');
};

$('button[type="submit"]').on('click', function (event) {
  event.preventDefault();

  var burgerName = $('input[name="burger_name"]').val();

  $.ajax({
    url: '/add',
    method: 'POST',
    data: {
      burger_name: burgerName
    }
  })
    .then(displayNewBurger)
    .catch(addBurgerFail);
});