import React from 'react'

export default function LayoutPage() {
  return (
    <div>
      {/* Banner */}
      <div class="wow fadeIn">
        <div class="view">
          <source
            srcset="/img/banner/banner13-2000x250.webp"
            media="(min-width: 1400px)"
          />
          <source
            srcset="/img/banner/banner13-1400x250.webp"
            media="(min-width: 900px)"
          />
          <source
            srcset="/img/banner/banner13-900x200.webp"
            media="(min-width: 600px)"
          />
          <img
            srcset="/img/banner/banner13-600x300.webp"
            alt="responsive image"
            class="d-block img-fluid"
          />
          <div class="mask flex-center rgba-white-strong"></div>
        </div>
      </div>

      {/* Sitemap */}
      <div class="wow fadeIn d-sm-flex container mb-4">
        <p class="sitemap-text pt-3">
          <a href="/">a</a>
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="webtitle">
              &nbsp;@yield('subtitle2')
              <hr />
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
