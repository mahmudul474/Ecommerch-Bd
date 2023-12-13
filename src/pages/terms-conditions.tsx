import Layout from "@/components/Layots/RootLayot";
import React from "react";

export default function TermsConditions() {
  return (
    <section className="pb-24 ">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="p-4 bg-white dark:bg-gray-800">
            <div className="border  border-gray-300 shadow-xl shadow-gray-400 p-5">
              <h2 className="text-2xl font-semibold mb-7 font-poppins dark:text-gray-300">
                Billing And terms Conditions
              </h2>
              <div className="pt-5 pb-5 font-poppins dark:text-gray-400">
                <span className="font-bold"> Delivery Delay:</span> The delivery
                date may be subject to change due to unavoidable circumstances
                or a strike, or blockade.
                <br />
                <br />
                <br />
                <span className="font-bold">Fitting: </span> For knockdown
                furniture, a fitter will be scheduled to visit the next day
                after delivery.
                <br />
                <br />
                <span className="font-bold "> Mode of Payment:</span> Please
                make your payment using a Credit/Debit Card from one of our
                partnered banks. Please verify the bank compatibility before
                making your payment.
                <br />
                <br />
                <span className="font-bold ">Order Change:</span>
                Orders can be modified within a 3-day period, but once an order
                is broken, it cannot be changed.
                <br />
                <br />
                <span className="font-bold ">Exchange:</span> Furniture can be
                exchanged within 3 days, provided it is in good condition. A 5%
                service charge will apply. Please note that this policy does not
                apply to customized, broken set, or fabric products.
                Return-Refund Policy: If the furniture is returned in good
                condition within 3 days, a refund can be issued with a 10%
                service charge. This policy does not apply to customized, broken
                set, or fabric products. Warranty: We offer a 1-year free
                service warranty for any manufacturing faults. Please note that
                glass, fabric, and rexin products do not come with a warranty or
                guarantee. Product Development: Product development is an
                ongoing process, and as a result, there may be minor changes in
                different versions of our products. However, these changes will
                not affect the functionality of the product. Delay Penalty: If
                the delivery is not completed within the standard deadline,
                HATIL will pay a delay penalty of 0.5% of the value of the goods
                per week. However, there will be a 15-day buffer period before
                any penalty is applied. Inventory Holding Cost: If the customer
                fails to take delivery of the completed goods, they will be
                responsible for paying an inventory holding cost of 0.5% of the
                value of the goods per week. However, there will be a 15-day
                buffer period before any such cost becomes due. Note: It is
                important to ensure that the revised writing is clear, concise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TermsConditions.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
