import { useEffect, useState } from 'react';

export function useRoute() {
  const [route, setRoute] = useState(
    () => window.location.pathname + window.location.search,
  );

  useEffect(() => {
    const updateRoute = () =>
      setRoute(window.location.pathname + window.location.search);
    window.addEventListener('popstate', updateRoute);
    return () => window.removeEventListener('popstate', updateRoute);
  }, []);

  return route;
}
