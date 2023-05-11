// function for determining if cached data is valid
const shouldUseCache = function (cachedData) {
  const maxCacheLife = 15 * 60 * 1000;

  if (cachedData && Date.now() - cachedData.lastUpdated <= maxCacheLife) {
    return true;
  }
  return false;
};

// function for determining if cached data, with expiration in seconds is valid
const shouldUseCacheSeconds = function (cachedData) {
  const expiresInMilliseconds = cachedData.expiresIn * 1000;

  if (
    cachedData.expiresIn &&
    cachedData.lastUpdated + expiresInMilliseconds > Date.now()
  ) {
    return true;
  }
  return false;
};

export { shouldUseCache, shouldUseCacheSeconds };
