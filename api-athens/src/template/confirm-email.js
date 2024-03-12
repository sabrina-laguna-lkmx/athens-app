import mjml2html from "mjml";
import Handlebars from "handlebars";

export function confirmEmailTemplate(url) {
  const template = `
  <mjml>
  <mj-head>
    <mj-style>
      .color-icon {
      background-color: #485C72;
      }
    </mj-style>
    <mj-style>
      .footer-top {
      padding-bottom: 15px;
      }
    </mj-style>
    <mj-style>
      .footer-bottom {
      bottom: 150px
      }
    </mj-style>
  </mj-head>
  <mj-body>

    <mj-section>
      <mj-column>
        <mj-image align="center" width="120px" height="36px" src="cid:logo-image"></mj-image>
      </mj-column>
    </mj-section>


    <mj-section>
      <mj-column>
        <mj-text font-size="30px" font-weight="700" color="#333333">
          Confirm Your Email
        </mj-text>
        <mj-text font-size="14px" color="#030507" line-height="22px">
          You’ve successfully created your Athens Services’ account.
        </mj-text>
        <mj-text font-size="14px" color="#030507" line-height="22px">
          To activate it, please click below to verify your email address.
        </mj-text>
        <mj-button href="{{url}}" align="left" background-color="#D5172A" border-radius="6px" color="#ffffff" font-size="16px" font-weight="bold">
          Confirm Your Email
        </mj-button>
        <mj-text font-size="14px" color="#030507" line-height="22px">
          Thanks,
        </mj-text>
        <mj-text font-size="14px" color="#030507" line-height="22px">
          Athens Services Team
        </mj-text>
      </mj-column>
    </mj-section>


    <!-- Pie de página -->

    <mj-section>
      <mj-column>
        <mj-text font-size="14px" color="#485C72" line-height="22px" align="center" font-family="Roboto">
          Your Partner to Achieving a Zero Waste Future
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section>
      <mj-column>
        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element href="https://www.facebook.com/athensservices/" src="cid:facebook-image">
          </mj-social-element>
          <mj-social-element href="https://www.instagram.com/athensservices/" src="cid:instagram-image">
          </mj-social-element>
          <mj-social-element href="https://twitter.com/AthensServices" src="cid:x-image">
          </mj-social-element>
          <mj-social-element href="https://www.linkedin.com/company/athens-services/" src="cid:linkedin-image">
          </mj-social-element>
          <mj-social-element href="https://www.youtube.com/channel/UCdC9wePfzdBR4wpjL8T6HVg" src="cid:youtube-image">
          </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>

    <mj-section>
      <mj-column css-class="footer-bottom">
        <mj-text font-size="14px" color="#485C72" line-height="22px" align="center" font-family="Roboto">
          Copyright (C) 2024 Athens Services. All Rights Reserved
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
  `;

  const compile = Handlebars.compile(template);
  const templateValues = { url };

  return mjml2html(compile(templateValues)).html;
}
