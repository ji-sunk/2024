import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import StyleGuide from '@/ui/guide/StyleGuide';
import Header from '@ui/layout/Header';
import LNB from '@ui/layout/LNB';
import Popup from '@/ui/components/Popup';
import SwitchTab from '@/ui/components/SwitchTab';

export const TpsRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="" element={<DefaultLayout />}>
            <Route path={'/ui/Layout'} element={<Header />} />
            <Route path={'/ui/Layout'} element={<LNB />} />
            <Route path={'/ui/components'} element={<Popup />} />
            <Route path={'/ui/components'} element={<SwitchTab />} />
            {/* <Route path={'/Layout2'} element={<div>hello1213</div>} /> */}
          </Route>
          <Route path={'StyleGuide'} element={<StyleGuide />} />
          {/* <Route path="" element={<DefaultLayout1 />}></Route> */}
          {/* <Route element={<PublicRoute />}> */}
          {/* <Route element={<TpsLayout />}> */}
          {/* <Route path={'/tmppswd'} element={<UpdateUserTmprPswd />} /> */}
          {/* <Route path={''} element={<DashBoardMain />} /> */}
          {/* <Route path={'/main'} element={<MainDashBoard />} /> */}
          {/* <Route path={'unauthorized'} element={<Unauthorized />} /> */}
          {/* <Route path={'*'} element={<Navigate to="/" />} /> */}
          {/* </Route> */}
          {/*{renderRoutes(menuData)}*/}
          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route element={<TpsLayout />}>
                <Route path={''} element={<DashBoardMain />} />
                <Route path={'/main'} element={<MainDashBoard />} />
                <Route path={'unauthorized'} element={<Unauthorized />} />
                <Route path={'*'} element={<Navigate to="/" />} />
              </Route> */}
          {/* </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
