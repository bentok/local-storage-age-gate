function ageGate(){
  if (localStorage.getItem("age") == "oldEnough") {
    $('.ageGate').css('display', 'none');
  };

  $("#button-yes").click(function(){
    localStorage.setItem("age", "oldEnough");
    $(".age-gate").hide();
  });
}

ageGate();
