﻿Ext.namespace('Js.Center.Business.ServiceCodeUpdate');Js.Center.Business.ServiceCodeUpdate.func = function(row){    //==============================================================网关下拉列表数据定义    Js.Center.Business.ServiceCodeUpdate.GatewayStore = new Ext.data.Store({        proxy: new Ext.data.HttpProxy({            url: Js.Center.Business.GatewayURL,            method: "POST"        }),        reader: new Ext.data.JsonReader({            fields: ['numgwid', 'vc2gatewayname'],            root: 'data',            id: 'numgwid'        }),        baseParams: {            flag: 'selectall',            columnlist: 'numgwid,vc2gatewayname'        }    });    var gatewayCombo = {        xtype: "combo",        name: "numgwid",        id: "Js.Center.Business.ServiceCodeUpdate.tempnumgwid",        fieldLabel: "<font color=red>网关名称</font>",        hiddenName: "numgwid",        readOnly: true,        mode: "local",        store: Js.Center.Business.ServiceCodeUpdate.GatewayStore,        typeAhead: true,        triggerAction: 'all',        selectOnFocus: true,        emptyText: '-=请选择=-',        forceSelection: true,        width: 130,        allowBlank: false,        blankText: "网关名称不允许为空",        displayField: 'vc2gatewayname',        valueField: 'numgwid',        mode: 'local'    };    // ======================================================================= 定义FormPanel    var updateServiceCodeInfofp = new Ext.form.FormPanel({        frame: true,        labelWidth: 80,        defaults: {            anchor: "90%",            msgTarget: "side"        },        items: [{            layout: 'column',            items: [{                xtype: "hidden",                name: "flag",                value: "updateall"            }, {                xtype: "hidden",                name: "numsvcid",                fieldLabel: "编号"            }, {                columnWidth: .5,                layout: 'form',                defaultType: "textfield",                //锚点布局-                defaults: {                    anchor: "90%",                    msgTarget: "side"                },                buttonAlign: "center",                bodyStyle: "padding:10px 0 10px 15px",                items: [{                    xtype: "textfield",                    name: "vc2svc",                    fieldLabel: "<font color=red>业务代码</font>",                    allowBlank: false,                    blankText: "业务编码不允许为空",                    regex: WXTL.Common.regex.Illegal,                    regexText: WXTL.Common.regexText.IllegalText,                    maxLength: 10,                    maxLengthText: '长度不能超过10！'                }, {                    xtype: "combo",                    name: "vc2type",                    fieldLabel: "<font color=red>计费类型</font>",                    hiddenName: "vc2type",                    emptyText: "请选择",                    readOnly: true,                    mode: "local",                    displayField: "show",                    valueField: "value",                    triggerAction: "all",                    allowBlank: false,                    blankText: "计费类型不允许为空",                    store: new Ext.data.SimpleStore({                        fields: ["show", "value"],                        data: [["免费", "0"], ["按条", "1"], ["包月", "2"]]                    })                }, {                    xtype: 'numberfield',                    name: 'vc2feevalue',                    fieldLabel: "<font color=red>资费(分)</font>",                    allowBlank: false,                    blankText: '资费不允许为空',                    maxValue: 9999999999,                    maxText: '最大不能超过9999999999',                    minValue: 0,                    minText: '最小不能小于0'                }, {                    xtype: "textfield",                    name: "vc2longcode",                    fieldLabel: "服务代码",                    allowBlank: true,                    maxLength: 20,                    maxLengthText: '长度不能超过20！'                }]            }, {                columnWidth: .5,                layout: 'form',                defaultType: "textfield",                //锚点布局-                defaults: {                    anchor: "90%",                    msgTarget: "side"                },                buttonAlign: "center",                bodyStyle: "padding:10px 0 10px 15px",                items: [{                    xtype: "textfield",                    name: "vc2svcname",                    fieldLabel: "<font color=red>业务名称</font>",                    allowBlank: false,                    blankText: "业务名称不允许为空",                    regex: WXTL.Common.regex.Illegal,                    regexText: WXTL.Common.regexText.IllegalText,                    maxLength: 50,                    maxLengthText: '长度不能超过50！'                }, {                    xtype: "combo",                    name: "vc2servicetype",                    fieldLabel: "<font color=red>短彩类型</font>",                    hiddenName: "vc2servicetype",                    readOnly: true,                    allowBlank: false,                    mode: "local",                    displayField: "show",                    valueField: "value",                    triggerAction: "all",                    selectOnFocus: true,                    emptyText: '-=请选择=-',                    blankText: "短彩类型不允许为空",                    store: new Ext.data.SimpleStore({                        fields: ["show", "value"],                        data: [["短信", "1"], ["彩信", "2"], ["wap", "3"]]  //, ["短信PV", "4"], ["彩信PV", "5"], ["wapPV", "6"]                    }),                    listeners: {                        "select": function(){                            Ext.getCmp('Js.Center.Business.ServiceCodeUpdate.tempnumgwid').setValue('-=请选择=-');                            Js.Center.Business.ServiceCodeUpdate.GatewayStore.reload({                                params: {                                    vc2servicetype: this.getValue(),                                    serviceflag: 'selectbyservicetype'                                }                            })                        }                    }                }, gatewayCombo                ,{                	xtype: "lovcombo",                    name: "numinstid",                    fieldLabel: "<font color=red>通道地区</font>",                    hiddenName: "numinstid",                    id: "Js.Center.Business.ServiceCodeUpdate.numinstid",                    allowBlank: false,                    blankText: "地区不允许为空",                    readOnly: true,                    mode: "local",                    displayField: "vc2name",                    valueField: "numinstid",                    triggerAction: "all",                    emptyText: "-=请选择=-",                    store: Js.Center.Common.InstStore,                	onSelect:function(record, index) {                        if(this.fireEvent('beforeselect', this, record, index) !== false){                        	if(false == this.store.data.items[0].data.checked || 0 == index){                        		if(0 == index && false == record.get(this.checkField)){                        			//如果选中全国则清空                        			this.clearValue();                        		}                    			record.set(this.checkField, !record.get(this.checkField));                        	}                			if(this.store.isFiltered()) {                				this.doQuery(this.allQuery);                			}                			this.setValue(this.getCheckedValue());                            this.fireEvent('select', this, record, index);                        }                	}                }]            },{            	columnWidth: 1,                layout: 'form',                defaultType: "textfield",                //锚点布局-                defaults: {                    anchor: "95%",                    msgTarget: "side"                },                buttonAlign: "center",                bodyStyle: "padding:0px 0 10px 15px",                items: [{                	                	                	 xtype: "textarea",                     //labelStyle: "text-align:center;width:100;",                     align: "right",                     name: "vc2dsc",                     fieldLabel: "描述",                     //anchor: '90% 50%',                     regex: WXTL.Common.regex.Illegal,                     regexText: WXTL.Common.regexText.IllegalText,                     maxLength: 100,                     maxLengthText: '长度不能超过100！'                 }]}]                 }]             });                        //Ext.getCmp("numinstid").setValue("1,3");    //==============================================================定义窗体    var mainForm = updateServiceCodeInfofp.getForm();    this.window = new WXTL.Widgets.CommonWindows.Window({        title: "修改通道",        mainForm: mainForm,        updateURL: Js.Center.Business.ServiceCodeUpdateURL,        displayStore: Js.Center.Business.ServiceCode.Infostore,        updateState: true,        updateRecord: row,        needButtons:false,        items: [updateServiceCodeInfofp],        buttons: [new Ext.Button({            text: '确定',            minWidth: 70,            handler: function(){                if (updateServiceCodeInfofp.getForm().isValid()) {                    // 弹出效果                    Ext.MessageBox.show({                        msg: '正在保存，请稍等...',                        progressText: 'Saving...',                        width: 300,                        wait: true,                        icon: 'download',                        animEl: 'saving'                    });                    setTimeout(function(){                        Ext.MessageBox.hide();                    }, 300000);                    Js.Center.Business.ServiceCodeUpdate.window.mainFormSubmitFunc();                                    }            }        }), new Ext.Button({            text: '重置',            minWidth: 70,            qtip: "重置数据",            handler: function(){                                                updateServiceCodeInfofp.getForm().reset();                Js.Center.Business.ServiceCodeUpdate.window.mainForm.loadRecord(Js.Center.Business.ServiceCodeUpdate.window.updateRecord);                getSvcInst();            }        }), new Ext.Button({            text: '取消',            minWidth: 70,            handler: function(){                Js.Center.Business.ServiceCodeUpdate.window.hide();            }        })],        needLoadDataStore: true,        loadDataStoreFunc: function(){            Js.Center.Business.ServiceCodeUpdate.GatewayStore.reload({                params: {                    vc2servicetype: Js.Center.Business.ServiceCodeUpdate.window.updateRecord.get("vc2servicetype"),                    serviceflag: 'selectbyservicetype'                },                callback: function(records, options, success){                    Ext.getCmp("Js.Center.Business.ServiceCodeUpdate.tempnumgwid").setValue(Js.Center.Business.ServiceCodeUpdate.window.updateRecord.get("numgwid"));                }            });            getSvcInst();        }            });    getSvcInst = function(){    	var svcinst = Js.Center.Business.ServiceCodeUpdate.window.updateRecord.get("numsvcid");        var Url = "URL/business/servicecode/servicecode.ashx?flag=selectsvcinst&svcid="+svcinst;        var JsonInst = eval(doSynRequest(Url));        var strSvcInst = "";        for(var i =0 ; i< JsonInst.totalCount; i++){        	strSvcInst += JsonInst.data[i].numinstid ;        	if((i+1)!= JsonInst.totalCount){        		strSvcInst += ',';        	}        }        Ext.getCmp("Js.Center.Business.ServiceCodeUpdate.numinstid").setValue(strSvcInst);    }};