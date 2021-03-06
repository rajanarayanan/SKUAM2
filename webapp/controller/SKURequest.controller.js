sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("zskuapp.controller.SKURequest", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zskuapp.view.SKURequest
		 */
		onInit: function () {
			
            var oModel = new sap.ui.model.Model();
            
            oModel = this.getOwnerComponent().getModel("Config");
            
            oModel.loadData();

            var oPF = this.byId(sap.ui.core.Fragment.createId("idPF1", "idProcessflow1"));
            
            sap.ui.getCore().stepNo = 0;
            var stepNo = 0;
            
            var oData = oModel.getData();
            
		 	oData.lanes[stepNo].state = [
											{
												"state": "Neutral",
												"value": 50
											}
										];		 	

			oModel.setData(oData);
			
			this.getOwnerComponent().setModel("Config",oModel);                
            
            oPF.setModel(oModel);
                
                
		    var router = this.getOwnerComponent().getRouter();
		    var target = router.getTarget("SKURequest");
		    target.attachDisplay(this.onDisplay, this);                
            
			
		},
		/**
		 *@memberOf zskuapp.controller.SKURequest
		 */
		action: function (oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function (oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function (prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
		},
		onBack: function (oEvent) {
			// eslint-disable-next-line sap-no-history-manipulation
			history.go(-1);

		},
		onDisplay: function(oEvent){
		 	
		 	
		 	
		 },
		 onHeaderPress: function(oEvent){
		 	
		 	
		 	
		 }
	});
});