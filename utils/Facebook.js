import Script from 'next/script'

export const FACEBOOK_ID = process.env.NEXT_PUBLIC_FACEBOOK_ID

export default function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="Facebook" strategy="lazyOnload">
        {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", ${FACEBOOK_ID});
          chatbox.setAttribute("attribution", "biz_inbox");
      
          window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v15.0'
              });
          };
      
          (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/zh_HK/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
      `}
      </Script>
    </div>
  )
}
