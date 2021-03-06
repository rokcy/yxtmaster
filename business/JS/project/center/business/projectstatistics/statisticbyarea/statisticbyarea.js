Ext.namespace('Js.Center.Business.projectstatistics.statisticbyarea');
Js.Center.Business.projectstatistics.statisticbyarea.info = function(node){
	 if (Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.StatisticsMainPanel") == null) {
	        // ===============================================分页每页显示数量
	        var _pageSize = 200;
	        // ===============================================指定列参数
	        //字段
		    var fields = ["numrowasdf","datstat","vc2area","vc2type","numcnt","numsuccnt","numratio"];
	        Js.Center.Business.projectstatistics.AreaInfostore = new WXTL.Widgets.CommonData.GroupingStore({
	            proxy: new Ext.data.HttpProxy({
	                url: Js.Center.Business.projectstatistics.QueryAndExportURL,
	                method: "POST"
	            }),
	            reader: new Ext.data.JsonReader({
	                fields: fields,
	                root: "data",
	                id: "numrowasdf",
	                totalProperty: "totalCount"
	            }),
	            baseParams: {
	            	start:0,
                	limit:_pageSize,
	            	datStart: Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),
                    datEnd: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
    	            statisticType:true,
    	            servicecodeType:'',
    	            optype:'query',
	                flag: 'queryByArea'
	            },
	            sortInfo: {
	                field: 'datstat',
	                direction: 'asc'
	            }// 解决分组无效代码
	        });
	        Js.Center.Business.projectstatistics.AreaInfostore.load({
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
	            dataIndex: "numrowasdf",
	            hidden:true
	        },{
	        	header:"时间",
	        	tooltip:"时间",
	        	dataIndex:"datstat",
	        	sortable:"false"
	        },{
	        	header:"属地",
	        	tooltip:"属地",
	        	dataIndex:"vc2area",
	        	sortable:"true"
	        },{
	        	header:"短彩类型",
	        	tooltip:"短彩类型",
	        	dataIndex:"vc2type",
	        	sortable:"true"
	        },{
	        	header:"发送量",
	        	tooltip:"发送量",
	        	dataIndex:"numcnt",
	        	sortable:"true"
	        },{
	        	header:"成功数",
	        	tooltip:"成功数",
	        	dataIndex:"numsuccnt",
	        	sortable:"true"
	        },{
	        	header:"成功率",
	        	tooltip:"成功率",
	        	dataIndex:"numratio",
	        	sortable:"true"
	        }
	        ]);
	        
	       var byareaStartdate = new Ext.form.DateField({
	            fieldLabel: "开始时间",
	            format: 'Y-m-d',
	            labelWidth: 100,
	            bodyStyle: 'padding:5px 5px 0',
	            readOnly: true,
	            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
	            name: "datstart",
	            id: "Js.Center.Business.projectstatistics.statisticbyarea.DatStart",
	            validateOnBlur: false,
	            validator: function(){
	                var strat_time = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatStart").dom.value;
	                var end_time = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatEnd").dom.value;
	                if (strat_time <= end_time) {
		                var arrStd = strat_time.split("-");
		                var arrEnd = end_time.split("-");
		                var stime = new Date(arrStd[0],arrStd[1],arrStd[2]);
						var etime = new Date(arrEnd[0],arrEnd[1],arrEnd[2]);
						var dif = etime.getTime()-stime.getTime();
						if((dif/(24*60*60*1000))<=31){
	    					return true
						}
						else{
						 	this.invalidText = "开始时间到结束时间不能大于31天";
						 	return false;
						}
	                }
	                else {
	                    return false;
	                }
	            },
	            invalidText: '结束时间不能小于开始时间！'
	        });
	        var byareaEnddate = new Ext.form.DateField({
	            fieldLabel: "结束时间",
	            labelWidth: 100,
	            format: 'Y-m-d',
	            bodyStyle: 'padding:5px 5px 0',
	            readOnly: true,
	            emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
	            name: "datend",
	            id: "Js.Center.Business.projectstatistics.statisticbyarea.DatEnd",
	            validateOnBlur: false,
	            validator: function(){
	                var strat_time = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatStart").dom.value;
	                var end_time = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatEnd").dom.value;
	                if (strat_time <= end_time) {
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            },
	            invalidText: '结束时间不能小于开始时间！'
	        });
		// ============================================================================
		// 定义SelectFormPanel
	    var StatisticsSelectPanel= new WXTL.Widgets.CommonPanel.QueryFormPanel({
	        height: 160,
	        // 查询调用的方法
	        queryMethod: "Js.Center.Business.projectstatistics.statisticbyarea.queryMainGrid",
	        items: [{
	            layout: 'column',
	            items: [
	                {//左侧列
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
	                items:[
	                byareaStartdate,
	                {
	            			xtype:"checkbox",
	            			fieldLabel:"是否按日统计",
	            			checked:true,
	            			name : "statisticbyday",
	            			id:"Js.Center.Business.projectstatistics.statisticbyarea.statisticbyday"
	            		}
	                ]
	            },{//右侧
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
	            	items:[
	            		byareaEnddate
	                ]
	            }]
	         }]
	    });
        //============================================================== 定义查询按钮事件方法
	    Js.Center.Business.projectstatistics.statisticbyarea.queryMainGrid = function(){
            if (StatisticsSelectPanel.getForm().isValid()) {
                var _datstart = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatStart").getValue();
                var _datend = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatEnd").getValue();
                var _statisticbyday = Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.statisticbyday").dom.checked;
                var flag = 'queryByArea';
                var optype = 'query';
                Js.Center.Business.projectstatistics.AreaInfostore.baseParams = {
                	start:0,
                	limit:_pageSize,
    	           	datStart : _datstart,
                    datEnd : _datend ,
    	            statisticType : _statisticbyday,
    	            optype : optype,
                    flag: flag
                };
                Js.Center.Business.projectstatistics.AreaInfostore.load({
                    params: {
                        start: 0,
                        limit: _pageSize
                    }
                });
            }
        };
	    // ==============================================================定义grid
	    var StatisticsQueryInfoGrid = new WXTL.Widgets.CommonGrid.GridPanel({
	        anchor: '100% 100%',
	        pageSize: _pageSize,
	        needMenu: false,
	        store: Js.Center.Business.projectstatistics.AreaInfostore,
	        sm: sm,
	        cm: cm,
	        needRightMenu: false,
			needLoadFunc: false,
            tbar: new Ext.Toolbar({
                items: [{
                    iconCls: 'editicon',
                    text: "导出",
                    handler: function(){
	                    if (StatisticsSelectPanel.getForm().isValid()) {
	                    	var params = Js.Center.Business.projectstatistics.QueryAndExportURL+"?";
	                    	params += "flag=queryByArea";
	                    	params += "&start=0";
	                    	params += "&limit="+_pageSize;
	                    	params += "&datStart="+Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatStart").getValue();
	                    	params += "&datEnd="+Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.DatEnd").getValue();
	                    	params += "&statisticType="+Ext.get("Js.Center.Business.projectstatistics.statisticbyarea.statisticbyday").dom.checked;
	                    	params += "&optype=export";
	                    	windowOpen(params);
	                    }
                    }
                }]
            })
	    });
		// ============================================================================定义主panel
		Js.Center.Business.projectstatistics.statisticbyarea.StatisticsMainPanel = new Ext.Panel({
	        frame: true, // 渲染面板
	        id: "Js.Center.Business.projectstatistics.statisticbyarea.StatisticsMainPanel",
	        bodyBorder: false,
	        border: false,
	        autoScroll: true, // 自动显示滚动条
	        layout: "anchor",
	        defaults: {
	            collapsible: true // 允许展开和收缩
	        },
	        items: [StatisticsSelectPanel,StatisticsQueryInfoGrid]
	    });
	};
	
	GridMain(node,Js.Center.Business.projectstatistics.statisticbyarea.StatisticsMainPanel, "openroomiconinfo","Js.Center.Business.projectstatistics.AreaInfostore");
};