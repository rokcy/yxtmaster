Ext.namespace('Js.Center.ExtractNumber');
Js.Center.ExtractNumber.info = function(node){
	 if (Ext.get("Js.Center.ExtractNumber.ExtractNumberPanel") == null) {
	 	Js.Center.Common.GatewayAreaStore.reload();
	        // =============================================下拉列表绑定 （运营商）
	        var opidComboxQuery = new WXTL.Widgets.CommonForm.ComboBox({
		        name: "operatortype",
		        hiddenName: "numopida",
		        emptyText: "-=请选择=-",
		        fieldLabel: "运营商",
		        readOnly: true,
		        mode: "local",
		        displayField: "vc2name",
		        valueField: "numopid",
		        triggerAction: "all",
		        store: Js.Center.Common.StatOperatorStore
		    });
	        // =============================================下拉列表绑定 （省份）
	        var instQuery = new WXTL.Widgets.CommonForm.ComboBox({
	            name: "numarea",
	            hiddenName: "numarea",
	            emptyText: "-=请选择=-",
	            fieldLabel: "省份",
	            readOnly: true,
	            mode: "local",
	            displayField: "vc2name",
	            valueField: "numinstid",
	            triggerAction: "all",
	            store:Js.Center.Common.GatewayAreaStore
	        });
		// ============================================================================
		    var queryStartDate = new Ext.form.DateField({
	            fieldLabel: "开始时间",
	            format: 'Y-m-d',
	            labelWidth: 100,
	            bodyStyle: 'padding:5px 5px 0',
	            readOnly: true,
	            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
	            fieldLabel: "开始时间",
	            name: "startdate",
	            id: "Js.Center.ExtractNumber.startdate",
	            validateOnBlur: false,
	            validator: function(){
	                var start_time = Ext.get("Js.Center.ExtractNumber.startdate").dom.value;
	                var end_time = Ext.get("Js.Center.ExtractNumber.enddate").dom.value;
	                var arrStd = start_time.split("-");
		            var arrEnd = end_time.split("-");
		            var startDate = new Date(arrStd[0],arrStd[1],arrStd[2]);
					var end_Date = new Date(arrEnd[0],arrEnd[1],arrEnd[2]);
	                var startMonthDate = new Date(startDate.getTime() + (1000 * 3600 * 24 * 31));
	                if (start_time <= end_time && startMonthDate >= end_Date) {
	                    return true;
	                } else {
	                	this.invalidText = "开始时间到结束时间不能大于31天";
	                    return false;
	                }
	            },
	            invalidText: '结束时间不能小于开始时间，间隔不能大于一个月！'
	        });
		    var queryEndDate = new Ext.form.DateField({
	            fieldLabel: "结束时间",
	            format: 'Y-m-d',
	            labelWidth: 100,
	            bodyStyle: 'padding:5px 5px 0',
	            readOnly: true,
	            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
	            fieldLabel: "结束时间",
	            name: "enddate",
	            id: "Js.Center.ExtractNumber.enddate",
	            validateOnBlur: false,
	            validator: function(){
	                var start_time = Ext.get("Js.Center.ExtractNumber.startdate").dom.value;
	                var end_time = Ext.get("Js.Center.ExtractNumber.enddate").dom.value;
	                if (start_time <= end_time) {
	                    return true;
	                } else {
	                    return false;
	                }
	            },
	            invalidText: '结束时间不能小于开始时间！'
	        });
		// 定义SelectFormPanel
	    var ExtractNumberSelectPanel= new WXTL.Widgets.CommonPanel.QueryFormPanel({
	        height: 200,
	        // 查询调用的方法
	        queryMethod: "Js.Center.ExtractNumber.ExtractNumberMainGrid",
	        items: [{
	            layout: 'column',
	            items: [
	                {// 左侧列
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
	                items:[queryStartDate,{
	                    xtype: "textfield",
	                    name: "ecname",
	                    id: "Js.Center.ExtractNumber.ecname",
	                    fieldLabel: "客户名称",
	                    maxLength: 10,
	                    regex: WXTL.Common.regex.Illegal,
	                    regexText: WXTL.Common.regexText.IllegalText
	                },{
	                    xtype: "textfield",
	                    name: "servicecode",
	                    id: "Js.Center.ExtractNumber.servicecode",
	                    fieldLabel: "服务代码",
	                    maxLength: 10,
	                    regex: WXTL.Common.regex.Illegal,
	                    regexText: WXTL.Common.regexText.IllegalText
	                },opidComboxQuery]
	            },{// 右侧
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
	            	items:[queryEndDate,{
	                    xtype: "textfield",
	                    name: "reporterrorcode",
	                    id: "Js.Center.ExtractNumber.reporterrorcode",
	                    fieldLabel: "状态码",
	                    maxLength: 10,
	                    regex: WXTL.Common.regex.Illegal,
	                    regexText: WXTL.Common.regexText.IllegalText
	                },instQuery,{
	                    xtype: "combo",
	                    name: "servicetype",
	                    id: "Js.Center.ExtractNumber.servicetype",
	                    fieldLabel: "<font color=red>短彩类型</font>",
	                    readOnly: true,
	                    mode: "local",
	                    displayField: "show",
                        allowBlank: false,
	                    valueField: "value",
	                    triggerAction: "all",
	                    emptyText: "-=请选择=-",
	                    store: new Ext.data.SimpleStore({
	                        fields: ["show", "value"],
	                        data: [["短信", "1"], ["彩信", "2"]]
	                    })
	                }]
	            }]
	         }]
	    });
        // ==============================================================
		// 定义查询按钮事件方法
	    Js.Center.ExtractNumber.ExtractNumberMainGrid = function(){
            if (ExtractNumberSelectPanel.getForm().isValid()) {
				Ext.MessageBox.show({
					msg: '正在保存，请稍等...',
					progressText: 'Saving...',
					width: 300,
					wait: true,
					icon: 'download',
					animEl: 'saving'
				});
				setTimeout(function(){
					Ext.MessageBox.hide();
				}, 300000);
	            var startdate = Ext.get("Js.Center.ExtractNumber.startdate").dom.value;
	            var enddate = Ext.get("Js.Center.ExtractNumber.enddate").dom.value;
	            var ecname = Ext.getCmp("Js.Center.ExtractNumber.ecname").getValue();
	            var servicecode = Ext.getCmp("Js.Center.ExtractNumber.servicecode").getValue();
	            var servicetype =  Ext.getCmp("Js.Center.ExtractNumber.servicetype").getValue();
	            var operatortype = opidComboxQuery.getValue();
	            var instid = instQuery.getValue();
	            var reporterrorcode = Ext.getCmp("Js.Center.ExtractNumber.reporterrorcode").getValue();
	            var flag = 'extractnumberquery';
	            Ext.Ajax.request({
	                url: Js.Center.ExtractNumber.QueryURL,
	                method: "POST",
	                params: {
	                	startdate: startdate,
	                	enddate: enddate,
	                	ecname: ecname,
	                	servicecode: servicecode,
	                	servicetype: servicetype,
	                	operatortype: operatortype,
	                	instid: instid,
	                	reporterrorcode: reporterrorcode,
	                    flag: flag
	                },
	                success: function(form, action) {
	                	Ext.MessageBox.hide();
	                    var objJson = Ext.util.JSON.decode(form.responseText);
	                    var flag = objJson.success;
	                    if(true == flag){
	                    	Ext.Msg.alert("提示信息", "操作成功，导出文件已生成");
	                    	document.getElementById("exportNumberInfo").innerHTML = '已生成文本文件，请<a href="#" onclick="Js.Center.ExtractNumber.downloadNumber()"><span style="color:#0066FF;">导出</span></a>查看';
	                    } else {
	                    	Ext.Msg.alert("提示信息", objJson.info);
	                    }
	                },
	                failure: function() {
	                    Ext.Msg.alert("温馨提示", "系统忙，请稍候...!");
	                }
	            });
            }
        };
	    // ==============================================================定义grid
        Js.Center.ExtractNumber.downloadNumber = function(){
        	windowOpen(Js.Center.ExtractNumber.QueryURL + "?" + "flag=ecportnumber", 400, 300);
        	document.getElementById("exportNumberInfo").innerHTML = "请先查询数据再导出";
        };
        
        var ExtractNumberInfoGrid = new Ext.Panel({
            border: false,
            items: [{
                xtype: 'ClickLabel',
                style: '',
                html:'<div style="background-color:white;width:100%; height:100px; border:1px solid #FFF; padding:80px;"><p id="exportNumberInfo" style="padding-bottom:20px; margin-left:40px;">请先查询数据再导出</p>' +
                    '<p style="margin:0 auto;">导出表格说明：</p> <p style="margin:0 auto;">1,为excel表格</p> <p style="margin:0 auto;">2,包含以下字段：号码，时间，客户名称，服务代码，运营商，短彩类型，状态码，省份</p><div>'
            }]
        });
		// ============================================================================定义主panel
		Js.Center.ExtractNumber.ExtractNumberPanel = new Ext.Panel({
	        frame: true, // 渲染面板
	        id: "Js.Center.ExtractNumber.ExtractNumberPanel",
	        bodyBorder: false,
	        border: false,
	        autoScroll: true, // 自动显示滚动条
	        layout: "anchor",
	        defaults: {
	            collapsible: true // 允许展开和收缩
	        },
	        items: [ExtractNumberSelectPanel,ExtractNumberInfoGrid]
	    });
	};
	GridMain(node,Js.Center.ExtractNumber.ExtractNumberPanel, "openroomiconinfo");
};