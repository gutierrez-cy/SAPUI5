//@ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof logaligroup.SAPUI5.model.Models} Models 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
 
                manifest : "json"

            },

            init: function () {
                //llamada al init principal
                UIComponent.prototype.init.apply(this, arguments);

                // modelo de datos en la vista           
                this.setModel(Models.createRecipient());

                //modelo i18n en la vista
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

            }
        });

    });