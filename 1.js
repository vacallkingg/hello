
$(function() {
$('#check').on('click', function() {
	if($(this).is(':checked')) { 
		var qwerty = $('#znach').val();
		$('#text').attr( 'maxlength' , qwerty);
	
}

	else { 
		$('#znach').val('clear');
		$('#text').attr( 'maxlength'); }
   
})
});

$(function(){
	function charCount(text){
  return text.replace(/[\.,!?; ]*/g, '').length;
}

$('#text').keyup(function(){
$('#kolvo').html(charCount(this.value));
});

	$('#kek').on('click', function() {
		var number = $('#kolvo').text();
		$("#newtext").html($('#text').val());
		$('#kolvo1').html(number);
	});
});


