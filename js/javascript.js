  $(document).ready(function() {
   $("#tabs .bl img").click(function(){
	   $(".popup").show(100);
	   });
	 $(".popup button").click(function(){
		 $(".popup").hide(100);
	  	
		});

$(".bl").click(function(){
 var el= $(this).find('.name').text();
 var el1= $(this).find('.sec').text();
 var el2= $(this).find('.price1').text(); 
 
 $('#box_1').fadeIn(300);
 var a=$('#box_1 .blok  span.vala').text(el);
 var a1=$('#box_1 .blok  span.second').text(el1);
 var a2=$('#box_1 .blok  p.price').text(el2);
 $('.zina').html('<img src="img/b.png"><b style="color:red">' +el2 + '</b>');
 return false;
});
 
$('#tabs, .exit ').click(function(){
 $('#box_1').fadeOut(300);
 });
 
   $('.hart').click(function(){
 $('.zina').html('<img src="img/b.png">' + '0.00 Є*');
 });
		
	});