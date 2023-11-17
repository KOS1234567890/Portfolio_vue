<template lang="">
    <header id="header" role="banner">
        <div class="header__inner">
            <a href="/" class="header__logo">
                <img alt="PKstar" src="../../public/assets/common/PKstarlogo.png">
            </a>
            <nav class="header_menu1" role="navigation" aria-label="메인 메뉴">
                <ul class="header_menu1ul">
                    <li class="header_menu1li" v-for="(nav, key) in headerNav" :key="key">
                        <a class="header_menu1a" :href="nav.url" @click="click_C(`${nav.tilte}`)">{{ nav.title }}</a>
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
                        <a :href="nav.url" @click="click_C(`${nav.tilte}`)">{{ nav.title }}</a>
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
                    title: "Choice",
                    url: "#Choice",
                },
                {
                    title: "Trouble",
                    url: "#Trouble",
                },
                {
                    title: "Experience",
                    url: "#Experience",
                },
                {
                    title: "Technology",
                    url: "#Technology",
                },
                {
                    title: "Detail",
                    url: "#Detail",
                },
                {
                    title: "MORE",
                    url: "#MORE",
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
            margin: 0 13rem;
            gap: 10rem;
            display: flex;
            justify-content: space-between;
            .header__logo{
                img{
                    width: 50%;
                }
            }
            .header_menu1{
                width: auto;
                gap: 3rem;
                display: flex;
                align-items: center;
                .header_menu1ul{
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    .header_menu1li{
                        color: white;
                        list-style: none;
                        .header_menu1a{
                            font-size: 1.3rem;
                            text-decoration: none;
                            color: white;
                        }
                        .header_menu1a:hover{
                            color: #4DC0C8;
                        }
                    }
                }
            }
            .header__nav__mobile{
                display: none;
            }
        }
    }
        
}
@media (max-width: 1024px){
    .header{
        #header{
            .header__inner{
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
                gap: 0rem;
                .header__logo{
                    img{
                        width: 40%;
                        min-width: 50px;
                    }
                }
                .header_menu1{
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
                    top: 25px;
                    left: 30px;
                    z-index: 1;
                    user-select: none;
                    input{
                        display: block;
                        width: 40px;
                        height: 32px;
                        position: absolute;
                        top: -7px;
                        left: -5px;
                        cursor: pointer;
                        opacity: 0; 
                        z-index: 2;
                    }
                    #menu1{
                        position: absolute;
                        width: 100%;
                        margin: -100px 0 0 -50px;
                        padding:0 7rem 4rem 1rem;
                        padding-top: 125px;
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
                    span{
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 5px;
                        position: relative;
                        
                        background: #cdcdcd;
                        border-radius: 3px;
                        
                        z-index: 1;
                        
                        transform-origin: 4px 0px;
                        
                        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease;
                    }
                    span:first-child {
                        transform-origin: 0% 0%;
                    }
                    span:nth-last-child(2){
                        transform-origin: 0% 100%;
                    }
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
                    input:checked ~ ul{
                        transform: none;
                    }
                }
            }
        }
            
    }
}
</style>