//@ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.base.ManagedObject"} ManagedObject 
     * @param {typeof sap.ui.core.Fragment} Fragment 
     */
    function (ManagedObject, Fragment) {

        return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView; //Se construye la vista
            },

            exit: function () {
                delete this._oView; //se destruye
            },

            open: function () {
                const oView = this._oView;
                //Crear popup (lazily)
                if (!oView.byId("helloDialog")) { //Si el dialogo no esta cargado

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close(); //Cerrar dialogo
                        }
                    };
                    //cargar fragmento
                    Fragment.load({
                        id: oView.getId(), //donde esta?
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: oFragmentController //controlador para cerrar dialogo
                        //despues de que, se tenga, el dialogo cargado
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else { //si ya esta cargado, abrelo
                    oView.byId("helloDialog").open();
                }
            },

        });

    });