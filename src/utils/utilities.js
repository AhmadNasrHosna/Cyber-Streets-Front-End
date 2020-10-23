export function skipLimitPagination(keyArgs) {
  return {
    keyArgs,
    merge(existing, incoming, { args }) {
      // Dumb version of merge
      // Args is on `items` parent. Prob a better way... but starting point
      return [...(existing || []), ...incoming];
    }
  };
}
