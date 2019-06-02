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
    .then(function () {
      alert('burger added')
    })
    .catch(function () {
      alert('burger not added')
    });
});