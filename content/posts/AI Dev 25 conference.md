---
title: AI Dev 25 conference
tags:
  - ai
  - cybersecurity
  - cyber
  - security
  - hack
created: 2025-04-15T00:13:00
updated: 2025-06-08T12:37
description: AI Dev 25 conference hosted by Deeplearning.ai
---
c  The AI Dev 25 conference featured extensive discussions on various aspects of AI development, with a strong emphasis on **AI agents**, their evaluation, deployment, memory management, and interoperability. The importance of moving beyond simple evaluations based on "vibes" to more data-driven "thrive coding" using metrics was highlighted. Several open-source tools and frameworks were presented to aid in building and evaluating AI agents, including **Phoenix** from Arise for evaluation, **Haystack** for building and deploying agentic workflows, **Llama** as an open-source large language model, and **Crew AI** for building autonomous agents.

**Key themes and topics discussed include:**

- **AI Agents:**
    
    - Agents are seen as LLM-based autonomous systems with access to memory and tools, capable of planning and executing actions to achieve a goal.
    - The development of agents involves managing their memory to learn from experience and collaborate intelligently. Different types of memory and their potential mapping to agentic memory were discussed.
    - Building and deploying agentic workflows using frameworks like Haystack allows for the creation of complex AI systems by connecting smaller components in flexible pipelines.
    - Deployment of agents in production environments is a key focus, with solutions like Hay Hooks for serving pipelines as REST APIs and considerations for serverless workflows using platforms like Amazon Bedrock.
    - Various use cases for AI agents in production were presented, including automating request processing, enhancing financial industry workflows, and providing creative content generation.
    - The importance of Continuous Integration (CI) flows for refining the precision of agentic use cases was mentioned.
    - **Agent interoperability** is a growing area of interest, with discussions on protocols and platforms like BAI (Bootstrapped Agent Interoperability) to enable agents from different frameworks to discover, run, and compose with each other. Metadata associated with agents plays a crucial role in their discovery and selection.
- **Evaluation of AI Agents:**
    
    - Moving from subjective "vibe checks" to objective, metric-driven evaluation ("thrive coding") is crucial for reliable AI agent development.
    - Tools like Phoenix are available for evaluating AI agent performance.
    - Techniques for evaluating agents include programmatic guardrails to fact-check responses and ensure link validity.
    - Observability layers and logging are important for monitoring and debugging agent behavior, with options for integrating with existing systems like Datadog and Splunk.
- **Memory in AI Agents:**
    
    - Memory is a fundamental aspect of building intelligent AI applications, enabling retrieval and learning.
    - Vector databases like Chroma are essential for providing memory and retrieval capabilities for AI applications.
    - The concept of playing a video game (Doom) using only memory (retrieval of frame-action pairs) was presented as an exploration of the limits of memory-based AI.
    - Long-term memory management for AI agents is a key area of development, potentially using tools like LangGraph.
- **Open Source in AI:**
    
    - Open source is considered the path forward for AI, benefiting developers, startups, and the ecosystem by allowing training, fine-tuning, and redistribution of models without licensing restrictions.
    - Popular open-source platforms like PyTorch and Llama are driving innovation and adoption of AI technologies.
    - Frameworks like Haystack and Crew AI are open-source, providing developers with the tools to build real-world AI systems.
    - Chroma is an open-source vector database for AI memory and retrieval.
    - The conference itself highlights and supports open-source initiatives in AI development.
- **Accelerating AI Development:**
    
    - Companies like NVIDIA focus on full-stack optimization (chips, systems, networking, software, algorithms) to accelerate AI development and provide transformational speedups.
    - Their work extends beyond chips to include libraries, frameworks, and optimized AI models (NVIDIA inference microservices).
    - The importance of compute power for advancing AI, especially for reasoning models, was emphasized.
    - AMD is also working to enable AI development on their GPUs, showcasing the ability to run large models and perform fine-tuning efficiently.
- **Multimodal AI:**
    
    - Multimodal AI, exemplified by models like Gemini, can understand and output various types of data (video, images, audio, text, code).
    - Gemini 2.0 Flash offers a large context window, enabling processing of vast amounts of information.
    - Features like image editing, audio transcription, and code execution are integrated into multimodal models.
    - The ability to ground AI responses with real-time information (e.g., Google Search) and enterprise data enhances their accuracy and utility.
- **Real-time AI and Voice Agents:**
    
    - The OpenAI Realtime API facilitates the development of interactive voice agents with low latency for human-like responsiveness.
    - Key concepts of the API include sessions, input audio buffers, and responses with audio and transcripts.
    - WebRTC is used for direct media connection to the API, simplifying media handling for developers.
    - Techniques for programming voice agents include instruction following, prompting for desired behavior and tone, and implementing guardrails to prevent unwanted responses.
    - Tool calling and integration with other APIs are possible within the Realtime API.
- **Addressing Hallucinations:**
    
    - Hallucination in large language models is a significant concern, and techniques to mitigate it are being developed.
    - Memory tuning, as demonstrated by Lamini, can significantly improve factual accuracy in LLMs.
    - Feedback mechanisms can be used to refine model training and improve factual correctness.
- **Developer Tools and Platforms:**
    
    - Platforms like Replit aim to streamline the development process by providing integrated workspaces, automated environment configuration (Agent), and rapid editing tools (Assistant). This enables even non-developers to build applications.
    - DeepLearningAI provides short courses and workshops to educate developers on the latest AI technologies and tools.
- **Future of AI Development:**
    
    - AI agents are expected to remain a central topic in the coming years, with increasing reliability and autonomy.
    - Areas like robotics and AI for science (e.g., protein and material discovery) are anticipated to gain more prominence.
    - The value of domain expertise in building specialized AI applications will continue to grow.
    - Resilience and a focus on solving real-world problems are crucial for navigating the rapidly evolving AI landscape.

The panel discussion on building AI applications in 2025 underscored the importance of infrastructure, developer tools, open source, and community in advancing the field. The panelists offered advice on staying informed, focusing on education, and leveraging domain expertise in the age of increasingly capable AI.