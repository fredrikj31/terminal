function about(term, type) {

	switch (type) {
		case "private":
			
			break;
		case "school":
			break;
		
		case "hobby":
			break;

		case "all":
			break;
	
		default:
			term.echo("Invalid option! (private, school, hobby or all");
			break;
	}

}

export { about }