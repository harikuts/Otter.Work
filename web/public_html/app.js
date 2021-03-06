// JavaScript source code
var main = function () {

$('.main').fadeIn(500);
$('.optionBar').fadeIn(500);
$('.mainScreen').fadeIn(500);
$.post("checkLogin.php",
        {},
        function(data,status){
            if (data == "empty"){
               $('#loginScreen').fadeIn();
               $('#cover').fadeIn(); 
            }
            else {
               $('.titleBar').fadeIn(500);
               $('.map').fadeIn(500);
               $('.btnLayout').fadeIn(500);
               updateGreeting();
           }
        });
        
    function updateGreeting(){
    $.ajax({
       type: "GET",
       url: 'checkLogin.php',
       data: '',
       success: function(data) {
       // data is username
       $('#userGreeting').text("Welcome, " + data + "!");
       }
     }); 
     }   

    // Pull out panel
    $('.hControl').click(function () {
        $('.control').animate({
            left: '0px'
        }, 200);
        $('.main').animate({
            left: '300px'
        }, 200);
    });
    $('.icon-close').click(function () {
        $('.control').animate({
            left: '-300px'
        }, 200);
        $('.main').animate({
            left: '0px'
        }, 200);
    });

    // Add Panel
    $('.AddSession').click(function () {
        $('.control').animate({
            left: '-300px'
        }, 200);
        $('.main').animate({
            left: '-300px'
        }, 200);
        $('.addMenu').animate({
            right: '0px'
        }, 200);
    });
    $('.add-close').click(function () {
        $('.addMenu').animate({
            right: '-300px'
        }, 200);
        $('.main').animate({
            left: '0px'
        }, 200);
    });

    createGrid();
    // Add items for testing
    $('.testing').click(function(){
        createItem();
    });
    
    //var item1 = $('<td></td>').text("Test1");
    //var item2 = $('<td></td>').text("Test2");
    //row.append(item1);
    //row.append(item2);
    //$(".btnGrid").append(row);
}

$(document).ready(main);
