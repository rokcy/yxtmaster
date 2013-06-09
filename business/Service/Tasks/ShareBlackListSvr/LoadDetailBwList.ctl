load data
append
into table TL_DETAILS_BWLIST
fields terminated by '|'
TRAILING NULLCOLS
(
      NUMDETAILSID "TLSEQ_DETAILS_BWLIST.NEXTVAL",
      NUMLOGID,
      VC2MOBILE,
      VC2STATE
)
