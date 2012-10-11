var id = window.location.href.slice(window.location.href.indexOf('?') +1); /* Get permalink ID */
$('#entry').load('entry' +id+ '.html'); /* Replace div contents */