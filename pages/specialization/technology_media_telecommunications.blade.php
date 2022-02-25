@extends('layouts.app')
@section('pageTitle')<title>{{ __('tmt.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('tmt.subtitle1') }}@endsection
@section('subtitle2'){{ __('tmt.subtitle2') }}@endsection
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
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Carol.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('tmt.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Carol LAU</p>
                                        <p class="card-text">Senior Manager<br>Head of Financial Technology & TMT Division
                                        </p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item ">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Celine.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('tmt.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Celine POON</p>
                                        <p class="card-text">Consultant<br> TMT Division</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Morgan.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('tmt.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Morgan FONG</p>
                                        <p class="card-text">Consultant<br> TMT Division</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card card-cascade narrower shadow-none ">
                                    <div class="imgonbottom mb-5 mt-5"></div>
                                    <div class="imgontop imgsquare mt-5"><img class=" imgsquare" src="/img/ppl/Alan.webp">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{{ __('tmt.Experts') }}</h4>
                                        <p style="margin-bottom:0;">Alan LAW</p>
                                        <p class="card-text">Consultant<br> TMT Division</p>
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

                <!--Grid column-->
                <div class="col-lg-8 col-sm-8 mb-4">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-justify webcontent">
                                {!! __('tmt.Content1.1') !!}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <h3 class="webhead" style="color:#4285f4;">{{ __('tmt.Tech') }}</h3>
                            {!! __('tmt.List2.1') !!}
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h3 class="webhead" style="color:#4285f4;">{{ __('tmt.Media') }}</h3>
                            {!! __('tmt.List2.2') !!}
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h3 class="webhead" style="color:#4285f4;">{{ __('tmt.Telecom') }}</h3>
                            {!! __('tmt.List2.3') !!}
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/company/osmium-consulting-group/people/"
                        class="btn btn-mdb-color mt-5 mb-5"
                        style="transform: skew(-10deg);">{{ __('tmt.ButtonMeet') }}</a>
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->
            <hr class="mb-5">
    </div>

@endsection
