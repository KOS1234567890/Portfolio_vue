<template lang="">
    <section id="Contact" class="ContactContents" :class="{'show':showElement}">
        <div class="ContactMe">
            <b>Contact<span> Me</span></b>
        </div>
        <div class="contact_machine">
            <figure>
                <img src="../../public/assets/icon/Tel.png" alt="">
                <figcaption>
                   <p><span>TEL)</span>02+</p>
                   <p>010-5878-8184</p>
                </figcaption>
            </figure>
            <figure>
                <img src="../../public/assets/icon/Email.png" alt="">
                <figcaption>
                   <p><span>EMAIL)</span></p>
                   <p>fistar02@gmail.com</p>
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
                figcaption{
                    margin-top: 3rem ;
                    text-align: center;
                    font-size: 2.875rem;
                    p{
                        color: #ffffff;
                        span{
                            color: #4DC0C8;
                    }}
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