---
created: 2025-07-17T14:05
updated: 2025-07-17T14:05
---
  
# The Hidden Costs of LangChain, CrewAI, PydanticAI and Others: Why Popular AI Frameworks Are Failing Production Teams

[
![](https://miro.medium.com/v2/resize:fit:1050/0*Vh6rw6R4b2fiyk9a)

After 15 years in software development and countless hours wrestling with AI frameworks, I had reached a breaking point. The promise of “production-ready” AI development tools has become a minefield of abstractions, vendor lock-ins, and overhyped capabilities. Let me share why popular frameworks like LangChain, CrewAI, and even the newer PydanticAI fall short, and why I created Atomic Agents as the solution we actually need.

**Note: If you don’t have a Medium account you can use** ==[**this URL**](https://ai.gopubby.com/the-hidden-costs-of-langchain-crewai-pydanticai-and-others-why-popular-ai-frameworks-are-failing-77b9a40c16cf)== **to continue reading without an account.**

# The LangChain Labyrinth: When Abstractions Attack

LangChain quickly became a go-to, and its modularity is often touted as a strength. However, this modularity can quickly devolve into a complex setup and configuration nightmare. One of the biggest pain points is the lack of control over autonomous agents. The framework often makes hidden calls to LLMs, chaining requests in ways that aren’t transparent. The result? Unpredictable costs, inefficient execution, and workflows that can become unnecessarily long and difficult to debug.

# The Hidden Cost Problem

Here’s a real scenario from my own experience: I once had a simple document analysis task balloon into hundreds of dollars in API costs because LangChain was making multiple hidden LLM calls I couldn’t see or control. The framework’s layers of abstraction made it nearly impossible to understand what was happening under the hood.

# Documentation: A Maze Without a Map

LangChain’s documentation has been a point of contention for many users. Compared to some competing frameworks, the quality of LangChain’s documentation has been criticized as subpar, with reports of: Incomplete guidance and unclear explanations, Outdated information and broken links, Misleading code examples

The documentation reads like it was written by people who’ve never actually built a production system. You’ll find yourself diving through GitHub issues and Discord channels just to understand basic functionality.

# Real Companies Are Moving Away

Octomind used LangChain for a year to power AI agents that create and fix software tests, but they encountered numerous issues as they scaled up. They found that LangChain’s abstractions were too inflexible for more complex agent architectures (like agents spawning sub-agents or specialized agents coordinating). After growing frustrations, [Octomind’s team decided to remove LangChain entirely in 2024](https://octomind.dev/blog/why-we-no-longer-use-langchain-for-building-our-ai-agents). The result? “Once we removed it… we could just code,” they report, noting that no longer being constrained by LangChain made their team far more productive.

# CrewAI: The Overpromise Express

CrewAI offers a more structured approach to multi-agent systems, focusing on role-playing agents that collaborate on tasks. This is great for certain use cases, like research teams or project management. However, this structured approach can also be its Achilles’ heel.

# Rigidity Disguised as Structure

The framework can be rigid, making it difficult to dynamically adjust roles or delegate tasks mid-workflow. While it aims for simplicity, some users report inconsistent results for specific use cases and a need for significant performance tuning to achieve stability in complex tasks.

From my experience, you spend more time fighting the framework’s opinions than building your actual application. Want to slightly modify how agents communicate? Good luck navigating their rigid crew-based programming model.

# AutoGen: Microsoft’s Half-Baked Solution

Microsoft’s AutoGen empowers developers with multi-agent conversations and offers flexibility with human-in-the-loop problem-solving. It’s powerful, especially for complex problem-solving and research tasks. However, it’s not without its frustrations. A common complaint is that its documentation can be hard to navigate, with insufficient examples. Some developers report that certain features, like structured outputs, “flat out don’t work” as expected.

Think about that for a moment: a Microsoft-backed project shipping with features that simply don’t work as advertised. This should tell you everything about the current state of AI frameworks.

# PydanticAI: New Player, Same Problems

When [PydanticAI was announced](https://ai.pydantic.dev/), I had high hopes. Built by the team behind Pydantic (which powers much of the Python ecosystem), it promised to bring “that FastAPI feeling to GenAI app development.” But after diving deep into it, I’ve found it’s not the production-ready solution it claims to be.

# Still in Beta, Still Breaking

PydanticAI is in beta. This article is based on version 0.0.13. Code examples may not work with future versions. Limitations that are mentioned may be lifted in future versions. This isn’t just a version number — it’s a warning. The framework is actively breaking APIs and making major changes. As they state in their [roadmap](https://github.com/pydantic/pydantic-ai/issues/913), break APIs ASAP so we can get to a stable state ASAP is literally part of their philosophy.

Building production systems on a framework that openly admits to breaking changes? That’s a recipe for maintenance nightmares I’ve seen too many times before.

# The Logfire Lock-in

Here’s where things get concerning. Pydantic Services, the company behind Pydantic, has raised a $12.5m Series A in October 2024. This is great news for the project: funding pays for full time developers. It also raises the question of how Pydantic will make money, and the answer to that is Logfire subscriptions.

While they claim Logfire integration is optional, make the experience of using PydanticAI with Pydantic Logfire as good as it can possibly be is a stated priority. This creates an uncomfortable dynamic where the “best” experience requires their paid product.

# Limited Production Features

Despite marketing itself as “production-grade,” PydanticAI is missing crucial features:

- No built-in retry mechanisms (unlike Instructor, which it claims to improve upon)
- its validation and streaming modes have some rough edges
- The roadmap shows they’re still figuring out fundamental architecture

# The Real Problem: Developers Building for VCs, Not Users

The common thread across all these frameworks? They’re built to impress investors, not solve real problems. A lot of money was put into these types of companies by VC and investors. A bubble of ignorance that now seems to have at least slightly burst.

These frameworks promise AGI-level capabilities when as someone with 15 years of experience in AI development, I know we’re just not there yet! They focus on buzzwords and demos rather than the boring but essential work of building reliable, maintainable systems.

# Enter Atomic Agents: Built by Developers, for Developers

After wrestling with these frustrations, I created [Atomic Agents](https://github.com/BrainBlend-AI/atomic-agents) with a simple philosophy: **no magic, just solid engineering**.

> _NOTE:_ **_If you happen to be looking for a strategic partner to help develop your AI-driven application or prototype_**_, feel free to_ **_contact BrainBlend AI_** _through our website:_ [**_https://brainblendai.com/#contac_**](https://brainblendai.com/#contact)_t  
> _**_We offer end-to-end project delivery, staff augmentation, workshops and more!_**
> 
> **_As experienced software engineers with over 15 years of experience_**_, we make sure your project is_ **_not just ship-shit-fast vaporware_**_, but a maintainable piece of quality software built to last and grow._
> 
> _Alternatively,_ **_you can also find us on LinkedIn_** _and send us a message there:_[_https://www.linkedin.com/company/brain-blend-ai_](https://www.linkedin.com/company/brain-blend-ai)

# The Power of True Atomicity

By focusing on single-purpose building blocks (“atoms”), Atomic Agents allows you to fine-tune every part of your system. Swap out a web-scraper for a database query, or a local LLM for an OpenAI model — no extensive rewrites needed. Strict input/output schemas let you define precisely what you expect, ensuring consistent results instead of random structure issues or half-baked JSON.

Every component in Atomic Agents:

- Has a single, clear responsibility
- Can be tested in isolation
- Can be swapped out without affecting the rest of your system
- Uses standard Python practices you already know

# No Hidden Complexity

If you’re a Python dev, it’s just Python. You can step through with a debugger, log everything, or integrate these agents into standard web frameworks (Flask, FastAPI, Django, etc.) without friction.

When something goes wrong (and it will), you can set a breakpoint and see exactly what’s happening. No diving through layers of abstraction or trying to decode what some “magic” orchestrator is doing.

# Schema-First Development with Real Control

By leveraging Pydantic (yes, the same Pydantic that PydanticAI uses), we ensure type safety without the overhead. But unlike PydanticAI, we don’t try to reinvent the wheel:

from atomic_agents.agents.base_agent import BaseIOSchema  
from pydantic import Field  
from typing import List  
  
class QueryAgentInputSchema(BaseIOSchema):  
    """Input schema for the QueryAgent."""  
    instruction: str = Field(  
        ...,  
        description="A detailed instruction or request to generate search engine queries for."  
    )  
    num_queries: int = Field(..., description="The number of search queries to generate.")  
# The output of one agent becomes the input of another  
from web_search_agent.tools.searxng_search import SearxNGSearchTool  
query_agent = BaseAgent(  
    BaseAgentConfig(  
        client=instructor.from_openai(openai.OpenAI()),  
        model="gpt-4o-mini",  
        system_prompt_generator=SystemPromptGenerator(  
            background=[  
                "You are an intelligent query generation expert."  
            ],  
            steps=[  
                "Receive the instruction and the number of queries.",  
                "Generate the queries in JSON format."  
            ],  
            output_instructions=[  
                "Ensure each query is unique and relevant.",  
                "Provide the queries in the expected schema."  
            ],  
        ),  
        input_schema=QueryAgentInputSchema,  
        output_schema=SearxNGSearchTool.input_schema  # Direct chaining!  
    )  
)

But here’s the crucial difference that sets Atomic Agents apart: **You’re not forced into rigid chaining**. Want to add business logic between agents? No problem:

# Run the query agent  
query_result = query_agent.run(query_input)  
  
# Apply your business logic  
filtered_queries = []  
for query in query_result.queries:  
    # Check against your business rules  
    if not contains_prohibited_terms(query):  
        filtered_queries.append(query)  
      
    # Maybe log for compliance  
    audit_log.record_query(query, user_id, timestamp)  
      
    # Apply rate limiting  
    if len(filtered_queries) >= get_user_query_limit(user_id):  
        break  
# Only then pass to the search tool  
search_input = SearxNGSearchTool.input_schema(queries=filtered_queries)  
search_results = search_tool.run(search_input)  
# More business logic after search  
validated_results = validate_search_results(search_results)  
enriched_results = add_metadata_from_database(validated_results)  
# Finally pass to your QA agent  
qa_input = QAAgentInputSchema(  
    question=original_question,  
    context=enriched_results  
)  
qa_result = qa_agent.run(qa_input)

This is **real** control. You decide when to chain directly, when to insert business logic, when to branch conditionally. No framework magic dictating your flow.

# Real Production Features

Unlike the frameworks above, Atomic Agents includes what you actually need:

1. **Context Providers**: Inject dynamic data into system prompts without hacks
2. **Memory Management**: Built-in conversation tracking that you control
3. **Tool Ownership**: Download tools into your codebase — you own them completely
4. **No Vendor Lock-in**: Use any LLM provider, any observability platform, any deployment method

# The CLI That Actually Helps

The Atomic Assembler CLI provides complete control over your tools, allowing you to: Avoid dependency clutter: Install only the tools you need. Modify tools easily: Each tool is self-contained with its own tests.

# Building Real Systems, Not Demos

Here’s a complete example that shows the difference. While other frameworks would have you navigating through abstractions, with Atomic Agents it’s just clear, testable code:

from atomic_agents.agents.base_agent import BaseAgent, BaseAgentConfig  
from atomic_agents.lib.components.system_prompt_generator import SystemPromptGenerator  
from atomic_agents.lib.components.agent_memory import AgentMemory  
from atomic_agents.lib.base.base_io_schema import BaseIOSchema  
from pydantic import Field  
from typing import List  
import instructor  
import openai  
  
# Step 1: Define what goes in and out (no magic!)  
class ResearchInput(BaseIOSchema):  
    """Input schema for research queries."""  
    question: str = Field(..., description="Research question")  
class ResearchOutput(BaseIOSchema):  
    """Output schema for research results."""  
    answer: str = Field(..., description="Researched answer")  
    sources: List[str] = Field(..., description="Source URLs")  
# Step 2: Configure your agent (you control everything)  
agent = BaseAgent(  
    config=BaseAgentConfig(  
        client=instructor.from_openai(openai.OpenAI()),  # Your choice of LLM  
        model="gpt-4o-mini",  # Your choice of model  
        system_prompt_generator=SystemPromptGenerator(  
            background=["You are a research assistant."],  
            steps=["Search for information", "Synthesize findings"],  
            output_instructions=["Provide sources for all claims"]  
        ),  
        input_schema=ResearchInput,  
        output_schema=ResearchOutput,  
        memory=AgentMemory()  
    )  
)  
# Step 3: Use it (no hidden API calls or surprise costs)  
result = agent.run(ResearchInput(question="What is quantum computing?"))  
print(f"Answer: {result.answer}")  
print(f"Sources: {result.sources}")

That’s it. No magic. No hidden complexity. Just code you can understand, test, and maintain.

# The Industry Is Waking Up

Posts and articles with titles like ‘Why we no longer use LangChain’ began appearing, reflecting real companies deciding to pull LangChain out of their stacks. [One analysis on Medium](https://shashankguda.medium.com/challenges-criticisms-of-langchain-b26afcef94e7) noted that While some developers acknowledge that LangChain is still in rapid development, many feel it lacks the stability required for serious projects.

Developers are realizing that Developers use it to learn AI development, and for prototyping rather than for production due to bad code quality, and high component complexity.

# The Choice Is Yours

You can continue wrestling with:

- LangChain’s maze of abstractions and hidden costs
- CrewAI’s rigid structures and broken promises
- AutoGen’s non-functional features
- PydanticAI’s beta instability and vendor lock-in

Or you can choose a framework that respects you as a developer and treats you as an adult.

**If you’re tired of wrestling with frameworks that fight you every step of the way, I urge you: Explore** [**Atomic Agents on GitHub**](https://github.com/BrainBlend-AI/atomic-agents)**.**

# The Future Is Atomic

The AI development landscape doesn’t need more magic or AGI promises. It needs solid engineering principles applied to real problems. That’s what Atomic Agents delivers.

Join us in building AI systems that are:

- **Predictable**: You know exactly what will happen
- **Maintainable**: Your future self will thank you
- **Testable**: Unit tests that actually work
- **Portable**: No vendor lock-in, ever
- **Flexible**: Chain directly or add business logic — your choice

Stop fighting your tools. Start building with Atomic Agents.

_Ready to experience AI development without the frustration?_ **_Check out_** [**_Atomic Agents on GitHub_**](https://github.com/BrainBlend-AI/atomic-agents) **_and join our_** [**_community on Reddit_**](https://www.reddit.com/r/AtomicAgents/)**_._** _Built by developers who’ve been burned by the alternatives — and learned from it._

# Support the Author

**_If you found this article useful, please consider donating any appropriate amount to my PayPal.me tip jar_**_!_

[

## Pay Kenny Vaneetvelde using PayPal.Me

### Go to paypal.me/KennyVaneetvelde and type in the amount. Since it’s PayPal, it’s easy and secure. Don’t have a PayPal…

www.paypal.com



](https://www.paypal.com/paypalme/KennyVaneetvelde?source=post_page-----77b9a40c16cf---------------------------------------)

**_Your support means the world and allows me to continue to spend time writing articles, making tutorials, …_**

**_Thank you!_**

If you **loved** my content and want to **get in touch**, you can do so through [**LinkedIn**](https://www.linkedin.com/in/kennyvaneetvelde/) or even feel free to reach out to me by email at [**kenny@brainblendai.com**](mailto:kenny@brainblendai.com)

Similarly, if you need an AI-driven project or prototype developed, please contact my agency: [**BrainBlend AI**](https://brainblendai.com/#contact) and we will make sure your project gets the quality treatment it deserves in a way that is maintainable and ready for production!

You can also find me on [**X/Twitter**](https://x.com/Kenny_V) or you can give me a [follow on **GitHub**](https://github.com/KennyVaneetvelde) and check out and star any of my projects on there, such as [**Atomic Agents**](https://github.com/BrainBlend-AI/atomic-agents)!

![](https://miro.medium.com/v2/resize:fit:743/0*d2He_eahRqX17I7g.png)

[

Langchain

](https://medium.com/tag/langchain?source=post_page-----77b9a40c16cf---------------------------------------)

[

Python

](https://medium.com/tag/python?source=post_page-----77b9a40c16cf---------------------------------------)

[

Programming

](https://medium.com/tag/programming?source=post_page-----77b9a40c16cf---------------------------------------)

[

Technology

](https://medium.com/tag/technology?source=post_page-----77b9a40c16cf---------------------------------------)

[

AI

](https://medium.com/tag/ai?source=post_page-----77b9a40c16cf---------------------------------------)

217

5

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F77b9a40c16cf&operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fthe-hidden-costs-of-langchain-crewai-pydanticai-and-others-why-popular-ai-frameworks-are-failing-77b9a40c16cf&source=---footer_actions--77b9a40c16cf---------------------bookmark_footer------------------)

[

![AI Advances](https://miro.medium.com/v2/resize:fill:96:96/1*R8zEd59FDf0l8Re94ImV0Q.png)



](https://ai.gopubby.com/?source=post_page---post_publication_info--77b9a40c16cf---------------------------------------)

[

## Published in AI Advances

](https://ai.gopubby.com/?source=post_page---post_publication_info--77b9a40c16cf---------------------------------------)

[43K followers](https://ai.gopubby.com/followers?source=post_page---post_publication_info--77b9a40c16cf---------------------------------------)

·[Last published 8 hours ago](https://ai.gopubby.com/thinking-with-our-hands-f5fa70a60d49?source=post_page---post_publication_info--77b9a40c16cf---------------------------------------)

Democratizing access to artificial intelligence

Follow

[

![Kenny Vaneetvelde](https://miro.medium.com/v2/resize:fill:96:96/1*npvvQ9Itr8VvMaMxRrQwYQ.png)



](https://medium.com/@kenny_v?source=post_page---post_author_info--77b9a40c16cf---------------------------------------)

[

## Written by Kenny Vaneetvelde

](https://medium.com/@kenny_v?source=post_page---post_author_info--77b9a40c16cf---------------------------------------)

[2.4K followers](https://medium.com/@kenny_v/followers?source=post_page---post_author_info--77b9a40c16cf---------------------------------------)

·[82 following](https://medium.com/@kenny_v/following?source=post_page---post_author_info--77b9a40c16cf---------------------------------------)

Freelance Developer // AI & Large Language Models // Python // Coaching // FrontEnd // Author with Packt Publishing - TheDeadlyPretzel on Reddit

Follow

## Responses (5)

[](https://policy.medium.com/medium-rules-30e5502c4eb4?source=post_page---post_responses--77b9a40c16cf---------------------------------------)

![](https://miro.medium.com/v2/resize:fill:48:48/1*dmbNkD5D-u45r44go_cf0g.png)

Write a response

[

What are your thoughts?



](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fthe-hidden-costs-of-langchain-crewai-pydanticai-and-others-why-popular-ai-frameworks-are-failing-77b9a40c16cf&source=---post_responses--77b9a40c16cf---------------------respond_sidebar------------------)

Cancel

Respond

[

![Michael Jhonson](https://miro.medium.com/v2/resize:fill:48:48/0*Q0EHYswlHBhsyDTw)





](https://medium.com/@michaeljohnsontechno?source=post_page---post_responses--77b9a40c16cf----0-----------------------------------)

[

Michael Jhonson



](https://medium.com/@michaeljohnsontechno?source=post_page---post_responses--77b9a40c16cf----0-----------------------------------)

[

1 day ago (edited)

](https://medium.com/@michaeljohnsontechno/great-blog-d525419d3314?source=post_page---post_responses--77b9a40c16cf----0-----------------------------------)

Great blog! You nailed the hidden struggles of [LangChain development](https://www.sparkouttech.com/botpress-ai-development/) in production especially the lack of transparency and modular overload. Eye-opening for dev teams chasing real scalability.

21

Reply

[

![Pierre Brunelle](https://miro.medium.com/v2/resize:fill:48:48/1*rRVPi9O9iK719f3_oQpnAQ.jpeg)





](https://medium.com/@pierrebrunelle?source=post_page---post_responses--77b9a40c16cf----1-----------------------------------)

[

Pierre Brunelle



](https://medium.com/@pierrebrunelle?source=post_page---post_responses--77b9a40c16cf----1-----------------------------------)

[

1 day ago

](https://medium.com/@pierrebrunelle/you-should-try-https-github-com-pixeltable-pixeltable-c1467857acc6?source=post_page---post_responses--77b9a40c16cf----1-----------------------------------)

You should try https://github.com/pixeltable/pixeltable and its computed column principle to give you all the visibility you need and building your own agent framework if you want to but definitely not necessary.

6

Reply

[

![Maxim Fateev](https://miro.medium.com/v2/resize:fill:48:48/2*HlnerL9UAjCGa7IVvpMaGw.jpeg)



](https://medium.com/@mfateev?source=post_page---post_responses--77b9a40c16cf----2-----------------------------------)

[

Maxim Fateev



](https://medium.com/@mfateev?source=post_page---post_responses--77b9a40c16cf----2-----------------------------------)

[

16 hours ago

](https://medium.com/@mfateev/consider-using-temporal-io-5edc50ef2ccf?source=post_page---post_responses--77b9a40c16cf----2-----------------------------------)

Consider using temporal.io to make your frameworkless code resilient to process crashes and other failures.

2

Reply

See all responses

## More from Kenny Vaneetvelde and AI Advances

![Building AI Agents the Right Way: Design Principles for Agentic AI](https://miro.medium.com/v2/resize:fit:1019/0*23pBGyNuZpxFbrRX)

[

![AI Advances](https://miro.medium.com/v2/resize:fill:30:30/1*R8zEd59FDf0l8Re94ImV0Q.png)



](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----0---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

In

[

AI Advances

](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----0---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

by

[

Kenny Vaneetvelde

](https://medium.com/@kenny_v?source=post_page---author_recirc--77b9a40c16cf----0---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[

## Building AI Agents the Right Way: Design Principles for Agentic AI

### So, you want to build the next super-smart AI agent. You wire up GPT-4o to a few APIs and let it roam free. What could go wrong? (Spoiler…



](https://ai.gopubby.com/building-ai-agents-the-right-way-design-principles-for-agentic-ai-47d1b92f0124?source=post_page---author_recirc--77b9a40c16cf----0---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

May 18

[

832

27







](https://ai.gopubby.com/building-ai-agents-the-right-way-design-principles-for-agentic-ai-47d1b92f0124?source=post_page---author_recirc--77b9a40c16cf----0---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F47d1b92f0124&operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fbuilding-ai-agents-the-right-way-design-principles-for-agentic-ai-47d1b92f0124&source=---author_recirc--77b9a40c16cf----0-----------------bookmark_preview----de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

![Agentic AI Lifecycle for Enterprise Processes](https://miro.medium.com/v2/resize:fit:1019/0*xbBzzMy3O1m68oLJ)

[

![AI Advances](https://miro.medium.com/v2/resize:fill:30:30/1*R8zEd59FDf0l8Re94ImV0Q.png)



](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----1---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

In

[

AI Advances

](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----1---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

by

[

Debmalya Biswas

](https://debmalyabiswas.medium.com/?source=post_page---author_recirc--77b9a40c16cf----1---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[

## Agentic AI Lifecycle for Enterprise Processes

### The art of transforming Manual processes into an Orchestration of AI Agents



](https://ai.gopubby.com/agentification-of-enterprise-processes-0f173554f7b4?source=post_page---author_recirc--77b9a40c16cf----1---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

Jun 30

[

494

13







](https://ai.gopubby.com/agentification-of-enterprise-processes-0f173554f7b4?source=post_page---author_recirc--77b9a40c16cf----1---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F0f173554f7b4&operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fagentification-of-enterprise-processes-0f173554f7b4&source=---author_recirc--77b9a40c16cf----1-----------------bookmark_preview----de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

![LLMs Can Now Be Pre-Trained Using Pure Reinforcement Learning](https://miro.medium.com/v2/resize:fit:1019/1*NvQurVzhbdTxme2O-LiZOA.png)

[

![AI Advances](https://miro.medium.com/v2/resize:fill:30:30/1*R8zEd59FDf0l8Re94ImV0Q.png)



](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----2---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

In

[

AI Advances

](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----2---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

by

[

Dr. Ashish Bamania

](https://bamania-ashish.medium.com/?source=post_page---author_recirc--77b9a40c16cf----2---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[

## LLMs Can Now Be Pre-Trained Using Pure Reinforcement Learning

### A deep dive into Reinforcement Pre-Training (RPT), a new technique introduced by Microsoft researchers to scalably pre-train LLMs using RL.



](https://ai.gopubby.com/llms-can-now-be-pre-trained-using-pure-reinforcement-learning-7676f579cbee?source=post_page---author_recirc--77b9a40c16cf----2---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

Jun 26

[

820

5







](https://ai.gopubby.com/llms-can-now-be-pre-trained-using-pure-reinforcement-learning-7676f579cbee?source=post_page---author_recirc--77b9a40c16cf----2---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F7676f579cbee&operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fllms-can-now-be-pre-trained-using-pure-reinforcement-learning-7676f579cbee&source=---author_recirc--77b9a40c16cf----2-----------------bookmark_preview----de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

![Want to Build AI Agents? Tired of LangChain, CrewAI, AutoGen & Other AI Frameworks? Read this!](https://miro.medium.com/v2/resize:fit:1019/1*Z1FbtzFGLX5n9fuaMshZSg.png)

[

![AI Advances](https://miro.medium.com/v2/resize:fill:30:30/1*R8zEd59FDf0l8Re94ImV0Q.png)



](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----3---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

In

[

AI Advances

](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf----3---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

by

[

Kenny Vaneetvelde

](https://medium.com/@kenny_v?source=post_page---author_recirc--77b9a40c16cf----3---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[

## Want to Build AI Agents? Tired of LangChain, CrewAI, AutoGen & Other AI Frameworks? Read this!

### Frameworks like LangChain, CrewAI, and AutoGen have gained popularity by promising high-level abstractions for building AI systems. Yet…



](https://ai.gopubby.com/want-to-build-ai-agents-c83ab4535411?source=post_page---author_recirc--77b9a40c16cf----3---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

Jan 19

[

1.6K

33







](https://ai.gopubby.com/want-to-build-ai-agents-c83ab4535411?source=post_page---author_recirc--77b9a40c16cf----3---------------------de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2Fc83ab4535411&operation=register&redirect=https%3A%2F%2Fai.gopubby.com%2Fwant-to-build-ai-agents-c83ab4535411&source=---author_recirc--77b9a40c16cf----3-----------------bookmark_preview----de3c0183_365f_47fe_a1a9_f35ec14a54ff--------------)

[

See all from Kenny Vaneetvelde

](https://medium.com/@kenny_v?source=post_page---author_recirc--77b9a40c16cf---------------------------------------)

[

See all from AI Advances

](https://ai.gopubby.com/?source=post_page---author_recirc--77b9a40c16cf---------------------------------------)

## Recommended from Medium

![These MCP servers are amazing for coding](https://miro.medium.com/v2/resize:fit:1019/1*SZ0akeZuE4WhwjCntsDo6g.png)

[

![Coding Beauty](https://miro.medium.com/v2/resize:fill:30:30/1*ViyWUoh4zqx294no1eENxw.png)



](https://medium.com/coding-beauty?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

In

[

Coding Beauty

](https://medium.com/coding-beauty?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

by

[

Tari Ibaba

](https://medium.com/@tariibaba?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## These MCP servers are amazing for coding

### Start using MCP. NOW.



](https://medium.com/coding-beauty/mcp-servers-479614e4b74c?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

5d ago

[

334

5







](https://medium.com/coding-beauty/mcp-servers-479614e4b74c?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F479614e4b74c&operation=register&redirect=https%3A%2F%2Fmedium.com%2Fcoding-beauty%2Fmcp-servers-479614e4b74c&source=---read_next_recirc--77b9a40c16cf----0-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

![GPT-5 Is Coming in July 2025 — And Everything Will Change](https://miro.medium.com/v2/resize:fit:1019/0*PRZcNPDVe2z5n7kO)

[

![Predict](https://miro.medium.com/v2/resize:fill:30:30/1*EetZyjDw-19wRRBzc6fSMA.png)



](https://medium.com/predict?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

In

[

Predict

](https://medium.com/predict?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

by

[

iswarya writes

](https://medium.com/@iswaryawrites?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## GPT-5 Is Coming in July 2025 — And Everything Will Change

### “It’s wild watching people use ChatGPT… knowing what’s coming.”  — OpenAI insider



](https://medium.com/predict/gpt-5-is-coming-in-july-2025-and-everything-will-change-643252fe6849?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

Jul 8

[

5.9K

164







](https://medium.com/predict/gpt-5-is-coming-in-july-2025-and-everything-will-change-643252fe6849?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F643252fe6849&operation=register&redirect=https%3A%2F%2Fmedium.com%2Fpredict%2Fgpt-5-is-coming-in-july-2025-and-everything-will-change-643252fe6849&source=---read_next_recirc--77b9a40c16cf----1-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

![Why Most AI Agents Fail in Production (And How to Build Ones That Don’t)](https://miro.medium.com/v2/resize:fit:1019/1*RxDCsYpAyqquIBO8Bs10hA.jpeg)

[

![Data Science Collective](https://miro.medium.com/v2/resize:fill:30:30/1*0nV0Q-FBHj94Kggq00pG2Q.jpeg)



](https://medium.com/data-science-collective?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

In

[

Data Science Collective

](https://medium.com/data-science-collective?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

by

[

Paolo Perrone

](https://medium.com/@paoloperrone?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## Why Most AI Agents Fail in Production (And How to Build Ones That Don’t)

### I’m a 8+ years Machine Learning Engineer building AI agents in production.



](https://medium.com/data-science-collective/why-most-ai-agents-fail-in-production-and-how-to-build-ones-that-dont-f6f604bcd075?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

Jun 16

[

1.4K

21







](https://medium.com/data-science-collective/why-most-ai-agents-fail-in-production-and-how-to-build-ones-that-dont-f6f604bcd075?source=post_page---read_next_recirc--77b9a40c16cf----0---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2Ff6f604bcd075&operation=register&redirect=https%3A%2F%2Fmedium.com%2Fdata-science-collective%2Fwhy-most-ai-agents-fail-in-production-and-how-to-build-ones-that-dont-f6f604bcd075&source=---read_next_recirc--77b9a40c16cf----0-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

![Goldman Sachs Just Made Your Computer Science Degree Worthless](https://miro.medium.com/v2/resize:fit:1019/1*rbyeFrq2O0wU3nMJQU_gmA.png)

[

![Utopian](https://miro.medium.com/v2/resize:fill:30:30/1*WxqZ2ee9YcqARv0Jgx7_0A.png)



](https://medium.com/utopian?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

In

[

Utopian

](https://medium.com/utopian?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

by

[

Derick David

](https://jeazous.medium.com/?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## Goldman Sachs Just Made Your Computer Science Degree Worthless

### Your programming job just got 10x more dangerous



](https://medium.com/utopian/goldman-sachs-just-made-your-computer-science-degree-worthless-604177a5a0e9?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

4d ago

[

1.1K

150







](https://medium.com/utopian/goldman-sachs-just-made-your-computer-science-degree-worthless-604177a5a0e9?source=post_page---read_next_recirc--77b9a40c16cf----1---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F604177a5a0e9&operation=register&redirect=https%3A%2F%2Fmedium.com%2Futopian%2Fgoldman-sachs-just-made-your-computer-science-degree-worthless-604177a5a0e9&source=---read_next_recirc--77b9a40c16cf----1-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

![The 47-Line Code That Made One Developer $2 Million from AI](https://miro.medium.com/v2/resize:fit:1019/1*F1HE6GGa40dhfv1ZZkwToA.png)

[

![Yash Batra](https://miro.medium.com/v2/resize:fill:30:30/1*qzg4k1dbmci1Z47Qm6BTsQ@2x.jpeg)



](https://medium.com/@yashbatra11111?source=post_page---read_next_recirc--77b9a40c16cf----2---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

Yash Batra

](https://medium.com/@yashbatra11111?source=post_page---read_next_recirc--77b9a40c16cf----2---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## The 47-Line Code That Made One Developer $2 Million from AI

### In late 2024, a solo indie developer pushed 47 lines of Python code to GitHub.



](https://medium.com/@yashbatra11111/the-47-line-code-that-made-one-developer-2-million-from-ai-7269383d65db?source=post_page---read_next_recirc--77b9a40c16cf----2---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

Jul 8

[

450

11







](https://medium.com/@yashbatra11111/the-47-line-code-that-made-one-developer-2-million-from-ai-7269383d65db?source=post_page---read_next_recirc--77b9a40c16cf----2---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F7269383d65db&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40yashbatra11111%2Fthe-47-line-code-that-made-one-developer-2-million-from-ai-7269383d65db&source=---read_next_recirc--77b9a40c16cf----2-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

![How I Print Money Daily with This Simple Options Strategy](https://miro.medium.com/v2/resize:fit:1019/0*TiKAbpdCzX-GZQZP)

[

![InsiderFinance Wire](https://miro.medium.com/v2/resize:fill:30:30/1*rHi38uLXrqZYEFOtAcN6Dw.png)



](https://wire.insiderfinance.io/?source=post_page---read_next_recirc--77b9a40c16cf----3---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

In

[

InsiderFinance Wire

](https://wire.insiderfinance.io/?source=post_page---read_next_recirc--77b9a40c16cf----3---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

by

[

Kabilan Thavabalalingam

](https://medium.com/@kabilan.t?source=post_page---read_next_recirc--77b9a40c16cf----3---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

## How I Print Money Daily with This Simple Options Strategy

### A step-by-step guide to making $25-$50 daily



](https://wire.insiderfinance.io/how-i-print-money-daily-with-this-simple-options-strategy-76681ab193ac?source=post_page---read_next_recirc--77b9a40c16cf----3---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

Jul 9

[

210

17







](https://wire.insiderfinance.io/how-i-print-money-daily-with-this-simple-options-strategy-76681ab193ac?source=post_page---read_next_recirc--77b9a40c16cf----3---------------------e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F76681ab193ac&operation=register&redirect=https%3A%2F%2Fwire.insiderfinance.io%2Fhow-i-print-money-daily-with-this-simple-options-strategy-76681ab193ac&source=---read_next_recirc--77b9a40c16cf----3-----------------bookmark_preview----e9b5ea44_7778_43c0_aa7a_d7f26a6e56bd--------------)

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--77b9a40c16cf---------------------------------------)

[

Help

](https://help.medium.com/hc/en-us?source=post_page-----77b9a40c16cf---------------------------------------)

[

Status

](https://medium.statuspage.io/?source=post_page-----77b9a40c16cf---------------------------------------)

[

About

](https://medium.com/about?autoplay=1&source=post_page-----77b9a40c16cf---------------------------------------)

[

Careers

](https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e?source=post_page-----77b9a40c16cf---------------------------------------)

[

Press

](mailto:pressinquiries@medium.com)

[

Blog

](https://blog.medium.com/?source=post_page-----77b9a40c16cf---------------------------------------)

[

Privacy

](https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=post_page-----77b9a40c16cf---------------------------------------)

[

Rules

](https://policy.medium.com/medium-rules-30e5502c4eb4?source=post_page-----77b9a40c16cf---------------------------------------)

[

Terms

](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----77b9a40c16cf---------------------------------------)

[

Text to speech

](https://speechify.com/medium?source=post_page-----77b9a40c16cf---------------------------------------)