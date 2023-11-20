<template lang="">
    <div class="ProjectComp" v-if="project" >
        <h2> 프로젝트 작품명 : {{ project.title }}</h2>
        <section class="mainimg">
            <a :href="`${project.Detail[1].content[0]}`" target="_blank">
                <img :src="`/assets/common/EasyNetworks/${project.main_Image}`"  alt="">
            </a>
        </section>
        <section 
            id="Choice" 
            ref="section0" 
            class="WhyChoice" 
            :class="{'show':showElement[0]}"
            >
            <a href="#Choice"></a>
            <b><span>Why</span> Choice</b>
            <p>{{project.whychoice[0]}}</p>
            <p>{{project.whychoice[1]}}</p>
        </section>
        <section 
            id="Trouble" 
            ref="section1" 
            class="Trouble" 
            :class="{'show':showElement[1]}"
            >
            <a href="#Trouble"></a>
            <b>Trouble <span>Issue </span> & <span>Solutions</span></b>
            <ul class="TroubleSolution">
                <li>
                    <img src="../../public/assets/common/EasyNetworks/warning1.png" alt="">
                    <div class="txtTS">
                        <b>{{project.Trouble.trcontents1[0]}}</b>
                        <p>{{project.Trouble.trcontents1[1]}}</p>
                    </div>
                </li>

                <li>
                    <img src="../../public/assets/common/EasyNetworks/warning2.png" alt="">
                    <div class="txtTS">
                        <b>{{project.Trouble.trcontents2[0]}}</b>
                        <p>{{project.Trouble.trcontents2[1]}}</p>
                    </div>
                </li>

                <li>
                    <img src="../../public/assets/common/EasyNetworks/warning3.png" alt="">
                    <div class="txtTS">
                        <b>{{project.Trouble.trcontents3[0]}}</b>
                        <p>{{project.Trouble.trcontents3[1]}}</p>
                    </div>
                </li>
                
            </ul>
        </section>
        <section id="Experience" ref="section2" class="Experience" :class="{'show':showElement[2]}">
            <a href="#Experience"></a>
            <b>Experience</b>
            <ul class="Experience_ul">
                <li>
                    <img src="../../public/assets/common/EasyNetworks/num1.png" alt="">
                    <p>{{project.Experience[0]}}</p>
                </li>
                <li>
                    <img src="../../public/assets/common/EasyNetworks/num2.png" alt="">
                    <p>{{project.Experience[1]}}</p>
                </li>
                <li>
                    <img src="../../public/assets/common/EasyNetworks/num3.png" alt="">
                    <p>{{project.Experience[2]}}</p>
                </li>
            </ul>
        </section>
        <section id="Technology" ref="section3" class="Technology" :class="{'show':showElement[3]}">
            <a href="#Technology"></a>
            <b>Technology</b>
            <ul>
                <li>
                    <img :src="`/assets/common/EasyNetworks/${project.Technology[0]}`" alt="">
                </li>
                <li>
                    <img :src="`/assets/common/EasyNetworks/${project.Technology[1]}`" alt="">
                </li>
                <li>
                    <img :src="`/assets/common/EasyNetworks/${project.Technology[2]}`" alt="">
                </li>
                <li>
                    <img :src="`/assets/common/EasyNetworks/${project.Technology[3]}`" alt="">
                </li>
                <li>
                    <img :src="`/assets/common/EasyNetworks/${project.Technology[4]}`" alt="">
                </li>
            </ul>
        </section>
        <section id="Detail" ref="section4" class="detail" :class="{'show':showElement[4]}">
            <a href="#Detail"></a>
            <b>Detail</b>
            <div class="overview">
                <img src="../../public/assets/common/EasyNetworks/OverView.png" alt="">
                <p>{{project.Detail[0]}}</p>
            </div>
            <div class="detail_content">
                <img src="../../public/assets/common/EasyNetworks/Detail.png" alt="">
                <p>Domain : <a :href="`${project.Detail[1].content[0]}`" target="_blank">{{project.Detail[1].content[0]}}</a> </p>
                <p>Category :{{project.Detail[1].content[1]}}</p>
                <p>Period :{{project.Detail[1].content[2]}}</p>
                <p>Classification :{{project.Detail[1].content[3]}}</p>
                <div class="detail_content_img">

                    <img :src="`/assets/common/EasyNetworks/${project.Detail[1].content_img[0]}`" alt="">
                    <img :src="`/assets/common/EasyNetworks/${project.Detail[1].content_img[1]}`" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<script>

import data from "@/assets/detail.json";
const groupList = data;

