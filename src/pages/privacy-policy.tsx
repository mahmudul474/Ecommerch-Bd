import Layout from "@/components/Layots/RootLayot";
import React from "react";

export default function Privacypolicy() {
  return (
    <section className="pb-24 ">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="p-4 bg-white dark:bg-gray-800">
          
            <div className="border  border-gray-300 shadow-xl shadow-gray-400 p-5">
              <h2 className="text-2xl font-semibold mb-7 font-poppins dark:text-gray-300">
                Privacy Policy Dreamfurniturebd
              </h2>
              <div className="pt-5 pb-5 font-poppins dark:text-gray-400">
                At Dream Furniture, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy outlines how we collect, use, and safeguard the
                information you provide to us through our website,
                www.dreamfurniturebd.com . By using our website, you consent to
                the terms of this Privacy Policy.
                <br></br>
                <br></br>
                <span className="font-bold"> Information Collection:</span> When
                you visit our website, we may collect personally identifiable
                information, such as your name, email address, phone number, and
                shipping address. This information is collected when you
                voluntarily submit it to us through our contact forms,
                newsletter sign-ups, or when placing an order.
                <br></br>
                <br></br>
                <span className="font-bold"> Use of Information:</span> We may
                use the information you provide to process your orders, respond
                to your inquiries, and provide you with the best possible
                shopping experience. We may also use your information to
                personalize your experience on our website, send you promotional
                offers, and improve our products and services.
                <br />
                <br />
                <span className="font-bold"> Information Sharing:</span> We
                understand the importance of keeping your personal information
                private. We will never sell, rent, or disclose your personal
                information to third parties, except as required by law or when
                necessary to fulfill your orders (e.g., sharing your shipping
                address with our delivery partners).
                <br />
                <br></br>
                <span className="font-bold">Security:</span> We take the
                security of your personal information seriously. We implement
                appropriate physical, electronic, and managerial procedures to
                safeguard your information and prevent unauthorized access,
                disclosure, alteration, or destruction. However, please note
                that no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute
                security.
                <br />
                <br />
                <span className="font-bold">
                  Cookies and Tracking Technologies:
                </span>{" "}
                We may use cookies and other tracking technologies to enhance
                your browsing experience, analyze website traffic, and gather
                information about how you interact with our website. This
                information helps us improve our website and tailor our
                marketing efforts. You can manage your cookie preferences
                through your browser settings.
                <br /> <br /> <br />
                <span className="font-bold"></span> Third-Party Websites: Our
                website may contain links to third-party websites. Please note
                that we are not responsible for the privacy practices or content
                of these websites. We encourage you to review the privacy
                policies of these third-party websites before providing any
                personal information.
                <br />
                <br />
                <span className="font-bold"> Updates to Privacy Policy: </span>
                We reserve the right to update this Privacy Policy at any time.
                Any changes will be posted on our website, and the updated
                Privacy Policy will be effective immediately upon posting. If
                you have any questions or concerns about our Privacy Policy or
                the way we handle your personal information, please contact us
                at privacy@dreamfurniturebd.com. Thank you for choosing Dream
                Furniture. We value your privacy and appreciate your trust in
                us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Privacypolicy.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
