# My-Checker
A chrome extension for checking drug &amp; drug interaction of PAXLOVID.

一個簡單的chrome extension，用來標記在台灣衛生福利部中央健康保險署的雲端藥歷(含VPN)與PAXLOVID有潛在交互作用的藥物，資料來自仿單。結果僅供參考，如有錯誤或建議歡迎指正。
可生效的網頁:
1. https://medcloud.nhi.gov.tw/*
2. https://medvpn.nhi.gov.tw/*

目前已經在chrome商店上架
https://reurl.cc/n1yzeX

參考資料:
1. https://webfiles.pfizer.com/taiwan_paxlovid_hcp
2. https://www.covid19-druginteractions.org/

有需要的人或是電腦無法google的可以下載壓縮檔

https://github.com/efendilin/My-Checker/raw/main/my-checker.zip

然後依照下列順序安裝:
1. 在適當的目錄解壓縮檔案:
![](https://raw.githubusercontent.com/efendilin/My-Checker/main/Screenshot1.png)

2. 點chrome右上角設定:
![](https://raw.githubusercontent.com/efendilin/My-Checker/main/Screenshot2.png)

3. 點右上角開啟"開發人員模式"，然後點左上角"載入未封裝項目"

4. 選取解壓縮後的目錄:
![](https://raw.githubusercontent.com/efendilin/My-Checker/main/Screenshot3.png)

![](https://raw.githubusercontent.com/efendilin/My-Checker/main/Screenshot4.png)
看到這個就可以開始使用


![](https://raw.githubusercontent.com/efendilin/My-Checker/main/Screenshot5.jpg)
標記會像這個樣子
詳細的標記顏色意義請參閱 https://www.covid19-druginteractions.org/

Changes:
Version 1.1 (2022/06/02):
1. 修正資料庫的一些錯誤。
2. 修改一些符號，加入參考資料連結。
3. 改善複方藥物的比對方式。
4. 新增發現交互作用的通知功能。

Version 1.11 (2022/6/14):
1. 加入fludiazepam
