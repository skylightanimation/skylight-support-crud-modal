var ModulTitle = generateModul('title');
var ModulControl = generateModul('control');
var getUrlAction = generateURL();

var tempValueEdit = '';


$('#add_tables').on('click','.add_record',function(){
	// unloadAlertReadUpdate();
	$('.modal-notification-body').hide();
	var titleModal = icon.add+' Add '+ModulTitle;
	
	$('#add-row-title').html(titleModal);
	$('#add-row-form').attr('action', getUrlAction+'/add');
	$('.add-id.modal.fade').attr('id', 'add'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var type = '';
	var action = 'add';

	for (const [key, value] of Object.entries(data)) {

		access = getAccess(key);
		title = createTitle(key);
		typeDate = checkDateAccess(key);

		if (typeDate != 'date') {
			type = checkType(value);
		}else{
			type = typeDate;
		}


		// Title -
		// access
		// nameClass 
		// nameId
		// typeValue -
		// Value -
		// Required -
		// replaceUnderscore(str);
		var formSingle = 
			generateInput(
				title,
				access,
				`${key}`+'_'+action, 
				`${key}`+'_'+action,
				type, 
				`${value}`,
				'true'
			);

		form += formSingle;				
	}

	$('#form_add').html(form);
	$('#add'+ModulControl).modal('show');
});

$('#tables').on('click','.edit_record',function(){
	// unloadAlertReadUpdate();
	$('.modal-notification-body').hide();
	var titleModal = icon.edit+' Edit '+ModulTitle;
	$('#edit-row-title').html(titleModal);
	$('#edit-row-form').attr('action', getUrlAction+'/edit');
	$('.edit-id.modal.fade').attr('id', 'edit'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var action = 'edit';

	for (const [key, value] of Object.entries(data)) {
		// $('[name="'+`${key}`+'Edit"]').val(`${value}`);

		// access = checkIdAccess(key);
		access = getAccess(key);
		title = createTitle(key);
		if (access == 'name') {
			tempValueEdit = value;
		}


		// type = checkType(value);
		typeDate = checkDateAccess(key);
		// console.log(typeDate);
		if (typeDate != 'date') {
			type = checkType(value);
		}else{
			type = typeDate;
		}
		// Title -
		// access
		// nameClass 
		// nameId
		// typeValue -
		// Value -
		// Required -
		// replaceUnderscore(str);
		var formSingle = 
			generateInput(
				title,
				access,
				`${key}`+'_'+action, 
				`${key}`+'_'+action,
				type, 
				`${value}`,
				'true'
			);

		form += formSingle;				
	}

	$('#form_edit').html(form);
	$('#edit'+ModulControl).modal('show');
});

$('#tables').on('click','.remove_record',function(){
	unloadAlert();
	var titleModal = icon.rm+' Remove '+ModulTitle;
	$('#remove-row-title').html(titleModal);
	$('#remove-row-form').attr('action', getUrlAction+'/remove');
	$('.remove-id.modal.fade').attr('id', 'remove'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var action = 'delete';

	for (const [key, value] of Object.entries(data)) {
		// $('[name="'+`${key}`+'Edit"]').val(`${value}`);

		// access = checkIdAccess(key);
		access = 'id';
		title = createTitle(key);
		type = checkType(value);
		if (access == 'id') {
			// Title -
			// access
			// nameClass 			
			// nameId
			// typeValue -
			// Value -
			// Required -
			// replaceUnderscore(str);
			var formSingle = 
				generateInput(
					title,
					access,
					`${key}`+'_'+action, 
					`${key}`+'_'+action, 
					type, 
					`${value}`,
					'true'
				);
		}


		form += formSingle;				
	}

	for (const [key, value] of Object.entries(data)) {
		// $('[name="'+`${key}`+'Edit"]').val(`${value}`);

		access = checkNameAccess(key);
		console.log(access);
		title = createTitle(key);
		type = checkType(value);
		if (access == 'name') {
			var formSingle = generateMessage(ModulTitle, `${value}`);
			form += formSingle;
		}
	}

	$('#form_remove').html(form);
	$('#remove'+ModulControl).modal('show');
});




$(document).ready(function(){
	$('.modal-notification-body-add').hide();
	$('.modal-notification-body-edit').hide();
});



function loadAlertReadUpdate(value){
	var message = '';
	var control = value;

	if (value == 'add') {
		
		var valueModal = $('#form_add').find('input').val();
		// console.log(valueModal);

		if (valueModal != null || valueModal != '') {
			var titleModal = icon.add+' Add '+ModulTitle;
			$('#add-row-title-notification').html(titleModal);
			// $('#add').show();
			var valueModal = $('#form_add').find('input').val();

			// console.log(valueModal);
			message = '<b>Are you sure to add <u>'+ModulTitle+' : '+valueModal+'</u></b> ?';

			$('#modal-notification-message-add').html(message);
		}else{
			console.log('error');
		}
	}else if (value == 'edit') {
		var titleModal = icon.edit+' Edit '+ModulTitle;
		$('#edit-row-title-notification').html(titleModal);
		// $('#add').show();
		var valueModal = $('#form_edit').find('input').val();

		// console.log(valueModal);
		message = '<b>Are you sure to update <u>'+ModulTitle+' : '+valueModal+' to '+tempValueEdit+'</u></b> ?';

		$('#modal-notification-message-edit').html(message);
	}


	$('.modal-content-body-'+control).hide("slide", { direction: "down" }, 500);
	setTimeout(function(){
	    $('.modal-notification-body-'+control).show("slide", { direction: "up" }, 1000);
	}, 600);
	
	// $('').show("slide", { direction: "left" }, 1000);
	// $('').hide("slide", { direction: "right" }, 1000);
	// $().slideRight('slow').delay(3000).slideLeft('slow');
}

function unloadAlertReadUpdate(value){
	var control = value;
	// console.log(control);
	$('.modal-notification-body-'+control).hide("slide", { direction: "down" }, 500);
	setTimeout(function(){
	    $('.modal-content-body-'+control).show("slide", { direction: "up" }, 1000);
	    // $('.modal-notification-body').hide();
	}, 600);
}