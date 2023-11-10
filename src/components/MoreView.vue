<template lang="">
    <section id="MORE" class="MORE">
            <b>MORE</b>
            <div class="More_Slide">
                <swiper
                    :effect="'coverflow'"
                    :grabCursor="true"
                    :centeredSlides="true"
                    :slidesPerView="'auto'"
                    :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }"
                    :pagination="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide class="MoreSlide" v-for="(slide,index) in slides" :key="index">
                        <a @click="showProjectDetail(slide)">
                            <img class="Slideimg" :src="slide.image" alt=""/>
                            <p><span class="SlideTitle">{{slide.title}}</span></p>
                            
                        </a>
                    </swiper-slide>
                </swiper>
                <ProjectDetail v-if="selectedProject" :selectedProject="selectedProject" />
            </div>
    </section>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// import required modules
import {Pagination, EffectCoverflow } from 'swiper/modules';

import ProjectDetail from "./DetailView.vue";

export default {
    data(){
        return{
            selectedProject: null,
            slides: [
                {
                    id:"EasyNetworks",
                    title: "클론코딩 : Easy Networks",
                    image: "../assets/common/main_quick2.png",
                },
                {
                    id:"SeJong",
                    title: "GitPage로 관리한 페이지 : 세종문화회관",
                    image: "../assets/common/main_quick3.png",
                },
                {
                    id:"OMGfoods",
                    title: "react.js로 앱만들기 :OMGfoods",
                    image: "../assets/common/main_quick4.png",
                },
                {
                    id:"JeJePick",
                    title: "Next.js로 앱만들기 : JeJePick",
                    image: "../assets/common/main_quick5.png",
                },
            ],
        };
    },
    name:'MoreView',
    components: {
      ProjectDetail,
      Swiper,
      SwiperSlide,
    },
    methods: {
        showProjectDetail(project) {
            this.$router.push({ name: 'project-detail', params: { id: project.id}});
        },
        
    },
    
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
}
</script>
<style lang="scss">
    .MORE{
        margin: 5rem 0;
        color: #ffffff;
        b{font-size: 5.625rem;}
        .More_Slide{
            margin: 5rem 0;
            .mySwiper{
                .MoreSlide{
                    width: 50%;
                    a{
                        .Slideimg{
                            width: 100%;
                            border-radius: 3rem;
                        }
                        .Slideimg:hover{
                            border: 3px solid #4DC0C8 ;
                        }
                    }
                }
            }
        }
    }
    .swiper-slide {
        position: relative;
        text-align: center;
        font-size: 18px;
        p{
            .SlideTitle{
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
                font-size: 1.5rem;
                border-radius: 0 0 3rem 3rem;

            }
        }
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
@media (max-width: 1024px){
    .MORE{
        text-align: center;
        b{font-size: 2rem;}
        .More_Slide{
            margin: 2rem 0;
            .mySwiper{
                .MoreSlide{
                    width: 80%;
                    a{
                        .Slideimg{
                            width: 100%;
                            border-radius: 1rem;
                        }
                    }
                }
            }
        }
    }
    .swiper-slide {
        p{
            .SlideTitle{
                height: 6rem;
                font-size: 1.2rem;
                border-radius: 0 0 1rem 1rem;

            }
        }
    }
}
@media (max-width: 640px){
    .swiper-slide {
        p{
            .SlideTitle{
                height: 5rem;
                font-size: .8rem;
                border-radius: 0 0 1rem 1rem;

            }
        }
    }
    .swiper-pagination{
        display: none;
    }
} 
</style>