load data
append
into table TL_USERGROUP_MEMBER_CH_TEMP
fields terminated by '|'
(
      VC2MOBILE,
      VC2CUSTOMER,
      NUMUSERGROUPID,
      NUMUSERID,
      NUMLOGID,
      UPLOADTYPE,
      NUMUSERGROUPMEMBERIDTEMP "TLSEQ_COLUMN_MEMBER.NEXTVAL",
      DATCREATTIME sysdate,
      NUMOPID "PCK_COMMON.GET_PHASE_OPID(:VC2MOBILE)"
)
