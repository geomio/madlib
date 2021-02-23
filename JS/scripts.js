$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#name").val();
    const person2Input = $("input#title").val();
    const daysInput= $("input#days").val();
    const formalityInput = $("input#formality").val();

    $(".name").text(person1Input);
    $(".title").text(person2Input);
    $(".days").text(daysInput);
    $(".formality").text(formalityInput);
    $("#letter").show();
  
    event.preventDefault();
  });
 });