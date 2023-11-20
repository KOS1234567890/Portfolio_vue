<template lang="">
    <section id="Contact" class="ContactContents" :class="{'show':showElement}">
        <div class="ContactMe">
            <b>Contact<span> Me</span></b>
        </div>
        <div class="contact_machine">
            <figure>
                <div class="Tel">
                    <img src="../../public/assets/icon/Tel.png" alt="">
                    <a href='tel:010-5878-8184' class="Tel_a">연락하기</a>
                </div>
                <figcaption>
                   <p><span>TEL)</span>02+</p>
                   <a>010-5878-8184</a>
                </figcaption>
            </figure>
            <figure>
                <div class="Email">
                    <img src="../../public/assets/icon/Email.svg" alt="">
                </div>
                <figcaption>
                   <p><span>EMAIL)</span></p>
                   <p>fistar02@gmail.com</p>
                </figcaption>
            </figure>
            <figure>
                <div class="QRcode">
                    <img class="normal_kakao" src="../../public/assets/icon/kakao_QR.svg" alt="">
                    <img class="rotate_kakao" src="../../public/assets/icon/QR.svg" alt="">
                </div>
                <figcaption>
                   <p><span>Kakao)</span></p>
                   <p>kakao_ID : fistar000.</p>
                </figcaption>
            </figure>
        </div>
    </section>
</template>
<script>
export default {
    name:'ContactMe',
    data(){
        return{
            showElement:false,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
        this.handleScroll();
    },
    methods:{
        handleScroll(){
            const scrollPosition = window.scrollY;
            const scrollDirection = scrollPosition > this.lastScrollPosition ? 'down' : 'up';
            const showPosition = 4000;

            if (scrollDirection === 'down') {
                this.showElement = scrollPosition > showPosition;
            }

            this.lastScrollPosition = scrollPosition;
        }
    }
}
</script>
<style lang="scss">
    .ContactContents.show{
        opacity: 1;
        transform: translateY(0%);
    }
    .ContactContents{ 
        
        opacity: 0;
        transform: translateY(-10%);
        transition: opacity 0.8s, transform 0.8s;

        padding: 5rem 0;
        .ContactMe{
            margin: 0 0 5rem 0;
            b{
                color:#ffffff;
                font-size: 5.625rem;
                span{
                    color:#4DC0C8
                }
                transition: color 0.8s;
            }
            b:hover{
                color:#4DC0C8;
                
            }
        }
        .contact_machine{
            display: flex;
            justify-content: space-around;
            figure{
                display: flex;
                flex-direction: column;
                align-items: center;
                .Tel{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    img{
                    }
                    .Tel_a{
                        text-decoration: none;
                        transition: .5s;
                        display: none;
                        transform: translate(-50%,-50%);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                    }
                }
                .Tel:hover{
                    img{
                        transform: rotateY( 360deg );
                        background-color: #4dc0c88c;
                        border-radius: 50%;
                    }
                    .Tel_a{
                        color: white;
                        transition: 1s;
                        display: block;
                    }
                }
                img{
                    transition: 1s;
                    position: relative;
                }
                .Tel_p{
                    position: absolute;
                    top: 50%;
                    left: 0%;
                }
                img:hover{
                    transform: rotateY( 360deg );
                }
                figcaption{
                    margin-top: 3rem ;
                    text-align: center;
                    font-size: 1.5rem;
                    p{
                        color: #ffffff;
                        span{
                            color: #4DC0C8;
                    }}
                    a{
                        color: #ffffff;
                        text-decoration: none;
                    }
                }
                .Email{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .QRcode{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .rotate_kakao{
                        transition: 1s;
                        display: none;
                    }
                }
                .QRcode:hover{
                    .normal_kakao{
                        display: none;
                    }
                    .rotate_kakao{
                        display: block;
                    }
                }
            }
        }
    }
    @media (max-width: 1024px){
        .ContactContents{ 
            margin-bottom: 5rem;
            .ContactMe{
                text-align: center;
                b{
                    font-size: 3rem;
                    span{
                    }
                }
            }
            .contact_machine{
                display: flex;
                justify-content: space-around;
                figure{
                    img{
                        width: 80%;
                    }
                    figcaption{
                        margin-top: 3rem ;
                        font-size: 1rem;
                        p{
                            span{
                        }}
                    }
                }
            }
        }
    }
    @media (max-width: 640px){
        .ContactContents{ 
            .ContactMe{
                b{
                    span{
                    }
                }
            }
            .contact_machine{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                figure{
                    img{
                        width: 50%;
                    }
                    figcaption{
                        margin-top: 1rem ;
                        font-size: 1rem;
                        p{
                            span{
                        }}
                    }
                }
            }
        }
    }
</style>