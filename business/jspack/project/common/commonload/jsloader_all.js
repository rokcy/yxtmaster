﻿/**
 * @author zhaoyanhua
 */
Ext.namespace('js.loadjs');
/****************************************************************************************权限管理*/
//===========功能权限管理
js.loadjs.loadpurviewrightinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/popedom/right/right_pack.js";
	var loader = new WXTL.Common.JsLoader('Js.Center.Purview.Right.info',node);
    loader.load(arr);
};

//===========部门管理
js.loadjs.loadpopedomdepartmentsinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/popedom/department/department_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Popedom.Department.info', node);
    loader.load(arr);
};

//===========用户管理
js.loadjs.loadpopedomuserinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/popedom/user/user_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Popedom.User.info', node);
    loader.load(arr);
};

//===========角色管理
js.loadjs.loadpopedomroleinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/popedom/role/role_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Popedom.Role.info', node);
    loader.load(arr);
};

//===========EC角色管理
js.loadjs.loadpopedomecroleinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/popedom/ecrole/ecrole_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Popedom.ECRoleInfo.info', node);
    loader.load(arr);
};

/****************************************************************************************客户管理*/
//===========客户业务查询
js.loadjs.loadcustomerbusinessquery = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/customerbusiness/customerbusiness_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Customer.CustomerBusiness.CustomerBusinessInfo', node);
    loader.load(arr);
};

//===========客户组管理
js.loadjs.loadbusinessusergroupinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/usergroup/usergroup_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.UserGroup.userGroupInfo', node);
    loader.load(arr);
};

//=======操作记录查询
js.loadjs.loadcustomeroperatorloginfo = function(node){
	var arr = new Array();
    arr[0] = "jspack/project/center/business/customeroperatorlog/customeroperatorlog_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Customer.CustomerOperatorLog.OperatorLogInfo', node);
    loader.load(arr);
}

/****************************************************************************************短信管理*/
//===========上行查询
js.loadjs.loadsendSMSdepartmoinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/moquery/moquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.DepartMoQuery.departmoinfo', node);
    loader.load(arr);
};

//===========上行查询2
js.loadjs.loadsendSMSselfdepartmoinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/moquery/moquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.SelfDepartMoQuery.departmoinfo', node);
    loader.load(arr);
};
//===========下行查询
js.loadjs.loadsendSMSmtqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/sendsms/mtquery/mtquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.MTQuery.MTQueryinfo', node);
    loader.load(arr);
};

//===========待发数据查询
js.loadjs.loadsendSMStaskqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/sendsms/sendtask/sendtask_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.SendTaskQuery.Queryinfo', node);
    loader.load(arr);
};

//===========发送任务查询
js.loadjs.loadsendSMSdepartsendqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/sendquery/sendquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.DepartSendQuery.departSendQueryinfo', node);
    loader.load(arr);
};

//===========短信发送
js.loadjs.loadsendSMSsend = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/send/send_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.Send.info', node);
    loader.load(arr);
};

//js.loadjs.loadsendSMScolumnsend = function(node){
//    var arr = new Array();
//    arr[0] = "jspack/product/center/business/sendsms/send/smscolumnsend.js";
//    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.ColumnSend.Info', node);
//    loader.load(arr);
//    
//};
//===========短信一审
js.loadjs.loadsendSMSfirstcheck = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/smsfirstcheck/smsfirstcheck_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.FirstCheck.info', node);
    loader.load(arr);
};

//===========短信二审
js.loadjs.loadsendSMSsecondcheck = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/smssecondcheck/smssecondcheck_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.SecondCheck.info', node);
    loader.load(arr);
};

//===========内部短信二审
js.loadjs.loadsendSMSintracompanycheck = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendsms/intracompanycheck/intracompanycheck_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendSMS.intracompanycheck.info', node);
    loader.load(arr);
};

/****************************************************************************************短信统计*/
//===========客户统计
js.loadjs.loadstatisticscustombydepartment = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/custom/custom_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.CustomBydePartment.info',node);
    loader.load(arr);
};

//===========下行统计
js.loadjs.loadstatisticsmtbydepartment = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/mt/mtbydepartment_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MtByDepartment.info',node);
    loader.load(arr);
};

