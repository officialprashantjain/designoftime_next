import type { Metadata } from "next";
import LegacyScript from "./LegacyScript";
import "./globals.css";

export const metadata: Metadata = {
  description: "Creative studio building digital Products & experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title data-pagetitle="Design of Time Co">Design of Time Co</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link className="favIconBig" rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link className="favIconSmall" rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="stylesheet" href="/build/css/bundle-2bdea8b598.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalRemoveChild = Node.prototype.removeChild;
                Node.prototype.removeChild = function(child) {
                  try {
                    return originalRemoveChild.call(this, child);
                  } catch (e) {
                    if (e.name === 'NotFoundError') {
                      console.warn('Ignored NotFoundError in removeChild', child);
                      return child;
                    }
                    throw e;
                  }
                };
              }
            `,
          }}
        />
      </head>
      <body data-intro="true" suppressHydrationWarning>
        <div id="SiteWrapper">
          <div className="container sizeBlock">
            <div className="grid">
              <div className="col-2 column"></div>
              <div className="col-2 column"></div>
              <div className="col-2 column"></div>
            </div>
          </div>
          
          <div className="logo">
            <a className="button" href="/">
              <img src="/assets/images/Logo_mono.svg" alt="Logo" width="70" height="70" />
            </a>
          </div>
          
          <nav className="MainMenu"></nav>
          <nav className="container items">
            <div className="innerContainer">
              <div className="left">
                <a className="staticLogo" href="/">
                  <img className="staticLogoImg" src="/assets/images/Logo_mono_white.svg" alt="Logo" width="70" height="70" />
                </a>
              </div>
              <div className="center"></div>
              <div className="right">
                <nav className="MenuItems">
                  <a className="work" href="/work">
                    <div className="dotContainer"></div>
                    <p className="label">Work</p>
                  </a>
                  <a href="/services">
                    <div className="dotContainer"></div>
                    <p className="label">Services</p>
                  </a>
                  <a href="/about">
                    <div className="dotContainer"></div>
                    <p className="label">About Us</p>
                  </a>
                </nav>
                <div className="MenuSocial">
                  <div className="links">
                    <a href="https://www.instagram.com/designoftime.co/" target="_blank">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="overlayContainer">
            <div className="dim"></div>
          </div>
          <div id="TemplateLayer">
            {children}
          </div>
          
          
      <div className="mobileBurger">
        <div className="burger">
          
          <svg
            width="17px"
            height="10px"
            viewBox="0 0 17 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="00---Navigation"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Navigation---Open---Default---768"
                transform="translate(-711.000000, -44.000000)"
                fill="#000000"
              >
                <g
                  id="Navigation---768"
                  transform="translate(40.000000, 44.000000)"
                >
                  <g id="Hamburger" transform="translate(671.000000, 0.000000)">
                    <rect
                      id="Rectangle-5"
                      x="0"
                      y="0"
                      width="17"
                      height="2"
                    ></rect>
                    <rect
                      id="Rectangle-5"
                      x="0"
                      y="4"
                      width="17"
                      height="2"
                    ></rect>
                    <rect
                      id="Rectangle-5"
                      x="0"
                      y="8"
                      width="12"
                      height="2"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="closeX">
          <svg
            className="close"
            width="34px"
            height="34px"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <g transform="translate(11.4, 10.4)">
              <path
                className="line1"
                d="M10.94,9.73c0-.06,0-.26-.08-.3s-.23-.29-.37-.42a.6.6,0,0,1-.12-.29c0-.08-.14-.08-.19-.14a4.1,4.1,0,0,1-.26-.41A32.4,32.4,0,0,0,7.16,5.34c-.07,0-.18,0-.22,0C7,5,6.66,5,6.44,4.77,6,4.44,5.66,4,5.27,3.65c0,0-.14,0-.19,0-.21-.13-.32-.38-.6-.37a1.62,1.62,0,0,0-.92-.71c.06-.21-.13-.19-.21-.26s-.1-.15-.18-.2a13.54,13.54,0,0,0-1.11-.84c0-.1,0-.19-.07-.21-.23.16-.44.31-.54.17l-.33.24c0-.19-.18-.08-.37.09.13.24.37.44.17.89,0,.08.08,0,.11.09A1.57,1.57,0,0,0,1.37,3.9c.34.05.43.33.66.56.26-.1.24.15.32.26s.25.12.35.21.13.28.35.23c0,.11,0,.06.05.17a.36.36,0,0,1,.19,0c.35.25.61.67,1,.78,0,.07,0,.11,0,.17s.27.2.38.27.07.16.14.23.25.13.35.21c.37.33.78.73,1,1s.55.49.79.76.42.34.59.54.14.26.23.37.44.2.48.52a1.17,1.17,0,0,1,.2.06A13.37,13.37,0,0,1,10,12c.05.07.09-.14.11-.07.21.12.25.35.41.49s.05-.06.08,0,.12.16.25.15.18-.16.22-.08.12,0,.14.15c.24-.15.26,0,.38.09s.24,0,.33.1.13.26.27.27.06-.1.16-.17a.85.85,0,0,0-.07-.64c-.1-.1,0-.37-.23-.47s.12,0,0-.1-.07,0-.1,0c.17-.17-.06-.4-.17-.36s0,.05,0,.09-.22-.27-.21-.43c.1,0,0,.19.15.17a1.13,1.13,0,0,0-.24-.48c-.11.1.09.16,0,.31-.09-.11-.17-.33-.23-.38s.17-.08.11-.16C11.31,10.09,11.06,10,10.94,9.73Zm.33.62c.07.07-.14-.11,0,0Zm-.4-.55c.11-.08,0,.07.05.07C10.83,10,10.87,9.82,10.87,9.8ZM11,10l-.07-.12S11.11,9.93,11,10Zm.89,1.37c.08-.07.07.07.11.09S11.9,11.43,11.86,11.41Z"
                transform="translate(-0.75 -0.39)"
                fill="#1d1f23"
                fillRule="evenodd"
              ></path>
              <path
                className="line2"
                d="M9.24,2.34c.34,0-.14.11,0,.25s.2-.12.2-.12L9.8,2A6.93,6.93,0,0,1,11.06.53c.08,0,.19.08.27.06s0-.22.2-.19c.45.37-.14.51.16.9-.15.26-.51.52-.29.86-.73.9-.83,2.14-1.81,2.7a6.32,6.32,0,0,1-1.4,1.63,10,10,0,0,1-.75.83c-.05,0-.15,0-.2,0a11.5,11.5,0,0,0-.91,1.06,5.34,5.34,0,0,1-.48.64c-.27.25-.56.68-.91,1.07-.16.2-.44.3-.58.5,0,0,0,.16,0,.2s-.1,0-.14.06,0,.13,0,.16a4.54,4.54,0,0,1-.38.38,3.18,3.18,0,0,1-.4.48,1.37,1.37,0,0,1-.42.25s-.17,0-.24,0-.06.09-.11.11c-.23.08-.61-.06-.7.2a1.23,1.23,0,0,0-.37,0,.78.78,0,0,1-.2-.45c-.15-.15-.32-.15-.38-.28s.37-.24.44-.44-.08-.47.11-.52c0-.09-.1-.23-.09-.31.28-.14.35-.51.59-.76.08-.08.25-.08.33-.17s0-.11,0-.13a2.57,2.57,0,0,1,.33-.32c.15-.14.47-.4.69-.61C3.77,8,4,7.49,4.5,7.13c0-.32.49-.47.63-.79s.57-.46.82-.73C7,4.47,8.06,3.44,9.24,2.34Z"
                transform="translate(-0.75 -0.39)"
                fill="#1d1f23"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      
      <footer className="Footer">
        <div className="container">
          <div className="grid content">
            <div className="left col-2">
              <img
                data-src="/download.gif"
                width="500"
                height="394"
                className="lazyload animation"
              />
            </div>
            <div className="right col-4">
              <div className="section">
                <p className="title">Want to collaborate?</p>
                <p className="body">Work with us<br /></p>
                <div className="emailLink">newbusiness@designoftime.co.in</div>
              </div>
              <div className="section">
                <p className="title">Want to say hi?</p>
                <p className="body">General inquiries<br /></p>
                <div className="emailLink">hello@designoftime.co.in</div>
              </div>
              <div className="section external">
                <p className="title">Want to join us?</p>
                <p className="body">Become a Timekeeper<br /></p>
                <a className="emailLink" href="career" target="_blank"
                  >Apply here</a
                >
              </div>
              <div className="section external intern">
                <p className="title">Want to learn?</p>
                <p className="body">Become an intern<br /></p>
                <a className="emailLink" href="interns" target="_blank"
                  >Apply here</a
                >
              </div>
              <div className="visit">
                <p className="title">View on maps</p>
                <div className="offices">
                  <a
                    className="office"
                    href="https://maps.app.goo.gl/2zMyBdfrGDNhQAEB6"
                    target="_blank"
                  >
                    <p className="city">Indore</p>
                    <p className="address">
                      Plot no 11, Scheme no 78, 1st Floor
                      <br />
                      Indore, IDR 452001, INDIA
                      <br />
                      Cell: +91 89658 06168
                      <br />
                    </p>
                  </a>
                  <a
                    className="privacy-link privacy-link--mobile"
                    href="/privacy-policy"
                    target="_blank"
                    >Global Privacy Statement</a
                  >
                </div>
                <a
                  className="privacy-link privacy-link--desktop"
                  href="/privacy-policy"
                  target="_blank"
                  >Global Privacy Statement</a
                >
              </div>
            </div>
          </div>
          <div className="innerContainer bottom">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M0,55 C107.57331,55 172.397965,0 261.914001,0 C351.430038,0 418.082695,55 524.041347,55 C630,55 -108,55 0,55 Z"
                  className="bulge"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <p className="label">Back to top</p>
          </div>
        </div>
      </footer>
      <div id="MenuBulge">
        <svg className="right">
          <g>
            <path></path>
          </g>
        </svg>
      </div>
      <div className="burgers">
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 15"
            style={{fill: "white"}}
          >
            <path
              d="M689.48,376.38c0,.14-.22,0-.22.18s.19.07.28.06l.67,0a9.8,9.8,0,0,1,2.34-.14c.07,0,.09.2.17.24s.2-.15.33,0c.05.61-.56.27-.64.77-.35.07-.87,0-1,.4-1.37.11-2.52.92-3.82.6a8.77,8.77,0,0,1-2.57.14c-.45,0-.9.08-1.34,0-.08,0-.13-.12-.19-.12a14.89,14.89,0,0,0-1.67.09c-.33,0-.59.12-.95.1s-1.05.06-1.67.09c-.31,0-.62-.12-.92-.07-.06,0-.13.11-.2.12s-.1-.06-.17-.06-.1.11-.14.12c-.19,0-.43,0-.64,0a4.81,4.81,0,0,1-.75,0,2,2,0,0,1-.56-.13c-.07,0-.13-.14-.19-.18s-.14,0-.2,0c-.26-.11-.45-.5-.75-.37-.09-.1-.16-.25-.28-.3a.79.79,0,0,1,.22-.48c0-.22-.13-.34-.08-.48.28-.16.52.1.75,0s.33-.39.53-.29c.08-.06.11-.24.2-.3.35.11.73-.1,1.14-.1.14,0,.28.12.42.13s.06-.11.08-.12a3.19,3.19,0,0,1,.56,0c.24,0,.72.07,1.09.08a11.88,11.88,0,0,1,2.09-.09c.31-.2.81,0,1.2-.1s.87.09,1.31.08C685.79,376.25,687.55,376.3,689.48,376.38Z"
              transform="translate(-674 -376)"
              fillRule="evenodd"
            ></path>
            <path
              d="M692.08,383.38c0,.26-.12,0-.17.07s.05.59-.07.58a2.62,2.62,0,0,0-.92.13c-.12.11.1,0,0,.24s-.38,0-.63.08-.68.34-1,.21c0,.26.1.08.14.16a18.09,18.09,0,0,1-3.31.11c-.13,0-.27-.11-.4-.1s-.31.23-.46.24-.61-.11-.91-.11c-.56,0-1.13.29-1.69.29a6.74,6.74,0,0,0-.91,0s-.1-.08-.14,0a1.63,1.63,0,0,0-.06.23s-.09-.26-.14-.28-.34.18-.49.12a2.18,2.18,0,0,0-.71-.3,6.06,6.06,0,0,0-1.57,0,4.76,4.76,0,0,1-1.12.31,3.28,3.28,0,0,0-1.54.08c-.18.08-.37.36-.55.34s-.35-.51-.57-.15c-.17-.39-.17-.54-.39-.34,0-.8.2-.67.3-1a6,6,0,0,1,.21-.91,2.82,2.82,0,0,0,1-.58c.23-.19.31-.15.6-.08.08,0,.14-.16.23-.18.25-.05.52.22.77.2s.29-.2.43-.25.17.1.26.07.08-.21.12-.21.24.13.37.1.26-.24.4-.26.54.19.82.21c.6,0,1.23,0,1.85,0a14.32,14.32,0,0,0,2.92-.33,8.05,8.05,0,0,0,1,0,16.56,16.56,0,0,1,2.4,0,5.91,5.91,0,0,1,3,.67C691.55,382.84,691.85,382.75,692.08,383.38Z"
              transform="translate(-674 -376)"
              fillRule="evenodd"
            ></path>
            <path
              d="M693.05,389.21c0,.2-.13,0-.18.06s.06.44-.07.44a3.83,3.83,0,0,0-1,.09c-.13.09.11,0,0,.18s-.4,0-.66.06a2.3,2.3,0,0,1-1.09.16c0,.19.11.06.15.12a26.87,26.87,0,0,1-3.5.08c-.14,0-.28-.08-.42-.08s-.32.17-.49.18c-.32,0-.64-.08-1-.09-.59,0-1.19.22-1.78.21-.34,0-.67,0-1,0,0,0-.11-.06-.15,0a1,1,0,0,0-.06.17s-.09-.19-.15-.21-.36.13-.51.09a2.87,2.87,0,0,0-.75-.23,9,9,0,0,0-1.66,0,6.7,6.7,0,0,1-1.18.24,4.84,4.84,0,0,0-1.63.06c-.19.06-.39.27-.58.26s-.37-.38-.6-.11c-.18-.29-.18-.4-.42-.26,0-.6.21-.5.32-.75a3.47,3.47,0,0,1,.22-.68,3.47,3.47,0,0,0,1.09-.43.74.74,0,0,1,.63-.06c.09,0,.15-.12.24-.14.26,0,.55.17.81.15s.31-.15.46-.19.18.08.27,0,.08-.15.12-.16.26.1.39.07.28-.18.43-.19a6.62,6.62,0,0,1,.87.16c.63,0,1.3,0,2,0a21.09,21.09,0,0,0,3.08-.25c.34,0,.69.07,1,0a24.61,24.61,0,0,1,2.53,0,8.43,8.43,0,0,1,3.22.5C692.48,388.81,692.8,388.74,693.05,389.21Z"
              transform="translate(-674 -376)"
              fillRule="evenodd"
            ></path>
          </svg>
          <div className="hitarea right"></div>
        </div>
      </div>
      <div className="closeBulge">
        <div className="left">
          <svg
            className="bulge"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <g id="main">
              <path id="curve" d="M0,0 C0,250 0,250 0,500 Z"></path>
            </g>
          </svg>
          <svg
            className="close"
            width="34px"
            height="34px"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <g transform="translate(11.4, 10.4)">
              <path
                className="line1"
                d="M10.94,9.73c0-.06,0-.26-.08-.3s-.23-.29-.37-.42a.6.6,0,0,1-.12-.29c0-.08-.14-.08-.19-.14a4.1,4.1,0,0,1-.26-.41A32.4,32.4,0,0,0,7.16,5.34c-.07,0-.18,0-.22,0C7,5,6.66,5,6.44,4.77,6,4.44,5.66,4,5.27,3.65c0,0-.14,0-.19,0-.21-.13-.32-.38-.6-.37a1.62,1.62,0,0,0-.92-.71c.06-.21-.13-.19-.21-.26s-.1-.15-.18-.2a13.54,13.54,0,0,0-1.11-.84c0-.1,0-.19-.07-.21-.23.16-.44.31-.54.17l-.33.24c0-.19-.18-.08-.37.09.13.24.37.44.17.89,0,.08.08,0,.11.09A1.57,1.57,0,0,0,1.37,3.9c.34.05.43.33.66.56.26-.1.24.15.32.26s.25.12.35.21.13.28.35.23c0,.11,0,.06.05.17a.36.36,0,0,1,.19,0c.35.25.61.67,1,.78,0,.07,0,.11,0,.17s.27.2.38.27.07.16.14.23.25.13.35.21c.37.33.78.73,1,1s.55.49.79.76.42.34.59.54.14.26.23.37.44.2.48.52a1.17,1.17,0,0,1,.2.06A13.37,13.37,0,0,1,10,12c.05.07.09-.14.11-.07.21.12.25.35.41.49s.05-.06.08,0,.12.16.25.15.18-.16.22-.08.12,0,.14.15c.24-.15.26,0,.38.09s.24,0,.33.1.13.26.27.27.06-.1.16-.17a.85.85,0,0,0-.07-.64c-.1-.1,0-.37-.23-.47s.12,0,0-.1-.07,0-.1,0c.17-.17-.06-.4-.17-.36s0,.05,0,.09-.22-.27-.21-.43c.1,0,0,.19.15.17a1.13,1.13,0,0,0-.24-.48c-.11.1.09.16,0,.31-.09-.11-.17-.33-.23-.38s.17-.08.11-.16C11.31,10.09,11.06,10,10.94,9.73Zm.33.62c.07.07-.14-.11,0,0Zm-.4-.55c.11-.08,0,.07.05.07C10.83,10,10.87,9.82,10.87,9.8ZM11,10l-.07-.12S11.11,9.93,11,10Zm.89,1.37c.08-.07.07.07.11.09S11.9,11.43,11.86,11.41Z"
                transform="translate(-0.75 -0.39)"
                fill="#1d1f23"
                fillRule="evenodd"
              ></path>
              <path
                className="line2"
                d="M9.24,2.34c.34,0-.14.11,0,.25s.2-.12.2-.12L9.8,2A6.93,6.93,0,0,1,11.06.53c.08,0,.19.08.27.06s0-.22.2-.19c.45.37-.14.51.16.9-.15.26-.51.52-.29.86-.73.9-.83,2.14-1.81,2.7a6.32,6.32,0,0,1-1.4,1.63,10,10,0,0,1-.75.83c-.05,0-.15,0-.2,0a11.5,11.5,0,0,0-.91,1.06,5.34,5.34,0,0,1-.48.64c-.27.25-.56.68-.91,1.07-.16.2-.44.3-.58.5,0,0,0,.16,0,.2s-.1,0-.14.06,0,.13,0,.16a4.54,4.54,0,0,1-.38.38,3.18,3.18,0,0,1-.4.48,1.37,1.37,0,0,1-.42.25s-.17,0-.24,0-.06.09-.11.11c-.23.08-.61-.06-.7.2a1.23,1.23,0,0,0-.37,0,.78.78,0,0,1-.2-.45c-.15-.15-.32-.15-.38-.28s.37-.24.44-.44-.08-.47.11-.52c0-.09-.1-.23-.09-.31.28-.14.35-.51.59-.76.08-.08.25-.08.33-.17s0-.11,0-.13a2.57,2.57,0,0,1,.33-.32c.15-.14.47-.4.69-.61C3.77,8,4,7.49,4.5,7.13c0-.32.49-.47.63-.79s.57-.46.82-.73C7,4.47,8.06,3.44,9.24,2.34Z"
                transform="translate(-0.75 -0.39)"
                fill="#1d1f23"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      
          <div id="BackgroundRenderer">
            <div className="container">
              <div className="innerContainer"><canvas></canvas></div>
            </div>
          </div>
        </div>
        
        <div className="Intro">
          <div className="container">
            <div className="innerContainer">
              <div className="title">Something something</div>
              <div className="body">
                We creates joyful digital ideas, products, brand identities and experiences that connect the hearts of brands to the hearts of their audiences.
              </div>
            </div>
          </div>
        </div>
        
        <video muted loop playsInline autoPlay crossOrigin="anonymous" className="sharedVideo"></video>
        
        <div className="DebugGrid">
          <div className="container">
            <div className="grid">
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
        
        <LegacyScript />
      </body>
    </html>
  );
}
