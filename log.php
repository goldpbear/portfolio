<?php

function logIt($content) {
	$log = "\n" . date("Y/m/d") . " " . date("h:i:sa") . "\n";
	foreach ($content as $key => $item) {
		$log .= "\t" . $key . ": " . $item . "\n";
	}

	$logfile = fopen("log/log.txt", "a");
	fwrite($logfile, $log);
	fclose($logfile);
}

?>