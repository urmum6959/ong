function calculateAge(dobString) {
	var dob = new Date(dobString);
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
	var age = currentYear - dob.getFullYear();

	if (birthdayThisYear > currentDate) {
		age--;
	}

	return age;
}
myAge = calculateAge("2008-10-11");
document.write(myAge);
