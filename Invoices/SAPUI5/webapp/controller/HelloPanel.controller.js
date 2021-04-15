//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/Log"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.base.Log} Log 
     */
    function (Controller, MessageToast, Log) {

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {
            //Propiedades contrololador
            onInit: function () {

            },

            onBeforeRendering : function(){
                window.message = 'Log message - onBeforeRendering';
                Log.info(window.message); //monstrar mensage tipo info
                Log.error(window.message); //monstrar mensage tipo error
            },

            onAfterRendering: function(){
                debugger;
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