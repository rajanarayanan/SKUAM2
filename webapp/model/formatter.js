sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},
			
			//INSERT DATE FORMAT: From TIMESTAMP to MM/DD/YYYY
			dateTime : function(sValue) {
			 var nDate = new Date(sValue);
			 return (nDate.getMonth()+1) + "/" + nDate.getDate() +"/"+ nDate.getFullYear()+ " " + nDate.toTimeString().substring(0,8);
			}
			
		};

	}
);