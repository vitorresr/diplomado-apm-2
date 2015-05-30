$(document).ready( function()
{

	$('#cordova-device').bind('click', function(event)
	{
		$('#data-device').append(
			'<li><b>Cordova</b>' + device.cordova + '</li>' +
			'<li><b>Model</b>' + device.model + '</li>' +
			'<li><b>Platform</b>' + device.platform + '</li>'  + 
			'<li><b>uuid</b>' + device.uuid+ '</li>' +
			'<li><b>Version</b>' + device.version + '</li>'
		);
		
	});

});

