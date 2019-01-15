sap.ui.define([
		"zskuapp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zskuapp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);