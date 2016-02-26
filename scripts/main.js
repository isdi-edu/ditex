$(function() {

	var $form = $("form");

	$form.validate({
		messages: {
			last_name: "Introduce tu nombre",
			email: "Introduce un email válido",
			phone: "Introduce tu teléfono"
		}
	});

	$("#peticion").on("click", function(event) {
		var $telefono = $("#phone");
		var $email = $("#email");
		var $politica = $("#00Na0000009SVKV");

		var messagesToUser = [];

		if ($form.valid() == false) return;

		if($telefono.val().trim().length === 0 &&
			 $email.val().trim().length === 0) {
			messagesToUser.push("<p>Has de facilitar tu teléfono o tu email para que podamos ponernos en contacto contigo.</p>");
		}

		// Validar formulario
		if ($politica.is(":checked") == false) {
			messagesToUser.push("<p>Has de aceptar la política de privacidad.</p>");
		}

		if (messagesToUser.length > 0) {
			showMessage(messagesToUser.join(""));
			event.preventDefault();
			return;
		}
	});

	if (getParameterByName("sent") === "1") {
		showMessage("\
			<p>Hemos recibido correctamente tus datos.</p>\
	    <p>En breve nos pondremos en contacto contigo.</p>");
	}

  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

	function showMessage(message) {
		var $modal = $("#confirmationModal");
		var $modalContent = $modal.find(".modal-body");

		$modalContent.html(message);
		$modal.modal();
	}
})
