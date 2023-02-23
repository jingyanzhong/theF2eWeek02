<template>
    <div class="container">
        <div class="loading">
            <ul>
                <li>上傳文件</li>
                <li>進行簽署</li>
                <li>下載文件</li>
            </ul>
            <div class="loadingBar">
                <div class="rectangle"></div>
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
            </div>
        </div>    
        <div class="footerBtn">
            <button type="reset" class="cancel" text-data="取消">取消</button>
            <a href="step2.html" class="submit" text-data="開啟文件">開啟文件</a>
            <!-- <button type="submit" class="submit disabled" text-data="開啟文件">開啟文件</button> -->
        </div>
    </div>
</template>

<style scoped>
footer .container{
    display: flex;
}
.loading ul{
    display: flex;
}
.loading li{
    margin-right: 107px;
}
.loadingBar{
    width: 68%;
    height: 22px;
    margin-top: 16px;
    position: relative;
}
.rectangle{
    width: 100%;
    height: 9px;
    background: #fff;
    position: absolute;
    left: 11%;
    box-shadow: 0px 4px 4px #EEEDE8;
}
/* .rectangle::before{
    content: "";
    width: 50%;
    height: 3px;
    background: #F9B471;
    position: absolute;
    left: 0;
    top: 3px;
} */
.circle{
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 11px;
    box-shadow: 0px 4px 4px #EEEDE8;
    
}
.circle1{
    position: absolute;
    top: -28%;
    left: 10%;
}
.circle1::before{
    content: "";
    width: 16px;
    height: 16px;
    background: #F9B471;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 8px;
}
.circle2{
    position: absolute;
    top: -28%;
    left: 58%;
}
.circle3{
    position: absolute;
    top: -28%;
    right: -12%;
}
.footerBtn{
    margin-left: auto;
    display: flex;
}
.footerBtn button,.footerBtn a{
    width: 180px;
    margin-left: 15px;
    border-radius: 35px;
    font-size: 20px;
    text-align: center;
    padding: 16px 0;
    border: none;
    cursor: pointer;
    color: #51A8BC;
    background: #fff;
    box-shadow: 0px 4px 4px #EEEDE8;
    letter-spacing: 0.4em;
    position: relative;
    transition: all .5s;
    z-index: 1;
}
.footerBtn button::after,.footerBtn a::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    white-space: nowrap;
    background: #F9B471;
    z-index: -1;
    transition: all .5s;
}
.footerBtn button:hover,.footerBtn a:hover{
    color: #fff;
}
.footerBtn button:hover::after,.footerBtn a:hover::after{
    border-radius: 35px;
    height: 100%;
}
.footerBtn .disabled{
    color: #fff;
    background: #EEEDE8;
}

@media (max-width:820px) {
    .loading li{
        font-size: 14px;
        margin-right: 36px;
        letter-spacing: 0.2em;
    }
    .loadingBar{
        margin-top: 23px;
    }
    .footerBtn button,.footerBtn a{
        width: 130px;
        font-size: 16px;
        padding: 13px 0;    
    }
    .footerBtn a{
        line-height: 32px;
    }
}
@media (max-width:767px) {
    footer .container{
        flex-direction: column;
    }
    .loading ul{
        justify-content: space-between;
    }
    .loading li{
        margin-right: 0;
    }
    .loadingBar{
        width: 90%;
    }
    .rectangle{
        left: 5%;
    }
    .circle1{
        left: 5%;
    }
    .circle2{
        left: 52%;
    }
    .circle3{
        right: -5%;
    }
    .footerBtn{
        margin-top: 16px;
    }
    .footerBtn button,.footerBtn a{
        font-size: 14px;
        padding: 8px 0;    
    }
}
</style>