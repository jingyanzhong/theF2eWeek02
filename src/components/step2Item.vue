<script setup>
import {ref , reactive} from 'vue';
const signContent = document.querySelector('.signContent');
// d-block class
const isBlock = ref(false);
console.log(isBlock.value)
// canvas
</script>
<template>
    <div class="step2Option">
        <div class="word">
            <p>文件名稱</p>
            <label for="uploadWord">
                <input type="file" name="uploadWord" id="uploadWord">
            </label>
        </div>
        <hr>
        <div class="sign">
            <p>我的簽名</p>
            <button class="newSign" @click="isBlock = true ; $emit('childBlock',isBlock)" >創建簽名</button>
            <button class="SignImg">上傳圖片</button>
        </div>
    </div>
    <div class="signContent" :class="{'d-block' : isBlock}">
        <div class="signBox">
            <h4>在框格內簽下大名!</h4>
            <canvas id="canvas" 
            @mousedown.native="$emit('canvasStart')" 
            @mouseup.native="$emit('canvasFinish')"
            @mouseleave.native="$emit('canvasFinish')"
            @mousemove.native="$emit('canvasDraw')"
            ></canvas>
            <div class="canvasBtnGroup">
                <button class="clearBtn" id="clearBtn" @click="reset">清除</button>
                <button class="cancelBtn" id="cancelBtn" @click="isBlock = false">取消</button>
                <button class="submitBtn disabled" id="submitBtn">簽好了</button>
            </div>
        </div>
    </div>
    <div class="showPdf">

    </div>
</template>

<style>
.d-block{
    display: block !important ;
}
hr{
    margin: 25px -37px;
    border: 1px solid #EEEDE8;
}
.step2Option{
    height: 100%;
    width: 25%;
    background: #fff;
    padding: 25px 37px;
    color: #A5A39C;
    letter-spacing: 0.2em;
}
.step2Option p{
    margin-bottom: 16px;
}
.sign label{
    display: block;
    text-align: center;
}
.sign button{
    width: 100%;
    margin-bottom: 16px;
    background: #fff;
    border: 1px dashed #A5A39C;
    padding: 18px 0;
    font-size: 16px;
    cursor: pointer;
    color: #A5A39C;
}
.sign button:hover{
    background: #FFFAF4;
}
.showPdf{
    width: 75%;
    height: calc(100% - 60px);
    background: #fff;
    margin: 30px 166px;
}
.signContent{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.2);
}
.signBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 830px;
    height: 550px;
    padding: 30px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 35px;
}
#canvas{
    width: 100%;
    height: 360px;
    border: 1px dashed #A5A39C;
}
.signBox h4{
    color: #A5A39C;
    letter-spacing: 0.4em;
    margin-bottom: 30px;
}
.canvasBtnGroup{
    width: 100%;
    margin-top: 30px;
    display: flex;
}
.canvasBtnGroup button{
    font-size: 20px;
    cursor: pointer;
}
.clearBtn{
    border: none;
    background: transparent;
    color: #51A8BC;
}
.cancelBtn,.submitBtn{
    width: 180px;
    padding: 15px 0;
    background: #FFFAF4;
    color: #51A8BC;
    border: none;
    border-radius: 35px;
    box-shadow: 0px 4px 4px #EEEDE8;
}
.cancelBtn{
    margin-left: auto;
    margin-right: 15px;
}
.submitBtn.disabled{
    background: #EEEDE8;
    color: #fff;
}
</style>