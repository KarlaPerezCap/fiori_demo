/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zns2/zdemo_02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
