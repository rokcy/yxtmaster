Ext.namespace("Js.Center.SendMMS.MMSsendPreview");Js.Center.SendMMS.MMSsendPreview.func=function(urlParms,MMSID,contentID,sendType){var sendMMSType="Js.Center.SendMMS.MMSsendUpdate.sendtesthis";var productCombox=new Ext.form.ComboBox({xtype:"combo",name:"numproductid",hiddenName:"numproductid",id:'Js.Center.SendMMS.MMSsendPreview.numproductid',emptyText:"-=请选择=-",allowBlank:false,balakText:'通道组不能为空！',fieldLabel:"<font color=red>选择通道组</font>",readOnly:true,mode:"local",displayField:"vc2name",valueField:"numprodid",triggerAction:"all",store:Js.Center.Common.ProductStore});var json=eval(doSynRequest(Js.Center.SendMMS.MMSQueryDescURL+"?flag="+urlParms+"&nummmsseqid="+MMSID));if(sendType!=null){sendMMSType=sendType;}var previewMMSPanel=new WXTL.Widgets.CommonPanel.MMSpanel({id:"Js.Center.SendMMS.MMSsendPreview.PreviewMMSPanel",title:'预览：第1帧',region:'west',contentJson:json,width:245,height:374,collapsible:false,margins:'3 0 0 3',cmargins:'3 3 3 3',frame:false});var mainPanel=new Ext.form.FormPanel({id:"Js.Center.SendMMS.MMSsendPreview.MainPanel",bodyStyle:"padding:0px 0 0px 15px",defaults:{anchor:"90%",msgTarget:"side"},border:false,labelWidth:80,layout:'form',frame:true,items:[{xtype:"hidden",name:"flag",value:"sendtestmms"},{xtype:"hidden",name:"nummmsid",fieldLabel:"彩信编号",value:MMSID},productCombox,{xtype:"textarea",name:"mobilelist",id:'Js.Center.SendMMS.MMSsendPreview.MobileList',fieldLabel:"<font color=red>测试号码</font>",value:Js.Center.Common.userMobile,allowBlank:false,blankText:"测试号码不允许为空",validator:function(value){return checkMobileListMMSsend(value,15,json.nummmstype)},maxLength:200,maxLengthText:"请将输入内容控制在15行以内！"},{xtype:'hidden',fieldLabel:"发送方式 1、栏目 2、客户组 3、持仓股票 4、文件  5、手机号码",name:'numsendtype',value:'Js.Center.SendMMS.MMSSend.sendbylist'}]});var mainForm=mainPanel.getForm();Js.Center.SendMMS.MMSsendPreview.PreviewWindow=new WXTL.Widgets.CommonWindows.Window({title:"彩信预览发送",width:259,height:535,layout:'form',mainForm:mainForm,autoScroll:false,collapsible:false,closeAction:'close',updateURL:Js.Center.SendMMS.MMScheckUpdateURL,needLoadDataStore:true,loadDataStoreFunc:function(){Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.MobileList").setValue(Js.Center.Common.userMobile);Js.Center.Common.ProductStore.reload({params:{vc2servicetype:'2'}})},needButtons:false,items:[previewMMSPanel,mainPanel],listeners:{"close":function(){if(previewMMSPanel.bottomToolbar.items.items[0].text!="播放"){previewMMS(json.frame.length);window.clearInterval(playTime)}}},buttons:[new Ext.Button({text:'发送测试',qtip:"发送测试",minWidth:70,handler:function(){if(checkMMS(json)){if(mainForm.isValid()){Ext.MessageBox.show({msg:'正在审核，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},30000);var url=Js.Center.SendMMS.YXTMMSContentUpdateURL;var params={numcontentid:contentID,datstarttime:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d h:m:s'),datendtime:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),+1),'Y-m-d h:m:s'),numsendtype:sendMMSType,vc2contentJson:Ext.encode(json),mobilelist:Ext.get("Js.Center.SendMMS.MMSsendPreview.MobileList").getValue(),numproductid:Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.numproductid").getValue()};doAjax(url,params);}}}}),new Ext.Button({text:'关闭',qtip:"关闭",minWidth:70,handler:function(){Js.Center.SendMMS.MMSsendPreview.PreviewWindow.close()}})]});Js.Center.SendMMS.MMSsendPreview.PreviewWindow.show()};Js.Center.SendMMS.MMSsendPreview.sendTestMMS=function(testMobile,jsonContent){if(checkMMS(jsonContent)){Ext.MessageBox.show({msg:'正在发送，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},30000);var url=Js.Center.SendMMS.MMSContentUpdateURL;var params={numcontentid:0,datstarttime:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d h:m:s'),datendtime:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),+1),'Y-m-d h:m:s'),numsendtype:sendMMSType,vc2contentJson:Ext.encode(jsonContent),mobilelist:testMobile,numproductid:Ext.getCmp("Js.Center.SendMMS.MMSsendPreview.numproductid").getValue()};doAjax(url,params)}};Ext.namespace('Js.Center.SendMMS');Js.Center.SendMMS.MMSContentUpdateURL = 'URL/sendMMS/send/mmscontentupdate.ashx';Js.Center.SendMMS.YXTMMSContentUpdateURL = 'URL/sendMMS/send/YXTmmscontentupdate.ashx';
