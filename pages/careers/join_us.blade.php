<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

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
    <link rel="icon" href="/img/Fevicon.ico" type="image/ico">
    <link rel="shortcut icon" href="/img/Fevicon.png" type="image/png">
    <title>{{ __('careers.pageTitle') }}</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap&subset=chinese-traditional">
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/mdb.css">
    <link rel="stylesheet" href="/css/animate.css" />
    <link rel="stylesheet" href="/css/sina-nav.css">
    <link rel="stylesheet" href="/css/jplist.styles.css">
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <!--Main Navigation-->
    @include('layouts.navbars.navbar')
    <!--/Main Navigation-->

    <!--Main layout-->
    <main>

        <section style="margin-left:5%; margin-right:5%;">
            <div class="container container-custom">
                <div class="row">
                    <div class="col-12 col-md-6 col-xl-7 align-self-center" align="center">
                        <h1 class="my-4 text-center d-none d-sm-block animate__fadeInLeft home_subtitle"
                            style="font-size: 70px; line-height:60px;">{{ __('careers.Careers') }}</h1>
                        <h1 class="my-4 d-block d-sm-none animate__fadeInLeft home_subtitle mt-5"
                            style="font-size: 45px; line-height:20px;">{{ __('careers.Careers') }}</h1>
                        <h4 style="letter-spacing:0.15em;">{{ __('careers.Caption1.1') }}</h4>
                        <br><br>
                        <h5 class="d-none d-sm-block">{!! __('careers.Caption1.2') !!}</h5>
                    </div>
                    <div class="col-6 col-xl-5 d-none d-md-block">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <!--Copy this if there are more photos in future-->
                                <div class="carousel-item active">
                                    <!--881x860-->
                                    <img src="/img/joinus/Careers.jpg" alt="Office View" width="100%"
                                        style="max-height:650px;">
                                </div>
                                <!--Copy this if there are more photos in future-->
                                <div class="carousel-item">
                                    <!--881x860-->
                                    <img src="/img/joinus/Careers.jpg" alt="Office View" width="100%"
                                        style="max-height:650px;">
                                </div>
                                <div class="carousel-item">
                                    <!--881x860-->
                                    <img src="/img/joinus/Careers.jpg" alt="Office View" width="100%"
                                        style="max-height:650px;">
                                </div>
                                <!--Copy this if there are more photos in future-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="home_job mb-5" style="margin-left:5%; margin-right:5%;">
            <div class="container container-custom">
                <!--Filter-->
                <div class="row mt-4 pt-4">
                    <div class="col-lg-2 col-md-4 mb-3">
                        <h3><strong>{{ __('careers.Filter') }}</strong></h3>
                    </div>

                    <!-- fill countries -->
                    <div class="col-lg-3 col-md-4 mb-3">
                        <div data-jplist-control="dropdown-filter" data-group="group1" data-name="name1"
                            class="jplist-dd">
                            <div data-type="panel" class="jplist-dd-panel">{{ __('careers.Filter') }}</div>
                            <div data-type="content" class="jplist-dd-content">
                                <div data-value="0" data-path="default" class="jplist-dd-item" data-selected="true">
                                    {{ __('careers.Country') }}</div>
                                <div data-value="1" data-path=".hongkong" class="jplist-dd-item">
                                    {{ __('careers.HK') }}</div>
                                <div data-value="2" data-path=".singapore" class="jplist-dd-item">
                                    {{ __('careers.SG') }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- fill work type -->
                    <div class="col-lg-3 col-md-4 mb-3">
                        <div data-jplist-control="dropdown-filter" data-group="group1" data-name="name2"
                            class="jplist-dd">
                            <div data-type="panel" class="jplist-dd-panel">{{ __('careers.WorkType') }}</div>
                            <div data-type="content" class="jplist-dd-content">
                                <div data-value="0" data-path="default" class="jplist-dd-item" data-selected="true">
                                    {{ __('careers.AllType') }}</div>
                                <div data-value="1" data-path=".fulltime" class="jplist-dd-item">
                                    {{ __('careers.Ft') }}</div>
                                <div data-value="2" data-path=".parttime" class="jplist-dd-item">
                                    {{ __('careers.Pt') }}</div>
                                <div data-value="3" data-path=".internship" class="jplist-dd-item">
                                    {{ __('careers.Intern') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Filter-->

                <div class="row pt-4 mb-5 panel-group" id="accordion">
                    <div data-jplist-group="group1">
                        <!--Recruitment Consutlant ( TMT )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-3">
                                <hr>
                                <h2 class="ls-05"><strong>TALENT ACQUISITION</strong></h2>
                                <div class="rectangle2 animate__fadeInLeft"></div>
                            </div>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#consultant" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Recruitment Consultant ( TMT
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Recruitment Consultant ( TMT
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="consultant" data-parent="#accordion">
                                    <br>
                                    <p style="line-height:30px;">We are now hiring for Recruitment Consultants for TMT
                                        Division.</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for the recruitment process from sourcing suitable candidates to
                                            handling the placements</li>
                                        <li>Become expert in current market / industry trends relating to the industry
                                            or job function</li>
                                        <li>Interview and liaise with candidates to determine their personal strengths
                                            and expertises</li>
                                        <li>Facilitate in negotiations between the client and candidate for the offer
                                            package</li>
                                        <li>Understanding clients’ businesses and identifying their needs on recruitment
                                        </li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Bachelor’s degree or above in any discipline</li>
                                        <li>Related work experience in IT or IT Recruitment is an absolute advantage
                                        </li>
                                        <li>Fresh graduates with strong motivation and passion will also be considered
                                        </li>
                                        <li>Proactive with strong communication skills</li>
                                        <li>A good team player</li>
                                        <li>Fluent English, Cantonese and Mandarin</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Recruitment Consultant ( TMT )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Recruitment Consutlant ( TMT )-->

                        <!--Recruitment Consutlant ( Banking & Financial Services )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#consultant2" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Recruitment Consultant ( Banking and
                                                Financial Services )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Recruitment Consultant ( Banking and
                                                Financial Services )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>Banking and Financial Services Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="consultant2" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">We are now hiring for Recruitment Consultants for
                                        Banking and Financial Services, Corporate, Risk & Compliance Division. Our
                                        client portfolio includes Chinese & International Banks & Investment Banks,
                                        Funds, Family Offices, Securities, Asset Management Firms, Law Firms.</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for the recruitment process from sourcing suitable candidates to
                                            handling the placements</li>
                                        <li>Become expert in current market / industry trends relating to the industry
                                            or job function</li>
                                        <li>Interview and liaise with candidates to determine their personal strengths
                                            and expertises</li>
                                        <li>Facilitate in negotiations between the client and candidate for the offer
                                            package</li>
                                        <li>Understanding clients’ businesses and identifying their needs on recruitment
                                        </li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Bachelor’s degree or above in any discipline</li>
                                        <li>Proven track record in recruitment or sales</li>
                                        <li>Related work experience in Banking & FI is an absolute advantage</li>
                                        <li>Fresh graduates with strong motivation and passion will also be considered
                                        </li>
                                        <li>Proactive with strong communication skills</li>
                                        <li>A good team player</li>
                                        <li>Fluent English, Cantonese and Mandarin</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Recruitment Consultant ( Banking and Financial Services )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Recruitment Consutlant ( Banking & Financial Services )-->

                        <!--Recruitment Consutlant ( Fresh Graduates )
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#consultant3" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Management Trainee ( Fresh Graduates
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Management Trainee ( Fresh Graduates
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>Division on Rotation</span>
                                </div>
                                <div class="collapse panel-collapse" id="consultant3" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">The successful candidate will be entitled a 1 year
                                        training programme within our various departments including TMT Division,
                                        Banking and Financial Services Division, Legal, Risk and Compliance Division.
                                        The training programme would cover in the following areas :</p>
                                    <h5 style="line-height:40px;"><strong>Opportunities :</strong></h5>
                                    <ul>
                                        <li>Ongoing On-The-Job Training and Professional Coaching</li>
                                        <li>Comprehensive Induction Training on Full-on Recruitment Expertise</li>
                                        <li>Become an expert in Current Market / Industry Trends relating to the
                                            industry or job function</li>
                                        <li>Fast Track Career Progression to Management through clear promotional
                                            targets</li>
                                        <li>First Step toward your Career in the HR Industry</li>
                                        <li>Job Rotation on Different Division</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Description :</strong></h5>
                                    <ul>
                                        <li>Participate in the whole Recruitment Process from sourcing suitable
                                            candidates to handling the placements</li>
                                        <li>Interview and liaise with candidates to determine their personal strengths
                                            and job requirements</li>
                                        <li>Facilitate in negotiations between the client and candidate for the offer
                                            package</li>
                                        <li>Understanding Clients’ businesses and identifying their needs on driver
                                            recruitment</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>University Graduates in any discipline with good academic results are
                                            welcomed</li>
                                        <li>IANG Students with fluent Cantonese are also welcomed</li>
                                        <li>Fluency in Cantonese, English, and Mandarin</li>
                                        <li>Passionate in Recruitment or Making a lot of friends</li>
                                        <li>Good Relationship Management Skills</li>
                                        <li>Ambitious and Aggressive for achievement</li>
                                        <li>Patient and tough to work under pressure</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>We Offer :</strong></h5>
                                    <ul>
                                        <li>Base Salary</li>
                                        <li>High Commission Rate</li>
                                        <li>Birthday Leave | Leisure Leave</li>
                                        <li>5-Day Work Week | Weekly Casual Wear Day</li>
                                        <li>Medical Claim | Dental Claim | Bupa Insurance</li>
                                        <li>Company Lunch Sponsor</li>
                                        <li>Early Leave on special occasions</li>
                                        <li>Fluent English, Cantonese and Mandarin</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Management Trainee ( Fresh Graduates )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Recruitment Consutlant ( Fresh Graduates )-->

                        <!--Manager, HR & Administration-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#Admin" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>In-House Recruiter</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>In-House Recruiter</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>Non-Sales Unit</span>
                                </div>
                                <div class="collapse panel-collapse" id="Admin" data-parent="#accordion">

                                    <br>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for the HR / Recruitment process from sourcing suitable
                                            candidates to handling the placements</li>
                                        <li>Become expert in current HR or Recruitment market / HR or Recruitment
                                            industry trends relating to the industry or job function</li>
                                        <li>Interview and liaise with candidates to determine their personal strengths
                                            and job requirements</li>
                                        <li>Facilitate in negotiations between the client and candidate for the offer
                                            package</li>
                                        <li>Understanding clients’ businesses and identifying their needs on driver
                                            recruitment</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Bachelor’s Degree or above in any discipline</li>
                                        <li>Recruitment experience is a MUST</li>
                                        <li>3-10 Years of Experience in Recruitment or HR</li>
                                        <li>Good command of English, Cantonese, and Mandarin</li>
                                        <li>Excellent communication skill and interpersonal skill</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for In-House Recruiter"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Manager, HR & Administration-->

                        <!--Sales Assistant, BFSD-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#SABFSD" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Sales Assistant</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Sales Assistant</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>Banking and Financial Services Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="SABFSD" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">We are looking for </p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Modify candidates' CVs in accordance with our company standard format</li>
                                        <li>Pick up calls for the team when the colleague is not at the office</li>
                                        <li>Check and reply to emails promptly so as to facilitate the business
                                            operation</li>
                                        <li>Handle clients occasionally when the Consultant is not available</li>
                                        <li>Insert and sort out candidate database for record and easy access by the
                                            Consultants</li>
                                        <li>Generate weekly sales report for Division Head to review Consultants'
                                            performance</li>
                                        <li>Set calendars for Consultants regarding our Recruitment Business and
                                            Internal Recruitment</li>
                                        <li>Notify the Administration Department for reserving any meeting areas in the
                                            office</li>
                                        <li>Other ad hoc duties as assigned</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Higher Diploma or above ( Business Related would be an advantage )</li>
                                        <li>Relevant experience as Sales Assistant or Team Assistant will be an
                                            advantage</li>
                                        <li>Fresh Graduates are also welcome</li>
                                        <li>Undergraduates are welcome</li>
                                        <li>Ability to communicate with the Team effectively and smoothly</li>
                                        <li>Ability to prioritize job tasks based on the urgency and importance</li>
                                        <li>Good command of English, Cantonese and Mandarin</li>
                                    </ul>

                                    <p class="webcontent2">
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Sales Assistant"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Sales Assistant, BFSD-->

                        <!--Sales Assistant, TMTD-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#SATMTD" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Sales Assistant</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Sales Assistant</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMTD</span>
                                </div>
                                <div class="collapse panel-collapse" id="SATMTD" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">We are looking for </p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Source candidates through a variety of channels, such as LinkedIn Recruiter,
                                            job boards and personal network</li>
                                        <li>Expand your network by attending events and engaging relevant organizations
                                        </li>
                                        <li>Conduct preliminary phone screens to evaluate candidates’ cultural fit and
                                            technical knowledge based on guidelines provided to you by our hiring
                                            managers</li>
                                        <li>Provide candidates with great experience from application to offer stage by
                                            keeping them engaged and informed</li>
                                        <li>Assist in arranging the interviews with the Clients and the Candidates</li>
                                        <li>Assist in amending CVs, handling interviews and offer emails</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Self-driven, resourceful and proactive personality with a strong work ethic
                                            Someone who can think analytically and out of the box.</li>
                                        <li>Someone who loves to understand how companies are structured and what makes
                                            them tick Persistent, hard working, relentless attitude (so long as you are
                                            hardworking and eager to learn, we will teach you and invest in you!)</li>
                                        <li>Technical background or a passion for technology or finance would be nice to
                                            have</li>
                                        <li>Good communication skills in English, Cantonese and preferably Mandarin and
                                            very presentable</li>
                                        <li>Fresh Graduates are welcome</li>
                                    </ul>

                                    <p class="webcontent2">
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Temporary Clerk, HR ( 6 months )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Sales Assistant, TMTD-->

                        <div data-jplist-item>
                            <div class="col-12 mb-3">
                                <span class="hongkong fulltime parttime internship">
                                    <hr>
                                    <h2 class="ls-05"><strong>ENGINEERING / TECHNOLOGY</strong></h2>
                                    <div class="rectangle animate__fadeInLeft"></div>
                                </span>
                            </div>
                        </div>

                        <!--Software Developer ( Internship )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#intern" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Software Developer ( Internship
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Software Developer ( Internship
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 internship parttime">Internship / Part Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="intern" data-parent="#accordion">
                                    <br>
                                    <p style="line-height:30px;">Our firm is rapidly expanding, We are looking for
                                        bright students to join our team, we are an innovative team and flooded with
                                        ideas, it would be great if you join us and enhance your portfolio! We are
                                        using the latest technologies, you will experience web application development
                                        using React.js, back-end development using node.js!</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Participate in company project development, including website and mobile
                                            application, frontend and backend parts.</li>
                                        <li>Participate in improving frontend and backend frameworks that our team uses.
                                        </li>
                                        <li>Test Projects</li>
                                        <li>Participate in developing various underlying applications, such as databases
                                            and file systems.</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Degree holder or above in Information Technology, Computer Science, or any
                                            other relevant disciplines</li>
                                        <li>Passionate about website and mobile application development</li>
                                        <li>Creative in solving programming problems</li>
                                        <li>Have experience with HTML, CSS, Javascript programming</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Preferred :</strong></h5>
                                    <ul>
                                        <li>Experience in React, Vue or Angular</li>
                                        <li>Experience in Java, Dart or Node.js</li>
                                        <li>Experience programming with Flutter</li>
                                        <li>Experience finishing a whole application</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Software Developer ( Internship )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Software Developer ( Internship )-->

                        <!--UX/UI Designer ( Internship )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#intern2" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>UX/UI Designer</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>UX/UI Designer</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime internship">Full Time / Internship</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="intern2" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">Our firm is rapidly expanding, We are looking for
                                        bright students to join our team, we are an innovative team and flooded with
                                        ideas, it would be great if you join us and enhance your portfolio! We are now
                                        hiring for UX/UI designers.</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for UI and UX design for Mobile Apps and Web project</li>
                                        <li>Brainstorm, research, design, prototype and refine designs</li>
                                        <li>Responsive Web Design</li>
                                        <li>Collaborate with development teams</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Be up-to-date on the latest web design trends</li>
                                        <li>High Diploma or Bachelor degree in Graphic Design, Visual Design,
                                            Interactive Design, Multimedia or relevant discipline</li>
                                        <li>Proficiency in Sketch, Photoshop, Illustrator and other graphic and
                                            interactive design tool</li>
                                        <li>Excellent communication skills and attention to detail</li>
                                        <li>Proactive with strong communication skills</li>
                                        <li>A good team player</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for UX/UI Designer"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--UX/UI Designer ( Internship )-->

                        <!--Frontend Developer, React.js-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#tmt1" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Frontend Developer,
                                                React.js</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Frontend Developer,
                                                React.js</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="tmt1" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">Our firm is rapidly expanding, We are looking for
                                        bright students to join our team, we are an innovative team and flooded with
                                        ideas, it would be great if you join us and enhance your portfolio! We are now
                                        hiring for Frontend Developer.</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Develop / Enhance application system based on requirement</li>
                                        <li>Build and maintain APIs for mobile and web applications</li>
                                        <li>Build large scale system</li>
                                        <li>Prepare technical acceptance test document</li>
                                        <li>Conduct system testing</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Hands-on experience in React.js / React-Native / Node.js is highly
                                            preferable</li>
                                        <li>Knowledge of cloud technology such as AWS / Azure / GCP is a plus</li>
                                        <li>Fresh Graduate with strong IT knowledge is also considered</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Frontend Developer, React.js"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Frontend Developer, React.js-->

                        <!--Java Developer ( Spring Boot )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#tmt2" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Java Developer ( Spring Boot
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Java Developer ( Spring Boot
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="tmt2" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">Our firm is rapidly expanding, We are looking for
                                        bright students to join our team, we are an innovative team and flooded with
                                        ideas, it would be great if you join us and enhance your portfolio! We are using
                                        the latest technologies, you will experience web application development using
                                        React.js, back-end development using node.js!</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for Java-based application services </li>
                                        <li>Perform system design, development, testing, implementation, support,
                                            maintenance and enhancement</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Degree in Computer Science, Information Technology or related disciplines
                                        </li>
                                        <li>Experience in Java development</li>
                                        <li>Object oriented design and basic knowledge of software</li>
                                        <li>Knowledge in Spring Frameworks, Hibernate Frameworks, applications will be
                                            an advantage</li>
                                        <li>Pro-active, initiative and able to complete job assignments independently
                                            with minimum supervision</li>
                                        <li>Willing to work in competent, challenging and team-working environment</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Java Developer ( Spring Boot )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Java Developer ( Spring Boot )-->

                        <!--Software Engineer ( Node.js )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#tmt3" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Software Engineer ( Node.js
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Software Engineer ( Node.js
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="tmt3" data-parent="#accordion">

                                    <br>
                                    <p style="line-height:30px;">Our firm is rapidly expanding, We are looking for
                                        bright students to join our team, we are an innovative team and flooded with
                                        ideas, it would be great if you join us and enhance your portfolio! We are using
                                        the latest technologies, you will experience web application development using
                                        React.js, back-end development using node.js!</p>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Working on Fintech Projects</li>
                                        <li>Working on projects that span a wide range of systems, processes, and
                                            technologies</li>
                                        <li>Build sophisticated product back-end technologies using Node.js & Python
                                        </li>
                                        <li>Collaborating with technical project manager and designers to define and
                                            implement new features in an agile team-work environment embracing Scrum
                                            methodologies</li>
                                        <li>Work in an environment that encourages individual excellence as well as
                                            teamwork</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Degree holder and above in Computer Science/ Engineering or related
                                            disciplines</li>
                                        <li>1+ years experience with Node.js, engineers who have the interest to pick up
                                            Node.js with prior experience are also welcome</li>
                                        <li>Fluent in written and verbal English and Cantonese (Mandarin is an
                                            additional advantage)</li>
                                        <li>Expertise with modern and emerging web API standards and technologies (REST,
                                            OAuth, XML and/or JSON)</li>
                                        <li>Experience in Agile development lifecycle is preferred</li>
                                        <li>Candidates with more experience will be considered for a senior role</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Software Engineer ( Node.js )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Software Engineer ( Node.js )-->

                        <!--Mobile Developer ( Swift / Kotlin )-->
                        <div data-jplist-item>
                            <div class="col-12 mb-4a">
                                <div>
                                    <a class="accordion-toggle" data-toggle="collapse" href="#tmt4" role="button"
                                        aria-expanded="false">
                                        <h3 class="ls-1 d-none d-md-block"><strong>Mobile Developer ( Swift / Kotlin
                                                )</strong></h3>
                                        <h4 class="ls-1 d-block d-md-none"><strong>Mobile Developer ( Swift / Kotlin
                                                )</strong></h4>
                                    </a>
                                    <span class="pr-3 hongkong">Hong Kong</span>
                                    <span class="pr-3 fulltime">Full Time</span>
                                    <span>TMT Division</span>
                                </div>
                                <div class="collapse panel-collapse" id="tmt4" data-parent="#accordion">

                                    <br>
                                    <h5 style="line-height:40px;"><strong>Job Descriptions :</strong></h5>
                                    <ul>
                                        <li>Responsible for mobile application development on iOS / Android Platform
                                        </li>
                                        <li>Assist in the development of mobile applications including programming,
                                            testing and system documentation.</li>
                                    </ul>
                                    <h5 style="line-height:40px;"><strong>Job Requirements :</strong></h5>
                                    <ul>
                                        <li>Bachelor Degree in Computer Science, Information Technology or related
                                            disciplines.</li>
                                        <li>Knowledge / Experience in mobile application development on IOS / Android
                                            platform.</li>
                                        <li>Have solid experience in mobile application development using Java, Kotlin
                                        </li>
                                        <li>Have solid experience in mobile application development using Swift, RxSwift
                                        </li>
                                        <li>Candidates with less experiences will also be considered.</li>
                                    </ul>
                                    <p class="webcontent2">Salary offered will commensurate with qualifications and
                                        experience.
                                        Interested individuals please send CV with details on education and work
                                        experience, stating salary history and expected salary, and indicating your
                                        earliest availability to us by <b><u>clicking "Apply Now!"</u></b>
                                        <br><br>Applicants not invited for interview within 10 weeks from application
                                        date may assume that their applications are unsuccessful.
                                        Personal data collected will be treated in strictest confidence and will only be
                                        used for recruitment purposes.
                                        OCG reserves the right to consider late applications and not to make appointment
                                        for the post advertised.
                                    </p>
                                    <a href="mailto:info@osmiumcg.com?subject=OCG : Application for Mobile Developer ( Swift / Kotlin )"
                                        class="btn btn-mdb-color mb-3">Apply Now!</a>
                                </div>
                            </div>
                        </div>
                        <!--Mobile Developer ( Swift / Kotlin )-->

                        <div data-jplist-control="no-results" data-group="group1" data-name="no-results">
                            <div class="col-12 mb-4a">
                                <h5 style="line-height:40px;"><strong>{{ __('careers.NoResult') }}</strong></h5>
                                <a data-jplist-control="reset" data-group="group1" data-name="reset"
                                    type="button"><u>{{ __('careers.GoBack') }}</u></a>
                            </div>
                            <hr>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <!--Section: Post-->

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
    <script>
        document.createElement("picture");
    </script>
    <script src="/js/picturefill.js"></script>
    <script type="text/javascript">
        new WOW().init();
        jplist.init();
    </script>
</body>

</html>
