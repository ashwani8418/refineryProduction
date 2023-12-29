sap.ui.define([
    "sap/m/Dialog",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
function (Dialog, Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("nm.refineryconfig.controller.refinery", {
        onInit: function () {
            // Initialization logic if needed
        },

        onOpenDialog: function (oEvent) {
            var oNode = oEvent.getSource();
            var oView = this.getView();

            // Create or get the fragment
            if (!this._oDialog) {
                this._oDialog = Fragment.load({
                    id: oView.getId(),
                    name: "nm.refineryconfig.fragments.dialogFragment",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            // Set the binding context for the dialog
            this._oDialog.then(function (oDialog) {
                oDialog.setBindingContext(oNode.getBindingContext());
                oDialog.open();
            });
        },

        onCloseDialog: function () {
            this._oDialog.then(function (oDialog) {
                oDialog.close();
            });
        }
    });
});
