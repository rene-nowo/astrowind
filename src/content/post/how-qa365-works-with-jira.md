---
draft: false
publishDate: 2024-11-22T15:39:00Z
author: René Nowotny
title: How does QA365 work in Jira?
category: Tutorials
excerpt: Learn how we implemented QA365 into Jira and made manual ticket testing easier then ever before
tags: 
 - astro
 - tailwindcss
 - frontend
image: ~/assets/images/qa_demo.gif
---


# How does automated manual testing work in Jira?

We offer an ready to install solution to integrate our functionality directly into the jira ticket system. You don't have to change systems and the results of the tested ticket are directly displayed in your ticket. Take A Look into our Gif to get an understanding of how it works!
![qa365 demo gif](~/assets/images/qa_demo.gif "QA365 Demo Gif")


## Step-by-Step Explanation of the Features

Large Language Models (LLMs), such as ChatGPT, are powerful tools for generating text, summarizing, and reasoning through complex tasks. However, when applied to frontend testing, LLMs alone face limitations such as:

1. Install QA365 From [Jira Marketplace](https://marketplace.atlassian.com/search?query=qa365&product=jira)
2. Create Your Ticket in the Jira Board with the issue which needs to be tested 
![qa365 demo gif](~/assets/images/qa_demo.gif "QA365 Demo Gif")

3. Switch the status of the ticket to "QA" and we automatically generate test tickets
4. QA365 Automatically generates acceptance criteria based on your ticket and all the functionalities of your webapp
5. After that QA365 automatically starts testing the ticket and checks whether it fulfills all acceptance criteria
6. Every Acceptance Criteria is tested individually. After a success, we upload a gif of all the steps which have been tested. This way you can see what has been done by our software.
7. If there were errors, we submit an error report and notify you that something did not work as it should. 
