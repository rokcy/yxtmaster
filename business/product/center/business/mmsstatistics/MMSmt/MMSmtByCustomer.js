﻿Ext.namespace('Js.Center.MMSStatistics.MMSmtByCustomer');
                limit: _pageSize,
            params: {
                datcreattimestart: Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(), -7/*减3天*/), 'Y-m-d'),
            }
        });