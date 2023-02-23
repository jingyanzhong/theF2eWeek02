<script setup>
import { ref , reactive } from 'vue'
const state = reactive({
    uploadState: 'active',
})
const uploadData = reactive({
    data:[],
})

console.log(uploadData.data == '')
// Dropzone.options.uploadForm = {
//     dictDefaultMessage: `<p>點擊此處上傳 或 直接拖曳檔案</p>
//                     <img class="pdfIcon" src="../../img/carbon_document-pdf.png" alt="pdfIcon" width="144">
//                     <p>(限10MB以下PDF檔)</p>`,
//     maxFilesize: 10,
//     // hiddenInputContainer: "completedList",
// };
function uploadChange(e){
    const file = e.target.files[0];
    const fileMaxSize = 1024 * 10 ;
    if(file.type !== 'application/pdf'){
        alert("您的檔案類型不是PDF檔喔!");
        return
    }else if((file.size / 1024) > fileMaxSize){
        alert("您的檔案太大了!");
        return
    }
    console.log(e.target.files[0]);
    const nowTime = new Date();
    const uploadList = {
        name:file.name,
        size: file.size,
        time: `${nowTime.getFullYear()}/${nowTime.getDate()}/${nowTime.getDay()}, ${nowTime.getHours()}:${nowTime.getMinutes()}`,
    };

    uploadData.data.push(uploadList);
    console.log(uploadData.data);
}


</script>
<template>
    <div class="container">
        <div class="uploadList">
            <button class="uploadListBtn" :class="state.uploadState === 'active' ? 'active' : ''" @click="state.uploadState = 'active'">
                上傳新文件
            </button>
            <button class="uploadListBtn completed" :class="state.uploadState === 'completed' ? 'active' : ''" @click="state.uploadState = 'completed'">
                選擇已上傳文件
            </button>
            <div class="uploadListContent">
                <div class="uploadListContent-text" v-if="state.uploadState === 'active'">
                    <label for="uploadInput">
                        <input type="file" accept=".pdf" name="uploadInput" id="uploadInput" @change="uploadChange">
                        <p>點擊此處上傳 或 直接拖曳檔案</p>
                        <img class="pdfIcon" src="../../img/carbon_document-pdf.png" alt="pdfIcon" width="144">
                        <p>(限10MB以下PDF檔)</p>
                    </label>
                    <!-- <form action="/file-upload" id="uploadForm" class="dropzone"></form> -->
                </div>
                <div class="uploadListContent-text completedList" v-else-if="state.uploadState === 'completed'">
                    <p v-if="uploadData.data == ''">尚未上傳任何文件</p>
                    <div v-else>
                        <div class="listTitle">
                            <p>名稱</p>
                            <p>時間</p>
                        </div>
                        <ul class="completedListContent" v-for="(item,key) in uploadData.data">
    
                            <li :key="key">
                                <p>
                                    {{item.name}}
                                </p>
                                <p>
                                    {{item.time}}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <!-- <p v-else>{{item.name}}</p> -->
                </div>
            </div> 
        </div>
    </div>
</template>

<style>
    .container{
        height: 100%;
    }
    .uploadList{
        width: 100%;
        height: 100%;
        background: #FFFAF4;
        border-radius: 35px;
    }
    .uploadListBtn{
        width: 50%;
        border: none;
        border-radius: 35px 35px 0 0;
        padding: 15px 0;
        font-size: 20px;
        color: #51A8BC;
        background: #FFFAF4;
        cursor: pointer;
        letter-spacing: 0.8em;
        transition: all .5s;
    }
    .uploadListBtn.active,.uploadListBtn:hover{
        color: #F9B471;
        background: #fff;
        box-shadow: 8px 4px 4px rgba(238, 237, 232, 0.5);
    }
    .uploadListContent{
        width: 100%;
        height: calc(100% - 57px);
        background: #fff;
        border-radius: 0 0 35px 35px;
        padding: 50px;
        position: relative;
        z-index: 2;
    }
    .uploadListContent-text{
        height: 100%;
    }
    .completedList,.uploadListContent-text label{
        height: 100%;
        border-radius: 35px;
        border: 1px dashed #A5A39C;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #A5A39C;
        font-size: 24px;
        transition: all .5s;
        background: #fff;
        cursor: pointer;
    }
    .uploadListContent-text .dropzone .dz-message .dz-button{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .uploadListContent-text label:hover{
        background: #FFFAF4;
    }
    #uploadInput{
        display: none;
    }
    .uploadListContent-text img{
        width: 144px;
        margin: 30px 0;
    }
    .completedList > div{
        width: 90%;
    }
    .listTitle{
        display: flex;
        font-size: 16px;
        margin-bottom: 24px;
        padding: 0 30px;
    }
    .completedListContent li{
        display: flex;
        width: 100%;
        padding: 20px 30px;
    }
    .completedListContent li:hover{
        background: #FFFAF4;
        border-radius: 30px;
    }
    .completedListContent li p{
        letter-spacing: 0.3em;
        margin-right: 24px;
        font-size: 20px;
    }
    @media (max-width:820px){
        .uploadList{
            border-radius: 25px;
        }
        .uploadListBtn{
            border-radius: 25px 25px 0 0;
            font-size: 16px;
            letter-spacing: 0.3em;
        }
        .uploadListContent{
            height: calc(100% - 51px);
            border-radius: 0 0 25px 25px;
            padding: 30px;
        }
        .completedList,.uploadListContent-text label{
            border-radius: 25px;
            font-size: 16px;
            letter-spacing: 0.3em;
        }
        .completedListContent li p{
            letter-spacing: 0.2em;
            margin-right: 16px;
            font-size: 16px;
        }
    }
    @media (max-width:767px) {
        .uploadList{
            border-radius: 15px;
        }
        .uploadListBtn{
            border-radius: 15px 15px 0 0;
            letter-spacing: 0.2em;
            font-size: 14px;
        }
        .uploadListContent{
            padding: 10px;
        }
        .completedList,.uploadListContent-text label{
            border-radius: 15px;
            font-size: 14px;
        }
    }
</style>