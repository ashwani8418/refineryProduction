/*global QUnit*/

sap.ui.define([
	"nm/refineryconfig/controller/refinery.controller"
], function (Controller) {
	"use strict";

	QUnit.module("refinery Controller");

	QUnit.test("I should test the refinery controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
