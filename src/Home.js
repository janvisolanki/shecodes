import React from 'react'
import Product from './Product';
import './Home.css';


function Home() {
    return (
        <div className="home">
            <img className="home_image"
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/30/02a56099-72fe-4b77-8a6f-19416e2ed3691617113907362-Anouk_Desk_Banner.jpg" alt="" />

            <div className="home_row">
                <Product
                    id="12321341"
                    title="Black & Peach-Coloured Printed Dress"
                    price={800}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWzRF0gqbbueR-DiLori47NvERXDg5dc6ROUjipwD-RSZ4nhMLkLTDzPCHSxKvn6ZtFhca8_RN_sA&usqp=CAc"
                />
                <Product
                    id="12321342"
                    title="Olive Green & Pink Net Printed Dress "
                    price={809}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStKTVith2QJKIb9tXVbhkaCwmWAQU0pFAfE8L_hTgYwUwRXHv6zm4ZOD0gEPtoxvHJ-qy9rgvRR3RTbcPqeJsIIGKtpsx35TtWWP4ovoruNXd_71uB9wgv&usqp=CAc"
                />
                <Product
                    id="12321343"
                    title="Yellow & gray Solid top with Culottes"
                    price={899}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSO44K_ieYdKVDIE3Y74XHZBWMinJ6-bKG08drKVpmTTTGXQWv7Fr5aSWZkUHBYLvvHBheGkZmGc5YjG5eaokePKIL3UFv9hHkvfL_xLLeGPFUJ2M7NHjR30g&usqp=CAc"
                />
            </div>

            <div className="home_row">
                <Product
                    id="12321344"
                    title="SIRIKIT Blue Striped A-Line Dress"
                    price={599}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcROtuhNZmPFsO68Xf30vHpHsrNhcGPb537_e4ET7FLETdeNLkhq9tmVNnx1gDvyK_GjTpcS2jkT1hoHAYfAxwpxAexoW3Se6XbuW9Y1z8AYIdhFJ7Wp-T3L&usqp=CAc"
                />
                <Product
                    id="12321345"
                    title="Navy & White Striped Fit and Flare Dress"
                    price={849}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTdc2tFdsNdpyU4k50AAtKcucEyxbd9O0S3QEYbxlVc4dPZDb_YEfB8P8IR1EGr9JRkZPy37A-HU5goZHIBxG_qL88JmOMwuk_Qt_lcVf6_MCQ7d3FWv-y4Q&usqp=CAc"
                />
                <Product
                    id="12321346"
                    title="Dusty Pink Solid Pinafore Dress"
                    price={854}
                    rating={5}
                    image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPpaTXKXVwl-o8egmQf7JIwk9zk3gdmRS8g5pdsMb1O6uk423bTnBratOm1R6afpBiS6mYBGybR0kbC4a5L7DJ2ZOKo4pjPPDZUPlu8KxJrUbr_dZTRMwdITY&usqp=CAc"
                />
            </div>

        </div>
    );
}

export default Home
