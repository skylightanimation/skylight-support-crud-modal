var input = {
	b 	: ['<div class="form-group">','<div class="form-line">', '</div>' ],
	h 	: ['<div class="form-group hidden">'],
	in 	: ['<input ',' />'],
	ta 	: ['<textarea ',' >', '</textarea>'],
	lb 	: ['<label>','</label>'],
	p 	: {type:{ t: 'text', n:'number', p:'password', e:'email', d:'date', i:'time', di:'datetime'}, class:{ fc: 'form-control'}},
	pf	: ['id', 'type', 'class', 'name', 'value', 'placeholder', 'required', 'disabled']
}



function generateInput(Title, access, nameClass, nameId, typeValue, Value, Required){

	var head = '';
	var content = '';
	var attribute = '';
	var generateId = '';
	var generateType = ''; 
	var generateClass = ''; 
	var generataMaxLength = '';
	var generateMinLength = '';
	
	var generateName = '';
	var generateValue = '';
	var generateRequired = '';
	var generatePlaceholder = '';
	if (typeValue == 'text') {
		generateType = input.pf[1]+'="'+input.p.type.t+'" ';
	}else if(typeValue == 'number'){
		generateType = input.pf[1]+'="'+input.p.type.n+'" ';
	}else if(typeValue == 'password'){
		generateType = input.pf[1]+'="'+input.p.type.p+'" ';
	}else if(typeValue == 'email'){
		generateType = input.pf[1]+'="'+input.p.type.e+'" ';
	}else if(typeValue == 'date'){
		generateType = input.pf[1]+'="'+input.p.type.d+'" ';
	}else if(typeValue == 'time'){
		generateType = input.pf[1]+'="'+input.p.type.i+'" ';
	}else if(typeValue == 'datetime'){
		generateType = input.pf[1]+'="'+input.p.type.di+'" ';
	}else{
		console.log('type not found!!!');
	}

	if (nameClass != '') {
		generateClass = input.pf[2]+'="'+nameClass+' '+input.p.class.fc+'" ';
	}else{
		generateClass = input.pf[2]+'="'+input.p.class.fc+'" ';
	}

	if (nameId != '') {
		generateId = input.pf[0]+'="'+nameId+'" ';
		generateName = input.pf[3]+'="'+nameId+'" ';
		generatePlaceholder = input.pf[5]+'="'+Title+'" ';
	}

	if (Value != '') {
		generateValue = input.pf[4]+'="'+Value+'" ';
	}

	if (Required == 'true') {
		generateRequired = input.pf[6];
	}else{
		generateRequired = '';
	}


	attribute = 
		generateId+
		generateType+
		generateClass+
		generateName+
		generateValue+
		generatePlaceholder+
		generateRequired;

	if (access == 'id') {
		generateMinLength = ' minlength="1" ';

		head = input.h[0];
		content =
			input.in[0]+
				attribute+
				generateMinLength+
			input.in[1];
	}else{
		head = input.b[0];
		if (access == 'textarea') {

			generataMaxLength = ' maxlength="65535" ';
			generateMinLength = ' minlength="4" ';

			content =
				input.ta[0]+
					generateId+
					generateType+
					generateClass+
					generateName+
					generatePlaceholder+
					generateRequired+
					generataMaxLength+
					generateMinLength+
				input.ta[1]+
					Value+
				input.ta[2];
		}else{
			generataMaxLength = ' maxlength="255" ';
			generateMinLength = ' minlength="2" ';
			content =
				input.in[0]+
					attribute+
					generataMaxLength+
					generateMinLength+
				input.in[1];
		}
	}

	var newInput = 
		head+
			input.lb[0]+Title+ //Text Title
			input.lb[1]+
		input.b[1]+
			content+
		input.b[2]+
		input.b[2];

	// console.log(newInput);

	return newInput;
}