js.loadjs.loadstatisticsmtbyproduct = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/mt/mtbyproduct_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MtByProduct.info',node);
    loader.load(arr);
};

js.loadjs.loadstatisticsmtbycustomer = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/mt/mtbycustomer_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MtByCustomer.info',node);
    loader.load(arr);
};

//===========白名单统计
js.loadjs.loadstatisticswhitelistbysvc = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/whitelist/statiwhitelistbysvc.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.WhitelistBysvc.info',node);
    loader.load(arr);
};

//===========白名单统计按照省份
js.loadjs.loadstatisticswhitelistbypvid = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/pvwhitelist/statiwhitelistbysvc.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.WhitelistBysvc.info',node);
    loader.load(arr);
};

//===========发送量按客户组统计
js.loadjs.loadstatisticsmtbyusergroup = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/mt/mtbyusergroup_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MtByUserGroup.info',node);
    loader.load(arr);
};

js.loadjs.loadchannelstatisticsday = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/statistics/smsChannel/smsChannel_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.ChannelStatisticsDay.info',node);
    loader.load(arr);
};
js.loadjs.loadchannelstatisticsmonth = function(node){
  var arr = new Array();
  arr[0] = "jspack/product/center/business/statistics/smsChannel/smsChannel_pack.js";
  var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.ChannelStatisticsMonth.info',node);
  loader.load(arr);
};
js.loadjs.loadchannelstatisticsyear = function(node){
  var arr = new Array();
  arr[0] = "jspack/product/center/business/statistics/smsChannel/smsChannel_pack.js";
  var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.ChannelStatisticsYear.info',node);
  loader.load(arr);
};
/****************************************************************************************彩信管理*/
//===========彩信管理
js.loadjs.loadsendMMSinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendmms/mms/mms_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.MMS.MMSinfo', node);
    loader.load(arr);
};

//===========彩信发送
js.loadjs.loadsendMMSsend = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendmms/send/send_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.Send.info', node);
    loader.load(arr);
    
};

//===========彩信下行查询
js.loadjs.loadsendMMSMMSmtqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/sendmms/mtquery/mtquery_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.MMSmtqueryinfo.info', node);
    loader.load(arr);
    
    
};
//===========彩信上行查询
js.loadjs.loadsendMMSMMSdepartmoinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendmms/moquery/moquery_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.MMSdepartmoinfo.departmoinfo', node);
    loader.load(arr);
};

//===========彩信发送查询
js.loadjs.loadsendMMSsendqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/sendmms/sendquery/sendquery_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.MMSSendQuery.info', node);
    loader.load(arr);
};

//===========系统彩信发送查询
js.loadjs.loadsendMMSdepartsendqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/sendmms/query/SysSendQuery.js";
    arr[1] = "jspack/product/center/business/sendmms/query/senddetails.js";
    arr[2] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.MMSsyssendquery.info', node);
    loader.load(arr);
};

//===========彩信一审
js.loadjs.loadsendMMSfirstcheck = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendmms/mmsfirstcheck/mmsfirstcheck_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.FirstCheckManage.info', node);
    loader.load(arr);
};

//===========彩信二审
js.loadjs.loadsendMMSsecondcheck = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/sendmms/mmssecondcheck/mmssecondcheck_pack.js";
    arr[1] = "jspack/project/center/business/sendmms/send/SendPreview.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.SendMMS.SecendCheckManage.info', node);
    loader.load(arr);
};
/****************************************************************************************彩信统计*/
//===========彩信发送量按部门统计
js.loadjs.loadMMSStatisticsMtByDeparment = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/mmsstatistics/MMSmt/MMSmtByDepartment_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.MMSStatistics.MMSmtByDepartment.info', node);
    loader.load(arr);
};

//===========彩信发送量按通道组统计
js.loadjs.loadMMSStatisticsMtByProduct = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/mmsstatistics/MMSmt/MMSmtByProduct_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.MMSStatistics.MMSmtByProduct.info', node);
    loader.load(arr);
};

//===========彩信发送量按用户统计
js.loadjs.loadMMSStatisticsMtByCustomer = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/mmsstatistics/MMSmt/MMSmtByCustomer_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.MMSStatistics.MMSmtByCustomer.info', node);
    loader.load(arr);
};

