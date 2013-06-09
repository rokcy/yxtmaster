﻿Ext.namespace('Js.Center.Statistics.MtByCustomer');
            sortInfo: {
                field: 'datstat',
                direction: 'ASC'
            },//解决分组无效代码
                limit: _pageSize,
            params: {
                datcreattimestart: Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(), -7/*减3天*/), 'Y-m-d'),
            }
        });
			needPage:false,
            validator: function(){
            var strat_time = Ext.get("mtbycustomerdatcreattimestart").dom.value;
            var end_time = Ext.get("mtbycustomerdatcreattimeend").dom.value;
            if (strat_time <= end_time) {
                return true;
            }
            else {
                return false;
            }
            },
            invalidText: '结束时间不能小于开始时间！'
            validateOnBlur: false,
            validator: function(){
            var strat_time = Ext.get("mtbycustomerdatcreattimestart").dom.value;
            var end_time = Ext.get("mtbycustomerdatcreattimeend").dom.value;
            if (strat_time <= end_time) {
                return true;
            }
            else {
                return false;
            }
            },
            invalidText: '结束时间不能小于开始时间！'
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText,
                        maxLength: 50,
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText,
                        maxLength: 15,