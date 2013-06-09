﻿Ext.namespace("Js.Center.SendMMS.SendTest");
Js.Center.SendMMS.SendTest.func = function(jsonContent){
	if (Ext.get("Js.Center.SendMMS.SendTest.TestPanel") == null) {
		//===================================================定义发送测试Panel
		var testPanel = new Ext.form.FormPanel({
			id: "Js.Center.SendMMS.SendTest.TestPanel",
			frame: true,
			defaults: {
				anchor: "90%",
				msgTarget: "side"
			},
			border: false,
			labelWidth: 60,
			buttonAlign: 'center',
			bodyStyle: "padding:3px 0 0px 15px",
			layout: 'form',
			items: [{
				xtype: "textfield",
				name: "mobilelist",
				fieldLabel: "测试号码",
				id:'Js.Center.SendMMS.SendTest.MobileList',
				allowBlank: false,
				blankText: '测试号码不能为空',
				value: Js.Center.Common.userMobile,
				regex: WXTL.Common.regex.Mobile,
				regexText: "请输入正确的手机号码"
			}]
		});
		
		//============================================================================定义窗体
		var mainPanel = testPanel.getForm();
		Js.Center.SendMMS.SendTest.SendTestMMSWin = new WXTL.Widgets.CommonWindows.Window({
			title: "发送测试彩信",
			width: 300,
			height: 115,
			layout: 'form',
			displayStore: '',
			mainPanel: mainPanel,
			needButtons: false,
			updateState: false,
			items: [testPanel],
			buttons: [new Ext.Button({
				text: '发送测试',
				qtip: "发送测试",
				handler: function(){
					//if (checkMMS(json)) {
					if (mainPanel.isValid()) {
						Ext.MessageBox.show({
							msg: '正在审核，请稍等...',
							progressText: 'Saving...',
							width: 300,
							wait: true,
							icon: 'download',
							animEl: 'saving'
						});
						setTimeout(function(){
							Ext.MessageBox.hide();
						}, 30000);
						var url = Js.Center.SendMMS.MMSContentUpdateURL;
						var params = {
							numcontentid: 0,
							datstarttime: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d h:m:s'),
							datendtime: Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(), +1/*减3天*/), 'Y-m-d h:m:s'),
							numsendtype: 'Js.Center.SendMMS.MMSsendUpdate.sendbylist',
							vc2contentJson: Ext.encode(jsonContent),
							mobilelist: Ext.get("Js.Center.SendMMS.SendTest.MobileList").getValue()
						};
						doAjax(url, params);
						Js.Center.SendMMS.SendTest.SendTestMMSWin.close();
					}
					
				//}
				}
			}), new Ext.Button({
				text: '关闭',
				qtip: "关闭",
				minWidth: 70,
				handler: function(){
					Js.Center.SendMMS.SendTest.SendTestMMSWin.close();
				}
			})]
		});
	}
	Js.Center.SendMMS.SendTest.SendTestMMSWin.show();
};
