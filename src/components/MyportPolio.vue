<template lang="">
    <section id="Portfolio" :class="{'show':showElement}">
        <div class="MyPopol">
            <b><span>My</span> Portfolio</b>
        </div>
        <div>
            <swiper
                :pagination="{
                type: 'progressbar',
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="(slide,index) in slides" :key="index">
                    <a @click="showProjectDetail(slide)">
                        <img :src="slide.image" alt=""/>
                        <p><span>{{slide.title}}</span></p>
                    </a>
                </swiper-slide>
            </swiper>
            <ProjectDetail v-if="selectedProject" :selectedProject="selectedProject" />
        </div>
    </section>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";
    
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    
    // import required modules
    import { Pagination, Navigation } from 'swiper/modules';

    import ProjectDetail from "./DetailView.vue";
    //eslint-disable-next-line no-unused-vars
    import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            showElement:false,
            selectedProject: null,
            slides: [
                {
                    id:"EasyNetworks",
                    title: "클론코딩 : Easy Networks",
                    image: "./assets/common/main_quick2.png",
                },
                {
                    id:"SeJong",
                    title: "GitPage로 관리한 페이지 : 세종문화회관",
                    image: "./assets/common/main_quick3.png",
                },
                {
                    id:"OMGfoods",
                    title: "react.js로 앱만들기 :OMGfoods",
                    image: "./assets/common/main_quick4.png",
                },
                {
                    id:"JeJePick",
                    title: "Next.js로 앱만들기 : JeJePick",
                    image: "./assets/common/main_quick5.png",
                },
            ],
        };
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
        this.handleScroll();
    },
    name:'MyportPolio',
    components: {
        ProjectDetail,
        Swiper,
        SwiperSlide,
    },
    methods: {
        handleScroll(){
            const scrollPosition = window.scrollY;
            const scrollDirection = scrollPosition > this.lastScrollPosition ? 'down' : 'up';
            const showPosition = 3500;

            if (scrollDirection === 'down') {
                this.showElement = scrollPosition > showPosition;
            }

            this.lastScrollPosition = scrollPosition;
        },
        showProjectDetail(project) {
            this.$router.push({ name: 'project-detail', params: { id: project.id } });
        },
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>
<style lang="scss">
    #Portfolio.show{
        opacity: 1;
        transform: translateY(0%); 
    }
    #Portfolio{
        opacity: 0;
        transform: translateY(-10%);
        transition: opacity 0.8s, transform 0.8s;
        padding: 5rem 0;
        .MyPopol{
            margin: 0 0 5rem 0;
            b{
                    color:#ffffff;
                    font-size: 5.625rem;
                    span{
                        color:#4DC0C8
                    }
                }
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        position: relative;
        text-align: center;
        font-size: 18px;
        p{
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom : 0;
                left: 0;
                width: 100%;
                height: 10rem;
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
                color: white;
                font-size: 2rem;
            }
        }
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swiper-button-prev{
        background: url('../../public/assets/icon/icon_arrow_left.png') no-repeat;
        height: 4rem;
        width: 4rem;
    }
    .swiper-button-next {
        background: url('../../public/assets/icon/icon\ _arrow_right.png') no-repeat;
        height: 4rem;
        width: 4rem;
        // background-size: 1rem;
    }
    .swiper-button-next:after,.swiper-button-prev:after{
        display: none;
    }


    @media (max-width: 1024px){
        #Portfolio{
            .MyPopol{
                text-align: center;
                b{
                        font-size: 3rem;
                    }
            }
        }
        .swiper-slide {
            font-size: 18px;
            a{
                p{
                    span{
                        font-size: 1rem;
                        height: 6rem;
                    }
                }
            }
        }
    }
    @media (max-width: 640px){
        .MyPopol{
            b{
                    font-size: 3rem;
                }
        }
    }
</style>