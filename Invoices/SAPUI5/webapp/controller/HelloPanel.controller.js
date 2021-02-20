//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.core.Fragment} Fragment 
     */
    function (Controller, MessageToast, Fragment) {

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

            onOpenDialog: function () {
                const oView = this.getView();

                if (!this.byId("helloDialog")) { //Si el dialogo no esta cargado
                    Fragment.load({
                        id: oView.getId(), //donde esta?
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: this //controlador para cerrar dialogo
                        //despues de que, se tenga, el dialogo cargado
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else { //si ya esta cargado, abrelo
                    this.byId("helloDialog").open();
                }
            },

            onCloseDialog: function () {
                 this.byId("helloDialog").close(); //Cerrar dialogo
            }    
            
        });
    });