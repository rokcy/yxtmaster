﻿Ext.namespace('Js.Center.Popedom.Role');
                 if (row.length == 0) {
                    Ext.Msg.alert("温馨提示", "请您选择一条记录!");
                }
                else 
                    if (row.length > 1) {
                        Ext.Msg.alert("温馨提示", "对不起，您只能选择一条记录!");
                    }
                    else 
                        if (row.length == 1) {
                   	        Js.Center.Popedom.RoleUpdate.window.updateRecord=row[0];
		                    Js.Center.Popedom.RoleUpdate.window.mainForm.loadRecord(row[0]);
		                    Js.Center.Popedom.RoleUpdate.window.show();
                        }
                 if (row.length == 0) {
                    Ext.Msg.alert("温馨提示", "请您选择一条记录!");
                }
                else 
                    if (row.length > 1) {
                        Ext.Msg.alert("温馨提示", "对不起，您只能选择一条记录!");
                    }
                    else 
                        if (row.length == 1) {
                   	        Js.Center.Popedom.Role.RolePermitToUser.window.updateRecord=row[0];
		                    Js.Center.Popedom.Role.RolePermitToUser.window.mainForm.loadRecord(row[0]);
		                    Js.Center.Popedom.Role.RolePermitToUser.window.show();
                        }
                 if (row.length == 0) {
                    Ext.Msg.alert("温馨提示", "请您选择一条记录!");
                }
                else 
                    if (row.length > 1) {
                        Ext.Msg.alert("温馨提示", "对不起，您只能选择一条记录!");
                    }
                    else 
                        if (row.length == 1) {
                   	        Js.Center.Popedom.Role.RolePermitToDepart.window.updateRecord=row[0];
		                    Js.Center.Popedom.Role.RolePermitToDepart.window.mainForm.loadRecord(row[0]);
		                    Js.Center.Popedom.Role.RolePermitToDepart.window.show();
                        }
		    RolearrInitLoadFunc[0] = "Js.Center.Popedom.Role.RolePermitToUser.func";
			otherInitLoadFunc:RolearrInitLoadFunc,
            sm: sm,
						roleGrid.doInsert();
					}
						roleGrid.doDelete();
					}