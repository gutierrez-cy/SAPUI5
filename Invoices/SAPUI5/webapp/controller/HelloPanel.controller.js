//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     */
    function (Controller, MessageToast) {

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {
            //Propiedades contrololador
            onInit: function () {

            },
            onShowHello: function () {
                // leer el texto en i18n modelo
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //leer propiedades del modelo 
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function() {
                this.getOwnerComponent().openHelloDialog(); //funcion declarada en component.js
            }
            
        });
    });