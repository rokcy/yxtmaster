﻿Ext.namespace('Js.Center.Business.MORouterAdd');
                layout: 'form',
                defaultType: "textfield",
                //锚点布局-
                defaults: {
                    anchor: "90%",
                    msgTarget: "side"
                },
                buttonAlign: "center",
                bodyStyle: "padding:0px 0 0px 15px",
                items: [{
                    //width: 500,
                    height: 100,
                    xtype: "textarea",
                    name: "vc2dsc",
                    fieldLabel: "路由描述",
                    regex: WXTL.Common.regex.Illegal,
                    regexText: WXTL.Common.regexText.IllegalText,
                    maxLength: 100
                }]
            }]
        });