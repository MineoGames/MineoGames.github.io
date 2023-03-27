---
layout: post
title: "Boost your productivity by adding OCR to Greenshot"
lang: en
ref: ocr-greenshot
---

# The Power of OCR for Productivity

## Introduction

OCR, or Optical Character Recognition is a technology that enables the conversion of scanned, handwritten or printed text into digital format. OCR has numerous benefits, especially when it comes to productivity. By using OCR, you can save a lot of time by eliminating the need for manual data entry. In this blog post, we will discuss the importance of OCR for productivity and how how adding OCR to Greenshot can help you save time.

## OCR and Productivity

OCR can be a game-changer when it comes to productivity. It can help you save time and increase efficiency by automating tedious tasks such as data entry, taking note from presentation slides, etc... Instead of typing out text from a scanned document, you can scan it and use OCR to convert it into digital format. This process not only saves time but also reduces the risk of errors that can occur during manual data entry.

OCR can also help businesses streamline their workflows. Instead of manually processing invoices or receipts, OCR can automatically extract data from these documents and enter it into the appropriate fields. This reduces the workload of employees and helps businesses process documents faster.

## Adding OCR in Greenshot's

Greenshot is a powerful screenshot tool that allows you to capture screenshots, annotate them and share them with others. 

The tool had an OCR feature to extract text from screenshots. But this feature is no longer working in later versions of windows because it requires an old Microsoft Sharepoint version installed. 

A workaround is to use another OCR tool as a custom plugin inside Greenshot. [Capture2Text](http://capture2text.sourceforge.net/) is a free and effective tool that could do the job.

1. [Install *Capture2Text* by downloading](https://capture2text.sourceforge.net/#download) and just inzipping the folder

2. Open *Greenshot* menu by right click on its *Tray icon > Preferences…*

3. Go to the *Plugins* tab

4. Select *External command Plugin* and click on the *Configure* button

5. Add an entry for one block output
    1. OCR to Clipboard - OneBlock
    2. PATH_TO_Capture2Text_CLI.exe
    3. `-i "{0}" --clipboard`


6. Add an entry for output with breaking line
    1. OCR to Clipboard - LineBreak
    2. PATH_TO_Capture2Text_CLI.exe
    3. `-i "{0}" --clipboard -line-breaks` 

![https://i.imgur.com/kMBDTLo.png](https://i.imgur.com/kMBDTLo.png)

Then when you take a screenshot of a document (for example a video here), you can select one or the two new options to add the text content to the clipboard.

![https://i.imgur.com/7xIU24o.jpeg](https://i.imgur.com/7xIU24o.jpeg)

Just `CTRL+V` and the text is pasted! **Somehow magical** 🧙‍♂️

![https://i.imgur.com/KK6v0DC.png](https://i.imgur.com/KK6v0DC.png)

You can create as many options as you want if copying to the clipboard does not suit your needs.

## Conclusion

OCR is a powerful technology that can help you save time and increase productivity. By using OCR, you can automate tedious tasks and streamline your workflows. 

Combining *Capture2Text* and *Greenshot* is a great addition to the tool and can help you extract text from screenshots easily. 

This feature is easy to use and can save you a lot of time, especially if you need to extract text from multiple screenshots.

**If you are looking to increase your productivity, consider using OCR in Greenshot!**

**Subscribe to the newsletter to receive productivity tips like this directly in your inbox. 💌**

{% include en/subscribe-form.html title="Subscribe to the newsletter" %}