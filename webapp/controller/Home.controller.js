sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.zproject1.controller.HOME", {
            onInit: function(){
                // sending the request to read the data from odata service entityset.
                  this.getOwnerComponent().getModel().read("/Orders",{

                   success:function(orderData) {
                    //CREATE LOCAL VARIABLE TO STORE THE DATA FROM ODATA SERVICE
                    var lv_d1=orderData.results;
                    // create json model.
                    var oJsonModel=new sap.ui.model.json.JSONModel();
                    // assign the data from the local variable to the json model.
                    oJsonModel.setData(lv_d1);
                    this.getView().setModel(oJsonModel,"oJsonForView");

                   }.bind(this),
                   error:function(oError) {

                   }

                  })
            }
        });
    });
