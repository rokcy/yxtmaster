load data
append
into table tl_sms_content_ch_temp
fields terminated by '&'
(
      VC2MOBILE char(4000),
      NUMCONTENTID
)

