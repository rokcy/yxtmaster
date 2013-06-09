load data
append
into table tl_mms_send_list
fields terminated by '&'
(
      VC2MOBILE,
      NUMSENDLISTID "TLSEQ_mms_SEND_LIST.NEXTVAL",
      NUMCREATEUSER,
      NUMCONTENTID,
      DATCREATETIME sysdate
)

