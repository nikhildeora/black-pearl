import React from 'react'
import { NavLink } from 'react-router-dom'
// import AllRoutes from '../Routes/AllRoutes'
import { Box,Text, Image, Checkbox} from '@chakra-ui/react'
import Styles from "../Page/Arrival.module.css"
import { Select } from '@chakra-ui/react'
const links=[
  {
    to:"/",
    title:"All"
  },
  {
    to:"/commonfiles",
    title:"Try At Home"
  },
  {
    to:"/commonfiles",
    title:"Desigins in store"
  },
  {
    to:"/commonfiles",
    title:"Fast Delivery"
  },
  {
    to:"/newin",
    title:"New In"
  },
]

function Arrival() {
  return (
    <div>
          <div>
            <Box>
              <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Newin/05/Desktop_1920-x560_toplisting.jpg' alt='Dan Abramov' />
            </Box>
          </div>
          <div className={Styles.filterContainer}>

            <div className={Styles.filterbar}>
            {
              links.map((el)=>(
                <NavLink to={el.to} className={Styles.navlink}>{el.title}</NavLink>
              ))
            }
            </div>

            <div>
              <div>
              <Select placeholder='Select option' className={Styles.selectData}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              </div>
            </div>
          </div>

          {/* sliding data */}
          <Box className={Styles.marquee}>
            <marquee>
              <h2>15 Day Money Back </h2>
            </marquee>
          </Box>
          {/* data */}

          <div className={Styles.Data_container}>
            <div className={Styles.sidebar}>
              <div><Text fontSize='2xl'>Filter By</Text></div>
              <div className={Styles.filterByPrice}>
                <div>
                  <Text fontSize="2xl">Price</Text>
                  <Checkbox border="gray">Rs 5000 - Rs 10000</Checkbox>
                  <Checkbox border="gray">Rs 10001 - Rs 30000</Checkbox>
                  <Checkbox border="gray">Rs 30001 - Rs 40000</Checkbox>
                  <Checkbox border="gray">Rs 40001 - Rs 50000</Checkbox>
                </div>
              </div>
              <div className={Styles.filterByPrice}>
                <div>
                  <Text fontSize="2xl">Product Type</Text>
                  <Checkbox border="gray">Earrings</Checkbox>
                  <Checkbox border="gray">Rings</Checkbox>
                  <Checkbox border="gray">Necklaces</Checkbox>
                </div>
              </div>
            </div>
            <div className={Styles.box}>
              
              <div className={Styles.card}>
                <img src='https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/S/JS01113-1YP900_11_listfront.jpg' alt='da'/>
               
                <div>
                 <Text  className={Styles.price}> Rs:52532</Text>
                 <Text  className={Styles.name}>Rings</Text>
                </div>
                <div>
                  <div className={Styles.button_container}>
                    <button>Add to cart</button>
                    <button>Wish List</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* <AllRoutes/> */}
    </div>
  )
}

export default Arrival