import { Helmet } from 'react-helmet-async';

import { ServiceProviderView } from 'src/sections/serviceProvider/view';

// ----------------------------------------------------------------------

export default function ServiceProviderPage() {
  return (
    <>
      <Helmet>
        <title> Service Provider | Minimal UI </title>
      </Helmet>

      <ServiceProviderView />
    </>
  );
}
