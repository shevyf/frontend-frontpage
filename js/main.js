var app = angular.module('frontpageApp', []);
app.controller('myCtrl', function($scope) {
    $scope.details = {
        name: "Shevaun Frazier",
        title: "Front End Developer",
        img: 'images/splash.png',
        avatar: 'images/mondrian.png'
    };
    $scope.projects = [
        {
            title: 'Resume',
            github: 'frontend-nanodegree-resume',
            link: 'resume/index.html',
            img: 'images/resume2.png',
            alt: 'My Resume'
        },
        {
            title: 'Frogger Clone',
            github: 'frontend-nanodegree-arcade-game',
            link: 'frogger/index.html',
            img: 'images/frogger-snip.png',
            alt: 'Frogger game clone'
        },
        {
            title: 'Web Performance Optimisation',
            github: 'frontend-nanodegree-mobile-portfolio-all-files',
            link: 'portfolio/index.html',
            img: 'images/performance.png',
            alt: 'Performance Optimisation Project'
        },
        {
            title: 'Neighbourhood Map Site',
            github: 'frontend-patterns-mapsite-full',
            link: 'mapsite/dev/index.html',
            img: 'images/mapsite.png',
            alt: 'Neighbourhood Map Site'
        }
    ];
});