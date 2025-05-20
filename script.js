 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           radius = parseFloat(radius);
		   if(isNaN(radius)||radius<=0){
			   alert("Please enter a valid positive number for radius.");
			   return;
		   }
			const area = Math.PI * radius * radius;
			const roundArea = area.toFixed(2);
			 alert(`The area of the circle with radius ${radius} is ${roundArea}`);
			
}
calculateArea();
