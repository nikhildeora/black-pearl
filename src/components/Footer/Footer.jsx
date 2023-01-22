import React from 'react'
import styles from "./footer.module.css"
import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import Logo from "../../assets/logo.png"
import appstore from "../../assets/appstore.png"
import creditcard from "../../assets/creditcardimage.png"
import fb from "../../assets/facebook.png"
import gplay from "../../assets/googleplay.png"
import insta from "../../assets/insta.png"
import linkedin from "../../assets/linkedin.png"
import pintrest from "../../assets/pintrest.png"
import twitter from "../../assets/twitter.png"
import {Link as RouterLink} from "react-router-dom"

export default function Footer() {
    return (
        <div className={styles.footer__footers_maindiv}>
            <div className={styles.footer__maindiv}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} className={styles.footer__container}>
                    <div className={styles.footer__grid}>
                        <Stack align={'flex-start'}>
                            <Text>Know Your Jewellery</Text>
                            <RouterLink className={styles.footer__links} to={'/newarrival/all'}>DIAMOND GUIDE</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/newarrival/all'}>JEWELLERY GUIDE</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/newarrival/all'}>GEMSTONES GUIDE</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/newarrival/all'}>GOLD RATE</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/newarrival/all'}>DIGITAL GOLD</RouterLink>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text>Black Pearl Advantage</Text>
                            <RouterLink className={styles.footer__links} to={'/'}>15-DAY RETURNS</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>FREE SHIPPING</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>FINANCING OPTIONS</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>OLD GOLD EXCHANGE</RouterLink>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text>Customer Service</Text>
                            <RouterLink className={styles.footer__links} to={'/'}>RETURN POLICY</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>ORDER STATUS</RouterLink>

                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text>About Us</Text>
                            <RouterLink className={styles.footer__links} to={'/'}>OUR STORY</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>PRESS</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>BLOG</RouterLink>
                            <RouterLink className={styles.footer__links} to={'/'}>CAREERS</RouterLink>

                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text>Contact Us</Text>
                            <HStack gap={4}>
                                <i class="fa-solid fa-phone"></i>
                                <i class="uil uil-chat"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                            </HStack>
                            <Text className={styles.footer__links} >24X7 Enquiry Support ( ALL Days )</Text>
                            <Text className={styles.footer__links}>General : <span style={{ color: "rgb(222, 87, 229)" }}>contactus@blackpearl.com</span> </Text>
                            <Text className={styles.footer__links}>Corporate : <span style={{ color: "rgb(222, 87, 229)" }}>B2B@blackpearl.com</span></Text>
                            <Text className={styles.footer__links}>HR : <span style={{ color: "rgb(222, 87, 229)" }}>careers@blackpearl.com</span></Text>
                            <Text className={styles.footer__links}>Grievance : <span style={{ color: "rgb(222, 87, 229)" }}>Click here</span></Text>
                        </Stack>
                    </div>
                </Container>

                <div className={styles.footer__socilamedialinks}>
                    <img src={fb} alt="sociallink" />
                    <img src={insta} alt="sociallink" />
                    <img src={pintrest} alt="sociallink" />
                    <img src={twitter} alt="sociallink" />
                    <img src={linkedin} alt="sociallink" />
                </div>

                <div className={styles.footer__thirdcontainer}>
                    <div className={styles.footer__downloadimgdiv}>
                        <img src={gplay} alt="download" />
                        <img src={appstore} alt="download" />
                    </div>
                    <img src={creditcard} alt="credit" />
                </div>

                <div py={10}>
                    <Flex
                        align={'center'}
                        _before={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue('gray.200', 'gray.700'),
                            flexGrow: 1,
                            mr: 8,
                        }}
                        _after={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue('gray.200', 'gray.700'),
                            flexGrow: 1,
                            ml: 8,
                        }}>
                        <img className={styles.footer__logoimage} src={Logo} alt="logo" />
                    </Flex>
                </div>
            </div>
          

            <div className={styles.footersec__maindiv}>
                <p>Popular Searches</p>
                <RouterLink to={"/newarrival/mangalsutra"} style={{textDecoration:"none"}}> <h4>Pendants</h4>
                <p> <span>Gold Pendant</span> | <span>Diamond Pendant</span> | <span>Solitaire Pendant</span> | <span>Gemstone Pendant</span> | <span>22KT Pendants</span>
                </p></RouterLink>
                <hr />
                <RouterLink to={"/newarrival/earrings"} style={{textDecoration:"none"}}> <h4>Nose Pin</h4>
                <p> <span>Nose Ring</span> | <span>Gold Nose Pin</span> | <span>Diamond Nose Pin</span> </p></RouterLink>
                <hr /> 
                <RouterLink to={"/newarrival/mangalsutra"} style={{textDecoration:"none"}}> <h4>Chain</h4>
                <p> <span>Gold Chain</span> | <span>22kt Chains</span> | <span>Platinum Chains</span></p></RouterLink>
                <hr />
                <RouterLink to={"/newarrival/bracelet"} style={{textDecoration:"none"}}> <h4>Bangles</h4>
                <p> <span> Gold Bangles</span> | <span>Diamond Bangles</span> | <span>Gemstone Bangles</span> | <span>22kt Bangles</span></p> </RouterLink>
                <hr />
                <RouterLink to={"/newarrival/bracelet"} style={{textDecoration:"none"}}> <h4>Bracelet</h4>
                <p>
                    <span> Gold Bracelet</span> | <span>Diamond Bracelet</span> | <span>Kids Bracelets</span> | <span>Solitaire Bracelets</span> | <span>Pearl Bracelet</span> | <span>22kt Bracelets</span> 
                </p> </RouterLink>
                <hr />
                <RouterLink to={"/newarrival/mangalsutra"} style={{textDecoration:"none"}}><h4>Necklace</h4>
                <p><span> Gold Necklace</span> | <span>Diamond Necklace</span> | <span>Gemstone Necklace</span> | <span>Kids Necklace</span> | <span>Ruby Necklace</span></p></RouterLink> 
                <hr />
                <RouterLink to={"/newarrival/rings"} style={{textDecoration:"none"}}> <h4>Rings</h4>
                <p><span>Gold Rings</span> | <span>Diamond Rings</span> | <span>Platinum Rings</span> |<span>Solitaire Rings</span> | <span>Gemstone Rings</span> | <span>Mens Rings</span> | <span>Ruby Ring</span></p> </RouterLink> 
                <hr />
                <RouterLink to={"/newarrival/earrings"} style={{textDecoration:"none"}}> <h4>Earrings</h4>
                <p><span> Gold Earrings</span> | <span>Diamond Earrings</span> | <span>Gemstone Bracelets</span> | <span>Solitaire Earrings</span> |  <span>Platinum Earrings</span> | <span>22kt Earrings</span> </p> </RouterLink>
                <hr />
                <RouterLink to={"/newarrival/all"} style={{textDecoration:"none"}}><h4>Jewellery</h4>
                <p><span> Gold</span> | <span>Diamond</span> |  <span>Gemstone</span> |                
                 <span>Solitaire</span> |   <span>Platinum </span> | <span>22kt Jewellery</span> </p></RouterLink> 
                <hr />

                <div className={styles.footersec__copyright}>
                    <h5>COPYRIGHT BLACK PEARL &copy; 2022</h5>
                    <p><span>  SITE MAP</span> | <span>PRIVACY POLICY</span> |  <span>TERMS & CONDITIONS</span> |                
                 <span>CORPORATE</span> |   <span>XCLUSIVE </span> | <span>FREQUENTLY ASKED QUESTION</span></p>
                </div>
               
 
            </div>
        </div>
    );
}