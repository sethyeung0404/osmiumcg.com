@extends('layouts.app')
@section('pageTitle')<title>{{ __('hr_solutions.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('hr_solutions.subtitle1') }}@endsection
@section('subtitle2'){{ __('hr_solutions.subtitle2') }}@endsection
@section('content')
<div class="container">
    <section class="mt-5 wow fadeIn" id="intro">
        <!--Section: Content-->
        <div class="row wow fadeIn">
            <div class="col-md-12 mb-4">
                <!-- Content -->
                <div class="row">
                    <!-- Column1 -->
                    <div class="col-md-3 mb-4 m-auto">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/hr1.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                    <!-- Column2 -->
                    <div class="col-md-8 mb-4 m-auto webcontent">
                        <h3 class="mb-4 headline d-block d-sm-none mt-2">{{ __('hr_solutions.HRSolutions') }}</h3>
                        <h3 class="mb-4 headline d-none d-sm-block mt-1">{{ __('hr_solutions.HRSolutions') }}</h3>
                        <hr>
                        <p class="text-justify webcontent">{{ __('hr_solutions.Content1.1') }}</p>
                    </div>
                </div>
                <!-- Content -->
                <br class="my-5"><br>
                <!-- Content -->
                <div class="row">
                    <!-- Column1 -->
                    <div class="col-md-3 mb-4 m-auto d-block d-md-none pb-2">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/hr2.webp" class="card-img-top banner1" alt="HR Solutions">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>

                    <div class="col-md-8 mb-4 m-auto webcontent">
                        <h1 class="mb-4 headline">{{ __('hr_solutions.Payroll') }}</h1>
                        <hr>
                        <p class="mb-4">{!! __('hr_solutions.Content2.1') !!}</p>
                        {!! __('hr_solutions.Content2.2') !!}
                    </div>
                    <!-- Column2 -->
                    <div class="col-md-3 mb-4 m-auto d-none d-md-block">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/hr2.webp" class="card-img-top banner1" alt="Payroll">
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
                            <img src="/img/banner/hr3.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                    <!-- Column2 -->
                    <div class="col-md-8 mb-4 m-auto webcontent">
                        <h1 class="mb-4 headline">{{ __('hr_solutions.RefCheck') }}</h1>
                        <hr>
                        <p class="mb-4 t">{!! __('hr_solutions.Content3.1') !!}</p>
                    </div>
                </div>
                <!-- Content -->
                <br class="my-4">
                <!-- Content -->
                <div class="row">
                    <!-- Column1 -->
                    <div class="col-md-3 mb-4 m-auto d-block d-md-none pb-2">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/hr4.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>

                    <div class="col-md-8 mb-4 m-auto webcontent">
                        <h1 class="mb-4 headline">{{ __('hr_solutions.Visa') }}</h1>
                        <hr>
                        <p class="mb-4">{{ __('hr_solutions.Content4.1') }}</p>
                    </div>
                    <!-- Column2 -->
                    <div class="col-md-3 mb-4 m-auto d-none d-md-block">
                        <div class="view overlay z-depth-1-half">
                            <img src="/img/banner/hr4.webp" class="card-img-top banner1" alt="">
                            <div class="mask rgba-white-light"></div>
                        </div>
                    </div>
                </div>
                <!-- Content -->

            </div>
            <!--Section: Content-->
        </div>
    </section>
    <!--Main layout-->

</div>
<hr class="mb-5">

@endsection
