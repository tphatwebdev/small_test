export function createSearchRoute(searchText) {
  return `/detail?q=${encodeURIComponent(String(searchText ?? ''))}`;
}

export function readSearchText(route) {
  const query = route.includes('?') ? route.slice(route.indexOf('?') + 1) : '';
  return new URLSearchParams(query).get('q') ?? '';
}
