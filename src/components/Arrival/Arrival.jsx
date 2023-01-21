import React from 'react'


import { Box, Text, Image, Checkbox } from '@chakra-ui/react'

import Styles from "./Arrival.module.css"

import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import findstore from "../../assets/findstoreimg.png"
import SingleProduct from '../SingleItem/SingleItem'


function Arrival() {
 
  let [data, setData] = useState([]);
  const { category } = useParams();
  const [heroimg, setHeroimg] = useState("")
 const [pselect,setPselect] = useState(1)
const [categ,setCateg] = useState("all")



  useEffect(() => {
    if (category === "all") {
      setHeroimg("https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Newin/05/Desktop_1920-x560_toplisting.jpg")
      setCateg("all")
    } else if (category === "rings") {
      setHeroimg("https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg")
      setCateg("rings")
    } else if (category === "earrings") {
      setHeroimg("https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg")
      setCateg("earrings")
    } else if (category === "bracelet") {
      setHeroimg("https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp")
      setCateg("bracelet")
    } else if (category === "solitaire") {
      setHeroimg("https://banner.caratlane.com/live-images/9aeed0015ab544ce98770daec556e90b.jpg")
      setCateg("solitaire")
    } else if (category === "mangalsutra") {
      setHeroimg("https://banner.caratlane.com/live-images/ed19e9fc6ddd4de592b67776543499c1.jpg")
      setCateg("mangalsutra")
    } else if (category === "kids") {
      setHeroimg("https://banner.caratlane.com/live-images/2f288a36fca243239f60f94730c6b49c.webp")
      setCateg("kids")
    } else if (category === "ready") {
      setHeroimg("https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/RTS/02/Desktop_1920-x560_toplisting.jpg")
      setCateg("all")
    } else if (category === "gifts") {
      setHeroimg("https://banner.caratlane.com/live-images/5d89e218eb56457c9814f8e2f7b8b6ec.jpg")
      setCateg("all")
    } else if (category === "findstore") {
      setHeroimg(findstore)
      setCateg("all")
    }

    const getData = async () => {
      let resp;
      if (category === "all" || category === "ready" || category === "gifts" || category === "findstore") {
        resp = await fetch(`http://localhost:8080/jewellery`);
      } else {
        resp = await fetch(`http://localhost:8080/jewellery?category=${category}`);
      }
      let apiData = await resp.json();
      setData(apiData)
    }
    getData()
    setPselect(1)
  }, [category])

async function sorrtbygte(gte,lte){
  if(gte===0){
    setPselect(1)
  }else if(gte===5000){
    setPselect(2) 
  }else if(gte===10000){
    setPselect(3)
  }else if(gte===20000){
    setPselect(4)
  }else if(gte===30000){
    setPselect(5) 
  }else if(gte===40000){
    setPselect(6)
  }


  let resp;
  if (category === "all" || category === "ready" || category === "gifts" || category === "findstore") {
    resp = await fetch(`http://localhost:8080/jewellery?price_gte=${gte}&price_lte=${lte}`);
    setCateg("all")
  } else {
    resp = await fetch(`http://localhost:8080/jewellery?category=${category}&price_gte=${gte}&price_lte=${lte}`);
  }
  let apiData = await resp.json();
  setData(apiData)

}

async function changeCateg(switchcateg){
  
  if (category === "all" || category === "ready" || category === "gifts" || category === "findstore") {
    let res = await fetch(`http://localhost:8080/jewellery?category=${switchcateg}`);
    let apiData = await res.json();
    setData(apiData)
    setCateg(switchcateg)
    setPselect(1)
  }
  
}


  return (
    <div style={{ marginTop: "7rem" }}>
      <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image boxSize='100%' src={heroimg} alt='Dan Abramov' />

        </Box>
      </div>


      <div className={Styles.arrival__maindiv} >
        <div className={Styles.arrival__sortdiv}>
           <p className={Styles.arrival__filterbytag}>Filter By</p>
           <div>
            <h2>Price</h2>
            <button style={pselect===1 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(0,200000)} >Whole Range</button>
            <button style={pselect===2 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(5000,10000)}>&#8377; 5000- &#8377; 10000</button>
            <button style={pselect===3 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(10000,20000)}>&#8377; 10000- &#8377; 20000</button>
            <button style={pselect===4 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(20000,30000)}>&#8377; 20000- &#8377; 30000</button>
            <button style={pselect===5 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(30000,40000)}>&#8377; 30000- &#8377; 40000</button>
            <button style={pselect===6 ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>sorrtbygte(40000,200000)}>&#8377; 40000- &#8377; 200000</button>
           </div>
           <div>
            <h2>Category</h2>
            <button style={categ==="rings" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("rings")}>Rings</button>
            <button style={categ==="earrings" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("earrings")}>Earrings</button>
            <button style={categ==="bracelet" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("bracelet")}>Bracelets</button>
            <button style={categ==="solitaire" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("solitaire")}>Solitaires</button>
            <button style={categ==="mangalsutra" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("mangalsutra")}>Manglasutra</button>
            <button style={categ==="kids" ? {background: 'linear-gradient(to right,#fff6c8 0%,#ffd7f5 48%)'} : null} onClick={()=>changeCateg("kids")}>Kids</button>
           </div>
        </div>
        <div className={Styles.arrival__datadiv}>
           {data?.map((el)=>(
            <SingleProduct key={el.id} {...el} />
           ))}
        </div>
      </div>
      


    </div>
  )
}

export default Arrival


