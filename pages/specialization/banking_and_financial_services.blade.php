@extends('layouts.app')
@section('pageTitle')<title>{{ __('banking.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('banking.subtitle1') }}@endsection
@section('subtitle2'){{ __('banking.subtitle2') }}@endsection
@section('content')
    <div class="container">
        <section class="pt-3">
            <!--Grid row-->
            <div class="row wow fadeIn">
                <!--Grid column-->
                <div class="col-lg-4 col-sm-4 mb-4">
                    <!--Carousel Wrapper-->
                    <div id="small-carousel" class="carousel slide carousel-multi-item" data-ride="carousel">
                        <!--Controls-->
                        <a class="carousel-control-next" href="#small-carousel" data-slide="next"><i
                                class="fas fa-chevron-right" style="font-size:30px"></i></a>
                        <!--/.Controls-->
                        <!--Slides-->
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare"
                                            src="/img/ppl/William.webp"></div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('banking.Experts') }}</h4>
                                        <p style="margin-bottom:0;">William TANG</p>
                                        <p class="card-text">Managing Director<br>Head of Wealth Management, Retail &
                                            Private Banking Recruitment</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare"
                                            src="/img/ppl/Charlton.webp"></div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('banking.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Charlton LAM</p>
                                        <p class="card-text">Senior Manager<br>Deputy Head of Banking and Financial Services
                                            Division</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Alec.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('banking.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Alec MA</p>
                                        <p class="card-text">Manager<br>Banking and Financial Services Division</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Abby.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('banking.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Abby LEUNG</p>
                                        <p class="card-text">Assistant Manager<br>Banking and Financial Services Division
                                        </p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Roberta.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('banking.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Roberta LEE</p>
                                        <p class="card-text">Associate Consultant<br>Banking and Financial Services Division
                                        </p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--/.Slides-->
                    </div>
                    <!--/.Carousel Wrapper-->
                </div>
                <!--Grid column-->
                <div class="col-lg-8 col-sm-8 mb-4">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-justify webcontent">
                                {!! __('banking.Content1.1') !!}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <h3 class="webhead" style="color:#4285f4;">{{ __('banking.Banking') }}</h3>
                            {!! __('banking.List2.1') !!}
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <h3 class="webhead d-none d-sm-block" style="color:#4285f4;">&nbsp;</h3>
                            {!! __('banking.List2.2') !!}
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/company/osmium-consulting-group/people/"
                        class="btn btn-mdb-color mt-5 mb-5"
                        style="transform: skew(-10deg);">{{ __('banking.ButtonMeet') }}</a>
                </div>
            </div>
            <!--Grid row-->
            <hr class="mb-5">
        </section>
    </div>
@endsection
