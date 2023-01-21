import React from 'react'
import styles from "./Digital.module.css"
import { Image } from '@chakra-ui/react'
import digitalBanner from "../../assets/DigitalPage/digitalBanner.jpg"

import tanishqlogo from "../../assets/DigitalPage/tanishq.png";
import safegold from "../../assets/DigitalPage/safegold.png";
import im3 from "../../assets/DigitalPage/3.png";
import arrow from "../../assets/DigitalPage/arrow2.png";
import im2 from "../../assets/DigitalPage/2.png";
import im7 from "../../assets/DigitalPage/7.png";
import im6 from "../../assets/DigitalPage/6.png";
import im5 from "../../assets/DigitalPage/5.png";
import im1 from "../../assets/DigitalPage/1.png";
import camera from "../../assets/DigitalPage/camera.png";
import call2 from "../../assets/DigitalPage/call2.png";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

function Digital() {
    return (
        <div className={styles.container}>

            <div className={styles.banner__container}>
                <Image src={digitalBanner} alt='Dan Abramov' />
                <div className={styles.text_container}>
                    <div>
                        <h1>Here is an easier way of buying pure 24kt gold</h1>
                        <p>Buy Tanishq DiGiGold online to save money, grow your wealth, and convert your gold into beautiful jewellery—whenever you want it. Guaranteed, no-hassles buyback</p>
                    </div>
                    <div className={styles.button__div}>
                        <button className={styles.button__play} style={{fontSize:"22px"}}>Buy DiGiGold Now</button>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
            <div className={styles.how_it_works}>
                <div className={styles.how_it_works__child}>
                    <p>Know More</p>
                    <h1>Invest in a high-payoff digital gold. <br /> Buy, sell,  or  redeem your Tanishq <br /> DiGiGold in exchange for  beautiful <br /> jewellery.</h1>
                    <div className={styles.button__div}>
                        <button className={styles.button__play}>Buy DiGiGold</button>

                    </div>
                    <p>You don’t have to wait till the 6th month to redeem. Refer to the calculator below to feel the joy sooner!</p>
                </div>
                <div className={styles.how_it_works__child2}>
                    <div className={styles.how_it_works__child2__inner}>
                        <div>
                            <img src={im6} alt="" />
                        </div>
                        <div>
                            <h2>Pay Monthly</h2>
                            <p>Take easy, baby steps by choosing a fixed plan amount to keep aside with CARATLANE every month.</p>
                        </div>
                    </div>
                    <div className={styles.how_it_works__child2__inner}>
                        <div>
                            <img src={im5} alt="" />
                        </div>
                        <div>
                            <h2>Our gift* to you</h2>
                            <p>At the end of 6 months, CARATLANE will issue a gift* value equivalent to 30% of your first month’s plan amount.</p>
                        </div>
                    </div>
                    <div className={styles.how_it_works__child2__inner}>
                        <div>
                            <img src={im7} alt="" />
                        </div>
                        <div>
                            <h2>Purchase</h2>
                            <p>You can redeem by purchasing jewellery of your choice, either at our stores or online.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.unveringTest}>
                <div>
                    <h3>Unwavering Trust</h3>
                    <p>At Tanishq and CaratLane, quality is our crown jewel. We craft 100% original gold jewellery that go through a rigorous quality check to give them a signature finish. Each gram of Tanishq DiGiGold comes with the Tata Seal of Trust. We have partnered with SafeGold digital platform to offer you a safe, convenient, and secure gold-buying experience</p>
                </div>
                <div>
                    <Image src={tanishqlogo} className={styles.logo} alt='logo' />
                </div>
                <div>
                    <Image src={safegold} className={styles.safegold} alt='logo' />
                </div>
            </div>

            <div className={styles.redme}>
                <h3>redeem</h3>

                <div className={styles.redemdata}>
                    <h2>DiGiGold to jewellery, in a <br /> blink!</h2>
                    <p>You can redeem Tanishq DiGiGold online or <br /> offline through one of our many jewellery <br /> partner stores across India.</p>
                </div>
                <div className={styles.sectionimage}>
                    <div className={styles.redmeImgContainer}>
                        <Image className={styles.redmeImage} src={im3} alt='logo' />
                        <Image className={styles.redmeImagearrow} src={arrow} alt='logo' />
                        <Image className={styles.redmeImage} src={im2} alt='logo' />
                        <Image className={styles.redmeImagearrow} src={arrow} alt='logo' />
                        <Image className={styles.redmeImage} src={im1} alt='logo' />
                        <Image className={styles.redmeImage} src={camera} alt='logo' />
                    </div>
                </div>
            </div>

            <div className={styles.queryConatainer}>
                <div>
                    <p>Got questions? We have all the answers!</p>
                    <h1>If you have any questions regarding Tanishq DiGiGold, give us your phone number and we will call you back to answer your questions.</h1>
                </div>
                <div></div>
                <div className={styles.formQueryContainer}>
                    <div className={styles.formQuery}>
                        <Image className={styles.callImag} src={call2} alt='logo' />
                        <span>At Your Service. Always.</span>
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" name="" id="" />
                        <button className={styles.requestBtn}>Request Call Back</button>
                    </div>
                </div>
            </div>

            
            <div><h1>General</h1></div>
            <div className={styles.Accordian_options} >
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is digital gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Digital Gold is an organised and transparent method of buying 24-carat gold in compliance with all applicable laws and regulations.
                            Digital Gold is neither a financial product nor a deposit but a method of purchasing gold for your personal needs.
                            Digital Gold gives the flexibility for customers to accumulate gold in any denomination, say as low as Rs. 10.
                            Physical gold will be bought by service providers and stored in very safe vaults for the customer. Customers need not go through the hassle of storing and securing the gold.
                            At the same time, customers have the flexibility to sell the gold at any time, convert to physical gold and ask for delivery or exchange digital gold for physical jewellery at a Tanishq/CaratLane website or store.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is a service offered by Titan group of companies (Tanishq, Caratlane, Mia) in Partnership with SafeGold to enable customers to accumulate digital gold, sell at any time, or exchange for physical Jewellery at Tanishq/Mia/Caratlane outlets.
                            SafeGold takes care of selling gold to the customers, storing, and buyback from customers, while Titan companies provide a seamless experience for customers to buy any jewellery from its participant brands through the sale proceeds of customers' gold balance.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why should I buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold has the Tata Seal of Trust and guarantees purity. Our digital gold is easily redeemable for Jewellery anytime, across any of our jewellery brands, which includes Tanishq, Caratlane, and Mia.
                            We offer the flexibility of redemption across all our 450+ physical outlets and online stores as well. Customers have the option to choose from our unique and exclusive 20000+ designs and purchase using the accumulated Tanishq Digital Gold value.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    How to buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Gold can be accumulated under the Tanishq Digital Gold Program by buying through:
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Where will the Digital Gold be stored after I buy it?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The Digital Gold purchased on your behalf is stored with Brink's the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit, when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the purity of gold bought under Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold offers 24-karat gold of 995 fineness (99.5% pure) or higher.
                            SafeGold, on behalf of Tanishq Digital Gold, sources LBMA “good delivery” bars from trusted sources for the digital gold offered to you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why are the Tanishq Digital Gold rates different from Tanishq Jewellery gold rates?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is in bullion form and is safely stored in a central vault.
                            There is no movement for this gold. But for jewellery the gold has to travel between multiple entities to get the product manufactured.
                            The logistics costs incurred by the jewellery gold are substantially different from the gold stored in the central vault. Hence, the jewellery gold rate will always be higher than the digital gold.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    I have some other queries about my Tanishq Digital Gold Account. Who can I get in touch with?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            You can write to contactus@caratlane.com or call us at +91-44-42935000 or WhatsApp at +91 69000 86000
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is my Tanishq Digital Gold kept in safe custody?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The gold purchased on your behalf is stored with Brink's, the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is the Physical Vault Insured?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The secure storage provider (Brink's) has a comprehensive, global insurance policy that includes the insurance cover on your gold stored in their vaults.
                            In addition, SafeGold has an additional insurance policy to cover gold in transit.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the role of the “Security Trustee”?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is powered by SafeGold, which has entered into a relationship with IDBI Trusteeship Services Limited to act as a Security Trustee for all digital gold customers.
                            The Security Trustee is entitled to act on your behalf and ensure that your interests are protected.
                            The Security Trustee will have a charge on the gold associated with accumulations held by you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What will happen to the gold associated with accumulations in my account, in the unlikely event of the SafeGold going into liquidation?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The gold associated with the accumulations in your account is separate from the other assets of the SafeGold.
                            IDBI Trusteeship Services Limited, an independent trustee, acts for and on your behalf.
                            The gold purchased by the Company associated with the accumulations in your accounts is held with the Custodian.
                            When you ask for delivery, the requisite quantity of gold will be removed from the Custodian and delivered to you through a reputed courier service.
                            Since the Security Trustee has a charge over the gold, any unlikely adverse event happening to the company will not affect the gold associated with the accumulations in your account.
                            Further, the title of the gold clearly rests with you and the physical gold stored with the Custodian on account of SafeGold customers is not an asset of SafeGold in any way.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is there an automatic saving plan for Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            No, we don’t offer this feature now. But will notify you if we launch in the future.
                            <br />
                            <br />
                            Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <h1>Buy</h1>
            <div className={styles.Accordian_options}>
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is digital gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Digital Gold is an organised and transparent method of buying 24-carat gold in compliance with all applicable laws and regulations.
                            Digital Gold is neither a financial product nor a deposit but a method of purchasing gold for your personal needs.
                            Digital Gold gives the flexibility for customers to accumulate gold in any denomination, say as low as Rs. 10.
                            Physical gold will be bought by service providers and stored in very safe vaults for the customer. Customers need not go through the hassle of storing and securing the gold.
                            At the same time, customers have the flexibility to sell the gold at any time, convert to physical gold and ask for delivery or exchange digital gold for physical jewellery at a Tanishq/CaratLane website or store.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is a service offered by Titan group of companies (Tanishq, Caratlane, Mia) in Partnership with SafeGold to enable customers to accumulate digital gold, sell at any time, or exchange for physical Jewellery at Tanishq/Mia/Caratlane outlets.
                            SafeGold takes care of selling gold to the customers, storing, and buyback from customers, while Titan companies provide a seamless experience for customers to buy any jewellery from its participant brands through the sale proceeds of customers' gold balance.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why should I buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold has the Tata Seal of Trust and guarantees purity. Our digital gold is easily redeemable for Jewellery anytime, across any of our jewellery brands, which includes Tanishq, Caratlane, and Mia.
                            We offer the flexibility of redemption across all our 450+ physical outlets and online stores as well. Customers have the option to choose from our unique and exclusive 20000+ designs and purchase using the accumulated Tanishq Digital Gold value.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    How to buy Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Gold can be accumulated under the Tanishq Digital Gold Program by buying through:
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Where will the Digital Gold be stored after I buy it?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The Digital Gold purchased on your behalf is stored with Brink's the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit, when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the purity of gold bought under Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold offers 24-karat gold of 995 fineness (99.5% pure) or higher.
                            SafeGold, on behalf of Tanishq Digital Gold, sources LBMA “good delivery” bars from trusted sources for the digital gold offered to you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Why are the Tanishq Digital Gold rates different from Tanishq Jewellery gold rates?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is in bullion form and is safely stored in a central vault.
                            There is no movement for this gold. But for jewellery the gold has to travel between multiple entities to get the product manufactured.
                            The logistics costs incurred by the jewellery gold are substantially different from the gold stored in the central vault. Hence, the jewellery gold rate will always be higher than the digital gold.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    I have some other queries about my Tanishq Digital Gold Account. Who can I get in touch with?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            You can write to contactus@caratlane.com or call us at +91-44-42935000 or WhatsApp at +91 69000 86000
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is my Tanishq Digital Gold kept in safe custody?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The gold purchased on your behalf is stored with Brink's, the leading safe keeper of precious metals across the world.
                            The gold is insured, both for storage and transit when being delivered to you. Further, IDBI Trusteeship has a charge on all gold stored in the vault in your favour.
                            This ensures that your gold is protected at all times regardless of any external events.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is the Physical Vault Insured?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Yes. The secure storage provider (Brink's) has a comprehensive, global insurance policy that includes the insurance cover on your gold stored in their vaults.
                            In addition, SafeGold has an additional insurance policy to cover gold in transit.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What is the role of the “Security Trustee”?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            Tanishq Digital Gold is powered by SafeGold, which has entered into a relationship with IDBI Trusteeship Services Limited to act as a Security Trustee for all digital gold customers.
                            The Security Trustee is entitled to act on your behalf and ensure that your interests are protected.
                            The Security Trustee will have a charge on the gold associated with accumulations held by you.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    What will happen to the gold associated with accumulations in my account, in the unlikely event of the SafeGold going into liquidation?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            The gold associated with the accumulations in your account is separate from the other assets of the SafeGold.
                            IDBI Trusteeship Services Limited, an independent trustee, acts for and on your behalf.
                            The gold purchased by the Company associated with the accumulations in your accounts is held with the Custodian.
                            When you ask for delivery, the requisite quantity of gold will be removed from the Custodian and delivered to you through a reputed courier service.
                            Since the Security Trustee has a charge over the gold, any unlikely adverse event happening to the company will not affect the gold associated with the accumulations in your account.
                            Further, the title of the gold clearly rests with you and the physical gold stored with the Custodian on account of SafeGold customers is not an asset of SafeGold in any way.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                    Is there an automatic saving plan for Tanishq Digital Gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                            No, we don’t offer this feature now. But will notify you if we launch in the future.
                            <br />
                            <br />
                            Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <h1>Sell</h1>
            <div className={styles.Accordian_options}>
                
                <Accordion allowToggle>
                  
                    <AccordionItem className={styles.AccordianBtn}>
                        <h2 >
                            <AccordionButton  className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                How do I sell my gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton >
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        You can sell gold by clicking on the sell option on the top after logging in to your account.
Tanishq Digital Gold provides a live sell price.
You can choose to sell any amount starting with a minimum of Rs. 10 to a maximum of the amount of gold that you own.
You can choose the bank account (previously saved) or enter a new bank account to get the money.
The money will be credited to your bank account.
For security reasons, newly added bank accounts will be verified by doing a penny drop bank verification—i.e., a small amount will be credited to your bank account for verification purposes.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                Is there any lock-in period to sell gold?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        There is no lock-in period to sell gold. However, same-day selling is restricted, so you can sell the gold 24 hours after its purchase.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                How long will it take to get the money in my bank account?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        The money will be transferred instantly within the next two hours. However, it can take a maximum of 48 hours in case of delays.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className={styles.AccordianBtn}>
                        <h2>
                            <AccordionButton className={styles.accordianInputt}>
                                <Box as="span" flex='1' textAlign='left' className={styles.accordianInput}>
                                Why is the buy and sell price different on the same day?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={styles.AccordianPanel} pb={4}>
                        The buy and sell price difference due to a 3% GST and costs such as bank charges, payment costs, technology costs, and hedging costs that SafeGold undertakes.
                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </div>
            
        </div>
    )
}

export default Digital