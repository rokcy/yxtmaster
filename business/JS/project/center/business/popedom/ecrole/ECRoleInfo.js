﻿Ext.namespace('Js.Center.Popedom.ECRoleInfo');
            if (row.length == 0) {
                Ext.Msg.alert("温馨提示", "请您选择一条记录!");
			} else {
                if (row.length > 1) {
                    Ext.Msg.alert("温馨提示", "对不起，您只能选择一条记录!");
                } else {
                    if (row.length == 1) {
               	        Js.Center.Popedom.ECRoleUpdate.window.updateRecord=row[0];
	                    Js.Center.Popedom.ECRoleUpdate.window.mainForm.loadRecord(row[0]);
	                    Js.Center.Popedom.ECRoleUpdate.window.show();
                    }
						ecRoleGrid.doInsert();
					}
						ecRoleGrid.doDelete();
					}