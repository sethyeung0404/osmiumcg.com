@extends('layouts.app')
@section('pageTitle')<title>{{ __('performance.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('performance.subtitle1') }}@endsection
@section('subtitle2'){{ __('performance.subtitle2') }}@endsection
@section('content')

    <div class="container">
      <section class="mt-5 wow fadeIn webcontent" id="intro">
        <div class="row wow fadeIn">
          <div class="col-md-12 mb-4">
            <!-- Content -->
            <div class="row">
              <div class="col-md-3 mb-4 m-auto">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance1.webp" class="card-img-top banner1" alt="Employee Onboarding">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
              <div class="col-md-8 mb-4 m-auto ">
                <h3 class="mb-4 headline d-block d-sm-none mt-2">{{ __('performance.Onboarding') }}</h3>
                <h3 class="mb-4 headline d-none d-sm-block mt-1">{{ __('performance.Onboarding') }}</h3>
                <hr>
                <p class="text-justify">
                  {!! __('performance.Content1.1') !!}
                  {!! __('performance.Content1.2') !!}
                </p>
              </div>
            </div>
            <!-- Content -->
            <br class="my-4">
            <!-- Content -->
            <div class="row">
              <div class="col-md-3 mb-4 m-auto d-block d-md-none pb-2">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance2.webp" class="card-img-top banner1" alt="Performance Check">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
              <div class="col-md-9 mb-4 m-auto ">
                <h1 class="mb-4 headline">{{ __('performance.Development') }}</h1>
                <hr>
                <p class="text-justify">
                  {!! __('performance.Content2.1') !!}
                  {!! __('performance.Content2.2') !!}
                </p>
              </div>
              <div class="col-md-3 mb-4 m-auto d-none d-md-block pb-2">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance2.webp" class="card-img-top banner1" alt="Performance Check">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
            </div>
            <!-- Content -->
            <br class="my-4">
            <!-- Content -->
            <div class="row">
              <div class="col-md-3 mb-4 m-auto mb-2 pb-2">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance3.webp" class="card-img-top banner1" alt="Business Consultation">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
              <div class="col-md-8 mb-4 m-auto">
                <h1 class="mb-4 headline">{{ __('performance.Consultation') }}</h1>
                <hr>
                <p class="text-justify ">
                  {!! __('performance.Content3.1') !!}
                  {!! __('performance.Content3.2') !!}
                </p>
              </div>
            </div>
            <!-- Content -->
            <br class="my-4">
            <!-- Content -->
            <div class="row">
              <div class="col-md-3 mb-4 m-auto d-block d-md-none pb-2">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance4.webp" class="card-img-top banner1" alt="Performance Management">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
              <div class="col-md-8 mb-4 m-auto">
                <h1 class="mb-4 headline">{{ __('performance.Performance') }}</h1>
                <hr>
                <p class="text-justify ">
                  {!! __('performance.Content4.1') !!}
                  {!! __('performance.Content4.2') !!}
                </p>
              </div>
              <div class="col-md-3 mb-4 m-auto d-none d-md-block">
                <div class="view overlay z-depth-1-half">
                  <img src="/img/banner/performance4.webp" class="card-img-top banner1" alt="Performance Management">
                  <div class="mask rgba-white-light"></div>
                </div>
              </div>
            </div>
            <!-- Content -->
          </div>
        </div>
        <!--Section: Content-->
      </section>
        <hr class="mb-5">
    </div>
@endsection
