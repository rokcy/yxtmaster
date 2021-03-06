﻿/**
 * 短信下行记录查询
 * @author 孙吉君
 */
Ext.namespace('Js.Center.SendSMS.SendTaskQuery');

Js.Center.SendSMS.SendTaskQuery.Queryinfo = function(node){

    if (Ext.get("Js.Center.SendSMS.SendTaskQuery.QueryinfoPanel") == null) {
        // ======================================================================= 定义GridPanel相关
        // ===============================================分页每页显示数量
        var _pageSize = 12;
        // ===============================================指定列参数
        //批次号，短信内容，手机号码，收到时间，来源，处理时间，通道组（产品），处理状态（待处理、已处理）
        var fields = ["numrowasdf","numseqid","numcontentid", "vc2content", "vc2destmobile", "datcreatetime", "vc2srcclient", "datdealtime", "vc2name","numdealstatus","vc2dealstatus" ];
        
        Js.Center.SendSMS.SendTaskQuery.Infostore = new WXTL.Widgets.CommonData.GroupingStore({
            proxy: new Ext.data.HttpProxy({
                url: Js.Center.SendSMS.SendTaskQueryURL,
                method: "POST"
            }),
            reader: new Ext.data.JsonReader({
                fields: fields,
                root: "data",
                id: "numrowasdf",
                totalProperty: "totalCount"
            
            }),
            baseParams: {
                datstart: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                vc2content: '',
                vc2destmobile: '',
                numcontentid: '',
                numdealstatus: '', 
                numproductid: '',             
                flag: 'selecttaskbykey'
            },            
            sortInfo: {
                field: 'datcreatetime',
                direction: 'DESC'
            }//解决分组无效代码
        });
        Js.Center.SendSMS.SendTaskQuery.Infostore.load({
            params: {
                start: 0,
                limit: _pageSize
            }
        });
        // ==================================================== 列选择模式
        var sm = new Ext.grid.CheckboxSelectionModel({
            dataIndex: "numrowasdf"
        });
        // ==================================================== 列头
        var cm = new Ext.grid.ColumnModel([{
            header: "批次号",
            tooltip: "批次号",
            dataIndex: "numcontentid",
            sortable: true
        }, {
            header: "短信内容",
            tooltip: "短信内容",
            dataIndex: "vc2content",
            sortable: true,
            width: 220,
            renderer: function(value){
                return "<font qtip='" + value + "'>" + value + "</font>";
            },
            readOnly: true
        }, {
            header: "手机号码",
            tooltip: "手机号码",
            dataIndex: "vc2destmobile",
            sortable: true
        }, {
            header: "来源",
            tooltip: "来源",
            dataIndex: "vc2srcclient",
            sortable: true
        }, {
            header: "收到时间",
            tooltip: "收到时间",
            dataIndex: "datdealtime",
            sortable: true
        }, {
            header: "通道组",
            tooltip: "通道组",
            dataIndex: "vc2name",
            sortable: true
        }, {
            header: "处理状态",
            tooltip: "处理状态",
            dataIndex: "numdealstatus",
            sortable: true,
            renderer: function(value){
            	if(value == "0"){
            		return "待处理";
            	}
                else{
                	return "已处理";
                }
            }
        }]);
        //==============================================================定义grid
        var QueryinfoGrid = new WXTL.Widgets.CommonGrid.GridPanel({
            anchor: '100% 100%',
            pageSize: _pageSize,
            needMenu: false,
            store: Js.Center.SendSMS.SendTaskQuery.Infostore,
            sm: sm,
            cm: cm,
            needRightMenu: false
        });
        
        //============================================================================ 定义formpanel
        //====================选择通道组
		var productCombox = new WXTL.Widgets.CommonForm.ComboBox({
			xtype: "xComboBox",
			name: "numproductid",
			hiddenName: "numproductid",
			id: 'Js.Center.SendSMS.SendTaskQuery.SMSnumproductid',
			emptyText: "-=请选择=-",
			fieldLabel: "选择通道组",
			readOnly: true,
			mode: "local",
			displayField: "vc2name",
			valueField: "numprodid",
			triggerAction: "all",
			store: Js.Center.Common.ProductStore
		});
		
		Js.Center.Common.ProductStore.reload();
        
        var SMSselectPanel = new WXTL.Widgets.CommonPanel.QueryFormPanel({
            height: 160,
            queryMethod: "Js.Center.SendSMS.SendTaskQuery.queryGrid",
            items: [{
                layout: 'column',
                items: [{
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    //锚点布局-
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [new Ext.form.DateField({
                        fieldLabel: '查询日期',
                        name: 'datstart',
                        id: 'Js.Center.SendSMS.SendTaskQuery.DatStart',
                        readOnly: true,
                        emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                        format: 'Y-m-d'
                    }), {
                        xtype: "textfield",
                        name: "vc2content",
                        id: 'Js.Center.SendSMS.SendTaskQuery.SMSContent',
                        fieldLabel: "短信内容",
                        maxLength: 50,
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText
                    }, {
                        xtype: "combo",
                        name: "vc2dealstatus",
                        hiddenName: "Js.Center.SendSMS.SendTaskQuery.vc2dealstatus",
                        fieldLabel: "处理状态",
                        readOnly: true,
                        mode: "local",
                        displayField: "show",
                        valueField: "value",
                        triggerAction: "all",
                        emptyText: "-=请选择=-",
                        store: new Ext.data.SimpleStore({
                            fields: ["show", "value"],
                            data: [["-=请选择=-", ""], ["待处理", "0"], ["已处理", "1"]]
                        })
                    }]
                }, {
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    //锚点布局-
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [{
                        xtype: "textfield",
                        name: "vc2mobile",
                        id: 'Js.Center.SendSMS.SendTaskQuery.Mobile',
                        fieldLabel: "手机号码",
                        regex: WXTL.Common.regex.Mobile,
                        regexText: "手机号码格式不正确"
                    }, {
                        xtype: "textfield",
                        name: "numcontentid",
                        id: 'Js.Center.SendSMS.SendTaskQuery.NumContentId',
                        fieldLabel: "批次号",
                        regex: WXTL.Common.regex.Number,
                        regexText: "只能输入数字"
                    }, productCombox]
                }]
            }]
        });
        
        //============================================================== 定义查询按钮事件方法
        Js.Center.SendSMS.SendTaskQuery.queryGrid = function(){
            if (SMSselectPanel.getForm().isValid()) {
                var datStart = Ext.get("Js.Center.SendSMS.SendTaskQuery.DatStart").getValue();
                var vc2destmobile = Ext.get("Js.Center.SendSMS.SendTaskQuery.Mobile").getValue();
                var vc2Content = Ext.get("Js.Center.SendSMS.SendTaskQuery.SMSContent").getValue();
                var numContentId = Ext.get("Js.Center.SendSMS.SendTaskQuery.NumContentId").getValue();
                var numDealstatus = Ext.get("Js.Center.SendSMS.SendTaskQuery.vc2dealstatus").getValue();
                var numProductid = Ext.getCmp("Js.Center.SendSMS.SendTaskQuery.SMSnumproductid").getValue();
                var flag = 'selecttaskbykey';
                
                Js.Center.SendSMS.SendTaskQuery.Infostore.baseParams = {
                    datstart: datStart,
	                vc2content: vc2Content,
	                vc2destmobile: vc2destmobile,
	                numcontentid: numContentId,
	                numdealstatus: numDealstatus, 
	                numproductid: numProductid,             
	                flag: 'selecttaskbykey'
                };
                Js.Center.SendSMS.SendTaskQuery.Infostore.load({
                    params: {
                        start: 0,
                        limit: _pageSize
                    }
                });
            }
        };
        
        //============================================================================定义主panel
        Js.Center.SendSMS.SendTaskQuery.QueryinfoPanel = new Ext.Panel({
            frame: true, // 渲染面板
            id: "Js.Center.SendSMS.SendTaskQuery.QueryinfoPanel",
            bodyBorder: false,
            border: false,
            autoScroll: true, // 自动显示滚动条
            layout: "anchor",
            defaults: {
                collapsible: true // 允许展开和收缩
            },
            items: [SMSselectPanel, QueryinfoGrid]
        })
    };
    //============================================================================绑定到center
    GridMain(node, Js.Center.SendSMS.SendTaskQuery.QueryinfoPanel, "openroomiconinfo", "Js.Center.SendSMS.SendTaskQuery.Infostore");
};

