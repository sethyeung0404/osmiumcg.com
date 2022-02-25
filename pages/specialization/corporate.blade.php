@extends('layouts.app')
@section('pageTitle')<title>{{ __('corporate.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('corporate.subtitle1') }}@endsection
@section('subtitle2'){{ __('corporate.subtitle2') }}@endsection
@section('content')

        <!--Section: Content-->
        <div class="container">
          <section class="pt-3">
            <!--Grid row-->
            <div class="row wow fadeIn">
              <!--Grid column-->
              <div class="col-lg-12 col-sm-8 mb-4 ml-4">
                <div class="row">
                  <div class="col-12">
                    <p class="text-justify webcontent">
                      {!! __('corporate.Content1.1')!!}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <h3 class="webhead" style="color:#4285f4;">{{ __('corporate.Corporate') }}</h3>
                    {!! __('corporate.List2.1')!!}
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <h3 class="webhead d-none d-sm-block" style="color:#4285f4;">&nbsp;</h3>
                    {!! __('corporate.List2.2')!!}
                  </div>
                </div>
                <a href="https://www.linkedin.com/company/osmium-consulting-group/people/" class="btn btn-mdb-color mt-5 mb-5" style="transform: skew(-10deg);">{{ __('corporate.ButtonMeet') }}</a>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
            <hr class="mb-5">
            <br><br>
        </section>
    </div>

@endsection
