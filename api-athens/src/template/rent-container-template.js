import mjml2html from "mjml";
import Handlebars from "handlebars";

export function rentContainerTemplate(
  itemType,
  containerSize,
  deliveryDate,
  removalDate,
  notes,
  evidenceMaterial,
  fullName,
  accountNumber,
  address,
  city,
  preferedCommunicationMethod,
  contactPhone,
  secundaryPhone,
  emailAddress
) {
  const template = `
    <mjml>
        <mj-body>

            <mj-section>
                <mj-column>
                    <mj-image align="center" width="120px" height="36px" src="cid:logo-image"></mj-image>
                </mj-column>
            </mj-section>
            
            <mj-section>
                <mj-column>
                    <mj-text font-size="20px" font-weight="700">Rent-A-Container Request</mj-text>
                    <mj-text font-size="14px">A new request has been submitted from the Costumer Service form.</mj-text>
                </mj-column>
            </mj-section>

            <mj-section>
                <mj-column>
                    <mj-text font-size="20px" color="#1A2736" font-weight="700" font-family="helvetica">Summary</mj-text>
                    <mj-divider border-color="#E6EAEF" border-width="1px"></mj-divider>

                    <mj-text>
                        <ul>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Item Type: <span style="font-size:14px;font-weight:400;color:#030507">{{itemType}}</span></li>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Container Size: <span style="font-size:14px;font-weight:400;color:#030507">{{containerSize}}</span></li>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Delivery Date: <span style="font-size:14px;font-weight:400;color:#030507">{{deliveryDate}}</span></li>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Removal Date: <span style="font-size:14px;font-weight:400;color:#030507">{{removalDate}}</span></li>
                        </ul>
                    </mj-text>

                </mj-column>
            </mj-section>

            <mj-section>
                <mj-column>
                    <mj-text font-size="20px" color="#1A2736" font-weight="700" font-family="helvetica">Notes</mj-text>
                    <mj-divider border-color="#E6EAEF" border-width="1px"></mj-divider>
                    <mj-text>
                        <div style="margin-bottom:15px">
                            <span style="font-size:14px;font-weight:600;padding-bottom:5px">Notes: </span>
                            <span style="font-size:14px;font-weight:400;color:#030507">{{notes}}</span>
                        </div>
                        <span style="font-size:14px;font-weight:600;padding-bottom:5px"> Evidence Material</span>
                    </mj-text>
                    ${evidenceMaterial
                      .map(
                        (archivo, index) => `
                    <mj-image width="300px" src="cid:evidence-image-${index}" alt="Imagen ${archivo.name}" />
                    `
                      )
                      .join("")}
                </mj-column>
            </mj-section>

            <mj-section>
            <mj-column>
                <mj-text font-size="20px" color="#1A2736" font-weight="700" font-family="helvetica">Personal Info</mj-text>
                <mj-divider border-color="#E6EAEF" border-width="1px"></mj-divider>
                <mj-column width="100%">
                    <mj-text>
                        <ul>
                            <li style="font-size:14px;font-weight:600;padding-bottom:5px">Full Name: <span style="font-size:14px;font-weight:400;color:#030507">{{fullName}}</span></li>
                            <li style="font-size:14px;font-weight:600;padding-bottom:5px">Account Number <span style="font-size:14px;font-weight:400;color:#030507">{{accountNumber}}</span></li>
                            <li style="font-size:14px;font-weight:600;padding-bottom:5px">Address: <span style="font-size:14px;font-weight:400;color:#030507">{{address}}</span></li>
                            <li style="font-size:14px;font-weight:600;padding-bottom:5px">City: <span style="font-size:14px;font-weight:400;color:#030507">{{city}}</span></li>
                        </ul>
                    </mj-text>
                </mj-column>
            </mj-column>
            </mj-section>

            <mj-section>
            <mj-column>
                <mj-text font-size="20px" color="#1A2736" font-weight="700" font-family="helvetica">Contact Info</mj-text>
                <mj-divider border-color="#E6EAEF" border-width="1px"></mj-divider>
                <mj-column width="100%">
                <mj-text>
                    <div>
                        <span style="font-size:14px;font-weight:600;">Prefered Communication Method:</span>
                        <span style="font-size:14px;font-weight:400;">{{preferedCommunicationMethod}}</span>
                    </div>
                    <ul>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Contact Phone: <span style="font-size:14px;font-weight:600;color:#D5172A">{{contactPhone}}</span></li>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Secondary Phone: <span style="font-size:14px;font-weight:600;color:#D5172A">{{secundaryPhone}}</span></li>
                        <li style="font-size:14px;font-weight:600;padding-bottom:5px">Email Address: <span style="font-size:14px;font-weight:400;color:#030507">{{emailAddress}}</span></li>
                    </ul>
                </mj-text>
                </mj-column>

            </mj-column>
            </mj-section>

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
  const templateValues = {
    itemType,
    containerSize,
    deliveryDate,
    removalDate,
    notes,
    evidenceMaterial,
    fullName,
    accountNumber,
    address,
    city,
    preferedCommunicationMethod,
    contactPhone,
    secundaryPhone,
    emailAddress,
  };

  return mjml2html(compile(templateValues)).html;
}
