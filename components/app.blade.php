<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
 <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176779906-1"></script>
 <script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-176779906-1');
 </script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="shortcut icon" href="/img/Favicon.png" type="image/png">
  @yield('pageTitle')
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
  <script src="{{ asset('js/app.js') }}" defer></script>
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Sans+TC&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/mdb.css">
  <link rel="stylesheet" href="/css/animate.css"/>
  <link rel="stylesheet" href="/css/sina-nav.css">
  <link rel="stylesheet" href="/css/style.css">
</head>

<body>
<!--Main Navigation-->
@include('layouts.navbars.navbar')
<!--/Main Navigation-->

<!--Top Banner-->
        <div class="wow fadeIn">
          <div class="view">
            <picture>
              <source srcset="/img/banner/banner13-2000x250.webp" media="(min-width: 1400px)">
              <!--2000x250-->
              <source srcset="/img/banner/banner13-1400x250.webp" media="(min-width: 900px)">
              <!--1400x250-->
              <source srcset="/img/banner/banner13-900x200.webp" media="(min-width: 600px)">
              <!--900x200-->
              <img srcset="/img/banner/banner13-600x300.webp" alt="responsive image" class="d-block img-fluid">
              <!--600x300-->
            </picture>
            <div class="mask flex-center rgba-white-strong">
            </div>
          </div>
        </div>
        <!--Top Banner-->

        <!--Sitemap-->
        <div class="wow fadeIn d-sm-flex container mb-4">
          <p class="pt-3 sitemap-text">
            <a href="/">{{ __('navbar.Home') }}</a> > @yield('subtitle1') > @yield('subtitle2')
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="webtitle">&nbsp;@yield('subtitle2')
                <hr>
              </h2>
            </div>
          </div>
        </div>
        <!--/.Sitemap-->

<!--Main layout-->
<main>
@yield('content')
</main>
<!--Main layout-->

  <!--Footer-->
  @include('layouts.footers.footer')
  <!--/.Footer-->

  <!-- SCRIPTS -->
  <script type="text/javascript" src="/js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="/js/popper.min.js"></script>
  <script type="text/javascript" src="/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/js/mdb.min.js"></script>
  <script type="text/javascript" src="/js/sina-nav.js"></script>
  <script type="text/javascript" src="/js/dropzone.js"></script>
  <script type="text/javascript" src="/js/jplist.min.js"></script>
  <script type="text/javascript" src="/js/main.js"></script>
  <script> document.createElement("picture");</script>
  <script type="text/javascript" src="/js/picturefill.js"></script>
  @yield('script')
  <script type="text/javascript">
  new WOW().init();
  jplist.init();
  </script>
</body>

</html>
