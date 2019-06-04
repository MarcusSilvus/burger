// adds new burger and button to page
var burgerTemplate = (burgerName, id, is_devoured) => {

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

// handles successful adds
var displayNewBurger = (burger) => {
  var name = burger.burger_name;
  var id = burger.id;
  var is_devoured = burger.is_devoured;
  var newBurger = burgerTemplate( name, id , is_devoured );

  $('.content-burger').prepend(newBurger);
  $('input').val('');
};

// handles failures
var addBurgerFail = (response) => {
  alert('burger not added');
};

// on click logic to add burger
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

$('button [id="eatBurgerBtn"]').on('click', function (event) {

});

// $(".change-sleep").on("click", function(event) {
//   var id = $(this).data("id");
//   var newSleep = $(this).data("newsleep");

//   var newSleepState = {
//     sleepy: newSleep
//   };

//   // Send the PUT request.
//   $.ajax("/api/cats/" + id, {
//     type: "PUT",
//     data: newSleepState
//   }).then(
//     function() {
//       console.log("changed sleep to", newSleep);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

// FIXES 
// need actual burger name to appear in db
