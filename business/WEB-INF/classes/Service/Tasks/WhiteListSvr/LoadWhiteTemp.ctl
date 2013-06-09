load data
append
into table TL_WHITE_CH_TEMP
fields terminated by '|'
(
      UPLOADTYPE,
      NUMID "tlseq_white_Temp.NEXTVAL",
      UPLOADMODE,
      LOGID,
      VC2MOBILE 
)
