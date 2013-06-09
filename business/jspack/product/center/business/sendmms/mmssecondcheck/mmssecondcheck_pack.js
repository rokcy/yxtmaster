Ext.namespace("Js.Center.SendMMS.MMSSecendCheckinfo");Js.Center.SendMMS.MMSSecendCheckinfo.func=function(row){var json=newMMS('','',1,1);var pictureData=new Array();var j=0;for(var i=0;i<json.frame.length;i++){if(json.frame[i].vc2image.numtype=="1"&&json.frame[i].vc2image.vc2rescurl!=""){json.frame[i].vc2image["numframeorder"]=json.frame[i].numframeorder;pictureData[j]=json.frame[i].vc2image;j++}};var wordData=new Array();var wordIndex=0;for(var k=0;k<json.frame.length;k++){if(json.frame[k].vc2word.numtype=="3"&&json.frame[k].vc2word.vc2rescdesc1!=""){json.frame[k].vc2word["numframeorder"]=json.frame[k].numframeorder;wordData[wordIndex]=json.frame[k].vc2word;wordIndex++}};if(Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.SecendCheckPanel")==null){var previewMMSPanel=new WXTL.Widgets.CommonPanel.MMSpanel({id:"Js.Center.SendMMS.MMSSecendCheckinfo.PreviewMMSPanel",title:'预览：第1帧',contentJson:json,width:244,height:379,collapsible:true,frame:false});var westPanel=new Ext.Panel({width:254,height:400,region:'west',frame:true,items:[previewMMSPanel]});var pageSizePictureGrid=16;var pictureinfoStore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.MemoryProxy(pictureData),reader:new Ext.data.JsonReader({fields:["numrescid","numframeid","numframeorder","vc2rescurl","numrescspace"],id:"numrescid"})});pictureinfoStore.load();var smPictureGrid=new Ext.grid.CheckboxSelectionModel({dataIndex:"numrescid"});var cmPictureGrid=new Ext.grid.ColumnModel([{header:"资源ID",tooltip:"资源ID",dataIndex:"numrescid",hidden:true,sortable:true},{header:"帧序号",tooltip:"帧序号",dataIndex:"numframeorder",sortable:true,renderer:function(value){return parseFloat(value)+1}},{header:"图片",tooltip:"图片",dataIndex:"vc2rescurl",sortable:true,renderer:function(value,meta,record,rowIndex,colIndex,store){return"<div style='display:table-cell;height:100px;width:100px;vertical-align:middle;'><img id='img"+rowIndex+"' style='max-width:100px;max-height:100px;_width:100px;' src='"+value+"'></img></div>"}},{header:"大小",tooltip:"大小",dataIndex:"numrescspace",sortable:true,renderer:function(value){return Ext.util.Format.fileSize(value)}}]);var secendMMSPictureGrid=new WXTL.Widgets.CommonGrid.GridPanel({anchor:'95% 100%',title:"",pageSize:pageSizePictureGrid,store:pictureinfoStore,needMenu:false,needRightMenu:false,needPage:false,sm:smPictureGrid,cm:cmPictureGrid});var pageSizeWordGrid=16;var wordinfoStore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.MemoryProxy(wordData),reader:new Ext.data.JsonReader({fields:["numrescid","numframeid","numframeorder","vc2rescurl","numrescspace","vc2rescdesc1"],id:"numrescid"})});wordinfoStore.load();var smWordGrid=new Ext.grid.CheckboxSelectionModel({dataIndex:"numrescid"});var cmWordGrid=new Ext.grid.ColumnModel([{header:"资源ID",tooltip:"资源ID",dataIndex:"numrescid",hidden:true,sortable:true},{header:"帧序号",tooltip:"帧序号",dataIndex:"numframeorder",sortable:true,renderer:function(value){return parseFloat(value)+1}},{header:"文字信息",tooltip:"文字信息",dataIndex:"vc2rescdesc1",sortable:true},{header:"大小",tooltip:"大小",dataIndex:"numrescspace",sortable:true,renderer:function(value){return Ext.util.Format.fileSize(value)}}]);var secendMMSWordGrid=new WXTL.Widgets.CommonGrid.GridPanel({anchor:'95% 100%',title:"",pageSize:pageSizeWordGrid,store:wordinfoStore,needMenu:false,needRightMenu:false,needPage:false,sm:smWordGrid,cm:cmWordGrid});var resourcePanel=new Ext.form.FormPanel({bodyStyle:"padding:10px 0 10px 15px",title:'彩信发送二审',border:false,labelWidth:80,layout:'form',items:[{layout:"column",items:[{xtype:'hidden',name:'numcontentid',fieldLabel:'彩信内容ID',id:"Js.Center.SendMMS.MMSSecendCheckinfo.numcontentid"},{xtype:'hidden',name:'nummmsid',fieldLabel:'彩信ID',id:"Js.Center.SendMMS.MMSSecendCheckinfo.nummmsid"},{columnWidth:'.5',layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",items:[{xtype:"textfield",name:"vc2name",fieldLabel:"彩信标题",disabled:true,readOnly:'true'},{xtype:"textfield",name:"vc2desc",fieldLabel:"彩信名称",disabled:true,readOnly:'true'},{xtype:"textfield",name:"sendusername",fieldLabel:"发送人",disabled:true,readOnly:'true'}]},{columnWidth:'.5',layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",items:[{xtype:"hidden",name:"numstate",fieldLabel:"彩信状态",disabled:true,readOnly:'true'},{xtype:"textfield",name:"numstatename",fieldLabel:"彩信状态",disabled:true,value:'一审通过',readOnly:'true'},{xtype:"textfield",name:"datsend",fieldLabel:"发送时间",disabled:true,readOnly:'true'},{xtype:"textfield",name:"datendtime",fieldLabel:"结束时间",disabled:true,readOnly:'true'}]}]},{layout:'form',defaults:{anchor:"95%",msgTarget:"side"},buttonAlign:"center",items:[{bodyStyle:"padding:0 0 10px 0",html:"<div id='Js.Center.SendMMS.MMSSecendCheckinfo.MobileListInfo' ></div>"},{xtype:'tabpanel',layoutOnTabChange:true,plain:true,activeTab:0,height:200,items:[{title:'图片',autoScroll:true,layout:'form',bodyStyle:"padding:5px 0 5px 15px",items:[secendMMSPictureGrid]},{title:'文字',autoScroll:true,layout:'form',bodyStyle:"padding:5px 0 5px 15px",items:[secendMMSWordGrid]},{title:'发送对象',autoScroll:true,layout:'form',defaultType:'textfield',bodyStyle:"padding:10px 0 10px 15px",defaults:{anchor:"90%",msgTarget:"side"},items:[{xtype:"textarea",name:"vc2name",height:70,fieldLabel:"发送对象说明",readOnly:'true',disabled:true,id:"Js.Center.SendMMS.MMSSecendCheckinfo.SendListDesc"},{xtype:"textarea",name:"vc2name",height:80,fieldLabel:"发送对象示例",readOnly:'true',disabled:true,id:"Js.Center.SendMMS.MMSSecendCheckinfo.SendListExample"}]}]}]}]});var checkPanel=new Ext.FormPanel({bodyStyle:"padding:0px 0 5px 15px",defaults:{anchor:"95%",msgTarget:"side"},border:false,labelWidth:80,layout:'form',items:[{xtype:'hidden',name:'flag',value:'secondcheck'},{xtype:'hidden',name:'numcontentid',fieldLabel:'彩信内容ID'},{xtype:'hidden',name:'nummmsid',fieldLabel:'彩信ID'},{xtype:'combo',name:"numresultid",hiddenName:"checkresult",fieldLabel:"<font color=red>审核结果</font>",allowBlank:false,blankText:"审核结果不允许为空",readOnly:true,mode:"local",displayField:'show',valueField:'value',triggerAction:"all",emptyText:"-=请选择=-",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["审核通过","0"],["资源内容错误","1"],["发送对象号码错误","2"],["资源号码均错误","3"]]}),listeners:{"select":function(combo,record,indext){Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.checkcomments").dom.value=record.data.show}}},{xtype:"textarea",id:'Js.Center.SendMMS.MMSSecendCheckinfo.checkcomments',name:"checkcomments",fieldLabel:"<font color=red>审核意见</font>",allowBlank:false,blankText:"审核意见不允许为空",height:'50',width:'357',regex:WXTL.Common.regex.IllegalDiy,regexText:WXTL.Common.regexText.IllegalText,validator:function(){var word=Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.checkcomments").dom.value;if(isExistsHtmlLable(word)){return false}else{return true}},invalidText:'帧文字不能包含HTML标签'}]});var secendCheckSendTestPanel=new Ext.form.FormPanel({bodyStyle:"padding:0 0 5px 15px",border:false,labelWidth:80,layout:'form',items:[{layout:'column',items:[{columnWidth:.6,layout:'form',defaults:{anchor:"90%",msgTarget:"side"},items:[{xtype:"textfield",name:"vc2mobile",value:Js.Center.Common.userMobile,id:"Js.Center.SendMMS.MMSSecendCheckinfo.testmobile",fieldLabel:"测试手机号",allowBlank:false,blankText:"手机号码不允许为空",regex:WXTL.Common.regex.Mobile,regexText:"请输入正确的手机号码"}]},{columnWidth:.4,layout:'form',items:[{xtype:'button',text:'发送测试短信',handler:function(){if(Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.testmobile").getValue()==""){Ext.Msg.alert("温馨提示","请输入测试手机号码!")}else{Js.Center.SendMMS.MMSsendPreview.sendTestMMS(Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.testmobile").getValue(),json)}}}]}]}]});var secendCheckPanel=new Ext.Panel({frame:true,id:"Js.Center.SendMMS.MMSSecendCheckinfo.SecendCheckPanel",bodyBorder:false,border:false,autoScroll:false,layout:"anchor",defaults:{collapsible:false},region:'center',items:[resourcePanel,checkPanel]});var mainForm=resourcePanel.getForm();this.window=new WXTL.Widgets.CommonWindows.Window({title:"彩信发送二审",width:774,height:520,layout:'border',mainForm:mainForm,autoScroll:false,updateURL:Js.Center.SendMMS.MMScheckUpdateURL,displayStore:Js.Center.SendMMS.SecendCheckManage.DisplayStore,updateState:true,updateRecord:row,needButtons:false,items:[westPanel,secendCheckPanel],needLoadDataStore:true,loadDataStoreFunc:function(){Js.Center.SendMMS.MMSSecendCheckinfo.window.items.items[1].items.items[0].items.items[1].items.items[1].setActiveTab(0);var jsonCheckMMS=eval(doSynRequest(Js.Center.SendMMS.MMSQueryDescURL+"?flag=selecthismms&nummmsseqid="+Js.Center.SendMMS.MMSSecendCheckinfo.window.updateRecord.get("nummmsid")));previewMMSPanel.contentJson=jsonCheckMMS;previewMMSPanel.currFrame=0;previewMMSPanel.refreshAll();var jsonSendObject=eval(doSynRequest(Js.Center.SendMMS.MMScheckQueryURL+"?flag=selectsendobject&mmscontentid="+Js.Center.SendMMS.MMSSecendCheckinfo.window.updateRecord.get("numcontentid")));resourcePanel.items.items[1].items.items[1].items.items[2].items.items[0].setValue(jsonSendObject.data[0].numsendtypename);resourcePanel.items.items[1].items.items[1].items.items[2].items.items[1].setValue(jsonSendObject.data[0].vc2typelistname);var pictureData=new Array();var j=0;for(var i=0;i<jsonCheckMMS.frame.length;i++){if(jsonCheckMMS.frame[i].vc2image.numtype=="1"&&jsonCheckMMS.frame[i].vc2image.vc2rescurl!=""){jsonCheckMMS.frame[i].vc2image["numframeorder"]=jsonCheckMMS.frame[i].numframeorder;pictureData[j]=jsonCheckMMS.frame[i].vc2image;j++}};secendMMSPictureGrid.store.proxy=new Ext.data.MemoryProxy(pictureData);secendMMSPictureGrid.store.load();var wordData=new Array();var wordIndex=0;for(var k=0;k<jsonCheckMMS.frame.length;k++){if(jsonCheckMMS.frame[k].vc2word.numtype=="3"&&jsonCheckMMS.frame[k].vc2word.vc2rescdesc1!=""){jsonCheckMMS.frame[k].vc2word["numframeorder"]=jsonCheckMMS.frame[k].numframeorder;wordData[wordIndex]=jsonCheckMMS.frame[k].vc2word;wordIndex++}};secendMMSWordGrid.store.proxy=new Ext.data.MemoryProxy(wordData);secendMMSWordGrid.store.load();Js.Center.SendMMS.MMSSecendCheckinfo.window.items.items[1].items.items[1].getForm().reset();var record=Js.Center.SendMMS.MMSSecendCheckinfo.window.updateRecord;var sucRate;var mobileTotalInfo="总数<font color='green'>"+record.get("numtotal")+"个</font>";var mobileSucInfo="合法数<font color='green'>"+record.get("numsuccess")+"个</font>";var mobileFailInfo="非法数<font color='green'>"+record.get("numfailed")+"个</font>";if(record.get("numtotal")!=""&&record.get("numtotal")!=0){sucRate=record.get("numsuccess")/record.get("numtotal")*10000/100}else{sucRate=0}if(sucRate.toString().length>5){sucRate=sucRate.toString().substring(0,5)}if(record.get("numsendtype")!=2){if(record.get("numtotal")>0){mobileTotalInfo="总数<a href='#' onclick='exportData(\""+Js.Center.SendMMS.MMScheckQueryURL+"\",\"id="+record.get("numcontentid")+"&flag=selectexport&successtype=-1\")'><font color='green'>"+record.get("numtotal")+"个</font></a> "}if(record.get("numsuccess")>0){mobileSucInfo="合法数<a href='#' onclick='exportData(\""+Js.Center.SendMMS.MMScheckQueryURL+"\",\"id="+record.get("numcontentid")+"&flag=selectexport&successtype=1\")'><font color='green'>"+record.get("numsuccess")+"个</font></a> "}if(record.get("numfailed")>0){mobileFailInfo="非法数<a href='#' onclick='exportData(\""+Js.Center.SendMMS.MMScheckQueryURL+"\",\"id="+record.get("numcontentid")+"&flag=selectexport&successtype=0\")'><font color='green'>"+record.get("numfailed")+"个</font></a> "}}Ext.get("Js.Center.SendMMS.MMSSecendCheckinfo.MobileListInfo").dom.innerHTML="号码分布情况："+mobileTotalInfo+"，"+mobileSucInfo+"，"+mobileFailInfo+"，"+"合法率<font color='red'>"+sucRate+"%</font>"},buttons:[new Ext.Button({text:'提交审核',minWidth:70,qtip:"提交审核",handler:function(){if(checkPanel.getForm().isValid()){Ext.MessageBox.show({msg:'正在审核，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},30000);var params={flag:checkPanel.items.items[0].getValue(),numcontentid:Js.Center.SendMMS.MMSSecendCheckinfo.window.updateRecord.get("numcontentid"),nummmsid:Js.Center.SendMMS.MMSSecendCheckinfo.window.updateRecord.get("nummmsid"),checkresult:checkPanel.items.items[3].getValue(),checkcomments:checkPanel.items.items[4].getValue()};Js.Center.SendMMS.MMSSecendCheckinfo.window.mainFormSubmitFunc('',params,Js.Center.SendMMS.MMScheckUpdateURL);}}}),new Ext.Button({text:'关闭',qtip:"关闭",minWidth:70,handler:function(){Js.Center.SendMMS.MMSSecendCheckinfo.window.hide()}})],listeners:{"hide":function(){if(previewMMSPanel.bottomToolbar.items.items[0].text!="播放"){previewMMS(previewMMSPanel.contentJson.frame.length);window.clearInterval(playTime)}}}});}};Ext.namespace("Js.Center.SendMMS.MMSsendPreview");Js.Center.SendMMS.MMSsendPreview.func=function(urlParms,MMSID,contentID,sendType){var sendMMSType="Js.Center.SendMMS.MMSsendUpdate.sendtesthis";var productCombox=new Ext.form.ComboBox({xtype:"combo",name:"numproductid",hiddenName:"numproductid",id:'Js.Center.SendMMS.MMSsendPreview.numproductid',emptyText:"-=请选择=-",allowBlank:false,balakText:'通道组不能为空！',fieldLabel:"<font color=red>选择通道组</font>",readOnly:true,mode:"local",displayField:"vc2name",valueField:"numprodid",triggerAction:"all",store:Js.Center.Common.ProductStore});var json=eval(doSynRequest(Js.Center.SendMMS.MMSQueryDescURL+"?flag="+urlParms+"&nummmsseqid="+MMSID));if(sendType!=null){sendMMSType=sendType;}var previewMMSPanel=new WXTL.Widgets.CommonPanel.MMSpanel({id:"Js.Center.SendMMS.MMSsendPreview.PreviewMMSPanel",title:'预览：第1帧',region:'west',contentJson:json,width:245,height:374,collapsible:false,margins:'3 0 0 3',cmargins:'3 3 3 3',frame:false});var mainPanel=new Ext.form.FormPanel({id:"Js.Center.SendMMS.MMSsendPreview.MainPanel",bodyStyle:"padding:0px 0 0px 15px",defaults:{anchor:"90%",msgTarget:"side"},border:false,labelWidth:80,layout:'form',frame:true,items:[{xtype:"hidden",name:"flag",value:"sendtestmms"},{xtype:"hidden",name:"nummmsid",fieldLabel:"彩信编号",value:MMSID},productCombox,{xtype:"textarea",name:"mobilelist",id:'Js.Center.SendMMS.MMSsendPreview.MobileList',fieldLabel:"<font color=red>测试号码</font>",value:Js.Center.Common.userMobile,allowBlank:false,blankText:"测试号码不允许为空",validator:function(value){return checkMobileListMMSsend(value,15,json.nummmstype)},maxLength:200,maxLengthText:"请将输入内容控制在15行以内！"},{xtype:'hidden',fieldLabel:"发送方式 1、栏目 2、客户组 3、持仓股票 4、文件  5、手机号码",name:'numsendtype',value:'Js.Center.SendMMS.MMSSend.sendbylist'}]});var mainForm=mainPanel.getForm();Js.Center.SendMMS.MMSsendPreview.PreviewWindow=new WXTL.Widgets.CommonWindows.Window({title:"彩信预览发送",width:259,height:535,layout:'form',mainForm:mainForm,autoScroll:false,collapsible:false,closeAction:'close',updateURL:Js.Center.SendMMS.MMScheckUpdateURL,needLoadDataStore:true,loadDataStoreFunc:function(){Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.MobileList").setValue(Js.Center.Common.userMobile);Js.Center.Common.ProductStore.reload({params:{vc2servicetype:'2'}})},needButtons:false,items:[previewMMSPanel,mainPanel],listeners:{"close":function(){if(previewMMSPanel.bottomToolbar.items.items[0].text!="播放"){previewMMS(json.frame.length);window.clearInterval(playTime)}}},buttons:[new Ext.Button({text:'发送测试',qtip:"发送测试",minWidth:70,handler:function(){if(checkMMS(json)){if(mainForm.isValid()){Ext.MessageBox.show({msg:'正在审核，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},30000);var url=Js.Center.SendMMS.MMSContentUpdateURL;var params={numcontentid:contentID,datstarttime:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d h:m:s'),datendtime:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),+1),'Y-m-d h:m:s'),numsendtype:sendMMSType,vc2contentJson:Ext.encode(json),mobilelist:Ext.get("Js.Center.SendMMS.MMSsendPreview.MobileList").getValue(),numproductid:Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.numproductid").getValue()};doAjax(url,params);}}}}),new Ext.Button({text:'关闭',qtip:"关闭",minWidth:70,handler:function(){Js.Center.SendMMS.MMSsendPreview.PreviewWindow.close()}})]});Js.Center.SendMMS.MMSsendPreview.PreviewWindow.show()};Js.Center.SendMMS.MMSsendPreview.sendTestMMS=function(testMobile,jsonContent){if(checkMMS(jsonContent)){Ext.MessageBox.show({msg:'正在发送，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},30000);var url=Js.Center.SendMMS.MMSContentUpdateURL;var params={numcontentid:0,datstarttime:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d h:m:s'),datendtime:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),+1),'Y-m-d h:m:s'),numsendtype:sendMMSType,vc2contentJson:Ext.encode(jsonContent),mobilelist:testMobile,numproductid:Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.numproductid").getValue()};doAjax(url,params)}};Ext.namespace('Js.Center.SendMMS.SecendCheckManage');Js.Center.SendMMS.SecendCheckManage.info=function(node){Js.Center.Common.DepartUserStore.reload();if(Ext.get("Js.Center.SendMMS.SecendCheckManage.MainPanel")==null){var _pageSize=12;Js.Center.SendMMS.SecendCheckManage.DisplayStore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.HttpProxy({url:Js.Center.SendMMS.MMScheckQueryURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:["numcontentid","nummmsid","datreject","numcheck1id","datcheck1","numcheck2id","datcheck2","numstate","datsend","datendtime","numchecktype","vc2name","numuserid","numcreattime","datsendsubmit","nummmsstate","nummmstype","vc2desc","vc2username","numsendtype","numsenduserid","sendusername","numtotal","numsuccess","numfailed","numprenum"],root:"data",id:"numcontentid",totalProperty:"totalCount"}),sortInfo:{field:'datcheck1',direction:'DESC'},baseParams:{flag:'selectsecendbykey',datstart:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),datend:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),mmsname:'',creatorid:'',firstcheckid:''}});Js.Center.SendMMS.SecendCheckManage.DisplayStore.load({params:{start:0,limit:_pageSize}});var sm=new Ext.grid.CheckboxSelectionModel({dataIndex:"numcontentid"});var cm=new Ext.grid.ColumnModel([{header:"彩信标题",tooltip:"彩信标题",dataIndex:"vc2name",sortable:true},{header:"彩信名称",tooltip:"彩信名称",dataIndex:"vc2desc",sortable:true},{header:"彩信类型",tooltip:"彩信类型",dataIndex:"nummmstype",sortable:true,renderer:function(value){if(value==1){return"普通彩信"}else if(value==2){return"个性化彩信"}}},{header:"发送类型",tooltip:"发送类型",dataIndex:"numsendtype",sortable:true,renderer:function(value){if(value==1){return"按栏目发送"}if(value==2){return"按客户组发送"}if(value==3){return"按列表发送"}if(value==4){return"按文件发送"}if(value==5){return"个性化彩信发送"}}},{header:"彩信状态",tooltip:"彩信状态",dataIndex:"numstate",sortable:true,renderer:function(value){if(value==1){return"一审通过"}}},{header:"创建人",tooltip:"创建人",dataIndex:"vc2username",sortable:true},{header:"创建时间",tooltip:"创建时间",dataIndex:"numcreattime",sortable:true},{header:"发送提交时间",tooltip:"发送提交时间",dataIndex:"datsendsubmit",sortable:true},{header:"一审时间",tooltip:"一审时间",dataIndex:"datcheck1",sortable:true},{header:"预览测试",tooltip:"预览测试",dataIndex:"nummmsid",width:60,renderer:function(value,meta,record,rowIndex,colIndex,store){if(record.get('nummmstype')==2){return"<a href='#' onclick='Js.Center.SendMMS.MMSsendPreview.func(\"selecthismms\","+value+",\"0\",\"Js.Center.SendMMS.MMSsendUpdate.sendtesthisdiy\")'>测试预览</a>"}return"<a href='#' onclick='Js.Center.SendMMS.MMSsendPreview.func(\"selecthismms\","+value+",\"0\",\"Js.Center.SendMMS.MMSsendUpdate.sendtesthis\")'>测试预览</a>"}},{header:"<font color='green'>合法</font>/<font color='red'>非法</font>",tooltip:"合法/非法",dataIndex:"numcontentid",width:100,renderer:function(value,meta,record,rowIndex,colIndex,store){var row=Js.Center.SendMMS.SecendCheckManage.DisplayStore.getAt(rowIndex);var suc="<font color='green'>"+row.get("numsuccess")+"</font>";var fail="/<font color='red'>"+row.get("numfailed")+"</font>";if(row.get("numsendtype")!=2){suc=row.get("numsuccess")>0?"<a href='#' onclick='exportData(\""+Js.Center.SendMMS.MMScheckQueryURL+"\",\"id="+value+"&flag=selectexport&successtype=1\")'><font color='green'>"+row.get("numsuccess")+"</font></a>":"<font color='green'>"+row.get("numsuccess")+"</font>";fail=row.get("numfailed")>0?"/<a href='#' onclick='exportData(\""+Js.Center.SendMMS.MMScheckQueryURL+"\",\"id="+value+"&flag=selectexport&successtype=0\")'><font color='red'>"+row.get("numfailed")+"</font></a>":"/<font color='red'>"+row.get("numfailed")+"</font>"}else{suc="<font color='green'>"+row.get("numtotal")+"</font>"}return suc+fail}}]);var secendCheckMMSGrid=new WXTL.Widgets.CommonGrid.GridPanel({title:"彩信二审列表",id:"Js.Center.SendMMS.SecendCheckManage.SecendCheckManageGrid",anchor:'100% 100%',pageSize:_pageSize,store:Js.Center.SendMMS.SecendCheckManage.DisplayStore,needMenu:false,needRightMenu:false,updateMethod:"Js.Center.SendMMS.MMSSecendCheckinfo",sm:sm,cm:cm,tbar:new Ext.Toolbar({items:[{iconCls:'secondcheckicon',text:"彩信发送二审",handler:function(){secendCheckMMSGrid.doEdit()}}]})});var selectPanel=new WXTL.Widgets.CommonPanel.QueryFormPanel({height:160,layout:'fit',queryMethod:"Js.Center.SendMMS.SecendCheckManage.queryGrid",items:[{layout:'column',items:[{xtype:"hidden",name:"flag",value:"insert"},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"datefield",fieldLabel:"开始时间",format:'Y-m-d',labelWidth:100,bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),fieldLabel:"开始时间",name:"numcreattime",id:"Js.Center.SendMMS.SecendCheckManage.DtaStart",validateOnBlur:false,validator:function(){var strat_time=Ext.get("Js.Center.SendMMS.SecendCheckManage.DtaStart").dom.value;var end_time=Ext.get("Js.Center.SendMMS.SecendCheckManage.DatEnd").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'},{xtype:"textfield",name:"vc2name",fieldLabel:"彩信名称",id:'Js.Center.SendMMS.SecendCheckManage.MMSName',regex:WXTL.Common.regex.IllegalDiy,regexText:WXTL.Common.regexText.IllegalText,maxLength:20,maxLengthText:'长度应小于等于20'},{xtype:"xComboBox",name:"numuserid",fieldLabel:"一审审核人",emptyText:'-=请选择=-',hiddenName:"firstchecknumuserid",readOnly:true,mode:"local",displayField:"vc2username",valueField:"numuserid",triggerAction:"all",store:Js.Center.Common.DepartUserStore}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"datefield",fieldLabel:"结束时间",labelWidth:100,format:'Y-m-d',bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),name:"datend",id:"Js.Center.SendMMS.SecendCheckManage.DatEnd",validateOnBlur:false,validator:function(){var strat_time=Ext.get("Js.Center.SendMMS.SecendCheckManage.DtaStart").dom.value;var end_time=Ext.get("Js.Center.SendMMS.SecendCheckManage.DatEnd").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'},{xtype:"xComboBox",name:"numuserid",fieldLabel:"创建人",emptyText:'-=请选择=-',hiddenName:"secendnumuserid",readOnly:true,mode:"local",displayField:"vc2username",valueField:"numuserid",triggerAction:"all",store:Js.Center.Common.DepartUserStore}]}]}]});Js.Center.SendMMS.SecendCheckManage.queryGrid=function(){if(selectPanel.getForm().isValid()){var datStart=Ext.get("Js.Center.SendMMS.SecendCheckManage.DtaStart").getValue();var datEnd=Ext.get("Js.Center.SendMMS.SecendCheckManage.DatEnd").getValue();var mmsName=Ext.get("Js.Center.SendMMS.SecendCheckManage.MMSName").getValue();var _creatorid=Ext.get("secendnumuserid").getValue();var _firstcheckid=Ext.get("firstchecknumuserid").getValue();var flag='selectsecendbykey';Js.Center.SendMMS.SecendCheckManage.DisplayStore.baseParams={datstart:datStart,datend:datEnd,mmsname:mmsName,creatorid:_creatorid,firstcheckid:_firstcheckid,flag:flag};Js.Center.SendMMS.SecendCheckManage.DisplayStore.reload({params:{start:0,limit:_pageSize}})}};Js.Center.SendMMS.SecendCheckManage.MainPanel=new Ext.Panel({id:"Js.Center.SendMMS.SecendCheckManage.MainPanel",frame:true,bodyBorder:false,border:false,autoScroll:true,layout:"anchor",defaults:{collapsible:true},items:[selectPanel,secendCheckMMSGrid]})};GridMain(node,Js.Center.SendMMS.SecendCheckManage.MainPanel,"openroomiconinfo","Js.Center.SendMMS.SecendCheckManage.DisplayStore")};Ext.namespace('Js.Center.SendMMS');Js.Center.SendMMS.mmscontentURL='URL/sendMMS/send/mmscontentquery.ashx';Js.Center.SendMMS.mmscontentaddURL='URL/sendMMS/send/mmscontentadd.ashx';Js.Center.SendMMS.MMSContentUpdateURL='URL/sendMMS/send/mmscontentupdate.ashx';Js.Center.SendMMS.MMSFrameUpdateURL='URL/sendMMS/MMS/mmsframeupdate.ashx';Js.Center.SendMMS.MMSContentDeleteURL='URL/sendMMS/send/mmscontentdelete.ashx';Js.Center.SendMMS.smscontentaddtestURL='URL/sendMMS/send/smscontentupdate.ashx';Js.Center.SendMMS.MMSConfigInfo="URL/sendMMS/MMS/mmsconfiginfo.ashx";Ext.namespace('Js.Center.SendMMS');Js.Center.SendMMS.MMSQueryListURL="URL/sendMMS/MMS/mmsquerylist.ashx";Js.Center.SendMMS.MMSQueryDescURL='URL/sendMMS/MMS/mmsquerydesc.ashx';Js.Center.SendMMS.MMSAddURL='URL/sendMMS/MMS/mmsadd.ashx';Js.Center.SendMMS.GetRandomMMSIDURL='URL/sendMMS/MMS/getrandommmsid.ashx';Js.Center.SendMMS.GetRandomMMSIDCopyURL='URL/sendMMS/MMS/getrandommmsidbycopy.ashx';Js.Center.SendMMS.MMSUpdateURL='URL/sendMMS/MMS/mmsupdate.ashx';Js.Center.SendMMS.MMSSaveURL='URL/sendMMS/MMS/mmssave.ashx';Js.Center.SendMMS.MMSDeleteURL='URL/sendMMS/MMS/mmsdelete.ashx';Js.Center.SendMMS.MMSFrameUpdateURL='URL/sendMMS/MMS/mmsframeupdate.ashx';Js.Center.SendMMS.MMSFrameAddURL='URL/sendMMS/MMS/mmsframeadd.ashx';Js.Center.SendMMS.MMSFrameDeleteURL='URL/sendMMS/MMS/mmsframedelete.ashx';Js.Center.SendMMS.MMSUpLoadingResourcesURL="URL/SendMMS/MMS/MMSResourceUp.ashx";Js.Center.SendMMS.MMSConfigInfo="URL/sendMMS/MMS/mmsconfiginfo.ashx";Ext.namespace("Js.Center.SendMMS");Js.Center.SendMMS.MMScheckQueryURL='URL/sendMMS/check/MMScheckquery.ashx';Js.Center.SendMMS.MMScheckUpdateURL='URL/sendMMS/check/MMScheckUpdate.ashx';