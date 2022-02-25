@extends('layouts.app')
@section('pageTitle')<title>{{ __('recruitment.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('recruitment.subtitle1') }}@endsection
@section('subtitle2'){{ __('recruitment.subtitle2') }}@endsection
@section('content')
<div class="container">
    <section class="mt-5 wow fadeIn" id="intro">
        <div class="row wow fadeIn">
            <div class="col-md-12 mb-4">
                <!-- Content -->
                <div class="row">
                    <div class="col-md-3 mb-4 m-auto">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/recruitment1.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                    <div class="col-md-8 mb-4 m-auto">
                        <h3 class="headline d-block d-sm-none mt-2">{{ __('recruitment.Contingency') }}</h3>
                        <h3 class="headline d-none d-sm-block mt-1">{{ __('recruitment.Contingency') }}</h3>
                        <hr>
                        <p class="mb-4 text-justify webcontent">{{ __('recruitment.Content1.1') }}</p>
                    </div>
                </div>
                <!-- Content -->
                <br class="my-5"><br>
                <!-- Content -->
                <div class="row">
                    <div class="col-md-3 mb-4 m-auto d-block d-md-none pb-2">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/recruitment2.webp" class="card-img-top banner1" alt="Contingency Recruitment">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>

                    <div class="col-md-8 mb-4 m-auto">
                        <h3 class="headline">{{ __('recruitment.Executive') }}</h3>
                        <hr>
                        <p class="mb-4 text-justify webcontent">{{ __('recruitment.Content2.1') }}</p>
                    </div>
                    <div class="col-md-3 mb-4 m-auto d-none d-md-block">
                        <div class="view overlay z-depth-1-half">
                        <img src="/img/banner/recruitment2.webp" class="card-img-top banner1" alt="Executive Search">
                        <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                </div>
                <!-- Content -->
                <br class="my-4">
                <!-- Content -->
                <div class="row">
                    <!-- Column1 -->
                    <div class="col-md-3 mb-4 m-auto pb-2">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/recruitment3.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                    <!-- Column2 -->
                    <div class="col-md-8 mb-4 m-auto webcontent">
                        <h1 class="mb-4 headline">{{ __('recruitment.Secondment') }}</h1>
                        <hr>
                        <p class="mb-4 t">{!! __('recruitment.Content3.1') !!}</p>
                        {!! __('recruitment.Content3.2') !!}
                    </div>
                </div>
                <!-- Content -->
            </div>

        </div>
    </section>
    <hr class="mb-5">
</div>

@endsection
