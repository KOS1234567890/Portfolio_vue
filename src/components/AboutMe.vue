<template lang="">
    <section id="About" class="AboutMeContents" :class="{'show':showElement}">
        <div class="txtbox1">
            <b>About <span>Me</span></b>
            <p class="Aboutmep">웹퍼블리셔이자 프론트엔드 개발자로서, 사용자들에게 편리하고 매력적인 웹 경험을 제공하는 것을 즐겨합니다. 프론트엔드 프레임워크를 학습하는 것에 열중하고, 일상에서는 음악을 듣거나 자연 속에서 활동함으로써 마음을 정화하고 에너지를 충전하는 시간을 가지고 사진 촬영을 즐기며 휴식을 취합니다. 이런 취미와 관심사는 업무에 새로운 아이디어와 창의성을 불어넣어줄 것 같아요!</p>
        </div>
        
        <ul class="About_ul">
            <li class="About_li">
                <img src="../../public/assets/icon/web_trend.png" alt="">
                <p class="About_p">웹 트렌드</p>
            </li>
            <li class="About_li">
                <img src="../../public/assets/icon/mountain.png" alt="">
                <p class="About_p">등산</p>
            </li>
            <li class="About_li">
                <img src="../../public/assets/icon/photo.png" alt="">
                <p class="About_p">사진 촬영</p>
            </li>
            <li class="About_li">
                <img src="../../public/assets/icon/Study.png" alt="">
                <p class="About_p">학습</p>
            </li>
            <li class="About_li">
                <img src="../../public/assets/icon/Sing.png" alt="">
                <p class="About_p">노래 듣기</p>
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
    padding-top: 5rem;
    .txtbox1{
        b{
            color:#ffffff;
            font-size: 5.625rem;
            span{color:#4DC0C8}
        }
        .Aboutmep{
            margin-top: 5rem ;
            font-size: 1.5rem ;
            color: #ffffff;
        }
    }
    .About_ul{
        margin: 8rem 0;
        display: flex;
        justify-content: space-between;
        .About_li{
            text-align: center;
            list-style: none;
            img{margin-bottom: 1rem;}
            .About_p{
                color: white;
                opacity: 0;
                transition: 1s;
            }
            
        }
        .About_li:hover .About_p{
            opacity: 2;
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
        .About_ul{
            margin: 5rem 0;
            .About_li{
                img{
                    width: 50%;
                    margin-bottom: 1rem;
                }
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
                font-size: .8rem ;
            }
        }
        .About_ul{
            .About_li{
                img{
                    width: 80%;
                }
                .About_p{font-size: .8rem;}
            }
        }
    }
}
</style>