const segments = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'g', 'e', 'd'],
  3: ['a', 'b', 'g', 'c', 'd'],
  4: ['f', 'g', 'b', 'c'],
  5: ['a', 'f', 'g', 'c', 'd'],
  6: ['a', 'f', 'e', 'd', 'c', 'g'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g']
};

function createSegments(digitElement) {
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(seg => {
      const segment = document.createElement('div');
      segment.classList.add('segment', seg);
      digitElement.appendChild(segment);
  });
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = hours + minutes + seconds;

  Array.from(document.getElementsByClassName('digit')).forEach((digitElement, i) => {
      const digit = timeString[i];
      const activeSegments = segments[digit];
      Array.from(digitElement.getElementsByClassName('segment')).forEach(segment => {
          segment.classList.toggle('on', activeSegments.includes(segment.classList[1]));
      });
  });

  // Toggle separators
  const separators = document.getElementsByClassName('separator');
  Array.from(separators).forEach(separator => {
      separator.style.visibility = separator.style.visibility === 'hidden' ? 'visible' : 'hidden';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.getElementsByClassName('digit')).forEach(createSegments);
  setInterval(updateClock, 1000);
  updateClock();
});
