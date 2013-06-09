﻿/**
 * 客户操作记录查询
 * @author Administrator
 */
Ext.namespace('Js.Center.Customer.CustomerOperatorLog');

Js.Center.Customer.CustomerOperatorLog.OperatorLogInfo = function(node,row) {
	if (Ext.get("Js.Center.Customer.CustomerOperatorLog.CustomerBusinessPanel") == null) {
		// ======================================================================= 定义GridPanel相关
		// ===============================================分页每页显示数量
		var _cusGroupPageSize = 12; //客户组信息
		var _whitePageSize = 12; //白名单信息
		var _blackPageSize = 12; //黑名单信息
		// ===============================================指定列参数
		
		//客户组信息
		var cusGroupfields = ["numrowasdf","vc2mobile", "operate", "datcreattime","vc2username", "vc2usergroupname", "vc2name"];
		//白名单信息
		var whitefields = ["numrowasdf","vc2mobile", "operate", "datcreattime","vc2username", "vc2name"];
		//黑名单信息
		var blackfields = ["numrowasdf","vc2mobile", "operate", "datcreattime", "vc2username"];

		//限制查询条件的方法
		var queryData = function(infostore, grid, flaginfo) {
			if (selectPanel.getForm().isValid()) {
				infostore.baseParams = {
					vc2mobile : Ext.get("Js.Center.Customer.CustomerOperatorLog.MobilePhone").getValue(),
					datcreattimebegin:Ext.get("Js.Center.Customer.CustomerOperatorLog.DatStart").getValue(),
					datcreattimeend:Ext.get("Js.Center.Customer.CustomerOperatorLog.DatEnd").getValue(),
					flag : flaginfo
				};
				return true;
			}
		};
		//================================================定义Grid数据
		//===============客户组信息
		Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore = new WXTL.Widgets.CommonData.GroupingStore({
			proxy : new Ext.data.HttpProxy({
				url : Js.Center.Customer.CustomerOperatorLogURL,
				method : "POST"
			}),
			reader : new Ext.data.JsonReader({
				fields : cusGroupfields,
				root : "data",
				id : "numrowasdf",
				totalProperty : "totalCount"
			}),
			sortInfo : {
				field : 'datcreattime',
				direction : 'DESC'
			}, //解决分组无效代码
			listeners : {
				"beforeload" : function(Store, options) {
					return queryData(Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore,cusgroupgrid, 'queryusergrouplog');
				}
			}
		});
		//===============白名单信息

		Js.Center.Customer.CustomerOperatorLog.WhiteInfostore = new WXTL.Widgets.CommonData.GroupingStore({
			proxy : new Ext.data.HttpProxy({
				url : Js.Center.Customer.CustomerOperatorLogURL,
				method : "POST"
			}),
			reader : new Ext.data.JsonReader({
				fields : whitefields,
				root : "data",
				id : "numrowasdf",
				totalProperty : "totalCount"
			}),
			sortInfo : {
				field : 'datcreattime',
				direction : 'DESC'
			}, //解决分组无效代码
			listeners : {
				"beforeload" : function(Store, options) {
					return queryData(Js.Center.Customer.CustomerOperatorLog.WhiteInfostore,	whitegrid, 'querywhitelog');
				}
			}
		});
		//===============黑名单信息

		Js.Center.Customer.CustomerOperatorLog.BlackInfostore = new WXTL.Widgets.CommonData.GroupingStore({
			proxy : new Ext.data.HttpProxy({
				url : Js.Center.Customer.CustomerOperatorLogURL,
				method : "POST"
			}),
			reader : new Ext.data.JsonReader({
				fields : blackfields,
				root : "data",
				id : "numrowasdf",
				totalProperty : "totalCount"
			}),
			sortInfo : {
				field : 'datcreattime',
				direction : 'DESC'
			}, //解决分组无效代码
			listeners : {
				"beforeload" : function(Store, options) {
					return queryData(Js.Center.Customer.CustomerOperatorLog.BlackInfostore,blackgrid, 'queryblacklog');
				}
			}
		});
		
		// ==================================================== 列头		
		//客户组信息
		var _cusgroupcm = new Ext.grid.ColumnModel([{
			header : "手机号码",
			dataIndex : "vc2mobile",
			sortable : true,
			tooltip : "手机号码"
		}, {
			header : "操作记录",
			tooltip : "操作记录",
			dataIndex : "operate",
			sortable : true

		}, {
			header : "操作时间",
			tooltip : "操作时间",
			dataIndex : "datcreattime",
			sortable : true
		}, {
			header : "操作人名称",
			tooltip : "操作人名称",
			dataIndex : "vc2username",
			sortable : true
		}, {
			header : "所属客户组名称",
			tooltip : "所属客户组名称",
			dataIndex : "vc2usergroupname",
			sortable : true
		}, {
			header : "所属通道组名称",
			tooltip : "所属通道组名称",
			dataIndex : "vc2name",
			sortable : true
		}]);
		
		//白名单信息
		var _whitecm = new Ext.grid.ColumnModel([{
			header : "手机号码",
			tooltip : "手机号码",
			dataIndex : "vc2mobile",
			sortable : true
		}, {
			header : "操作记录",
			tooltip : "操作记录",
			dataIndex : "operate",
			sortable : true
		}, {
			header : "操作时间",
			tooltip : "操作时间",
			dataIndex : "datcreattime",
			sortable : true
		}, {
			header : "操作人名称",
			tooltip : "操作人名称",
			dataIndex : "vc2username",
			sortable : true
		}, {
			header : "所属通道组名称",
			tooltip : "所属通道组名称",
			dataIndex : "vc2name",
			sortable : true
		}]);
		
		//黑名单信息
		var _blackcm = new Ext.grid.ColumnModel([{
			header : "手机号码",
			tooltip : "手机号码",
			dataIndex : "vc2mobile",
			sortable : true
		}, {
			header : "操作记录",
			tooltip : "操作记录",
			dataIndex : "operate",
			sortable : true
		}, {
			header : "操作时间",
			tooltip : "操作时间",
			dataIndex : "datcreattime",
			sortable : true
		}, {
			header : "操作人名称",
			tooltip : "操作人名称",
			dataIndex : "vc2username",
			sortable : true
		}]);
		//==============================================================定义grid
		
		//客户组信息
		var cusgroupgrid = new WXTL.Widgets.CommonGrid.GridPanel({
			id : "Js.Center.Customer.CustomerOperatorLog.cusgroupgridGridPanel",
			anchor : '100% 100%',
			pageSize : _cusGroupPageSize,
			needMenu : false,
			layout : 'anchor',
			title : '客户组信息',
			store : Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore,
			cm : _cusgroupcm,
			sm : new Ext.grid.RowSelectionModel({singleSelect:true}),
			needRightMenu : false,
			listeners : {
				"beforeexpand" : function(Panel) {
					if (queryData(Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore,cusgroupgrid, 'queryusergrouplog')) {
						Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore.load({
							params : {
								limit : _cusGroupPageSize,
								start : 0
							}
						});
					}
				}
			}
		});

		//白名单信息

		var whitegrid = new WXTL.Widgets.CommonGrid.GridPanel({
			id : "Js.Center.Customer.CustomerOperatorLog.whitegridGridPanel",
			anchor : '100% 100%',
			pageSize : _whitePageSize,
			needMenu : false,
			layout : 'anchor',
			title : '白名单信息',
			store : Js.Center.Customer.CustomerOperatorLog.WhiteInfostore,
			sm : new Ext.grid.RowSelectionModel({singleSelect:true}),
			cm : _whitecm,
			collapsed : "false",
			needRightMenu : false,
			listeners : {
				"beforeexpand" : function(Panel) {
					if (queryData(Js.Center.Customer.CustomerOperatorLog.WhiteInfostore,whitegrid, 'querywhitelog')) {
						Js.Center.Customer.CustomerOperatorLog.WhiteInfostore.load({
							params : {
								limit : _whitePageSize,
								start : 0
							}
						});
					}
				}
			}
		});

		//黑名单信息
		var blackgrid = new WXTL.Widgets.CommonGrid.GridPanel({
			id : "Js.Center.Customer.CustomerOperatorLog.blackgridGridPanel",
			anchor : '100% 100%',
			pageSize : _blackPageSize,
			needMenu : false,
			layout : 'anchor',
			title : '黑名单信息',
			store : Js.Center.Customer.CustomerOperatorLog.BlackInfostore,
			sm : new Ext.grid.RowSelectionModel({singleSelect:true}),
			cm : _blackcm,
			collapsed : "false",
			needRightMenu : false,
			listeners : {
				"beforeexpand" : function(Panel) {
					if (queryData(Js.Center.Customer.CustomerOperatorLog.BlackInfostore,blackgrid, 'queryblacklog')) {
						Js.Center.Customer.CustomerOperatorLog.BlackInfostore.load({
							params : {
								limit : _blackPageSize,
								start : 0
							}
						});
					}
				}
			}
		});
		
		 var startdate = new Ext.form.DateField({
            fieldLabel: "开始时间",
            format: 'Y-m-d',
            labelWidth: 100,
            bodyStyle: 'padding:5px 5px 0',
            readOnly: true,
            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(), -7/*减3天*/), 'Y-m-d'),
            name: "datcreattimestart",
            id: "Js.Center.Customer.CustomerOperatorLog.DatStart",
            validateOnBlur: false,
            validator: function(){
                var strat_time = Ext.get("Js.Center.Customer.CustomerOperatorLog.DatStart").dom.value;
                var end_time = Ext.get("Js.Center.Customer.CustomerOperatorLog.DatEnd").dom.value;
                if (strat_time <= end_time) {
                    return true;
                }
                else {
                    return false;
                }
            },
            invalidText: '结束时间不能小于开始时间！'
        });
        var enddate = new Ext.form.DateField({
            fieldLabel: "结束时间",
            labelWidth: 100,
            format: 'Y-m-d',
            bodyStyle: 'padding:5px 5px 0',
            readOnly: true,
            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
            name: "datcreattimeend",
            id: "Js.Center.Customer.CustomerOperatorLog.DatEnd",
            validateOnBlur: false,
            validator: function(){
                var strat_time = Ext.get("Js.Center.Customer.CustomerOperatorLog.DatStart").dom.value;
                var end_time = Ext.get("Js.Center.Customer.CustomerOperatorLog.DatEnd").dom.value;
                if (strat_time <= end_time) {
                    return true;
                }
                else {
                    return false;
                }
            },
            invalidText: '结束时间不能小于开始时间！'
        });
		
		//============================================================================ 定义formpanel
		var selectPanel = new WXTL.Widgets.CommonPanel.QueryFormPanel({
			id : "Js.Center.Customer.CustomerOperatorLog.LogSelectPanel",
			height : 140,
			//查询调用的方法
			queryMethod : "Js.Center.Customer.CustomerOperatorLog.queryGrid",
			bodyStyle : "padding:10px 0 10px 15px",
			items : [{
				layout : 'column',
				items : [{
					columnWidth : .5,
					layout : 'form',
					defaultType : "textfield",
					//锚点布局-
					defaults : {
						anchor : "90%",
						msgTarget : "side"
					},
					buttonAlign : "center",
					items : [startdate, {
						fieldLabel : '<font color=red>手机号码</font>',
						name : 'vc2mobile',
						regex : WXTL.Common.regex.Mobile,
						regexText : "手机号码格式不正确",
						msgTarget : "side",
						allowBlank:false,
						id : 'Js.Center.Customer.CustomerOperatorLog.MobilePhone'
					}]
				}, {
					columnWidth : .5,
					layout : 'form',
					defaultType : "textfield",
					//锚点布局-
					defaults : {
						anchor : "90%",
						msgTarget : "side"
					},
					buttonAlign : "center",
					items : [enddate]
				}]
			}]

		});
		//============================================================== 定义查询按钮事件方法
		Js.Center.Customer.CustomerOperatorLog.queryGrid = function() {
			if (selectPanel.getForm().isValid()) {
				if (queryData(Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore,cusgroupgrid, 'selectcusgroupbymobile')) {
					Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore.load({
						params : {
							limit : _cusGroupPageSize,
							start : 0
						}
					});
				}
			}
			whitegrid.collapse(true);
			blackgrid.collapse(true);
		};
		var CusInfoForm = new Ext.Panel({
			id : 'Js.Center.Customer.CustomerOperatorLog.CusInfoForm',
			title : "查询结果",
			frame : true, // 渲染面板
			bodyBorder : false,
			border : false,
			autoScroll : true, // 自动显示滚动条
			layout : "anchor",
			defaults : {
				collapsible : true
				// 允许展开和收缩
			},
			items : [cusgroupgrid, whitegrid, blackgrid]
		});

		//============================================================================定义主panel
		Js.Center.Customer.CustomerOperatorLog.CustomerBusinessPanel = new Ext.Panel({
			frame : true, // 渲染面板
			id : "Js.Center.Customer.CustomerOperatorLog.CustomerBusinessPanel",
			//title:"客户基本信息",
			bodyBorder : false,
			border : false,
			autoScroll : true, // 自动显示滚动条
			layout : "anchor",
			defaults : {
				collapsible : true
			},
			items : [selectPanel, cusgroupgrid, whitegrid, blackgrid]
		})
	};

	//============================================================================绑定到center
	GridMain(node,Js.Center.Customer.CustomerOperatorLog.CustomerBusinessPanel,"openroomiconinfo","Js.Center.Customer.CustomerOperatorLog.CusgroupInfostore");
};
