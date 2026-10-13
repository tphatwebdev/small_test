import { navigate } from '../utils/navigation';
import { createSearchRoute } from '../models/searchModel';

export function submitSearch(searchText) {
  navigate(createSearchRoute(searchText));
}
