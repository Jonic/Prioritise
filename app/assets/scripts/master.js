
'use strict';

var featureTemplate = $('#feature-item-template').html();

$('.new-feature').on('click', function (event) {
	event.preventDefault();

	$('.features-list').sortable('destroy').off('sortupdate');
	$(featureTemplate).appendTo('.features-list');

	setupSortable();
});

$('body').on('click', '.remove-feature', function (event) {
	event.preventDefault();

	$(this).parent().remove();

	if ($('.reorder-features').length) {
		$('.reorder-features').trigger('submit');
	}
});

$('.reorder-features').on('submit', function (event) {
	event.preventDefault();

	var form = $(this);

	$.ajax({
		url: form.attr('action'),
		method: 'POST',
		data: form.serialize(),
		error: function () {
			console.log('shake it off, homie');
		}
	});
});

function setupSortable() {
	$('.features-list').sortable({
		handle: 'span'
	}).on('sortupdate', function () {
		$('.reorder-features').trigger('submit');
	});
}

setupSortable();


$('body').on('focus', '.feature-input', function () {
	var keyUpSaveTimeout;
	$(this).on('keyup', function (event) {
		var alpha   = event.keyCode >= 65 || event.keyCode <= 91;
		var numeric = event.keyCode >= 48 || event.keyCode <= 57;
		var removal = event.keyCode === 8 || event.keyCode === 46;

		if (alpha || numeric || removal) {
			window.clearTimeout(keyUpSaveTimeout);

			keyUpSaveTimeout = window.setTimeout(function () {
				keyUpSaveTimeout = null;

				$('.reorder-features').trigger('submit');
			}, 250);
		}
	});
}).on('blur', '.feature-input', function () {
	$(this).off('keyup');
});
