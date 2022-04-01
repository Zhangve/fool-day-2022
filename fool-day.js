$(window).ready(function(){
    $(".imgDiv1").hide();  
    $(".imgDiv2").hide();
    $(".imgDiv3").hide();
    $(".imgDiv4").hide();
    $(".imgDiv5").hide();
    $(".imgDiv6").hide();
    $(".imgDiv7").hide();
    $(".end1").hide();
    $(".end2").hide();
});

function start(){
    var music=$('.song')[0];
    music.play();
    document.getElementsByClassName(".mysong").volume = 0.2;
    $(".start-word").fadeOut(1000);
    $(".imgDiv1").fadeIn(3000);
    $(".imgDiv1").fadeOut(2000).promise().done(function(){
        $(".imgDiv2").fadeIn(2000);
        $(".imgDiv2").fadeOut(2000).promise().done(function(){
            $(".imgDiv3").fadeIn(2000);
            $(".imgDiv3").fadeOut(2000).promise().done(function(){
                $(".imgDiv4").fadeIn(2000);
                $(".imgDiv4").fadeOut(2000).promise().done(function(){
                    $(".imgDiv5").fadeIn(2000);
                    $(".imgDiv5").fadeOut(2000).promise().done(function(){
                        $(".imgDiv6").fadeIn(2000);
                        $(".imgDiv6").fadeOut(2000).promise().done(function(){
                            $(".imgDiv7").fadeIn(2000);
                            $(".imgDiv7").fadeOut(2000).promise().done(function () {
                                $(".end1").fadeIn(1000);
                                $(".end1").fadeOut(2000).promise().done(function(){
                                    $(".end2").fadeIn(2000);
                                })
                              })
                        })
                    })
                })
            })
        })
    })
}