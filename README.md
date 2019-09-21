# 介紹

這是一個把 Moptt 的網頁版自動轉跳回官方的 Ptt 網頁版

目前在 Firefox Nightly for Mac 與 Firefox for Android 都測試正常


## 安裝方法

* 信的過我，可以從 AMO 網站直接安裝
    * https://addons.mozilla.org/addon/redirect-to-original-ptt/

* 更或者可以自己用開發者模式手動安裝
    1. 點選右邊 Clone or download -> Download ZIP
    2. 下載完 ZIP 檔之後解壓縮
    3. 遵循 [Firefox 說明文件](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) 的指示，載入此附加元件，在文中「打开附加组件的目录」的步驟，使用剛剛解壓縮的資料夾（選取資料夾裡面的任一個檔案）
    4. 完成

**注意**： 如果是用開發者模式安裝的 ，每次重新打開 Firefox 都要照上面步驟重新安裝一次。

## 原理

Background Script 會不斷檢查每個分頁的網址狀態，只要符合 Moptt 開頭的文章網址，就會自動把連結重新組合成 Ptt 官方的網址後帶換回網址列並載入。


**注意**： 目前已經有處理掉 fbcli 這討厭的額外參數，如果還有遇到奇怪的參數也可以回報我幫忙修改過濾。