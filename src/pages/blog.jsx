import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Service Provider | Minimal UI </title>
      </Helmet>

      <BlogView />
    </>
  );
}
