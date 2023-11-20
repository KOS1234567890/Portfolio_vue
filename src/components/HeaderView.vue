<template lang="">
    <div class="floating-menu">
        <input type="checkbox">
        <span class="plus-icon">
            <span class="fa fa-plus" aria-hidden="true">+</span>
        </span>
        <ul class="floating-nav">
            <li class="header_menu1li" v-for="(nav, key) in headerNav" :key="key">
                    <a aria-hidden="true" class="header_menu1a" :href="nav.url" @click="click_C(`${nav.tilte}`)">{{ nav.class }}</a>
            </li> 
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            headerNav : [
                {
                    class:"Ch",
                    title: "Choice",
                    url: "#Choice",
                },
                {
                    class:"Tr",
                    title: "Trouble",
                    url: "#Trouble",
                },
                {
                    class:"Ex",
                    title: "Experience",
                    url: "#Experience",
                },
                {
                    class:"Tn",
                    title: "Technology",
                    url: "#Technology",
                },
                {
                    class:"De",
                    title: "Detail",
                    url: "#Detail",
                },
                {
                    class:"Mo",
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
.floating-menu{
    z-index: 50;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: orange;
	position: fixed;
	bottom: 35px;
	right: 35px;
	input{
		position: absolute;
		width: 50px;
		height: 50px;
		margin: 0;
		opacity: 0;
		cursor: pointer;
		&:checked{
			& ~ .plus-icon{
				transform: rotate(135deg);
			}
			& ~ .floating-nav{
				li{
					&:nth-child(6){
						transform: translatey(-48px);
					}
					&:nth-child(5){
						transform: translatey(-88px);
					}
					&:nth-child(4){
						transform: translatey(-128px);
					}
					&:nth-child(3){
						transform: translatey(-168px);
					}
					&:nth-child(2){
						transform: translatey(-208px);
					}
					&:nth-child(1){
						transform: translatey(-248px);
					}
				}
			}
		}
		& ~ .plus-icon{
			transform: rotate(0);
		}
	}
	& > .plus-icon{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		font-size: 24px;
		line-height: 1;
		color: #FFFFFF;
		background: #4DC0C8;
        
		border-radius: 50%;
		transform: rotate(0);
		transition: all 0.5s ease;
		pointer-events: none;
		position: absolute;
		box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2); 
	}
	& > .floating-nav{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		li{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			background: #4DC0C8;
			cursor: pointer;
			position: absolute;
			transition: all 0.5s ease;
			a{
                text-decoration: none;
				font-size: 14px;
				line-height: 1;
				color: #ffffff;
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
                margin:0rem;
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
                    left: -25px;
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