import { createAxiosInstance } from '@apis/index.ts';
import { module } from '@apis/module.ts';

const commonApi = createAxiosInstance({
  baseURL: module.common.url,
  auth: true,
});
const ldapApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.ldap.url,
  auth: true,
});
const loginPolicyApi = createAxiosInstance({
  baseURL: module.auth.url + module.auth.subModule?.policy.url,
  auth: false,
});
const notificatorApi = createAxiosInstance({
  baseURL: module.notificator.url + module.notificator.subModule?.alarm.url,
  auth: true,
});
const alarmPolicyApi = createAxiosInstance({
  baseURL: module.notificator.url + module.notificator.subModule?.policy.url,
  auth: true,
});
const messageApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.message.url,
  auth: true,
});
const userApi = createAxiosInstance({
  baseURL: module.auth.url + module.auth.subModule?.user.url,
  auth: false,
});
const smtpApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.smtp.url,
  auth: true,
});
const userInstance = createAxiosInstance({
  baseURL: import.meta.env.VITE_APP_API_URL + '/users',
  auth: true,
});
const tableInstance = createAxiosInstance({
  baseURL: import.meta.env.VITE_APP_API_URL + '/table',
});
const userMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.userMng.url,
  auth: true,
});
const userGroupMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.userGroupMng.url,
  auth: true,
});
const commonCodeMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.commonCodeMng.url,
  auth: true,
});
const systemCodeMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.systemCodeMng.url,
  auth: true,
});
const generalCodeMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.generalCodeMng.url,
  auth: true,
});
const ldapCodeMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.ldapCodeMng.url,
  auth: true,
});
const taskAuthrtCdApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.taskAuthrtCd.url,
  auth: true,
});
const taskCdApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.taskCd.url,
  auth: true,
});
const taskUserMappingApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.taskUserMapping.url,
  auth: true,
});
const menuMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.menuMng.url,
  auth: true,
});
const menuPreStngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.menuPreStng.url,
  auth: true,
});
const menuPreStngUserApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.menuPreStngUser.url,
  auth: true,
});
const ticketApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.ticket.url,
  auth: true,
});
const tcktExcnApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.tcktExcn.url,
  auth: true,
});
const workflowApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.wrkflw.url,
  auth: true,
});
const workflowPreStngApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.wrkflw_pre.url,
  auth: true,
});
const workflowComponentApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.workflowComponent.url,
  auth: true,
});
const pplnCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.pplnCompnDtl.url,
  auth: true,
});
const cdRvwCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.cdRvwCompnDtl.url,
  auth: true,
});
const cdMergeCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.cdMergeCompnDtl.url,
  auth: true,
});
const intgrtdTestCompnDtlApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestCompnDtl.url,
  auth: true,
});
const intrfcCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.intrfcCompnDtl.url,
  auth: true,
});
const sltmCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.sltmCompnDtl.url,
  auth: true,
});
const dcrbCompnDtlApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.dcrbCompnDtl.url,
  auth: true,
});
const staticAnlsCompnDtlApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.staticAnlsCompnDtl.url,
  auth: true,
});
const unitTestCompnDtlApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.unitTestCompnDtl.url,
  auth: true,
});
const intgrtdTestResultCompnDtlApi = createAxiosInstance({
  baseURL:
    module.workflow.url +
    module.workflow.subModule?.intgrtdTestResultCompnDtl.url,
  auth: true,
});
const analysisMngApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.analysisMng.url,
  auth: true,
});

const sonarqubeIssuesApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.sonarqubeIssues.url,
  auth: true,
});

const ognzMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.ognzMng.url,
  auth: true,
});
const gitLabApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.gitlab.url,
  auth: true,
});
const devSupportToolApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.devSupportTool.url,
  auth: true,
});

const auditLogApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.auditLog.url,
  auth: true,
});

const argocdApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.argocd.url,
  auth: true,
});

const pipelineApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.pipeline.url,
  auth: true,
});

const pplnLoggingApi = createAxiosInstance({
  baseURL:
    module.pipelineLogging.url +
    module.pipelineLogging.subModule?.pplnLogging.url,
  auth: true,
});

const sseApi = createAxiosInstance({
  baseURL: module.sse.url,
  auth: true,
});

/** YJK 임시 워크플로우 엔진 */
const workflowEngineApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.workflowEngine.url,
  auth: true,
});

const unitTestApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.unitTest.url,
  auth: true,
});

const componentRollbackApi = createAxiosInstance({
  baseURL:
    module.pipeline.url + module.pipeline.subModule?.componentRollback.url,
  auth: true,
});

const analysisApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.analysis.url,
  auth: true,
});

const codeReviewApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.codeReview.url,
  auth: true,
});

const codeMergeApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.codeMerge.url,
  auth: true,
});

const unitTestMngApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.unitTestMng.url,
  auth: true,
});
const harborApi = createAxiosInstance({
  baseURL: module.pipeline.url + module.pipeline.subModule?.harbor.url,
  auth: true,
});

const reloadApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.reload.url,
  auth: true,
});

const myToDoApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.myToDo.url,
  auth: true,
});

const dashboardApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.dashboad.url,
  auth: true,
});

const statisticsApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.statistics.url,
  auth: true,
});

const ntcMttrMngrApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.ntcMttrMngr.url,
  auth: true,
});

const ntcMttrUserApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.ntcMttrUser.url,
  auth: true,
});

const inquiryMngrApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.inquiryMngr.url,
  auth: true,
});

const inquiryUserApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.inquiryUser.url,
  auth: true,
});

const nrmlBbsMngrApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.nrmlBbsMngr.url,
  auth: true,
});

const nrmlBbsUserApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.nrmlBbsUser.url,
  auth: true,
});

const bbsMngrApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.bbsMngr.url,
  auth: true,
});

const faqMngrApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.faqMngr.url,
  auth: true,
});

const faqUserApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.faqUser.url,
  auth: true,
});

const bbsCmnApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.bbsCmn.url,
  auth: true,
});

const unitTcMngApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.unitTcMng.url,
  auth: true,
});

const intgrtdTestRqstApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.intgrtdTestRqst.url,
  auth: true,
});

const intgrtdTestVrfcApi = createAxiosInstance({
  baseURL: module.workflow.url + module.workflow.subModule?.intgrtdTestVrfc.url,
  auth: true,
});

const intgrtdTestOpnnActnApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestOpnnActn.url,
  auth: true,
});

const intgrtdTestGroupApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestGroup.url,
  auth: true,
});

const intgrtdTestScenarioApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestScenario.url,
  auth: true,
});

const intgrtdTestScenarioMngApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestScenarioMng.url,
  auth: true,
});

const intgrtdTestUnitTcApi = createAxiosInstance({
  baseURL:
    module.workflow.url + module.workflow.subModule?.intgrtdTestUnitTc.url,
  auth: true,
});

const requirementApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.requirement.url,
  auth: true,
});

const scouterApi = createAxiosInstance({
  baseURL: module.scouter.url + module.scouter.subModule?.scouter.url,
  auth: false,
});

const componentApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.component.url,
  auth: true,
});

const pageMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.pageMng.url,
  auth: true,
});

const eyMenuMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.eyMenuMng.url,
  auth: true,
});

const userRoleMngApi = createAxiosInstance({
  baseURL: module.common.url + module.common.subModule?.userRoleMng.url,
  auth: true,
});

export {
  commonApi,
  ldapApi,
  userApi,
  smtpApi,
  userMngApi,
  commonCodeMngApi,
  systemCodeMngApi,
  generalCodeMngApi,
  ldapCodeMngApi,
  taskAuthrtCdApi,
  taskCdApi,
  taskUserMappingApi,
  menuMngApi,
  menuPreStngApi,
  menuPreStngUserApi,
  ticketApi,
  tcktExcnApi,
  ognzMngApi,
  messageApi,
  loginPolicyApi,
  alarmPolicyApi,
  notificatorApi,
  gitLabApi,
  devSupportToolApi,
  auditLogApi,
  argocdApi,
  analysisMngApi,
  workflowApi,
  pipelineApi,
  harborApi,
  pplnLoggingApi,
  sseApi,
  workflowPreStngApi,
  pplnCompnDtlApi,
  cdRvwCompnDtlApi,
  cdMergeCompnDtlApi,
  intgrtdTestCompnDtlApi,
  intrfcCompnDtlApi,
  sltmCompnDtlApi,
  dcrbCompnDtlApi,
  staticAnlsCompnDtlApi,
  unitTestCompnDtlApi,
  intgrtdTestResultCompnDtlApi,
  userGroupMngApi,
  workflowComponentApi,
  workflowEngineApi,
  unitTestApi,
  componentRollbackApi,
  analysisApi,
  sonarqubeIssuesApi,
  codeReviewApi,
  codeMergeApi,
  reloadApi,
  myToDoApi,
  dashboardApi,
  statisticsApi,
  ntcMttrMngrApi,
  ntcMttrUserApi,
  bbsMngrApi,
  faqMngrApi,
  inquiryMngrApi,
  inquiryUserApi,
  nrmlBbsMngrApi,
  nrmlBbsUserApi,
  faqUserApi,
  bbsCmnApi,
  unitTcMngApi,
  intgrtdTestRqstApi,
  intgrtdTestVrfcApi,
  intgrtdTestOpnnActnApi,
  intgrtdTestGroupApi,
  intgrtdTestScenarioApi,
  intgrtdTestScenarioMngApi,
  intgrtdTestUnitTcApi,
  requirementApi,
  scouterApi,
  componentApi,
  pageMngApi,
  eyMenuMngApi,
  userRoleMngApi,
  unitTestMngApi,
};
export { userInstance, tableInstance };
