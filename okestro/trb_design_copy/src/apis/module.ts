interface Module {
  [key: string]: {
    url: string;
    subModule?: Module;
  };
}

export const module: Module = {
  common: {
    url: import.meta.env.VITE_COMMON_API,
    subModule: {
      ldap: {
        url: '/ldap/v1',
      },
      smtp: {
        url: '/smtp/v1',
      },
      userMng: {
        url: '/user_mng/v1',
      },
      message: {
        url: '/message/v1',
      },
      userGroupMng: {
        url: '/userGroup_mng/v1',
      },
      commonCodeMng: {
        url: '/commonCode/v1',
      },
      systemCodeMng: {
        url: '/systemCode/v1',
      },
      generalCodeMng: {
        url: '/generalCode/v1',
      },
      ldapCodeMng: {
        url: '/ldapCode/v1',
      },
      menuMng: {
        url: '/menu/v1',
      },
      eyMenuMng: {
        url: '/menu/v2',
      },
      userRoleMng: {
        url: '/userRoleMng/v1',
      },
      taskAuthrtCd: {
        url: '/taskAuthrtCd/v1',
      },
      taskCd: {
        url: '/taskCd/v1',
      },
      taskUserMapping: {
        url: '/taskUser/v1',
      },
      menuPreStng: {
        url: '/menuPreStng/v1',
      },
      menuPreStngUser: {
        url: '/menu-pre-stng/v1',
      },
      ognzMng: {
        url: '/ognz_mng/v1',
      },
      auditLog: {
        url: '/audit_log/v1',
      },
      reload: {
        url: '/reload/v1',
      },
      myToDo: {
        url: '/myToDo/v1',
      },
      dashboad: {
        url: '/dashboard/v1',
      },
      statistics: {
        url: '/statistics/v1',
      },
      ntcMttrMngr: {
        url: '/ntcMttrMngr/v1',
      },
      ntcMttrUser: {
        url: '/ntcMttrUser/v1',
      },
      nrmlBbsMngr: {
        url: '/nrmlBbsMngr/v1',
      },
      nrmlBbsUser: {
        url: '/nrmlBbsUser/v1',
      },
      inquiryMngr: {
        url: '/inquiryMngr/v1',
      },
      inquiryUser: {
        url: '/inquiryUser/v1',
      },
      bbsMngr: {
        url: '/bbs/mngr/v1',
      },
      faqMngr: {
        url: '/faq/mngr/v1',
      },
      faqUser: {
        url: '/faq/user/v1',
      },
      bbsCmn: {
        url: '/bbs/cmn/v1',
      },
      requirement: {
        url: '/requirement/v1',
      },
      component: {
        url: '/component/v1',
      },
      pageMng: {
        url: '/page/v1',
      },
    },
  },
  auth: {
    url: import.meta.env.VITE_AUTH_API,
    subModule: {
      user: {
        url: '/user/v1',
      },
      policy: {
        url: '/loginPolicy/v1',
      },
    },
  },
  workflow: {
    url: import.meta.env.VITE_WORKFLOW_API,
    subModule: {
      ticket: {
        url: '/ticket/v1',
      },
      tcktExcn: {
        url: '/tckt_wrkflw/v1',
      },
      wrkflw: {
        url: '/wf_mgmt/v1',
      },
      wrkflw_pre: {
        url: '/wf_pre_mgmt/v1',
      },
      workflowComponent: {
        url: '/wrkflwCompn/v1',
      },
      pplnCompnDtl: {
        url: '/pplnCompnDtl/v1',
      },
      cdRvwCompnDtl: {
        url: '/cdRvwCompnDtl/v1',
      },
      cdMergeCompnDtl: {
        url: '/cdMergeCompnDtl/v1',
      },
      intgrtdTestCompnDtl: {
        url: '/intgrtdTestCompnDtl/v1',
      },
      intrfcCompnDtl: {
        url: '/intrfcCompnDtl/v1',
      },
      sltmCompnDtl: {
        url: '/sltmCompnDtl/v1',
      },
      dcrbCompnDtl: {
        url: '/dcrbCompnDtl/v1',
      },
      staticAnlsCompnDtl: {
        url: '/staticAnlsCompnDtl/v1',
      },
      unitTestCompnDtl: {
        url: '/unitTestCompnDtl/v1',
      },
      intgrtdTestResultCompnDtl: {
        url: '/intgrtdTestResultCompnDtl/v1',
      },
      workflowEngine: {
        url: '/workflowEngine/v1',
      },
      unitTcMng: {
        url: '/unitTcMng/v1',
      },
      intgrtdTestRqst: {
        url: '/intgrtdTestRqst/v1',
      },
      intgrtdTestVrfc: {
        url: '/intgrtdTestVrfc/v1',
      },
      intgrtdTestVrfcOpnn: {
        url: '/intgrtdTestVrfcOpnn/v1',
      },
      intgrtdTestOpnnActn: {
        url: '/intgrtdTestOpnnActn/v1',
      },
      intgrtdTestGroup: {
        url: '/intgrtdTestGroup/v1',
      },
      intgrtdTestScenario: {
        url: '/intgrtdTestScenario/v1',
      },
      intgrtdTestScenarioMng: {
        url: '/intgrtdTestScenarioMng/v1',
      },
      intgrtdTestUnitTc: {
        url: '/intgrtdTestUnitTc/v1',
      },
    },
  },
  pipeline: {
    url: import.meta.env.VITE_PIPELINE_API,
    subModule: {
      gitlab: {
        url: '/gitlab/v1',
      },
      devSupportTool: {
        url: '/support-tool/v1',
      },
      argocd: {
        url: '/argocd/v1',
      },
      analysisMng: {
        url: '/analysis_mng/v1',
      },
      sonarqubeIssues: {
        url: '/sonarqube_issues/v1',
      },
      unitTest: {
        url: '/junit_results/v1',
      },
      componentRollback: {
        url: '/component/v1',
      },
      pipeline: {
        url: '/pipeline/v1',
      },
      codeReview: {
        url: '/code_review/v1',
      },
      codeMerge: {
        url: '/code_merge/v1',
      },
      analysis: {
        url: '/analysis/v1',
      },
      unitTestMng: {
        url: '/junit_results/v1',
      },
      harbor: {
        url: '/harbor/v1',
      },
    },
  },
  pipelineLogging: {
    url: import.meta.env.VITE_PPLNLOGGING_API,
    subModule: {
      pplnLogging: {
        url: '/log/v1',
      },
    },
  },
  sse: {
    url: import.meta.env.VITE_SSE_API,
    subModule: {},
  },
  notificator: {
    url: import.meta.env.VITE_NOTIFICATOR_API,
    subModule: {
      alarm: {
        url: '/alarm/v1',
      },
      policy: {
        url: '/alarm/v1/policy',
      },
    },
  },
  pms: {
    url: import.meta.env.VITE_PMS_API,
    subModule: {
      project: {
        url: '/project/v1',
      },
      typeMng: {
        url: '/typeMng/v1',
      },
      user: {
        url: '/user/v1',
      },
      missionSection: {
        url: '/missionSection/v1',
      },
      progressStatus: {
        url: '/progressStatus/v1',
      },
      projectIssueRisk: {
        url: '/project/issue_risk/v1',
      },
      riskIssue: {
        url: '/project/status/risk_issue/v1',
      },
      requirement: {
        url: '/requirement/v1',
      },
      mission: {
        url: '/mission/v1',
      },
      release: {
        url: '/project/release/v1',
      },
      kanbanManagement: {
        url: '/kanban_management/v1',
      },
      kanbanBoard: {
        url: '/kanban/v1',
      },
      roleManagementApi: {
        url: '/project/role/v1',
      },
      roleMappingManagementApi: {
        url: '/project/role_mapping/v1',
      },
      projectProgressStatus: {
        url: '/dashboard/progress_status/v1',
      },
      prjMenuMng: {
        url: '/menu/v1',
      },
      registrationCompletion: {
        url: '/dashboard/registration_completion/v1',
      },
    },
  },
  scouter: {
    url: import.meta.env.VITE_SCOUTER_API,
    subModule: {
      scouter: {
        url: '/scouter/v1',
      },
    },
  },
};
