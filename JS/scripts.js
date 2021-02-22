$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#per1").val();
    const person2Input = $("input#per2").val();
    const animalInput= $("input#ani").val();
    const exclamationInput = $("input#exclam").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".per1").text(person1Input);
    $(".per2").text(person2Input);
    $(".ani").text(animalInput);
    $(".exclam").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $("#story").show();
  
    event.preventDefault();
  });
 });
