﻿
            sortInfo: {
                field: 'vc2prodname',
                direction: 'DESC'
            },//解决分组无效代码
                limit: _pageSize,
             params: {
                datcreattimestart: Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(), -7/*减3天*/), 'Y-m-d'),
            }
        });
			needPage:false,
            validator: function(){
            var strat_time = Ext.get("Js.Center.MMSStatistics.MMSmtByProduct.DatStart").dom.value;
            var end_time = Ext.get("Js.Center.MMSStatistics.MMSmtByProduct.DatEnd").dom.value;
            if (strat_time <= end_time) {
                return true;
            }
            else {
                return false;
            }
            },
            invalidText: '结束时间不能小于开始时间！'
            validator: function(){
            var strat_time = Ext.get("Js.Center.MMSStatistics.MMSmtByProduct.DatStart").dom.value;
            var end_time = Ext.get("Js.Center.MMSStatistics.MMSmtByProduct.DatEnd").dom.value;
            if (strat_time <= end_time) {
                return true;
            }
            else {
                return false;
            }
            },
            invalidText: '结束时间不能小于开始时间！'
            var _datCreatTimeStart = Ext.get("Js.Center.MMSStatistics.MMSmtByProduct.DatStart").getValue();