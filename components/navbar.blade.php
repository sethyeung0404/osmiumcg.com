<header>
    <!--Navbar Final-->
    <div class="nav-container">
        <nav class="stroke sina-nav mobile-sidebar navbar-fixed" data-top="40" data-md-top="40" data-xl-top="40">
            <div class="container-fluid">

                <!-- right nav (social icons)-->
                <div class="extension-nav collapse navbar-collapse">
                    <ul>
                        <!--Contact Method-->
                        <li>
                            <a class="navfont"
                                style="font-size: 14px; font-weight:700; color: #5885AF; padding: 10px 15px;">{!! __('navbar.ContactNum') !!}</a>
                        </li>
                        <!--Contact Method-->
                        <li><a style="color:#3b5998;"
                                href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                                target="_blank"><i class="fab fa-facebook-f fa-fw mr-2"></i></a></li>
                        <li><a style="color:#0e76a8;" href="https://www.linkedin.com/company/osmium-consulting-group"
                                target="_blank"><i class="fab fa-linkedin fa-fw mr-2"></i></a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="language"><i
                                    class="fas fa-globe-americas fa-fw mr-2"></i></a>
                            <ul class="dropdown-menu short-menu" id="language-menu">
                                <li><a href="/locale/en" class="dropdown">&nbsp;&nbsp;English</a></li>
                                <li><a href="/locale/zh_HK" class="dropdown">&nbsp;&nbsp;繁體中文</a></li>
                                <li><a href="/locale/zh_CN" class="dropdown">&nbsp;&nbsp;简体中文</a></li>
                                <li><a href="/locale/ja_JP" class="dropdown">&nbsp;&nbsp;日本語</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- right nav (social icons)-->

                <!-- Toggle Button & Logo -->
                <div class="sina-nav-header social-on">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fas fa-bars"></i>
                    </button>
                    <a class="sina-brand" href="/">
                        <img class="logo_h" src="/img/nav/logo.png" alt="" class="logo-primary">
                    </a>
                </div><!-- /.Toggle Button & Logo -->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="sina-menu" data-in="fadeInLeft" data-out="fadeInOut">
                        <!--Home (mobile-only)-->
                        <li class="mobilenav">
                            <a class="navfont" href="/">{{ __('navbar.HOME') }}</a>
                        </li>
                        <!--Home (mobile-only)-->
                        <!--About_us-->
                        <li class="dropdown">
                            <a href="#" class="navfont dropdown-toggle" data-toggle="dropdown"
                                id="aaa">{{ __('navbar.About') }}</a>
                            <ul class="dropdown-menu" id="aaa-menu">
                                <li><a href="/about_us/overview">&nbsp;&nbsp;{{ __('navbar.Overview') }}</a></li>
                                <li><a href="/about_us/our_methodology">&nbsp;&nbsp;{{ __('navbar.Methodology') }}</a>
                                </li>
                                <li><a
                                        href="/about_us/sustainability">&nbsp;&nbsp;{{ __('navbar.Sustainability') }}</a>
                                </li>
                            </ul>
                        </li>
                        <!--About_us-->
                        <!--Solutions-->
                        <li class="dropdown">
                            <a href="#" class="navfont dropdown-toggle" data-toggle="dropdown"
                                id="bbb">{{ __('navbar.Solutions') }}</a>
                            <ul class="mid-menu dropdown-menu" id="bbb-menu">
                                <li><a href="/solutions/recruitment">&nbsp;&nbsp;{{ __('navbar.Recruitment') }}</a>
                                </li>
                                <li><a href="/solutions/hr_solutions">&nbsp;&nbsp;{{ __('navbar.HR') }}</a></li>
                                <li><a
                                        href="/solutions/performance_management">&nbsp;&nbsp;{{ __('navbar.Performance') }}</a>
                                </li>
                            </ul>
                        </li>
                        <!--Solutions -->
                        <!--Specialization-->
                        <li class="dropdown">
                            <a href="#" class="navfont dropdown-toggle" data-toggle="dropdown"
                                id="ccc">{{ __('navbar.Specialization') }}</a>
                            <ul class="mid-menu dropdown-menu" id="ccc-menu">
                                <li><a
                                        href="/specialization/banking_and_financial_services">&nbsp;&nbsp;{{ __('navbar.Banking') }}</a>
                                </li>
                                <li><a
                                        href="/specialization/technology_media_telecommunications">&nbsp;&nbsp;{{ __('navbar.TMT') }}</a>
                                </li>
                            </ul>
                        </li>
                        <!--Specialization-->
                        <!--Careers-->
                        <li class="dropdown">
                            <a class="navfont" href="/careers/careers">{{ __('navbar.Careers') }}</a>
                        </li>
                        <!--Careers-->
                        <!--Contact-->
                        <li>
                            <a class="navfont contactani"
                                href="/contact_us">{{ __('navbar.Contact_Us') }}</a>
                        </li>
                        <!--Contact-->
                        <li class="mobilenav dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="language2"><i
                                    class="fas fa-globe-americas fa-fw mr-2"></i>{{ __('navbar.Language') }}</a>
                            <ul class="dropdown-menu" id="language2-menu">
                                <li><a href="/locale/en" class="dropdown">&nbsp;&nbsp;English</a></li>
                                <li><a href="/locale/zh_HK" class="dropdown">&nbsp;&nbsp;繁體中文</a></li>
                                <li><a href="/locale/zh_CN" class="dropdown">&nbsp;&nbsp;简体中文</a></li>
                                <li><a href="/locale/ja_JP" class="dropdown">&nbsp;&nbsp;日本語</a></li>
                            </ul>
                        </li>
                        <!--Social Icons-->
                        <li class="mobilenav">
                            <ul>
                                <li><a style="color:#3b5998;"
                                        href="https://www.facebook.com/Osmium-Consulting-Group-106189320975122/"
                                        target="_blank"><i
                                            class="fab fa-facebook-f fa-fw mr-2"></i>{{ __('navbar.Facebook') }}</a>
                                </li>
                                <li><a style="color:#0e76a8;"
                                        href="https://www.linkedin.com/company/osmium-consulting-group"
                                        target="_blank"><i
                                            class="fab fa-linkedin fa-fw mr-2"></i>{{ __('navbar.LinkedIn') }}</a>
                                </li>
                            </ul>
                        </li>
                        <!--Social Icons-->
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- .container -->
        </nav>
    </div>
    <!--Navbar Final-->
</header>
