function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function hide(element) {
    element.classList.add('hidden');
}

function toggle(element) {
    element.classList.toggle('hide');
}

ready(function () {
        var navToggle = document.querySelector('.nav-toggle');
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            toggle(document.querySelector('.mobile-menu'));
            toggle(document.querySelector('.mobile-search'));
            return false;
        });


        var searchToggle = document.querySelector('.search-toggle');
        searchToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            toggle(document.querySelector('.header-search'));
            if (this.classList.contains('active')) {
                document.querySelector('.header-search .search-field').focus();
            } else {
                document.querySelector('.header-search .search-field').blur();
            }
            return false;
        });

        window.onresize = function () {
            if (window.innerWidth > 930) {
                navToggle.classList.remove('active');
                hide(document.querySelector('.mobile-menu'));
                hide(document.querySelector('.mobile-search'));
            } else {
                document.querySelector('.search-toggle').classList.remove('active');
                hide(document.querySelector('.header-search'));
            }
        };

        document.querySelector('.to-the-top').addEventListener('click', function () {
            document.querySelector('html, body').animate({scrollTop: 0});
            return false;
        });

        var resizeVideo = function () {
            var iframes = document.querySelectorAll('iframe');
            var objects = document.querySelectorAll('object');
            var videos = document.querySelectorAll('video');

            [iframes, objects, videos].forEach(function (video) {
                if (video === undefined || video.length === 0) {
                    return;
                }
                video.forEach(function (vid) {
                    var container = vid.parentNode,
                        iTargetWidth = container.width;
                    if (!vid.hasAttribute('data-origwidth')) {
                        vid.setAttribute('data-origwidth', vid.getAttribute('width'));
                        vid.setAttribute('data-origheight', vid.getAttribute('height'));
                    }
                    var ratio = iTargetWidth / vid.getAttribute('data-origwidth');
                    vid.style.width = iTargetWidth + 'px';
                    vid.style.height = (vid.getAttribute('data-origheight') * ratio) + 'px';
                });
            });
        };

        resizeVideo();
        window.onresize = function () {
            resizeVideo();
        };
    }
);