<template lang="">
    <div class="detailpage">
        <div class="header">
            <header_menu/>
        </div>
        <detailpage/>
        <Morepage/>
    </div>
</template>
<script>
import detailpage from '@/components/DetailView.vue';
import Morepage from '@/components/MoreView.vue';
import header_menu from '@/components/HeaderView.vue';
export default {
    name:"project-detail",
    components:{
        detailpage,
        Morepage,
        header_menu,
    },
}
</script>
<style lang="scss">
    .detailpage{
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                img{}
            }
        }
    }
    @media (max-width: 1024px){
        .detailpage{
            .header{
                a{
                    img{width: 40%;}
                }
            }
        }
    }
    @media (max-width: 640px){
        .detailpage{
            .header{
                a{
                    img{width: 30%;}
                }
            }
        }
    }
</style>