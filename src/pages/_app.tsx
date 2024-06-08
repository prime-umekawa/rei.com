import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';


import GoogleTagManager from '@/components/common/GoogleTagManager';
import MessageDialog from '@/components/common/MessageDialog';
import Backdrop from '@/components/common/parts/Backdrop';
import { googleTagManagerId } from '@/utils/gtm';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      <RecoilRoot>
        <Component {...pageProps} />
        <MessageDialog />
        <Backdrop />
      </RecoilRoot>
    </>
  );
}
export default MyApp;
