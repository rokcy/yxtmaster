load data
append
into table TL_MMS_CONTENT_CH_TEMP
fields terminated by '&'
(
      VC2MOBILE char(4000),
      NUMCONTENTID
)

