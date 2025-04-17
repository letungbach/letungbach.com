---
title: CICD
draft: false
tags:
  - ai
  - agent
created: 2025-04-10T00:13
updated: 2025-04-16T22:12
description: AI benchmarks assess the performance and capabilities of models in standardized tasks.
---
𝗛𝗼𝘄 𝘁𝗼 𝗰𝗵𝗼𝗼𝘀𝗲 𝗮 𝗰𝗹𝗼𝘂𝗱 𝗖𝗜/𝗖𝗗 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺?  
  
CI and CD stand for 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀 𝗜𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀 𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆. In the simplest terms possible, Continuous Integration (CI) is a technique where incremental code changes are reliably and regularly made. Code updates merged into the repository are made reliable by automated build-and-test procedures that CI sparks. Then, the code is swiftly and efficiently deployed as part of the CD process.  
  
The 𝗖𝗜/𝗖𝗗 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲, as used in the software industry, is the automation that enables developers to reliably transfer incremental code changes from their machines to test and production.  
  
CI/CD often includes a 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀 𝗗𝗲𝗽𝗹𝗼𝘆𝗺𝗲𝗻𝘁, too, which means that the code deployed to the repository will be automatically deployed to production. Taken together, these connected practices are often referred to as a "𝗖𝗜/𝗖𝗗 𝗣𝗶𝗽𝗲𝗹𝗶𝗻𝗲." They are usually maintained using a DevOps or SRE approach.  
  
Having CI/CD pipelines has multiple benefits, such as improved collaboration, code quality, and more agile and reliable systems.  
  
There are 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝘀𝘁𝗮𝗴𝗲𝘀 of a CI/CD pipeline, such as 𝗯𝘂𝗶𝗹𝗱, 𝘁𝗲𝘀𝘁 𝗮𝗻𝗱 𝗱𝗲𝗽𝗹𝗼𝘆, but there could be much more activities included:  
  
🔹 Checking code from version control and building it  
🔹 Having staged gates for different kinds of approvals  
🔹 Managing environment variables  
🔹 Restarting services  
🔹 Executing tests  
🔹 And more...  
  
Some popular CI/CD tools:  
  
🔸 Jenkins  
🔸 TeamCity  
🔸 CircleCI  
🔸 Bamboo  
🔸 GitLab  
🔸 Azure DevOps  
  
When 𝗰𝗵𝗼𝗼𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗖𝗹𝗼𝘂𝗱 𝗖𝗜/𝗖𝗗 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺, it must be tightly integrated with your repositories. Store your pipelines and config in version control, not just inside the CI/CD tool.  
  
Choose tools like Docker that support your languages, frameworks, and containers. Ensure your team understands how CI/CD works and the tool you’re using—some platforms are easier to learn than others.  
  
You don’t need to standardize on one tool across all projects—different stacks might need different pipelines.

![[Pasted image 20250416221234.png]]