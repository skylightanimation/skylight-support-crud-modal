<form id="add-row-form" action="<?php echo base_url(); ?>" method="post">
		<div class="add-id modal fade" id="" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content-body-add modal-content" id="add-crud-content">
					<div class="modal-header">
						 <h4 class="modal-title" id="add-row-title"></h4>
						 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<div class="modal-body" id="form_add">
					</div>
					<div class="modal-footer">
						 	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-success" onclick="loadAlertReadUpdate('add')">Submit</button>
					</div>
				</div>
				<div class="modal-notification-body-add modal-content" id="add-crud-notification">
					<div class="modal-header">
						 <h4 class="modal-title" id="add-row-title-notification"></h4>
						 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<div class="modal-body" id="notification_add">
						<p>
							<center>
								<span id="modal-notification-message-add"></span>
							</center>
						</p>
					</div>
					<div class="modal-footer">
						 	<button type="button" class="btn btn-default" onclick="unloadAlertReadUpdate('add')">No</button>
							<button type="submit" id="add-row" name="Add" class="btn btn-success">Yes</button>
					</div>
				</div>
			</div>
		</div>
</form>

<form id="edit-row-form" action="<?php echo base_url(); ?>" method="post">
		<div class="edit-id modal fade" id="" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content-body-edit modal-content" id="edit-crud-content">
					<div class="modal-header">
						 
						 <h4 class="modal-title" id="edit-row-title"></h4>
						 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<div class="modal-body">
						<div class="form-group" id="form_edit">

						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-success" onclick="loadAlertReadUpdate('edit')">Submit</button>
					</div>
				</div>
				<div class="modal-notification-body-edit modal-content" id="edit-crud-notification">
					<div class="modal-header">
						 <h4 class="modal-title" id="edit-row-title-notification"></h4>
						 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<div class="modal-body" id="notification_edit">
						<p>
							<center>
								<span id="modal-notification-message-edit"></span>
							</center>
						</p>
					</div>
					<div class="modal-footer">
						 	<button type="button" class="btn btn-default" onclick="unloadAlertReadUpdate('edit')">No</button>
							<button type="submit" id="add-row" name="Add" class="btn btn-success">Yes</button>
					</div>
				</div>
			</div>
		</div>
</form>

<form id="remove-row-form" action="<?php echo base_url() ?>" method="post">
	<div class="remove-id modal fade" id="" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					 
					 <h4 class="modal-title" id="remove-row-title"></h4>
					 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body">
					<div class="form-group" id="form_remove">

					</div>
				</div>
				<div class="modal-footer">
					 	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="submit" id="add-row" name="Remove" class="btn btn-danger">Remove</button>
				</div>
			</div>
		</div>
	</div>
</form>

