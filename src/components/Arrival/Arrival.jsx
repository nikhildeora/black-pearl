import React from 'react'


import { Box,Text, Image, Checkbox} from '@chakra-ui/react'

import Styles from "./Arrival.module.css"

import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'

function Arrival() {
    let[data,setData]=useState([]);

    const getData=async()=>{
        let resp=await fetch(` http://localhost:8080/jewellery`);
        let apiData=await resp.json();
        setData(apiData)
    }

    useEffect(()=>{
        getData()
    },[])
    console.log(data)

  return (
    <div>
          <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image  boxSize='100%' src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Newin/05/Desktop_1920-x560_toplisting.jpg' alt='Dan Abramov' />
            </Box>
          </div>
         

          {/* sliding data */}
          {/* <Box className={Styles.marquee}>
            <marquee>
              <h2>15 Day Money Back </h2>
            </marquee>
          </Box> */}
          {/* data */}

          <div className={Styles.Data_container}>
            <div className={Styles.sidebar}>
              <div className={Styles.Filter}><Text fontSize='2xl'>Filter By</Text></div>
                <div className={Styles.Priceheading}>Price</div>
                <div className={Styles.priceData}>
                  <p> &#8377; 5000- &#8377; 10000</p>
                  <p> &#8377; 100001- &#8377; 20000</p>
                  <p> &#8377; 200001- &#8377; 30000</p>
                  <p> &#8377; 300001- &#8377; 40000</p>
                  <p> &#8377; 400001- &#8377; 50000</p>
                </div>

                <div className={Styles.Priceheading}>Product</div>
                <div className={Styles.priceData}>
                  <p> Rings</p>
                  <p> Earrings</p>
                  <p> Bracelets</p>
                  <p> Solitaires</p>
                  <p>Manglasutra</p>
                  <p>Kids</p>
                </div>
            </div>
            <div className={Styles.box}>
                
                {
                    data.map((el)=>(
                        <div className={Styles.card}>
                        {/* <img src={el.image} alt='da'/> */}
                        <Image src={el.image} alt="im" w="100%" />
                        <div>
                         <Text  className={Styles.price}> &#8377; : {el.price}</Text>
                         <Text  className={Styles.name}>{el.name}</Text>
                        </div>
                        <div>
                          <div className={Styles.button_container}>
                            <button style={{color:"white"}}>Add to cart</button>
                            <button style={{color:"white"}}>Wish List</button>
                          </div>
                        </div>
                      </div>
                    ))
                }


            </div>
          </div>

     
    </div>
  )
}

export default Arrival