//===========彩信发送量按客户组统计
js.loadjs.loadmmsstatisticsmtbyusergroup = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/mmsstatistics/MMSmt/MMSmtByUserGroup_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.MMSStatistics.MMSmtByUserGroup.info', node);
    loader.load(arr);
};

js.loadjs.loadmmschannelstatisticsday = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/mmsstatistics/mmsChannel_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MMSChannelStatisticsDay.info',node);
    loader.load(arr);
};

js.loadjs.loadmmschannelstatisticsmonth = function(node){
  var arr = new Array();
  arr[0] = "jspack/product/center/business/mmsstatistics/mmsChannel_pack.js";
  var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MMSChannelStatisticsMonth.info',node);
  loader.load(arr);
};

js.loadjs.loadmmschannelstatisticsyear = function(node){
  var arr = new Array();
  arr[0] = "jspack/product/center/business/mmsstatistics/mmsChannel_pack.js";
  var loader = new WXTL.Common.JsLoader('Js.Center.Statistics.MMSChannelStatisticsYear.info',node);
  loader.load(arr);
};
/****************************************************************************************EC管理*/
js.loadjs.loadbusinessECmanageinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/ECmanage/ECmanage_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.ECmanage.info', node);
    loader.load(arr);
};

js.loadjs.loadbusinessecmanagequery = function(node){
	var arr = new Array();
    arr[0] = "jspack/project/center/business/ECmanage/ECmanage_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.ECmanage.query', node);
    loader.load(arr);
};

//EC预付费管理
js.loadjs.loadbusinessecprepaidinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/ecprepaid/ecprepaid_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.ECPrepaid.info',node);
    loader.load(arr);
};

/****************************************************************************************黑白名单管理*/
//==========黑名单信息查询
js.loadjs.loadblackqueryinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/queryblacklist/queryblacklist_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.BlackListQuery.BlackListQueryInfo', node);
    loader.load(arr);
};

//===========黑名单管理
js.loadjs.loadbusinessblacklistaddinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/blacklist/blacklist_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.BlacklistAdd.info', node);
    loader.load(arr);
};

//===========用户黑名单管理
js.loadjs.loadbusinessMyblacklistinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/myblacklist/myblacklist_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.Myblacklist.info', node);
    loader.load(arr);
    
};

//===========通道黑名单管理
js.loadjs.loadbusinesssvcblacklistaddinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/svcblacklist/svcblacklist_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.SvcBlacklistAdd.info', node);
    loader.load(arr);
};

//===========白名单管理
js.loadjs.loadbusinesswhitelistaddinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/whitelist/whitelist_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.WhitelistAdd.info', node);
    loader.load(arr);
    
};
/****************************************************************************************平台系统管理*/
//===========关键字管理
js.loadjs.loadsystemdirtywordinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/dirtyword/dirtyword_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.DirtyWord.dirtyWordInfo', node);
    loader.load(arr);
};

//===========通道敏感词管理
js.loadjs.loadsystemsvcdirtywordinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/svcdirtyword/svcdirtyword_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.SvcDirtyWord.SvcDirtyWordInfo', node);
    loader.load(arr);
};

//===========操作日志管理
js.loadjs.loadsystemoperatorloginfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/operatorlog/operatorlog_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.OperatorLog.operatorloginfo', node);
    loader.load(arr);
};

//===========信息修改
js.loadjs.loadsystemupdatepwd = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/updatepassword/updatepassword_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.UpdatePassword.updatePwdInfo', node);
    loader.load(arr);
};

//===========系统配置
js.loadjs.loadsystemconfig = function(node){
	var arr = new Array();
    arr[0] = "jspack/product/center/business/systemlog/systemlog_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.SystemLog.SystemSet.Info',node);
    loader.load(arr);
};

/****************************************************************************************路由管理*/
//===========网关管理
js.loadjs.loadbusinessgatewayinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/gateway/gateway_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.Gateway.gatewayinfo', node);
    loader.load(arr);
};

//===========通道组管理
js.loadjs.loadbusinessproductinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/product/product_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.Product.productinfo', node);
    loader.load(arr);
};

