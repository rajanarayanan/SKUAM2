jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zskuapp/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zskuapp/test/integration/pages/Worklist",
		"zskuapp/test/integration/pages/Object",
		"zskuapp/test/integration/pages/NotFound",
		"zskuapp/test/integration/pages/Browser",
		"zskuapp/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zskuapp.view."
	});

	sap.ui.require([
		"zskuapp/test/integration/WorklistJourney",
		"zskuapp/test/integration/ObjectJourney",
		"zskuapp/test/integration/NavigationJourney",
		"zskuapp/test/integration/NotFoundJourney",
		"zskuapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});