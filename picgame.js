$(function() {
    $("#my-button1").on('click', function(event) {
        var val = $("#text-field-orange").val();
        if (val.toLowerCase() === "orange") {
            $("#img-orange").attr("src", "orange.png");
            alert("You are correct. Great job!");
        }
        else {
            alert("Incorrect, try again!");
        }
        
    });
    
});


$(function() {
    $("#my-button2").on('click', function(event) {
        var val = $("#text-field-leaf").val();
        if (val.toLowerCase() === "leaf") {
            $("#img-leaf").attr("src", "leaf.jpeg");
            alert("You are correct. Great job!");
        }
        else {
            alert("Incorrect, try again!");
        }
    });
    
});


    $(function() {
        $("#my-button3").on('click', function(event) {
            var val = $("#text-field-bird").val();
            if (val.toLowerCase() === "bird") {
                $("#img-birdy").attr("src", "birdy.jpeg");
                alert("You are correct. Great job!");
            }
            else {
                alert("Sorry, try again!");
            }
        });
        
        });


        $(function() {
            $("#my-button4").on('click', function(event) {
                var val = $("#text-field-pen").val();
                if (val.toLowerCase() === "pen") {
                    $("#img-pen").attr("src", "pen.jpeg");
                    alert("You are correct. Great job!");
                }
                else {
                    alert("Incorrect, try again!");
                }
            });
            
            });