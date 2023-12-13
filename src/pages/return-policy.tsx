import Layout from "@/components/Layots/RootLayot";
import React from "react";

export default function Returnpolicy() {
  return (
    <section className="pb-24 ">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="p-4 bg-white dark:bg-gray-800">
            
            <div className="border  border-gray-300 shadow-xl shadow-gray-400 p-5">
              <h2 className="text-2xl font-semibold mb-7 font-poppins dark:text-gray-300">
                Return-Refund Policy Dreamfurniturebd
              </h2>
              <div className="pt-5 pb-5 font-poppins dark:text-gray-400">
                If the furniture is returned in good condition within 3 days, a
                refund can be issued with a 10% service charge. This policy does
                not apply to customized, broken set, or fabric products.
                <br /> <br /> <br />
                <span className="font-bold"> Warranty: </span>We offer a 1-year
                free service warranty for any manufacturing faults. Please note
                that glass, fabric, and rexin products do not come with a
                warranty or guarantee.
                <br />
                <br />
                <span className="font-bold">Product Development:</span> Product
                development is an ongoing process, and as a result, there may be
                minor changes in different versions of our products. However,
                these changes will not affect the functionality of the product.
                <br />
                <br />
                <span className="font-bold"> Delay Penalty:</span> If the
                delivery is not completed within the standard deadline, HATIL
                will pay a delay penalty of 0.5% of the value of the goods per
                week. However, there will be a 15-day buffer period before any
                penalty is applied.
                <br />
                <br /> <br />
                <span> Inventory Holding Cost: </span>If the customer fails to
                take delivery of the completed goods, they will be responsible
                for paying an inventory holding cost of 0.5% of the value of the
                goods per week. However, there will be a 15-day buffer period
                before any such cost becomes due. Note: It is important to
                ensure that the revised writing is clear, concise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Returnpolicy.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
