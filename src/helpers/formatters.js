/* 
  Helper functions for formatting data
*/

// formats numbers to have abbreviations (e.g. 1.5K, 2.3M, 3.4B)
function formatGeneralNumber(number) {
  const abbrs = {
    B: 1000000000,
    M: 1000000,
    K: 1000,
  };

  const decimals = 1;
  for (const symbol in abbrs) {
    if (number >= abbrs[symbol]) {
      if (number < 10 * abbrs[symbol]) {
        return `${(number / abbrs[symbol]).toFixed(1)}${symbol}`;
      } else {
        return `${(number / abbrs[symbol]).toFixed(0)}${symbol}`;
      }
    }
  }

  return number;
}

// formats timestamps to be "ago" (e.g. 1 minute ago, 2 hours ago, 3 days ago)
function formatTimestampAgo(timestamp) {
  if (!timestamp) {
    return "";
  }
  const now = new Date();
  const secondsElapsed = Math.floor((now - new Date(timestamp)) / 1000);
  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
  const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
  const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
  const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
  const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;

  if (secondsElapsed < MINUTE_IN_SECONDS) {
    return `${secondsElapsed} second${secondsElapsed > 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < HOUR_IN_SECONDS) {
    const minutesElapsed = Math.floor(secondsElapsed / MINUTE_IN_SECONDS);
    return `${minutesElapsed} minute${minutesElapsed > 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < DAY_IN_SECONDS) {
    const hoursElapsed = Math.floor(secondsElapsed / HOUR_IN_SECONDS);
    return `${hoursElapsed} hour${hoursElapsed > 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < WEEK_IN_SECONDS) {
    const daysElapsed = Math.floor(secondsElapsed / DAY_IN_SECONDS);
    return `${daysElapsed} day${daysElapsed > 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < MONTH_IN_SECONDS) {
    const weeksElapsed = Math.floor(secondsElapsed / WEEK_IN_SECONDS);
    return `${weeksElapsed} week${weeksElapsed > 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < YEAR_IN_SECONDS) {
    const monthsElapsed = Math.floor(secondsElapsed / MONTH_IN_SECONDS);
    return `${monthsElapsed} month${monthsElapsed > 1 ? "s" : ""} ago`;
  } else {
    const yearsElapsed = Math.floor(secondsElapsed / YEAR_IN_SECONDS);
    return `${yearsElapsed} year${yearsElapsed > 1 ? "s" : ""} ago`;
  }
}

// formats timestamps to be "hours minutes" (e.g. 1h 2m, 3h 4m)
function formatTimestamp(seconds) {
  if (seconds === 0) {
    return seconds;
  }

  if (!seconds) {
    return "";
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

// formats twitch thumbnail urls to be the size given
function formatTwitchThumbnailUrl(url, isStream, width, height) {
  if (isStream) {
    return url
      .replace("{width}", width.toString())
      .replace("{height}", height.toString());
  }

  return url
    .replace("%{width}", width.toString())
    .replace("%{height}", height.toString());
}

// capitalizes the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  formatGeneralNumber,
  formatTimestampAgo,
  formatTimestamp,
  formatTwitchThumbnailUrl,
  capitalizeFirstLetter,
};
