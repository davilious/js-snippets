var lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];


var searchTerm = 'array';
var minViews = 1000;

var filtered = lessons
  .filter(function(x) {
    return x.tags.indexOf(searchTerm) > -1;
  })
  .filter(function(x) {
    return x.views > minViews;
  })
  .sort(function(a,b) {
    return a.views - b.views;
  })
  .map(function(x) {
    return '<li>'+ x.title + '</li>';
  })
  .join('\n')

console.log('<ul>' + filtered + '</ul>');
