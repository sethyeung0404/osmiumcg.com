@extends('layouts.app')
@section('pageTitle')<title>{{ __('our_methodology.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('our_methodology.subtitle1') }}@endsection
@section('subtitle2'){{ __('our_methodology.subtitle2') }}@endsection
@section('content')
    <!--Section: Post-->
    <div class="container">

        <section class="mt-3 our_methodology">
                <div class="col-md-12 mb-4">
                    <div class="row" style="font-weight:900;  --animate-duration: 2s;">
                        <div class="col-4">
                            <p style="color:#C2185B; font-size:32px"
                                class="animate__animated animate__fadeInLeft animate__delay-1s">
                                Experience</p>
                        </div>
                        <div class="col-4">
                            <p style="color:#7E57C2; font-size:32px"
                                class="animate__animated animate__fadeInLeft animate__delay-2s">
                                Understanding</p>
                        </div>
                        <div class="col-4">
                            <p style="color:#0288D1; font-size:32px;"
                                class="animate__animated animate__fadeInLeft animate__delay-3s">
                                Relatoionship</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-2">
                        <h2 class="webtitle">{{ __('our_methodology.subtitle3') }}
                            <hr>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h4 class="headline">{{ __('our_methodology.Step1') }}</h4>
                        <p class="webcontent">
                            {{ __('our_methodology.Content1.1') }}<br><br>{{ __('our_methodology.Content1.2') }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="my-4">
                        <h4 class="headline">{{ __('our_methodology.Step2') }}</h4>
                        <p class="webcontent">{{ __('our_methodology.Content2.1') }}
                            {!! __('our_methodology.List2.2') !!}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="my-4">
                        <h4 class="headline">{{ __('our_methodology.Step3') }}</h4>
                        <p class="webcontent">{{ __('our_methodology.Content3.1') }}
                            {!! __('our_methodology.List3.2') !!}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="my-4">
                        <h4 class="headline">{{ __('our_methodology.Step4') }}</h4>
                        <p class="webcontent">{{ __('our_methodology.Content4.1') }}
                            {!! __('our_methodology.List4.2') !!}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="my-4">
                        <h4 class="headline">{{ __('our_methodology.Step5') }}</h4>
                        <p class="webcontent">{{ __('our_methodology.Content5.1') }}
                            {!! __('our_methodology.List5.2') !!}
                        </p>
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
