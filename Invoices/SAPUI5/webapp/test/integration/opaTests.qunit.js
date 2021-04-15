//@ts-nocheck
/*eslint-disable no-undef */
/* global QUnit*/

QUnit.config.autostart = false; //No se quiere que arranque automaticamente los tests

sap.ui.getCore().attachInit(function () {
    "use strict";

    //se cargan los modulos donde estan los tests antes de arrancar
    sap.ui.require([
        "logaligroup/SAPUI5/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});