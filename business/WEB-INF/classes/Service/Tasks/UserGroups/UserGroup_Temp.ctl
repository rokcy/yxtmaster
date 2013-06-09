load data
append
into table TL_USERGROUP_MEMBER_CH_TEMP
fields terminated by '|'
(
      VC2MOBILE,
      VC2NAME,
      NUMLOGID,
      NUMUSERGROUPMEMBERIDTEMP "TLSEQ_COLUMN_MEMBER.NEXTVAL",
      DATCREATTIME sysdate
)