//===========通道管理
js.loadjs.loadbusinessservicecodeinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/servicecode/servicecode_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.ServiceCode.serviceCodeInfo', node);
    loader.load(arr);
};

//===========通道批量替换
js.loadjs.loadbusinesssvcbatchupdateinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/servicecode/servicecode_pack.js";
    arr[1] = "jspack/project/center/business/ECmanage/ECmanage_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.SvcBatchUpAndDownInfo', node);
    loader.load(arr);
};

//===========子通道查询
js.loadjs.loadbusinessserviceinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/servicecode/servicecode_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.ServiceInfo.func', node);
    loader.load(arr);
};

//===========上行路由管理
js.loadjs.loadbusinessmorouterinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/morouter/morouter_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.MORouter.info', node);
    loader.load(arr);
    
};

//===========程序管理
js.loadjs.loadbusinessprograminfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/program/program_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.Program.ProgramInfo', node);
    loader.load(arr);
    
};

//===========生效管理
js.loadjs.loadbusinesstakeeffectinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/business/takeeffect/TakeEffect-pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.TakeEffect.TakeEffectInfo', node);
    loader.load(arr);
    
};

//===========特殊手机号码管理
js.loadjs.loadspecialmobile = function(node){
	var arr = new Array();
    arr[0] = "jspack/project/center/system/specialmobile/specialmobile_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.SpecialMobile.info',node);
    loader.load(arr);
};
/****************************************************************************************系统配置管理*/
//===========系统配置管理
js.loadjs.loadsystemdeployment = function(node){
	var arr = new Array();
    arr[0] = "jspack/product/center/system/deployment/deployment_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.Deployment.Node.info', node);
    loader.load(arr);
};

/****************************************************************************************监控报警*/
//===========监控报警信息
js.loadjs.loadalertinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/system/alert/alert_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Alert.AlertInfo.Info', node);
    loader.load(arr);
};

//===========客户端网关监控管理
js.loadjs.loadclientgatewaymonitorinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/system/clientgatewaymonitor/ClientGatewayMonitor.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Monitor.ClientMonitorSet.Info', node);
    loader.load(arr);
};

js.loadjs.loadclientmonitorset = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/system/clientgatewaymonitor/ClientMonitorSet.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Monitor.ClientMonitorSet.Info', node);
    loader.load(arr);
    ;
};

//===========数据库报警配置
js.loadjs.loaddbmonitorsetinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/system/clientgatewaymonitor/DBMonitorSet_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Monitor.DBMonitor.DBMonitorSet.Info', node);
    loader.load(arr);
};

//===========通道监控
js.loadjs.loadProductMonitor = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/system/productmonitor/productmonitor_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.ProductMonitor.info', node);
    loader.load(arr);
};

//===========模块和组件监控管理
js.loadjs.loadclientsysmonitorinfo = function(node){
    var arr = new Array();
	arr[0] = "jspack/project/center/system/sysmonitor/sysmonitor_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Monitor.SysMonitor.MonitorNode.info',node);
    loader.load(arr);
};

//===========Hub数据查询
js.loadjs.loadhubdataqueryinfo = function(node){
    var arr = new Array();
	arr[0] = "jspack/product/center/system/hubdataquery/hubdataquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.HubDataQuery.info',node);
    loader.load(arr);
};
/****************************************************************************************短彩统计*/
//============短彩统计  按通道组
js.loadjs.loadYXTStatisticsMtByProductinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/yxtstatistics/product/yxtstatisticsproduct_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.YXTStatistics.mtByProduct.info',node);
    loader.load(arr);
};

//============短彩统计 按部门
js.loadjs.loadYXTStatisticsMtByDepartmentinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/yxtstatistics/department/yxtstatisticsdepartment_pack.js"; 
    var loader = new WXTL.Common.JsLoader('Js.Center.YXTStatistics.mtByDepartment.info',node);
    loader.load(arr);
};

//============短彩统计 按用户
js.loadjs.loadYXTStatisticsMtByCustomerinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/yxtstatistics/customer/yxtstatisticscustomer_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.YXTStatistics.mtByCustomer.info',node);
    loader.load(arr);
};

