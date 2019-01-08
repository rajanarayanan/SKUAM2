jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"skurequestapp/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"skurequestapp/test/integration/pages/Worklist",
		"skurequestapp/test/integration/pages/Object",
		"skurequestapp/test/integration/pages/NotFound",
		"skurequestapp/test/integration/pages/Browser",
		"skurequestapp/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "skurequestapp.view."
	});

	sap.ui.require([
		"skurequestapp/test/integration/WorklistJourney",
		"skurequestapp/test/integration/ObjectJourney",
		"skurequestapp/test/integration/NavigationJourney",
		"skurequestapp/test/integration/NotFoundJourney",
		"skurequestapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});