import React from 'react'

import "./Footer.css"
const Footer = () => {

    const BackTotop = (e) => {
        e.preventDefault()
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0;

    }

    return (
        <div className='mainFooter '>
            <a href="/" aria-label='Back To Top' id="Footerbacktotop" onClick={BackTotop}>
                <div className='BacktoTop'>
                    <span>Back To Top</span>

                </div>
            </a>

            <div className="footermiddle">
                <div className='footertablerow'>
                    <div className='footertablelinkcol'>
                        <div className='tablelinkcolhead'>Get to Know Us</div>
                        <ul>
                            <li><a href="/" className='footlink'>Careers</a></li>
                            <li><a href="/" className='footlink'>Blog</a></li>
                            <li><a href="/" className='footlink'>About Amazon</a></li>
                            <li><a href="/" className='footlink'>Investor Relations</a></li>
                            <li><a href="/" className='footlink'>Amazon Devices </a></li>
                            <li><a href="/" className='footlink'>Amazon Science</a></li>
                        </ul>
                    </div>
                    <div className="footertablespacecol"></div>
                    <div className='footertablelinkcol'>
                        <div className='tablelinkcolhead'>Make Money with Us</div>
                        <ul>
                            <li><a href="/" className='footlink'>Sell products on Amazon</a></li>
                            <li><a href="/" className='footlink'>Sell on Amazon Business</a></li>
                            <li><a href="/" className='footlink'>Sell apps on Amazon</a></li>
                            <li><a href="/" className='footlink'>Become an Affiliate</a></li>
                            <li><a href="/" className='footlink'>Advertise Your Products </a></li>
                            <li><a href="/" className='footlink'>Self-Publish with Us</a></li>
                            <li><a href="/" className='footlink'>Host an Amazon Hub</a></li>
                            <li><a href="/" className='footlink' style={{ paddingLeft: "4px" }}>
                                <span style={{ fontSize: "15px", fontWeight: "700", lineHeight: "15px" }}>› </span>
                                See More Make Money
                                with Us</a></li>
                        </ul>
                    </div>
                    <div className="footertablespacecol"></div>
                    <div className='footertablelinkcol'>
                        <div className='tablelinkcolhead'>Amazon Payment Products</div>
                        <ul>
                            <li><a href="/" className='footlink'>Amazon Business Card</a></li>
                            <li><a href="/" className='footlink'>Shop with Points</a></li>
                            <li><a href="/" className='footlink'>Reload Your Balance</a></li>
                            <li><a href="/" className='footlink'>Amazon Currency Converter</a></li>
                        </ul>
                    </div>
                    <div className="footertablespacecol"></div>
                    <div className='footertablelinkcol'>
                        <div className='tablelinkcolhead'>Let Us Help You</div>
                        <ul>
                            <li><a href="/" className='footlink'>Amazon and COVID-19</a></li>
                            <li><a href="/" className='footlink'>Your Account</a></li>
                            <li><a href="/" className='footlink'>Your Orders</a></li>
                            <li><a href="/" className='footlink'>Shipping Rates & Policies</a></li>
                            <li><a href="/" className='footlink'>Returns & Replacements </a></li>
                            <li><a href="/" className='footlink'>Manage Your Content and Devices</a></li>
                            <li><a href="/" className='footlink'>Amazon Assistant</a></li>
                            <li><a href="/" className='footlink'>Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-line'></div>
            <div className='footerlinkline'>
                <span className='logo1'>
                    <div className='footerlogo'>
                        <a href="/" style={{ textDecoration: "none" }}>
                            <div className='footerlogolink'></div>
                        </a>
                    </div>
                </span>

                <span className='labelsfooter'>
                    <div className='footerlabels1'>
                        <a href="/" className='footerlinklabel'>
                            <div className='logo2'></div>
                            <span >English</span>
                            <span className='arrowicon'></span>
                        </a>
                        <a href="/" className='footerlinklabel'>
                            <span style={{ color: "/FFF", margin: "3px 0 0", padding: "0" }} >$</span>
                            <span>USD - U.S. Dollar</span>
                        </a>
                        <a href="/" className='footerlinklabel'>
                            <span className='flagfooter'></span>
                            <span >United States</span>
                        </a>
                    </div>
                </span>
            </div>
            <div className="footerend ">
                <table className='footertable'>
                    <tbody>
                        <tr>
                        <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td className='footertd'>&nbsp;</td>
                        </tr>

                        <tr><td>&nbsp;</td></tr>

                        <tr>
                        <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td className='footertd'>&nbsp;</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                        <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td className='footertd'>&nbsp;</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                        <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td className='footertd'>&nbsp;</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>

                        <td className='footertd'>&nbsp;</td>
                        <td className='footertd'>&nbsp;</td>
                        <td className='footertd'>&nbsp;</td>
                        <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>&nbsp;</td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            <td style={{ width: "3%" }}></td>
                            <td className='footertd'>
                                <a href="/">Amazon Music</a><br />
                                <span className='tablespan'>
                                    Stream millions
                                    <br />
                                    of Songs
                                </span>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* copyright  */}
            <div className='footercopyright'>
                <ul>
                    <li><a href="/">Conditions of Use</a></li>&nbsp;&nbsp;&nbsp;
                    <li><a href="/">Privacy Notice</a></li>&nbsp;&nbsp;&nbsp;
                    <li><a href="/">Your Ads Privacy Choices</a></li>&nbsp;&nbsp;&nbsp;
                    
                </ul>
                <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}

export default Footer
