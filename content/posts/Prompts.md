---
title: AI Prompts
date: 2025-04-10
draft: false
tags:
  - ai
  - prompt
created: 2025-04-10T00:37
updated: 2025-04-16T23:21
---


[openAI4.0 prompting](https://cookbook.openai.com/examples/gpt4-1_prompting_guide?fbclid=IwY2xjawJss5pleHRuA2FlbQIxMQABHqyv-ZisclOP1ABxgswdYzK-SHBfUS5J_UtyGfxnKYiU8QyNhmOmOEOdGrIX_aem_zKUqHJKSUNhIfMAUmDm1Kg)




NHIỀU CÔNG CỤ HỌC TẬP ĐƯỢC TẠO RA TỪ VIBE CODING. Vd: app học nhạc chỉ dùng 1 prompt trên Gemini 2.5 Pro trong Google AI Studio.

Prompt: Build a tool to help me learn how music modalities work. Make it interactive and use a keyboard that plays sounds. Include a 'quiz' mode. Make sure the code is in a single file.

(cre: Google AI Devs)




Create a comprehensive, step-by-step guide detailing all available methods (both technical and non-technical) to scrape or crawl data from Facebook, including public and private data. A detailed, well-structured document or guide with headings, subheadings, bullet points, and examples. The guide should cover technical considerations, tools, techniques, and potential risks.

1. Overview of Facebook data scraping/crawling.
Facebook’s Terms of Service and Community Standards.

2. Types of Facebook Data
Public data (e.g., public posts, pages, groups).
Private data (e.g., private profiles, messages, friend lists).
Metadata (e.g., likes, shares, comments, timestamps).
Methods for Scraping Public Facebook Data

3. Manual Methods
Copy-pasting data.
Saving posts or pages as PDFs.
Automated Methods
Using Facebook Graph API (official method).
Web scraping with tools like BeautifulSoup, Scrapy, or Selenium.
Browser extensions for data extraction.
Third-party tools (e.g., Octoparse, ParseHub).
Social Media Management Tools
Hootsuite, Buffer, or Sprout Social for public data analytics.
Methods for Scraping Private Facebook Data

4. Account Access Methods
Logging into a user’s account (with consent).
Using session cookies or tokens.
Social Engineering
Phishing or tricking users into sharing data.
Exploits and Vulnerabilities
Exploiting Facebook’s security flaws (unethical and illegal).
Third-Party Apps and APIs
Apps with access to private data (requires user permission).
Advanced Techniques

5. Reverse Engineering Facebook’s API
Analyzing network requests to uncover hidden endpoints.
Using Proxies and VPNs
Bypassing IP blocks and rate limits.
Machine Learning and NLP
Extracting insights from unstructured Facebook data.
Tools and Technologies

6. Programming languages (Python, JavaScript).
Libraries (Requests, BeautifulSoup, Selenium).
Frameworks (Scrapy, Puppeteer).
Databases (SQLite, MongoDB) for storing scraped data.
Risks and Mitigation

7. Detection by Facebook’s anti-scraping systems.
IP blocking or CAPTCHA challenges.
Legal risks and how to avoid them.
Best practices for ethical scraping.
Alternatives to Scraping

8. Using Facebook’s official tools (e.g., Insights, Ads Manager).
Partnering with Facebook for data access.
Purchasing data from third-party providers.
Case Studies

9. Examples of successful (and unsuccessful) Facebook scraping projects.
Lessons learned from legal cases or bans.
Conclusion

10. Future trends in Facebook data scraping.

11. Additional Notes:

Include code snippets or examples for technical methods.
Highlight the differences between scraping public vs. private data.
Provide resources for further learning (e.g., documentation, tutorials).

Tone:
Informative, neutral, and cautionary, emphasizing the importance of legality and ethics.






##### 10 Prompt Templates cho RLMs sử dụng Framework Thinking / Reasoning

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=YmEzYjAwNTE4ZmM2MTYyNDcyMGY4NTljNzk3MWFlZGNfWTk1cE5ZQkR1UzBFYUY5a1JRbXU5bWJYemhLenJBTWpfVG9rZW46TWd1M2JqOHh3b0J1ZWR4N3lOUWxsd0N1Z3VnXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

**Phù hợp dùng cho Claude 3.7 Sonnet

Dưới đây là các prompt template đơn giản và trực tiếp để tận dụng tối đa khả năng reasoning của RLMs, kết hợp với các framework thinking. Mỗi template được thiết kế để tối ưu hóa quá trình lý luận có cấu trúc.

1. MCTS-Based Strategy Analysis Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MWRjYzYzYjUwMjc4ZDI5YTE5ZDliODFjNmU5Nzc3OGFfdnZPMjR1MzJ4eGUydmR2MVlTaWJ5ZmNCOUJGWVVLenlfVG9rZW46U0dyRGJkdVJDbzg1NlF4SG9vRWxNR1paZ2FjXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

2. `<reasoning>` `Apply Monte Carlo Tree Search reasoning to systematically explore business environment factors and their competitive impacts. Branch out from core industry analysis to specific forces, evaluating each path's strategic implications.` `</reasoning>` `<task>` `Analyze [Business Situation] using Porter's Five Forces:` `Root: Current competitive landscape` `Explore branches:` `Evaluate impact on [Business Outcome]` `Develop strategic recommendations` `</task>`
    

###### Giải thích:

Template này áp dụng phương pháp MCTS với Porter's Five Forces, tạo cấu trúc lý luận dạng cây với các nhánh tương ứng với mỗi thành phần. RLM khám phá từng nhánh và lan truyền insights để tạo chiến lược toàn diện.

3. Decision Tree with SWOT Framework Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=YmUwNTAwMWQyZmU2ZDUyZjAwMDU4YTRhNWU3NDkxNjdfNkhDWlN2MjU1eGRzUVZxNE90Qll0ajZSVVBvUFhBZWxfVG9rZW46SkhKaWJLUU9JbzFxZzl4U1hjM2xjUDk3ZzFjXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

4. `<reasoning>` `Employ decision tree reasoning to evaluate options systematically. Generate distinct analytical branches for internal and external factors, then calculate success probability for each pathway.` `</reasoning>` `<task>` `Evaluate [Decision/Opportunity] through SWOT lens:` `Analyze branches for:` `Rate success probability for each path` `Select optimal approach` `Recommend specific actions` `</task>`
    

###### Giải thích:

Template này kết hợp cấu trúc reasoning tree với SWOT. RLM tạo nhánh lý luận cho mỗi thành phần, đánh giá xác suất thành công, giúp đi từ phân tích đến đề xuất hành động cụ thể.

5. Root Cause Graph-Based Analysis Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=OGM3OTdjZjQ3NmE3YjI1YWZiNTM4ODVjZWQwYWY2OWFfSUJuNllIMEZ0dmN6WkI0N3JmY09pZmxITEg3dEx4NmxfVG9rZW46WmhqWmJ0dDVDb05Lc2F4TEswZmxMUDBXZ0VlXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

6. `<reasoning>` `Utilize graph-based reasoning to map problem networks and cause-effect relationships. Identify critical intersection nodes where multiple causal chains converge.` `</reasoning>` `<task>` `Diagnose [Problem] using Root Cause Analysis:` `Create problem node at center` `Map symptom nodes with connections` `Trace causal paths for each symptom` `Find intersection points` `Rank root causes by impact and fixability` `Recommend targeted interventions` `</task>`
    

###### Giải thích:

Template này sử dụng reasoning graph kết hợp với Root Cause Analysis. Bằng cách biểu diễn vấn đề dưới dạng đồ thị, RLM phát hiện điểm giao nhau giữa các chuỗi nhân quả, thực hiện phân tích phi tuyến tính phức tạp.

7. Beam Search for Change Management Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=YzA0ZWVjYTQ2MGRjNDYwYmU1MzY3ZmFmN2IyMDFiNWJfY29nd2lTTk4yMThTOFRsVGI2b2wzRHdpUTRNYkFPYWVfVG9rZW46Uk1kemJWNU9vb2VWbG14RVowaWxoODJaZ2RtXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

8. `<reasoning>` `Implement beam search reasoning to maintain multiple parallel solution paths while progressively focusing on most promising approaches at each stage of change process.` `</reasoning>` `<task>` `Plan [Change Initiative] using Kotter's 8-Step Model:` `Generate approaches for each step:` `Keep top 3 approaches per step` `Select best path for your context` `Identify critical success factors` `</task>`
    

###### Giải thích:

Template này áp dụng Beam Search với Kotter's 8-Step Change Model. RLM duy trì nhiều hướng tiếp cận song song, chỉ giữ lại những hướng hứa hẹn nhất, cân bằng giữa khám phá đa dạng và tập trung vào giải pháp tiềm năng.

9. Value-Model Project Planning Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MTUxNzRiNGU3NGE4NzgyODQwZjI2MTFmMWM4OGI2MGVfTG1vQ1A3SUlIdDlWU0lTT0lkMUo3cFp1RzlmV1E2cTFfVG9rZW46REpvdWJMTUpLb09YMFl4ejhMeGxXd2MxZ21oXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

10. `<reasoning>` `Apply value-based reasoning to quantify project components and their relationships. Calculate forward and backward dependencies to determine critical activities and optimization opportunities.` `</reasoning>` `<task>` `Develop [Project Plan] using Critical Path Method:` `List activities with dependencies` `Assign time and value to each task` `Calculate forward/backward passes` `Identify critical path and slack` `Optimize resource allocation` `Present implementation sequence with value justification` `</task>`
    

###### Giải thích:

Template này sử dụng Value Model để phân tích dự án theo Critical Path Method. RLM đánh giá từng hoạt động, xác định đường găng, từ đó đưa ra khuyến nghị định lượng về trình tự triển khai tối ưu.

11. Process-Based Marketing Strategy Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=OWZkOTI2NTgxMGQwZWUwMTdhNDZlZTQyZDE0OTQ0NjNfeGxZcVBETkR2MFhtUUNSQjBraUl5UENLNGkzcUxycFpfVG9rZW46Q0k3ZGI1UmhVb3REVXp4dm1BVGw1OWhUZ05nXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

12. `<reasoning>` `Execute sequential reasoning process with distinct evaluation metrics for each phase. Focus on systematic market analysis followed by strategic selection and positioning development.` `</reasoning>` `<task>` `Develop [Marketing Strategy] with STP Model:` `Segmentation:` `Targeting:` `Positioning:` `Rate confidence level for each step` `</task>`
    

###### Giải thích:

Template này áp dụng Process-Based Supervision với STP Model. Mỗi giai đoạn được đánh giá riêng biệt, với việc đánh giá mức độ tin cậy cho từng bước lý luận, dẫn đến chiến lược marketing toàn diện và có cơ sở vững chắc.

13. Ensemble Method with Business Model Canvas Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZDdiNjUyNTI5ZWZmNDBmMjU2NGI5NGY0YzkzYTBiZjhfa3JYRlBCdDJRRFppbE1DWFRPVjlBUngzMElkSnROc3JfVG9rZW46Qk81d2I2ZkY0b2RpZEZ4VWNQSmxjOEl3Z1BmXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

14. `<reasoning>` `Employ ensemble reasoning to analyze business components both individually and collectively. Identify cross-component patterns and system-level emergence properties.` `</reasoning>` `<task>` `Analyze [Business Model] using Business Model Canvas:` `Examine each element:` `Identify cross-element patterns` `Assess business model coherence` `Suggest optimization opportunities` `</task>`
    

###### Giải thích:

Template này sử dụng Ensemble Method kết hợp với Business Model Canvas. RLM phân tích từng yếu tố và nhận diện các mẫu, sự phụ thuộc giữa các yếu tố, tạo cái nhìn toàn diện về mô hình kinh doanh.

15. Trace-Based Innovation Strategy Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NWQ5MDg3ZmZjMmUyNTA0YjYyNzVjYzk0YjUzY2M5MjNfdWFZSjZZdGFscFlZNnZWYzd0aGVTWURKbU1TaTk2RThfVG9rZW46VTVXU2JsM0JPb215dXR4MjdaZmwycjhRZzVlXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

16. `<reasoning>` `Implement trace-based reasoning that documents decision paths and transformation logic. Focus on explicit competitive factor evaluation followed by strategic redefinition.` `</reasoning>` `<task>` `Create [Innovation Strategy] using Blue Ocean Strategy:` `Map current market competitive factors` `Record reasoning while:` `Test against non-customers` `Check execution feasibility` `Document reasoning steps for future refinement` `</task>`
    

###### Giải thích:

Template này áp dụng Trace-Based Supervision kết hợp với Blue Ocean Strategy. RLM ghi lại "dấu vết" của chuỗi quyết định và các toán tử lý luận, tạo chiến lược đổi mới rõ ràng và có thể theo dõi.

17. Q-Value Operational Efficiency Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NWMwNzgwNmEwYmNlODE0NGRhNGVkZWFlYjllYWFmMjFfaHlKVmQ4T3NGb0FJVTdLUlVIUEZieWJxWjJQbjBoUWpfVG9rZW46TU84R2JPVEFKb2UySHF4VDljRWwwNjlpZ0ZnXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

18. `<reasoning>` `Apply Q-value reasoning to evaluate state-action pairs for process improvement. Quantify expected outcomes for each intervention to identify highest-value optimization targets.` `</reasoning>` `<task>` `Optimize [Operational Process] with Lean Six Sigma:` `Define problem with metrics` `Measure current performance` `Analyze root causes with probabilities` `Generate improvements with value estimates` `Select highest Q-value strategy` `Create implementation plan with controls` `</task>`
    

###### Giải thích:

Template này sử dụng Q-Value Model kết hợp với Lean Six Sigma. RLM phân tích các nguyên nhân gốc với trọng số xác suất, tạo phương án cải tiến với ước tính giá trị kỳ vọng, lựa chọn chiến lược dựa trên Q-value cao nhất.

19. Test-Time Compute Strategic Planning Template
    

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZTMwOWY3NmQ5YmNhYTY2ZmMwMzc0MjhjMTEyOGM5NzlfSDNiSzFqbVk1b1BQSGZrUGdYZ05POUlwZ3NVNTAwUG1fVG9rZW46QThaRWJ0b2ZOb1lic1J4eTdiQmxaTHFiZzBlXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

20. `<reasoning>` `Allocate reasoning resources adaptively based on component complexity. Focus computation intensity on high-complexity elements while maintaining balanced organizational assessment.` `</reasoning>` `<task>` `Develop [Strategic Plan] using McKinsey 7S Framework:` `Analyze with proportional resources:` `Invest more computation in complex elements` `Find alignment gaps` `Prioritize interventions by system impact` `</task>`
    

###### Giải thích:

Template này áp dụng Test-Time Compute với McKinsey 7S Framework. RLM phân bổ tài nguyên lý luận tỷ lệ thuận với độ phức tạp của từng thành phần, tập trung vào những lĩnh vực có giá trị phân tích cao nhất.

Các template trên được tối ưu hóa để tận dụng đặc điểm của Explicit RLMs: cấu trúc reasoning (chain, tree, graph), chiến lược reasoning (MCTS, Beam Search, Ensemble Methods), và các phương pháp đánh giá. Mỗi template đơn giản nhưng vẫn đủ chi tiết để hướng dẫn RLM thực hiện quá trình reasoning có cấu trúc hiệu quả.

![](https://wsgxall6ggaw.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MTJlNDJhMjM2MzI1MzU0ZTkyNzNjYjc5OWEyOTZiM2ZfdkxUMEJlZDZCR1d5SW9hTG1McGpobTNSVHliRUJJcEVfVG9rZW46WlBON2JxTkZMb2dieUN4cjBDY2xOVDNRZ2hiXzE3NDQyMjAyNDc6MTc0NDIyMzg0N19WNA)

  

  

This content is only supported in a Lark Docs