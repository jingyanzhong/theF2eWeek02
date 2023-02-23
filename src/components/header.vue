<template>
        <div class="container">
            <h1><a href="index.html">點點簽</a></h1>
            <nav>
                <ul>
                    <li><a href="#" class="disabled">邀請他人簽署</a></li>
                    <li><a href="upload.html" text-data="簽署新文件">簽署新文件</a></li>
                    <li><a href="login.html" text-data="登入">登入</a></li>
                </ul>
            </nav>
            <div class="moblie-menu-show">
            </div>
        </div>
</template>

<style scoped>
@import '../assets/main.css';
header .container{
    display: flex;
    align-items: center;
}
header h1{
    margin-right: auto;
}
header h1 a{
    background: url('../../img/LOGO-s.png') no-repeat;
    width: 100px;
    height: 25px;
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
}
header ul{
    display: flex;
}
header ul li{
    margin-left: 30px;
}
header ul li a{
    position: relative;
    color: #51A8BC;
    transition: all .5s;
}
header ul li a::after{
    content: attr(text-data);
    white-space: nowrap; /* 加了这行代码，禁止文字换行 */
    position: absolute;
    top: 0;
    left: 0;
    background: #F9B471;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    width: 0%;
    transition: width .5s;
}
header ul li a:hover{
    color: transparent;
}
header ul li a:hover::after{
    width: 100%;
}
</style>