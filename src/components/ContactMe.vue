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
            <figure class="Email_fig">
                <div class="Email">
                    <img src="../../public/assets/icon/Email.svg" alt="">
                </div>
                <figcaption class="Email_figcaption">
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
        <div class="form_Email">
            <h2>E-mail </h2>
            <form ref="form" @submit.prevent="sendRequestEmail">
                <p>
                    <input type="text" name="form_name" placeholder="name" width="400px">
                </p>
                <p>
                    <input type="text" name="form_title" placeholder="title" width="400px">
                </p>
                <p>
                    <textarea name="form_content" placeholder="content" width="400px"></textarea>
                </p>
                <p>
                    <input @click="sendRequestEmail" type="submit" value="전송" class="send_mail">
                </p>
            </form>
        </div>
    </section>
</template>
<script>
import emailjs from 'emailjs-com';
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
        },
        sendRequestEmail() {
            console.log(process.env.VUE_APP_SERVICE_ID);
            emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID,  this.$refs.form, process.env.VUE_APP_PUBLIC_KEY)
                .then((res) => {
                    console.log(res)
                    alert('전송 완료 되었습니다!')
                }, (error) => {
                    console.log(error)
                })
            },
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
                div{
                    img{
                        width: 100%;
                        transition: 1s;
                        position: relative;
                    }
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
        .form_Email{
            display: block;
            background-color: #303030;
            padding: 5rem 0;
            h2{
                text-align: center;
                color: white;
                font-size: 2rem;
            }
            form{

                p{
                    display: flex;
                    gap: 5rem;
                    justify-content: center;
                    label{
                        color: #ffffff;
                    }
                    input{
                        padding: 1rem 0;
                        color: #ffffff;
                        font-size: 1.5rem;
                        width:50%;
                        margin-bottom: 1rem;
                        background-color: #4dc0c800;
                        border-radius: 3rem;
                        border: 1px solid #4DC0C8;
                        text-align: center;
                        
                    }
                    textarea{
                        color: white;
                        background-color: #4dc0c800;
                        border: 1px solid #4DC0C8;
                        text-align: center;
                        border-radius: 3rem;
                        font-size: 1.5rem;
                        width: 50%;
                        height: 10rem;
                        
                    }
                    textarea::-webkit-scrollbar{
                        /* 스크롤바 전체 */
                    }
                    .send_mail{
                        margin-top: 1rem;
                        padding: 1rem 1rem;
                        border-radius: 3rem;
                        text-align: center;
                        background-color: #4dc0c877;
                        transition: 1s;
                        color: white;
                        cursor: pointer;
                    }
                    .send_mail:hover{
                        background-color: #4dc0c8;
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