<template lang="">
    <header id="header" role="banner">
        <div class="header__inner">
            <a href="/" class="header__logo">
                <img alt="PKstar" src="../../public/assets/common/PKstarlogo.png">
            </a>
            <nav class="header_menu" role="navigation" aria-label="메인 메뉴">
                <ul class="header_menuul">
                    <li class="header_menuli" v-for="(nav, key) in headerNav" :key="key">
                        <a class="header_menua" 
                        :href="nav.url"
                        @click="click_C(`${nav.tilte}`)">
                            {{ nav.title }}
                        </a>
                    </li> 
                </ul>
            </nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu1">
                    <li class="menuli" v-for="(nav, key) in headerNav" :key="key">
                        <a class="header_menua" 
                        :href="nav.url"
                        @click="click_C(`${nav.tilte}`)">
                            {{ nav.title }}
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return{
            headerNav : [
                {
                    title: "Main",
                    url: "/#Main",
                },
                {
                    title: "About",
                    url: "/#About",
                },
                {
                    title: "Skill",
                    url: "/#Skill",
                },
                {
                    title: "Portfolio",
                    url: "/#Portfolio",
                },
                {
                    title: "Contact",
                    url: "/#Contact",
                },
            ]
        }
    },
    methods:{
        click_C(section){   
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }      
        },
    },
}
</script>
<style lang="scss">
.header{
    #header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 10000;
        background-color:#282828a4;
        .header__inner{
            margin: 0 13rem ;
            gap: 10rem;
            display: flex;
            justify-content: space-between;
            .header__logo{
                img{
                    width: 60%;
                }
            }
            .header_menu{
                width: auto;
                gap: 3rem;
                display: flex;
                align-items: center;
                .header_menuul{
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    .header_menuli{
                        color: white;
                        list-style: none;
                        .header_menua{
                            text-decoration: none;
                            color: white;
                        }
                        .header_menua:hover{
                            color: #4DC0C8;
                        }
                    }
                }
            }
            .header__nav__mobile{
                display: none;
            }
            #menuToggle{
                display: none;
            }
        }
    }
        
}
@media (max-width: 1024px){
    .header{
        #header{
            .header__inner{
                margin: 0 3rem ;
                gap: 1rem;
                .header__logo{
                    img{
                        width: 50%;
                        min-width: 90px;
                    }
                }
            }
        }
            
    }
}
@media (max-width: 640px){
    .header{
        #header{
            .header__inner{
                margin: 0rem;
                gap: 0rem;
                .header__logo{
                    img{
                        width: 40%;
                        min-width: 50px;
                    }
                }
                .header_menu{
                    display: none;
                    ul{
                        li{
                            a{
                            }
                            a:hover{
                            }
                        }
                    }
                }
                #menuToggle{
                    display: block;
                    position: relative;
                    top: 17px;
                    left: 0px;
                    z-index: 1;
                    user-select: none;
                    input{
                        display: block;
                        width: 40px;
                        height: 32px;
                        position: absolute;
                        top: 0px;
                        left:0;
                        cursor: pointer;
                        opacity: 0; 
                        z-index: 2;
                    }
                    #menu1{
                        position: absolute;
                        width: 100%;
                        margin: -100px 0 0 -50px;
                        padding:7rem 9rem 2rem 1rem;
                        background: #ededed;
                        list-style-type: none;
                        transform-origin: 0% 0%;
                        transform: translate(100%, 0);
                        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
                        text-align: center;
                        .menuli{
                            text-decoration: none;
                            padding: 10px 0;
                            font-size: 1rem;
                            a{
                                text-decoration: none;
                                color: #232323;
                                transition: color 0.3s ease;
                                
                            }
                        }
                        .menuli:hover{
                            color: #4DC0C8;
                        }
                    }
                    /*----- 메뉴바 3마리가 x가됨 -----*/
                    span{
                        display: block;
                        width: 33px;
                        height: 4px;
                        position: relative;
                        margin-top: 5px;
                        background: #cdcdcd;
                        border-radius: 3px;
                        z-index: 1;
                        transform-origin: 4px 0px;
                        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0) , background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease;
                    }
                    span:first-child {
                        transform-origin: 0% 0%;
                    }
                    span:nth-last-child(2){
                        transform-origin: 0% 100%;
                    }

                    /*----- X가 원래대로 돌아가는과정 -----*/
                    input:checked ~ span{
                        opacity: 1;
                        transform: rotate(45deg) translate(-2px, -1px);
                        background: #232323;
                    }
                    input:checked ~ span:nth-last-child(3){
                        opacity: 0;
                        transform: rotate(0deg) scale(0.2, 0.2);
                    }
                    input:checked ~ span:nth-last-child(2){
                        transform: rotate(-45deg) translate(0, -1px);
                    }
                    input:checked ~ #menu1{
                        transform: none;
                    }
                }
            }
        }
            
    }
}
</style>