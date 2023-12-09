import Layout from '@/components/Layots/RootLayot';
import React from 'react'

export default function Company() {
  return (
    <div className='text-center  my-10 shadow-2xl  shadow'>Commig-soon</div>
  )
}
Company.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
