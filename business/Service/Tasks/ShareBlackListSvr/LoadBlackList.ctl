load data
append
into table TL_TEMP_BLACKLIST_GW
fields terminated by '|'
TRAILING NULLCOLS
(
      NUMSEQID "TLSEQ_BLACK_LIST_GW.NEXTVAL",
      NUMGWID,
      NUMLOGID,
      VC2MOBILE,
      NUMTYPE
)
