sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'projet1.projet1',
            componentId: 'test1List',
            contextPath: '/test1'
        },
        CustomPageDefinitions
    );
});