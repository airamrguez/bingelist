export function isEmpty(obj) {
  return isNil(obj) || (isFinite(obj.length) && obj.length === 0);
}

export function isNil(obj) {
  return obj == null;
}

export function median(rawSamples = []) {
  const samples = rawSamples.slice().sort();
  const length = samples.length;

  if (length % 2 === 0) {
    const middle = length / 2;
    return (samples[middle - 1] + samples[middle]) / 2;
  }
  return samples[(length - 1) / 2];
}

export function firstGenre(input) {
  return input.trim().replace(/^([A-Za-z ]*)(.*)$/, (_, $1) => $1);
}

export function genresAsText(genres) {
  return genres.map(genre => genre.name).join(', ');
}

export function stringifyIds(json) {
  return JSON.parse(
    JSON.stringify(json, (key, value) => {
      if (key === 'id') {
        return String(value);
      }
      return value;
    }),
  );
}
