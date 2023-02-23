<template>
    <div class="indexBanner">
        <div class="indexBannerText">
            <h2 class="title">
                <img src="../../img/LOGO-b.png" alt="點點簽logo" width="468px">
            </h2>
            <h3>線上簽署，方便快速。</h3>
            <a href="upload.html" class="indexBtn" text-data="簽署新文件">簽署新文件</a>
        </div>
    </div>
</template>

<style scoped>
.indexBanner{
    position: relative;
    width: 100%;
    height: 1020px;
    background: url("../../img/banner_右側結晶\ 1.png") top 30% right 5% no-repeat,
    url("../../img/banner_左側結晶\ 1.png") top 75% left 5% no-repeat,
    url("../../img/banner_左側結晶\ 2.png") top 75% left 5% no-repeat,
    url("../../img/banner_主要物件\ 1.png") top left no-repeat,
    url("../../img/banner_陰影\ 1.png") bottom right 63.5% no-repeat,
    url("../../img/banner_藍色板塊\ 1.png") bottom right no-repeat,
    #F9F8F6;
}
.indexBannerText{
    position: absolute;
    right: 18%;
    top: 20%;
}
.indexBannerText .title{
    width: 468px;
    margin-bottom: 24px;
}
.indexBannerText h3{
    font-size: 24px;
    letter-spacing: 1em;
    color: #51A8BC;
}
.indexBtn{
    width: 468px;
    margin-top: 93px;
    text-align: center;
    padding: 30px 0;
    font-size: 24px;
    color: #4D4C52;
    background: #FFFAF4;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    position: relative;
    transition: all .5s;
    z-index: 1;
}
.indexBtn::after{
    content: "";
    position: absolute;
    white-space: nowrap;
    padding: 30px 0;   
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #F9B471;
    z-index: -1;
    transition: all .5s;
}
.indexBtn:hover{
    color: #fff;
}
.indexBtn:hover::after{
    width: 100%;
}
@media (max-width:1440px) {
    .indexBanner{
    background:url("../../img/banner_主要物件\ 1.png") top left -100% no-repeat,
    url("../../img/banner_陰影\ 1.png") bottom right 68.5% no-repeat,
    url("../../img/banner_藍色板塊\ 1.png") bottom right 200% no-repeat,
    #F9F8F6;
    }
    .indexBannerText{
    position: absolute;
    right: 10%;
    top: 20%;
    }
}
@media (max-width:820px){
    .indexBanner{
        height: calc(100vh - 61px);
    background:url("../../img/banner_主要物件-ipad.png") top 50% left no-repeat,
    url("../../img/banner_藍色板塊-ipad.png") top 65% right no-repeat,
    #F9F8F6;
    }
    .indexBannerText{
    position: absolute;
    right: 50%;
    top: 9%;
    transform: translateX(50%);
    white-space: nowrap;
    }
    .indexBtn{
        margin-top: 550px;
    }
}
@media (max-width:767px){
    .indexBanner{
    background:url("../../img/banner_主要物件-ipad.png") top 20% left 80% no-repeat,
    url("../../img/banner_藍色板塊-ipad.png") bottom right 65% no-repeat,
    #F9F8F6;
    }
    .indexBannerText{
    right: 50%;
    top: 5%;
    transform: translateX(50%);
    white-space: nowrap;
    }
    .indexBannerText .title{
    width: 200px;
    }
    .indexBannerText h3{
    font-size: 16px;
    letter-spacing: 0.3em;
    color: #51A8BC;
    }
    .indexBtn{
        width: 200px;
        margin-top: 450px;
        font-size: 16px;
        letter-spacing: 0.8em;
        padding: 16px 0;
    }
}
</style>