sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName": "logaligroup.sapui5.View.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.newRecipient());
                
                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }

        });

    });