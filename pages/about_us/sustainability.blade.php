@extends('layouts.app')
@section('pageTitle')<title>{{ __('sustainability.pageTitle') }}</title>@endsection
@section('subtitle1'){{ __('sustainability.subtitle1') }}@endsection
@section('subtitle2'){{ __('sustainability.subtitle2') }}@endsection
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
                    <h5 class="webcontent">{!! __('sustainability.Quote') !!}</h5>
                    <br><br>
                      <h4 class="headline">{{ __('sustainability.OurResponsibilities') }}</h4>
                      <p class="webcontent">{{ __('sustainability.Content1.1') }}</p>
                      <br>
                      <h4 class="headline">{{ __('sustainability.OurAim') }}</h4>
                      <p class="webcontent">{{ __('sustainability.Content2.1') }}</p>
                      <br>
                  </div>
                </div>

                <div class="row pt-2">
                  <div class="col-12">
                    <h4 class="headline animated fadeInLeft">{{ __('sustainability.Our4Pillars') }}</h4>
                  </div>

                  <div class="container">
                    <div class="col-12 mt-2 mb-2">
                      <div class="rectangle animated fadeInLeft"></div>
                    </div>
                  </div>
                </div>

                <div class="row no-gutters mb-2">

                  <div class="col-12 col-sm-6">
                    <a class="linkcolorblack">
                      <div class="card mt-2 mb-2 index-card3" style="height: 25rem;border-radius: 0;">
                        <div class="card-body">
                          <h3 class="card-title" style="letter-spacing: 0.05em;"><strong>{{ __('sustainability.OurCommunity') }}</strong></h3>
                          <div class="rectangle brown lighten-2"></div>
                          <p class="card-text">
                          {!! __('sustainability.ListCom') !!}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-12 col-sm-6">
                    <a class="linkcolorblack">
                      <div class="card mt-2 mb-2 index-card4" style="height: 25rem;border-radius: 0;">
                        <div class="card-body">
                          <h3 class="card-title" style="letter-spacing: 0.05em;"><strong>{{ __('sustainability.OurPeople') }}</strong></h3>
                          <div class="rectangle red lighten-2"></div>
                          <p class="card-text">
                            {!! __('sustainability.ListPeo') !!}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-12 col-sm-6">
                    <a class="linkcolorblack">
                      <div class="card mt-2 mb-2 index-card5" style="height: 25rem;border-radius: 0;">
                        <div class="card-body">
                          <h3 class="card-title " style="letter-spacing: 0.05em;"><strong>{{ __('sustainability.OurCustomers') }}</strong></h3>
                          <div class="rectangle purple darken-2"></div>
                          <p class="card-text">
                            {!! __('sustainability.ListCus') !!}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-12 col-sm-6">
                    <a class="linkcolorblack">
                      <div class="card mt-2 mb-2 index-card6" style="height: 25rem;border-radius: 0;">
                        <div class="card-body">
                          <h3 class="card-title " style="letter-spacing: 0.05em;"><strong>{{ __('sustainability.CorporateGovernance') }}</strong></h3>
                          <div class="rectangle pink darken-2"></div>
                          <p class="card-text">
                            {!! __('sustainability.ListCor') !!}
                          </p>
                        </div>
                      </div>
                    </a>
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
