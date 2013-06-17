Ext.namespace('Js.Center.Statistics.MtByProduct');Js.Center.Statistics.MtByProduct.info=function(node){Js.Center.Statistics.MtByProduct.querydate=1;if(Ext.get("Js.Center.Statistics.MtByProduct.MainPanel")==null){var _pageSize=-1;Js.Center.Statistics.MtByProduct.Infostore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.HttpProxy({url:Js.Center.Statistics.StatisticsMtURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:["numrowasdf","vc2prodname","numall","numsuccess","numfailed","numnoreport","num_rate"],root:"data",id:"numlogid",totalProperty:"totalCount"}),sortInfo:{field:'vc2prodname',direction:'DESC'},baseParams:{start:0,limit:_pageSize,datcreattimestart:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),datcreattimeend:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),numsmstype:'',querydate:Js.Center.Statistics.MtByProduct.querydate,flag:'countbyproduct'}});Js.Center.Statistics.MtByProduct.Infostore.load({params:{datcreattimestart:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),datcreattimeend:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),numsmstype:'',querydate:Js.Center.Statistics.MtByProduct.querydate,flag:'countbyproduct'}});var sm=new Ext.grid.CheckboxSelectionModel({dataIndex:"numlogid"});var cm=new Ext.grid.ColumnModel([{header:"通道组名称",tooltip:"通道组名称",dataIndex:"vc2prodname",sortable:true},{header:"总数",tooltip:"总数",dataIndex:"numall",sortable:true},{header:"成功数",tooltip:"成功数",dataIndex:"numsuccess",sortable:true},{header:"失败数",tooltip:"失败数",dataIndex:"numfailed",sortable:true},{header:"未知数",tooltip:"未知数",dataIndex:"numnoreport",sortable:true},{header:"成功率",tooltip:"成功率",dataIndex:"num_rate",sortable:true}]);var userGroupGrid=new WXTL.Widgets.CommonGrid.GridPanel({anchor:'100% 100%',needPage:false,store:Js.Center.Statistics.MtByProduct.Infostore,needMenu:false,needRightMenu:false,sm:sm,cm:cm,tbar:new Ext.Toolbar({items:[{iconCls:'exporticon',text:"数据导出",handler:function(){exportData(Js.Center.Statistics.StatisticsMtURL,"flag=loadbyproduct&start=0&limit=-1&datcreattimestart="+Ext.get("mtbyproductdatcreattimestart").getValue()+"&datcreattimeend="+Ext.get("mtbyproductdatcreattimeend").getValue()+"&querydate="+Js.Center.Statistics.MtByProduct.querydate+"&numsmstype="+"")}}]})});var mtByProcStartDate=new Ext.form.DateField({fieldLabel:"开始时间",format:'Y-m-d',labelWidth:100,bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),fieldLabel:"开始时间",name:"datcreattimestart",id:"mtbyproductdatcreattimestart",validateOnBlur:false,validator:function(){var strat_time=Ext.get("mtbyproductdatcreattimestart").dom.value;var end_time=Ext.get("mtbyproductdatcreattimeend").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'});var mtByprocEndDate=new Ext.form.DateField({fieldLabel:"结束时间",labelWidth:100,format:'Y-m-d',bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),name:"datcreattimeend",id:"mtbyproductdatcreattimeend",validateOnBlur:false,validator:function(){var strat_time=Ext.get("mtbyproductdatcreattimestart").dom.value;var end_time=Ext.get("mtbyproductdatcreattimeend").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'});var selectPanel=new WXTL.Widgets.CommonPanel.QueryFormPanel({bodyStyle:"padding:10px 0 10px 15px",buttonAlign:"center",height:150,queryMethod:"Js.Center.Statistics.MtByProduct.queryGrid",items:[{layout:'column',items:[{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},items:[mtByProcStartDate]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},items:[mtByprocEndDate]}]}]});Js.Center.Statistics.MtByProduct.queryGrid=function(){if(selectPanel.getForm().isValid()){var datCreatTimeStart=Ext.get("mtbyproductdatcreattimestart").getValue();var datCreatTimeend=Ext.get("mtbyproductdatcreattimeend").getValue();var numSmsType="";var flag='countbyproduct';Js.Center.Statistics.MtByProduct.Infostore.baseParams={flag:flag,datcreattimestart:datCreatTimeStart,datcreattimeend:datCreatTimeend,numsmstype:numSmsType,querydate:Js.Center.Statistics.MtByProduct.querydate};Js.Center.Statistics.MtByProduct.Infostore.load({params:{start:0,limit:_pageSize}})}};Js.Center.Statistics.MtByProduct.MainPanel=new Ext.Panel({id:"Js.Center.Statistics.MtByProduct.MainPanel",frame:true,bodyBorder:false,border:false,autoScroll:true,layout:"anchor",defaults:{collapsible:true},items:[selectPanel,userGroupGrid]})};GridMain(node,Js.Center.Statistics.MtByProduct.MainPanel,"openroomiconinfo","Js.Center.Statistics.MtByProduct.Infostore")};Ext.namespace('Js.Center.Statistics.Mt');Js.Center.Statistics.StatisticsMtURL='URL/statistics/mt/statisticmtquery.ashx';