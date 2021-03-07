//@ts-nocheck
sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof ../localService/mockserver} mockserver 
     * @param {typeof sap.m.MessageBox} MessageBox 
     */
    function (mockserver, MessageBox) {

        var aMockServers = [];

        //Inicializamos el mock server
        aMockServers.push(mockserver.init());

        Promise.all(aMockServers).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
        });
    });