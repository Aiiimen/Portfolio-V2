---
layout: posts
title: My Dissertation Idea!
date: 2016-10-14 12:30 +0100
description: Blur detection and ways of developing it! 
image: https://res.cloudinary.com/benfiika/image/upload/v1476443632/Blog/keepcalm.png
---


With the number of digital images being produced everyday is increasing, image degradation is increasing too. By image degradation, I mean image blur. Either it's out of focus blur or blur between the camera and the subject. Blurry images make up a significant percentage of anyone's picture collection. For that reason including others as well, I've decided to do my dissertation of Blur detection. 

A piece of software that takes in a collection of images and filters them according to their blurriness. 

On Thursday, October 6th, I was shooting an event that was hosted at my university. Luckily enough I was the main photographer of the night and I had to capture the evening from start to finish. I got home early morning the next day. I arrived home at 3 in the morning. The deadline to hand in the images was by the end of the next day. Due to having university I decided to edit the images when I get home and then head to bed and struggle the next day with lack of sleep. One big problem was I had over one thousand pictures to go through and filter the good, in focus ones from the bad, blurry ones. This process takes about 20 minutes or even more depending on how picky you are. 

Im excited to work on this project and to get the OK from my supervisor because it's a real life problem. It will benefit me and benefit other photographers as well. 

Now… However, you might be thinking detecting blur is easy. That's what I thought, but it's rather complicated. There's more work to it than you think.

In this post Im going to mention 3 existing blur detection techniques. The first one and probably the one I'm going to use is called Wavelet Transform. 

Blur detection scheme using Harr Wavelet transform is a direct methods. It can not only detect blurriness but the extent of it. It is based on edge type analysis. The scheme takes advantage of the method in both discriminating different types of edges and recovering sharpness form the blurred version. Its effectiveness will not be affected by the uniform background in images. 

Second existing technique is called DCT (discrete cosine transform). it uses a new solution to aim at exploiting the available DCT information in MPEG and JPEG compressed video or images while involving a minimal computation load, the technique is based on histograms of non-zero DCT occurrences, computed directly from MPEG or JPEG compressed images. Unlike the Harr Wavelet Transform, DCT provides a percentage in terms on blurriness. 0% would mean the frame is totally blurry and 100% meaning the frame is sharp. 

The last and simplest technique is not a transform. it is a pre-processor, only converting the input images from RGB colours to grey-level luminance values is needed for the tool.
The steps for this method are:
1) Input image array as IMn
2) Check if array is two dimensional or not, if not convert it.
3) Calculate global invariance value S2p for different sample values.
4) S2 p1 is same variable value of the pre image and S2 p2 sample variance value of the taken image. 
5) If image is first one only i.e. if n=1 and S2 p1 = S2 p2, go for the next image.
6) If not then calculate ratio R of sample variance value of pre-image taken image.
7) if R=1 or R<1 the image is blur, if want to delete then delete it
8) if not then image is not blur

I came across these different techniques from a paper called Blur Detection Methods for Digital Images - A Survey. 
