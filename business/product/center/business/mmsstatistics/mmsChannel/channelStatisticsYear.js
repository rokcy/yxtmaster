Ext.namespace('Js.Center.Statistics.MMSChannelStatisticsYear');
            sortInfo: {
                field: 'vc2svcname',
                direction: 'DESC'
            },
                limit: _pageSize,
            params: {
                datstarttime: '',
            }
        });
			needPage:false,
            validator: function(){
            var strat_time = Ext.get("MMSStatisticsYearStartDateId").dom.value;
            var end_time = Ext.get("MMSStatisticsYearEndDateId").dom.value;
            if (strat_time <= end_time) {
                return true;
            }
            else {
                return false;
            }
            },
            invalidText: '结束时间不能小于开始时间！'