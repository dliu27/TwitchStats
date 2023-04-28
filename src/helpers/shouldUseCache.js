// function for determining if cached data is valid
const shouldUseCache = function (cachedData) {
  const maxCacheLife = 15 * 60 * 1000;

  if (cachedData && Date.now() - cachedData.lastUpdated <= maxCacheLife) {
    return true;
  }
  return false;
};

export default shouldUseCache;