/********************************************************************************************日常查询*/
//============按状态报告查询
js.loadjs.loadReportQueryinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/query/reportquery/reportquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.ReportQuery.info',node);
    loader.load(arr);
};

//============按内容查询
js.loadjs.loadContentQueryinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/query/contentquery/contentquery_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.ContentQuery.info',node);
    loader.load(arr);
};

//============号码提取
js.loadjs.loadExtractNumberinfo = function(node){
	var arr = new Array();    
    arr[0] = "jspack/project/center/business/query/extractnumber/extractnumber_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.ExtractNumber.info',node);
    loader.load(arr);
};

/********************************************************************************************其他平台数据管理*/
//============其他平台数据管理
js.loadjs.loadOtherDatainfo = function(node){
	var arr = new Array();    
	arr[0] = "jspack/project/center/business/otherec/otherecdata_pack.js";
	var loader = new WXTL.Common.JsLoader('Js.Center.OtherEC.OtherData.info',node);
	loader.load(arr);
};

//============其他平台客户管理
js.loadjs.loadOtherECinfo = function(node){
	var arr = new Array();
	arr[0] = "jspack/project/center/business/otherec/otherecinfo_pack.js";
	var loader = new WXTL.Common.JsLoader('Js.Center.Business.OtherEC.OtherMana.tlotherecinfoinfo',node);
	loader.load(arr);
};
/****************************************************************************************短彩汇总统计*/
//===========按运营商汇总统计
js.loadjs.loadYXTStatisticsByOperator = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/projectstatistics/statisticsbyoperator/statisticsbyoperator_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.projectstatistics.statisticbyoperator.info',node);
    loader.load(arr);
};

//===========按地区汇总统计
js.loadjs.loadYXTStatisticsByArea= function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/projectstatistics/statisticbyarea/statisticbyarea_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.projectstatistics.statisticbyarea.info',node);
    loader.load(arr);
};

//===========按客户汇总统计
js.loadjs.loadYXTStatisticsByCustomer = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/projectstatistics/statisticbycustomer/statisticbycustomer_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.projectstatistics.statisticbycust.info',node);
    loader.load(arr);
};

//===========按通道汇总统计
js.loadjs.loadYXTStatisticsBySvc = function(node){
    var arr = new Array();
    arr[0] = "jspack/project/center/business/projectstatistics/statisticbysvc/statisticbysvc_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.Business.projectstatistics.statisticbysvc.info',node);
    loader.load(arr);
};
//===========公告信息管理
js.loadjs.loadbusinessnoticeinfo = function(node){
	 	var arr = new Array();
	    arr[0] = "jspack/product/center/system/notice/notice_pack.js";
	    var loader = new WXTL.Common.JsLoader('Js.Center.System.Notice.noticemsg.info', node);
	    loader.load(arr);
}
//===========更多公告信息
js.loadjs.loadbusinessnoticemoreinfo = function(node){
	 	var arr = new Array();
	    arr[0] = "jspack/product/center/system/notice/notice_pack.js";
	    var loader = new WXTL.Common.JsLoader('Js.Center.System.Notice.noticemsgmore.info', node);
	    loader.load(arr);
}
//=======接口审核
js.loadjs.loadClientSmsQueryinfo = function(node){
	var arr = new Array(); 
	arr[0] ="jspack/project/center/business/clientsms/clientsmsquery/clientsmsquery_pack.js";
	var loader =  new WXTL.Common.JsLoader('Js.Center.ClientSMS.ClientSMSQuery.clientsmsinfo',node);
	loader.load(arr);
};

js.loadjs.loadClientSmsCheckinfo = function(node){
	var arr = new Array(); 
	arr[0] ="jspack/project/center/business/clientsms/clientsmscheck/clientsmscheck_pack.js";
	var loader =  new WXTL.Common.JsLoader('Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfo',node);
	loader.load(arr);
};

//==========网元分布式配置管理
js.loadjs.loadbusinesselementinfo = function(node){
    var arr = new Array();
    arr[0] = "jspack/product/center/system/element/element_pack.js";
    var loader = new WXTL.Common.JsLoader('Js.Center.System.Element.elementInfo', node);
    loader.load(arr);
};