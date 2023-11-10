<template lang="">
    <section id="About" class="AboutMeContents" :class="{'show':showElement}">
        <div class="txtbox1">
            <b>About <span>Me</span></b>
            <p class="Aboutmep">저는 웹 개발 분야에서 활동하고 있는 웹퍼블리셔이자 프론트엔드 개발자로, 사용자들에게 편리하고 매력적인 웹 경험을 제공하는 것을 즐깁니다.</p>
            <p class="Aboutmep">프론트엔드에게 필요한 프레임워크를 학습하고 평소 쉴땐 개인블로그를 개발합니다. 그리고 보통 등산과 사진을 촬영하면서 휴식을 즐깁니다.</p>
        </div>
        
        <ul>
            <li>
                <img src="../../public/assets/icon/web_trend.png" alt="">
                <p>웹 트렌드</p>
            </li>
            <li>
                <img src="../../public/assets/icon/mountain.png" alt="">
                <p>등산</p>
            </li>
            <li>
                <img src="../../public/assets/icon/photo.png" alt="">
                <p>사진 촬영</p>
            </li>
            <li>
                <img src="../../public/assets/icon/Study.png" alt="">
                <p>학습</p>
            </li>
            <li>
                <img src="../../public/assets/icon/blog.png" alt="">
                <p>블로그</p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name:'AboutMe',
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
            const showPosition = 200;

            if (scrollDirection === 'down') {
                this.showElement = scrollPosition > showPosition;
            }

            this.lastScrollPosition = scrollPosition;
        }
    }
}
</script>
<style lang="scss">
.AboutMeContents.show{
    opacity: 1;
    transform: translateY(0%);
}
.AboutMeContents{
    opacity: 0;
    transform: translateY(-10%);
    transition: opacity 0.8s, transform 0.8s;

    padding: 5rem 0;
    .txtbox1{
        b{
            color:#ffffff;
            font-size: 5.625rem;
            span{color:#4DC0C8}
        }
        .Aboutmep{
            margin-top: 5rem ;
            font-size: 1.875rem ;
            color: #ffffff;
        }
    }
    ul{
        margin: 8rem 0;
        display: flex;
        justify-content: space-between;
        li{
            text-align: center;
            list-style: none;
            img{margin-bottom: 1rem;}
            p{color: white;}
        }
    }
}
@media (max-width:1024px){

    .AboutMeContents{
        .txtbox1{
            text-align: center;
            b{
                font-size: 3rem;
                span{}
            }
            .Aboutmep{
                margin-top: 3rem ;
                font-size: 1rem ;
            }
        }
        ul{
            margin: 5rem 0;
            li{
                img{
                    width: 50%;
                    margin-bottom: 1rem;
                }
                p{}
            }
        }
    }
}
@media (max-width: 640px){
    .AboutMeContents{
        .txtbox1{
            b{
                font-size: 2rem;
                span{}
            }
            .Aboutmep{
                margin-top: 3rem ;
                font-size: .8rem ;
            }
        }
        ul{
            margin: 5rem 0;
            li{
                img{
                    width: 80%;
                    margin-bottom: 1rem;
                }
                p{font-size: .8rem;}
            }
        }
    }
}
</style>