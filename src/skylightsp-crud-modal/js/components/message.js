var question = {
		b:['<strong>','</strong>', '<u>', '</u>'],
		msg: {rm:'Are you sure to remove '},
		sgn: {q:' ?', i:' !', d:' .', c:' ,'}
	};


function generateMessage(Modul, Value){
	var message = 
		question.b[0]+
			question.msg.rm+
				question.b[2]+Modul+' : '+Value+
				question.b[3]+
			question.sgn.q+
		question.b[1];

	return message;
}

