@extends('layouts.app')
@section('pageTitle')<title>{{ __('our_methodology.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('our_methodology.subtitle1') }}@endsection
@section('subtitle2'){{ __('our_methodology.subtitle2') }}@endsection
@section('content')
    <!--Section: Post-->
    <div class="container">

      <section class="our_methodology">
        <div class="row wow fadeIn justify-">
          <div class="col-md-12 mb-4">
            <div class="row">
              <div class="mb-1 col-12">
                <p class="animate__animated animate__delay-1s animate__fadeInLeft">
                Our Philosophy
                </p>
                <p style="margin-left: 30px;" class="animate__animated animate__delay-15s animate__fadeInLeft">
                Experience
                </p>
                <p style="margin-left: 45px;" class="animate__animated animate__delay-2s animate__fadeInLeft">
                Understanding
                </p>
                <p style="margin-left: 60px;" class="animate__animated animate__delay-25s animate__fadeInLeft">
                Relatoionship
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h4 class="headline">{{ __('our_methodology.Step1') }}</h4>
                <p class="webcontent">{{ __('our_methodology.Content1.1') }}<br><br>{{ __('our_methodology.Content1.2') }}
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
          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->
      </section>
      <!--Section: Post-->
  <hr class="mb-5">
    </div>

@endsection
