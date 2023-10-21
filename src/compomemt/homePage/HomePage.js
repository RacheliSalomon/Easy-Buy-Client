import react from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image'


import TabMenuIn from '../tabmenu/TabMenuIn'
import HomePageData from '../homePageData/HomePageData'



const HomePage = () => {

    //<Login/>

    return (
        <>
            <div className="card surface-200 flex justify-content-between flex-wrap align-items-stretch p-0 border-top-2 border-500 border-noround">
                {/* <h1 className='flex text-center'>Welcome to your digital wallet!</h1> */}
                <img src={require('E:\\localclient\\src\\assets\\images\\digital-money-online-saving-deposit-concept-blank-space-phone_255625-429.webp')} alt="Image"  className='w-full p-0 '/>
            </div>
           
        </>
    )
}
export default HomePage