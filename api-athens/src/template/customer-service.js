import mjml2html from "mjml";
import Handlebars from "handlebars";

export function customerServiceTemplate(data) {
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

        <mj-text font-size="36px" font-weight="700" line-height="20px" letter-spacing="-0.36px" color="#122740">
          Customer Service Request
        </mj-text>
        <mj-text font-size="14px" color="#030507" line-height="22px">
          A new request has been submitted from the Costumer Service form.
        </mj-text>
        <mj-text font-size="20px" font-weight="700" color="#030507" line-height="22px" border-bottom="2px solid #E6EAEF">
          Message
        </mj-text>
        <mj-divider border-color="#E6EAEF" border-width="2px" border-style="solid" padding="10px 25px 0 25px" />


        {{#if helpOption}}
          <mj-text color="#030507" line-height="28px" padding-bottom="0" margin-bottom="0">
            <span style="font-weight:bold">Requirement:</span><span> {{helpOption}}</span>
          </mj-text>
        {{/if}}

        <mj-text>
          <ul>
            <li>
              <span style="font-weight:bold">Subject:</span>
              <span>{{subject}}</span>
            </li>
            <li>
              <span style="font-weight:bold">Message:</span>
              <span>{{message}}</span>
            </li>
          </ul>
        </mj-text>

        <!-- Personal Info -->
        <mj-text font-size="20px" font-weight="700" color="#030507" line-height="28px" padding-bottom="0" margin-bottom="0">
          Personal Info
        </mj-text>
        <mj-divider border-color="#E6EAEF" border-width="2px" border-style="solid" padding="10px 25px 0 25px" />

        <mj-text line-height="20px" color="#1A2736" padding="0">
          <ul style="padding-left: -10px; padding-top: 0; color: #1A2736; padding-bottom: 0;">
            <li><span style="font-weight:bold">Full Name:</span> <span>{{name}}</span></li>
            <li><span style="font-weight:bold">Account Number:</span> <span>{{account}}</span></li>
            <li><span style="font-weight:bold">Type of Service:</span> <span>{{residential_service}}</span></li>
            <li><span style="font-weight:bold">Address:</span> <span>{{address}}</span></li>
            <li><span style="font-weight:bold">City:</span> <span>{{city}}</span></li>
          </ul>
        </mj-text>

        <!-- Contact Info -->
        <mj-text font-size="20px" font-weight="700" color="#030507" line-height="22px" padding-bottom="0" margin-bottom="0">
          Contact Info
        </mj-text>
        <mj-divider border-color="#E6EAEF" border-width="2px" border-style="solid" padding="10px 25px 0 25px" />
        <mj-text line-height="20px">
          <ul style="padding-left: 10px; padding-top: 0; padding-bottom: 0; margin: 0;">
            {{#if phone}}
              <li>
                <span style="font-weight:bold">Phone Number:</span>
                <span style="font-weight:bold; color:#D5172A">
                  <a href="tel:{{pickup_info.contact_phone}}" style="color:#D5172A; text-decoration: none;">{{phone}}.</a>
                </span>
              </li>
            {{/if}}

            {{#if email}}
              <li>
                <span style="font-weight:bold">E-mail:</span>
                <span><a href="mailto:{{pickup_info.email}}" style="text-decoration: none;">{{email}}.</a></span>
              </li>
            {{/if}}
          </ul>
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

  return mjml2html(compile(data)).html;
}
