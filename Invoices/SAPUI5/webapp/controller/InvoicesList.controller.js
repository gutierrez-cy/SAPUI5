//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel 
     * @param {typeof sap.ui.model.Filter} Filter 
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator 
     */
    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {

        return Controller.extend("logaligroup.SAPUI5.controller.InvoicesList", {
            //Propiedades contrololador

            formatter: InvoicesFormatter,

            onInit: function () {
                var oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel, "currency");//para que la vista pueda acceder al modelo a través del identificador currency
            },

            onFilterInvoices: function (oEvent) {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");

                if (sQuery){
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains , sQuery));
                };

                const oList = this.getView().byId("InvoiceList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }

        });

    });