export default {
   
    data(){
        return{
            groupList,
            project: null, 
            showElement: [false, false, false, false, false],
            sectionOffsets: [], // 각 섹션의 시작(top) 위치를 저장할 배열
        };
    },
    name:"project-detail",
    props:{
        selectedProject: Object, 
    },
    mounted(){
        const id = this.$route.params.id;
        this.project = this.findProjectById(id);
        window.addEventListener('scroll',this.handleScroll);
        setTimeout(()=>{
            this.calculateSectionOffsets(); // 초기에 섹션의 시작 위치 계산
            this.handleScroll();
        },50)
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;

            const showPositions = this.showElement.map((_, index) => this.calculateShowPosition(index));
           
            this.showElement = showPositions.map(
                (position) => scrollPosition > position
            );
            // console.log(this.showElement);
        },
        findProjectById(id) {
            return this.groupList.find((project) => project.id == id);
        },
        calculateSectionOffsets() {
            // 각 섹션의 시작(top) 위치 계산
            this.sectionOffsets = [0]; // 첫 번째 섹션의 시작 위치는 0으로 설정
            const sectionKeys = Object.keys(this.$refs).filter(key => key.startsWith('section'));
            // startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
            for (let i = 1; i < 5; i++) {
                const section = this.$refs[sectionKeys[i]];
                
                if (section) {
                    const rect = section.getBoundingClientRect();
                    this.sectionOffsets.push(rect.top + window.scrollY - window.innerHeight / 1.5);
                }
            }
        },
        updateDetailView(newParams) {
            const id = newParams.id;
            this.project = this.findProjectById(id);
        },
        calculateShowPosition(index) {
            // 각 섹션의 노출을 결정할 위치를 계산합니다.
            return this.sectionOffsets[index];
        },
    },
    watch: {
        '$route.params': {
            handler(newParams) {
                this.updateDetailView(newParams);
            },
            deep: true,
        },
    },
}
</script>
<style lang="scss">
    .ProjectComp{
        margin-top: 10rem;
        color: #ffffff;
        h2{
            text-align: center;
            font-size: 2rem;
            margin: 1rem 0;
        }
        .mainimg{
            img{
                width: 100%;
            }  
        }
        .WhyChoice.show,
        .Trouble.show,
        .Experience.show,
        .Technology.show,
        .detail.show {
            opacity: 1;
            transform: translateY(0%);
        }

        .WhyChoice,
        .Trouble,
        .Experience,
        .Technology,
        .detail {
            opacity: 0;
            transform: translateY(-10%);
            transition: opacity 0.8s, transform 0.8s;
            padding: 5rem 0;
        }
        .WhyChoice{
            margin: 0rem 0;
            b{ 
                font-size: 5.625rem;
                span{color: #4DC0C8;}
            }
            p{
                margin: 5rem 0;
                font-size: 1.5rem;
            }
        }
        .Trouble{
            b{
                font-size: 5.625rem;
                span{
                    color: #4DC0C8; 
                }
            }
            .TroubleSolution{
                li{
                    margin: 5rem 0;
                    list-style: none;
                    display: flex;
                    gap: 5rem;
                    img{
                    }
                    .txtTS{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        b{
                            font-size: 1.5rem;
                        }
                        p{
                            font-size: 1rem;
                            margin-top: 2rem;
                        }
                    }
                }
            }
        }
        .Experience{
            b{font-size: 5.625rem;}
            .Experience_ul{
                li{
                    display: flex;
                    list-style: none;
                    align-items: center;
                    gap: 5rem;
                    margin: 5rem 0;
                    img{}
                    p{font-size: 1.5rem;}
                }
            }
        }
        .Technology{
            b{font-size: 5.625rem;}
            ul{
                display: flex;
                flex-direction: row;
                gap: 8rem;
                margin: 10rem 0;
                li{
                    list-style: none;
                    img{width: 100%;}
                }
            }
        }
        .detail{
            b{font-size:5.625rem;}
            .overview{
                margin: 5rem 0;
                img{}
                p{
                    margin: 2rem 0;
                    font-size: 1.5rem;
                }
            }
            .detail_content{
                img{
                    margin: 2rem 0;
                }
                p{
                    font-size: 1.5rem;
                    a{
                        color: white;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #4DC0C8;
                    }
                }
                .detail_content_img{
                    display: flex;
                    justify-content: space-between;
                    img{width:45%}
                }
            }
            
        }
        
    }
@media (max-width: 1024px){
    .ProjectComp{
        h2{
            text-align: center;
            font-size: 1rem;
            margin: 1rem 0;
        }
    
        .WhyChoice{
            margin: 5rem 0;
            text-align: center;
            b{ 
                font-size: 2rem;
            }
            p{
                font-size: 1rem;
            }
        }
        .Trouble{
            text-align: center;
            b{
                font-size: 2rem;
                span{
                    color: #4DC0C8; 
                }
            }
            .TroubleSolution{
                li{
                    align-items: center;
                    img{
                        width: 20%;
                        height: 20%;
                    }
                    .txtTS{
                        text-align: left;
                    }
                }
            }
        }
        .Experience{
            text-align: center;
            b{
                font-size: 2rem;
            }
            .Experience_ul{
                li{
                    text-align: left;
                    img{
                        width: 20%;
                        height: 20%;
                    }
                    p{font-size: 1rem;}
                }
            }
        }
        .Technology{
            text-align: center;
            b{font-size: 2rem;}
            ul{
                gap: 1rem;
                margin: 5rem 0;
                li{
                    img{width: 80%;}
                }
            }
        }
        .detail{
            text-align: center;
            b{font-size:2rem;}
            .overview{
                
                img{
                    width: 25%;
                }
                p{
                    margin: 2rem 0;
                    font-size: 1rem;
                }
            }
            .detail_content{
                img{
                    width: 25%;
                }
                p{
                    font-size: 1rem;
                }
            }
        }
    }
}
@media (max-width: 640px){
    .ProjectComp{
        .Technology{
            text-align: center;
            b{font-size: 2rem;}
            ul{
                margin: 3rem 0;
                li{
                    img{width: 100%;}
                }
            }
        }
        .detail{
            .overview{
                margin: 3rem 0;
                img{
                    width: 40%;
                }
            }
            .detail_content{
                img{
                    width: 40%;
                }
                .detail_content_img{
                    display:block;
                    img{width:100%}
                }
            }
        }
    }
} 
</style>