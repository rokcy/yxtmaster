load data
append
into table tl_sms_send_list
fields terminated by '&'
(
      VC2MOBILE,
      NUMSENDLISTID "TLSEQ_sms_SEND_LIST.NEXTVAL",
      NUMCREATEUSER,
      NUMCONTENTID,
      DATCREATETIME sysdate
)

