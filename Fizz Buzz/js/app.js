$(document).ready(function(event){
	var count=1;
	for (count=1; count <=100; count=count+1){
	if(count % 3===0 && count % 5===0){
		console.log("FizzBuzz");
		$("body").append("<br>FizzBuzz<br>");
	}
	else if(count % 3==0){
		console.log("Fizz");
		$("body").append("<br>Fizz<br>");
	}
	else if (count % 5==0){
		console.log("Buzz");
		$("body").append("<br>Buzz<br>");
	}
	else {
		console.log(count);
		$("body").append(count);
	}	
}	

});