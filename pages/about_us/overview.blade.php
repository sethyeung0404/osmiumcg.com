@extends('layouts.app')
@section('pageTitle')<title>{{ __('about_us.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('about_us.subtitle1') }}@endsection
@section('subtitle2'){{ __('about_us.subtitle2') }}@endsection
@section('content')
<div class="container">
    <section class="mt-3">
        <div class="row wow fadeIn justify-">
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="col-12">
                        <p class="webcontent"></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h4 class="headline">{{ __('about_us.OCGL') }}</h4>
                        <p class="webcontent">{{ __('about_us.Content1.1') }}</p>
                        <p class="webcontent">{{ __('about_us.Content1.2') }}</p>

                        <br>
                        <h4 class="headline">{{ __('about_us.OurGoal') }}</h4>
                        <p class="webcontent">{{ __('about_us.Content2.1') }}</p>
                        <p class="webcontent">{{ __('about_us.Content2.2') }}</p>
                        <br><br>
                        </p>
                    </div>
                </div>

                <div class="row pt-2">
                    <div class="col-12">
                        <h5 class="animated fadeInLeft">{{ __('index.Sector') }}</h5>
                    </div>

                    <div class="container">
                        <div class="col-12 mt-2 mb-2">
                            <div class="rectangle animated fadeInLeft"></div>
                        </div>
                    </div>
                </div>

                <div class="row mb-2"> <!--no-gutters -->

                    <div class="col-12 col-md-6">
                        <a href="/specialization/banking_and_financial_services" class="linkcolor">
                            <div class="card  mt-2 mb-2 index-card2" style="height: 12rem;border-radius: 0;">
                                <div class="card-body">
                                    <h3 class="card-title" style="letter-spacing: 0.05em;"><strong>{{ __('index.Banking') }}</strong></h3>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-12 col-md-6 text-white">
                        <a href="/specialization/technology_media_telecommunications" class="linkcolorblack">
                            <div class="card mt-2 mb-2  index-card" style="height: 12rem;border-radius: 0;">
                                <div class="card-body">
                                    <h3 class="card-title" style="letter-spacing: 0.05em;"><strong>{{ __('index.TMT') }}</strong></h3>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!--<div class="col-12 col-md-4">
                        <a href="/specialization/corporate" class="linkcolorblack">
                            <div class="card  mt-2 mb-2 index-card" style="height: 15rem;border-radius: 0;">
                                <div class="card-body">
                                    <h3 class="card-title " style="letter-spacing: 0.05em;"><strong>{{ __('index.Corporate') }}</strong></h3>
                                </div>
                            </div>
                        </a>
                    </div>-->
                </div>
                
            </div>
            <!--Grid column-->

        </div>
        <!--Grid row-->
    </section>
    <!--Section: Post-->
    <hr class="mb-5">
</div>
@endsection
