<template lang="">
    <section id="Skill" :class="{'show':showElement}">
        <div class="MySkill">
            <b><span>My</span> Skill</b>
        </div>
        <div class="skill_main">
            <ul class = "skill_left">
                <li>
                    <img src="../../public/assets/icon/Html.png" alt="">
                    <span> html을 사용하여 기본적인 마크업 구축이 가능</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/CSS.png" alt="">
                    <span>CSS를 통해  요소가 화면, 종이, 음성이나 다른 매체 상에 
    어떻게 렌더링되어야 하는지 지정</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/JS.png" alt="">
                    <span>JS를 통하여 페이지내의 기본적인 기능을 구현 가능</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/Figma.png" alt="">
                    <span>Figma로 웹페이지의 전체적인 디자인 제작 및 기획 가능 </span>
                </li>
                <li>
                    <img src="../../public/assets/icon/SASS.png" alt="">
                    <span>CSS Preprocessor 인 sass를 다루어서 css의 
    단점을 커버한코딩이 가능</span>
                </li>
            </ul>
            <ul class="skill_right">
                <li>
                    <img src="../../public/assets/icon/Node_js.png" alt="">
                    <span> Node.js를 사용해서 JS의 확장 프로그램들을 사용하고
     서버를 구축 할 수 있음</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/Github.png" alt="">
                    <span>Github로 형상관리를 유지하고 제작한 홈페이지를 
    저장 및 사용하여 배포가능</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/React_js.png" alt="">
                    <span>React로 사용자 인터페이스(싱글 페이지 어플리케이션이나
    모바일 애플리케이션 개발)를 만들 수 있음</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/MySQL.png" alt="">
                    <span>MySQL로 서버를 구축하고 빅데이터를 다룰 수 있음</span>
                </li>
                <li>
                    <img src="../../public/assets/icon/Next_js.png" alt="">
                    <span>React에는 없는 서버 사이드 렌더링,  정적사이트 생성 
    과 같은 다양한 기능을 사용가능</span>
                </li>
            </ul>
        </div>
        <div class = "border_skill">
            <div class="SkillGraph_img">
                <img src="../../public/assets/common/Skill_Graph1.png" alt="">
                <img class="SkillGraph_img2" src="../../public/assets/common/Skill_Graph2.png" alt="">
            </div>
            <div class="SkillGraph_ex">
                <ul>
                    <li>
                        HTML
                        <div class="progress-bar">           
                            <div class="HTML"> </div>
                        </div>
                    </li>
                    <li>CSS
                        <div class="progress-bar">           
                            <div class="CSS"> </div>
                        </div>
                    </li>
                    <li>JS
                        <div class="progress-bar">           
                            <div class="JS"> </div>
                        </div>
                    </li>
                    <li>SASS
                        <div class="progress-bar">           
                            <div class="SASS"> </div>
                        </div>
                    </li>
                    <li>Figma
                        <div class="progress-bar">           
                            <div class="Figma"> </div>
                        </div>
                    </li>
                    <li>React.js
                        <div class="progress-bar">           
                            <div class="React"> </div>
                        </div>
                    </li>
                    <li>NEXT.js
                        <div class="progress-bar">           
                            <div class="NEXT"> </div>
                        </div>
                    </li>
                    <li>Node.js
                        <div class="progress-bar">           
                            <div class="Node"> </div>
                        </div>
                    </li>
                    <li>Github
                        <div class="progress-bar">           
                            <div class="Github"> </div>
                        </div>
                    </li>
                    <li>MySQL
                        <div class="progress-bar">           
                            <div class="MySQL"> </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class = "SkillGraph_exp">
                <ol>
                    <li>    ※ 반응형이고 직관적인 사용자 인터페이스를 만드는 것에 열정   </li>
                    <li>    ※ 깨끗하고 유지보수 가능한 코드 작성을 중요시하며, 원활한 사용자 경험 제공에 초점</li>
                    <li>    ※ HTML, CSS, JavaScript 뿐만 아니라 React, Vue.js와 같은 프레임워크에 대한 전문 지식을 포함</li>
                    <li>    ※ 저는 협업을 가치 있게 여기며 다른 이해관계자들과 효과적으로 소통 </li>
                    <li>    ※ 최신 웹 개발 동향과 기술에 대한 최신 정보를 유지</li>
                    <li>    ※ 최상의 솔루션을 제공하기 위해 지속적으로 기술 스택을 확장</li>
                </ol>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'MySkill',
  data() {
    return {
      t: 0,
      totalMinwon: 100,
      showElement:false,
    };
  },
  mounted() {
    if (this.$refs.bar) {
        this.$refs.bar.style.width = '0';

        const barAnimation = setInterval(() => {
        this.$refs.bar.style.width = this.t + '%';
        this.t++ >= this.totalMinwon && clearInterval(barAnimation);
        }, 10);
    }
    window.addEventListener('scroll',this.handleScroll);
    this.handleScroll();
  },
  methods:{
        handleScroll(){
            const scrollPosition = window.scrollY;
            const scrollDirection = scrollPosition > this.lastScrollPosition ? 'down' : 'up';
            const showPosition = 1000;

            if (scrollDirection === 'down') {
                this.showElement = scrollPosition > showPosition;
            }

            this.lastScrollPosition = scrollPosition;
        }
    }
};
</script>
<style lang="scss">
#Skill.show{
    opacity: 1;
    transform: translateY(0%);
}     
#Skill{
    opacity: 0;
    transform: translateY(-10%);
    transition: opacity 0.8s, transform 0.8s;
    padding: 5rem 0;
    .MySkill{
        b{
            color:#ffffff;
            font-size: 5.625rem;
            span{
                color:#4DC0C8
            }
        }
    }
    .skill_main{
        margin-top: 5rem ;
        display: flex;
        .skill_left{
            width: 50%;
            li{
                margin-top: 4rem ;
                list-style: none;
                color: #ffffff;
                display: flex;
                align-items: center;
                img{}
                span{
                    margin:0 1rem;
                }
            }
        }
        .skill_right{
            width: 50%;
            li{
                margin-top: 4rem ;
                list-style: none;
                color: #ffffff;
                display: flex;
                align-items: center;
                img{}
                span{
                    margin:0 1rem;
                }
            }
        }
    }
    .border_skill{
        background-color: #303030;
        padding: 10rem ;
        margin-top: 3rem;
        .SkillGraph_img{
            display: flex;
            justify-content: center;
            gap: 5rem;
            img{
                max-width: 50%;
            }
        }
        .SkillGraph_ex{
            display: none;
            ul{
                li{
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                    color: #ffffff;
                    margin: 1rem 0;
                }
            }
            .progress-bar {
                width: 80%;
                height: 20px;
                background-color: #ffffff;
                font-weight: 600;
                font-size: .8rem;
                display: flex;
                .HTML {
                    width: 95%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .CSS {
                    width: 95%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .JS {
                    width: 75%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .Figma {
                    width: 70%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .SASS {
                    width: 90%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .Node {
                    width: 70%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .Github {
                    width: 70%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .React {
                    width: 75%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .MySQL {
                    width: 70%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
                .NEXT {
                    width: 80%;  
                    height: 20px;
                    padding: 0;
                    text-align: center;
                    background-color: #4DC0C8;
                    color: #111;
                }
            }
        }
        .SkillGraph_exp{
            ol{
                margin-top: 8rem;
                li{
                    margin-top: .5rem;
                    list-style: none;
                    color: #ffffff;
                }
            }
        }
    }
}
    @media (max-width: 1024px){
        #Skill{
            .MySkill{
                text-align: center;
                
                b{
                    font-size: 3rem;
                    span{
                    }
                }
            }
            .skill_main{
                margin-top: 3rem ;
                flex-direction: column;
                .skill_left{
                    width: 100%;
                    li{
                        border-radius: 3rem;
                        width: 100%;
                        margin-top: 4rem ;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        gap: 2rem;
                        img{width: 30%;}
                        span{
    
                            font-size: 1rem;
                            margin:0 1rem;
                        }
                    }
                }
                .skill_right{
                    width: 100%;
                    li{
                        border-radius: 3rem;
                        width: 100%;
                        margin-top: 4rem ;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        gap: 2rem;
                        img{width: 30%;}
                        span{
    
                            font-size: 1rem;
                            margin:0 1rem;
                        }
                    }
                }
            }
            .border_skill{
                background-color: #303030;
                padding: 1rem ;
                margin-top: 3rem;
                    flex-direction: column;
                .SkillGraph_img{
                    display: none;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    gap: 5rem;
                    img{
                        max-width: 80%;
                    }
                }
                .SkillGraph_ex{
                    display: block;
                }
                .SkillGraph_exp{
                    ol{
                        margin-top: 8rem;
                        li{
                            margin-top: .5rem;
                            list-style: none;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 640px){
        #Skill{
            .MySkill{
                text-align: center;
                b{
                    font-size: 3rem;
                    span{
                    }
                }
            }
            .skill_main{
                .skill_left{
                    li{
                        img{}
                        span{
                            font-size: .8rem;
                        }
                    }
                }
                .skill_right{
                    li{
                        img{}
                        span{
                            font-size: .8rem;
                        }
                    }
                }
            }
            .border_skill{
                margin-top: 3rem;
                .SkillGraph_img{
                    display: none;
                    justify-content: center;
                    img{
                        max-width: 100%;
                    }
                }
                .SkillGraph_exp{
                    ol{
                        margin-top: 8rem;
                        li{
                            font-size: .8rem;
                            margin-top: .5rem;
                        }
                    }
                }
            }
        }
    }
    
</style>