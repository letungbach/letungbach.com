---
title: benchmark
draft: false
tags:
  - moe
  - cvd
  - continuallearning
  - neuralnet
  - deeplearning
created: 2025-04-10T00:13
updated: 2025-04-24T04:30
description: AI benchmarks assess the performance and capabilities of models in standardized tasks.
---
https://linzhiqiu.github.io/papers/naturalbench/?fbclid=IwY2xjawJ1xCpleHRuA2FlbQIxMQABHnFZ6hln8p75Kuz4l9F4Mgow7kzEgS1GKuRYj6q-DlvUAWVVRiyVmW1SvnwQ_aem_y_RMPY4cokQHJk8TpxQwpQ

https://github.com/Baiqi-Li/NaturalBench

trackingAI.org

https://llm-stats.com/

https://lmarena.ai/?leaderboard

https://fiction.live/stories/Fiction-liveBench-Feb-21-2025/oQdzQvKHw8JyXbN87

[Data Agent Benchmark](https://huggingface.co/spaces/adyen/DABstep)

https://artificialanalysis.ai/

LiveCodeBench và SciCode

[Aider polyglot](https://aider.chat/docs/leaderboards/?fbclid=IwY2xjawJs18lleHRuA2FlbQIxMQABHpMzr6OCU0YD65sAyMY5vDd4DKn00s4RKJniEUvlJIIeX4sIYMCtIq7MLZw8_aem_yF2JsBDjLMvkeFDhYfb-6A)
	[github](https://github.com/Aider-AI/aider)

https://livebench.ai/#/
https://openrouter.ai/rankings

https://arcprize.org/leaderboard?fbclid=IwY2xjawJkGOJleHRuA2FlbQIxMAABHpInxwGwuzaVHnGeNNycEGfhmweu8Xb_aBq5dhGnOHLm1qEbktYZYnqZzNmc_aem_ttSWRTegPXjvOSU1K0DAlg

![[Pasted image 20250410103636.png]]

EQ-Bench - Longform Creative Writing: [paper](https://arxiv.org/pdf/2312.06281) 
![EQ-Bench][https://eqbench.com/images/eqbench3-judge-comparison.png]

https://llmbenchmark.kili-technology.com/?_gl=1*1y0re2j*_gcl_au*NzA4OTAwNjM4LjE3NDQ5MjAzNDE.

{{< figure src="https://eqbench.com/images/eqbench3-judge-comparison.png" title="Judge Comparison" >}}

  Table of Contents

- [Why are datasets important in training LLMs?](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#3)
    - [Common challenges when preparing training datasets](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#common-challenges-when-preparing-training-datasets)
- [Popular Open Source Datasets for Training LLMs](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#27)
    - [1. Common Crawl](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#1.-common-crawl)
    - [2. RefinedWeb](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#2.-refinedweb)
    - [3. The Pile](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#3.-the-pile)
    - [4. C4](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#4.-c4)
    - [5. Starcoder Data](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#5.-starcoder-data)
    - [6. BookCorpus](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#6.-bookcorpus)
    - [7. ROOTS](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#7.-roots)
    - [8. Wikipedia](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#8.-wikipedia)
    - [9. Red Pajama](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#9.-red-pajama)
- [Why Data Preprocessing is Important when Using Open Source Datasets](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#73)
    - [Data Pre-Processing Techniques](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#data-pre-processing-techniques)
    - [Cleaning and normalization](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#cleaning-and-normalization)
    - [Tokenization and vectorization](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#tokenization-and-vectorization)
    - [Handling of missing data](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#handling-of-missing-data)
    - [Data augmentation](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#data-augmentation)
- [Ethical Considerations and Challenges When Applying Datasets in Machine Learning](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#115)
- [How Datasets are used in Fine-Tuning and Evaluating LLMs](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#126)
- [Conclusion: You Reap what you Sow](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#142)
    - [Additional Reading](https://kili-technology.com/large-language-models-llms/9-open-sourced-datasets-for-training-large-language-models#additional-reading)

The emergence of large language models (LLMs) sparks revolutionary transformation in various industries. While ChatGPT has impressed the public with its ingenious take on poetic writing, organizations are adopting deep learning AI models to build advanced neural information processing systems for specialized use cases.

The benefits that LLMs like GPT, LLaMA, and Falcon bring promise efficiency, cost-reduction, and collaborative-friendly business environments. Yet, few question the factors that enable large language models to perform exceptionally in text generation and other natural language processing tasks; or to excel in other respective domains they are deployed in.

In this article, we’ll explore the importance of datasets that AI companies use to train their models. We will also discuss data pre-processing techniques and the ethical challenges of choosing a large language model dataset for training AI models.

## **Why are datasets important in training LLMs?**

As popular as they are, large language models rely on the training datasets they learn on. LLMs consist of multiple hidden layers of deep neural networks, which extract and train their parameters from a significant amount of data sources.  If you train LLMs with questionable datasets, they will be impacted by performance issues like bias and overfitting. Conversely, training a deep learning model with [high-quality datasets](https://kili-technology.com/platform/explore-and-fix) enables a more accurate and coherent output.

Leading organizations have realized that good language modeling needs more than state-of-the-art machine learning models and training methods. Curating and annotating a diverse training dataset that fairly represents the model’s domain is equally important in implementing neural network artificial intelligence solutions in various industries.

For example, Bloomberg trained a transformer architecture from scratch with decades-worth of carefully curated financial data. The resulting [BloombergGPT](https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/) allows the financial company to empower its clients and perform existing financial-specific NLP tasks faster and with more accuracy. Likewise, HuggingFace has developed a programmer-friendly model [StarCode](https://huggingface.co/bigcode/starcoder), by training it on code in different programming languages gathered from GitHub.

### Common challenges when preparing training datasets

Machine learning teams face considerable challenges when curating datasets to train AI models. For example,

- Data scarcity in some domains results in imbalanced datasets that affect the model’s ability to infer appropriately. Similarly, preparing a diverse dataset proves challenging in certain use cases.
    
- Training a large language model requires an enormous size of datasets. For example, OpenAI trained GPT-3 with [45 TB](https://www.springboard.com/blog/data-science/machine-learning-gpt-3-open-ai/) of textual data curated from various sources.
    
- Organizations must secure datasets containing sensitive information from adversarial threats to protect users’ privacy and comply with industry regulations.
    
- [Data annotation](https://kili-technology.com/platform/label-annotate/) is required when [fine-tuning LLMs](https://kili-technology.com/large-language-models-llms/the-ultimate-guide-to-fine-tuning-llms-2023) for downstream tasks. When performed manually, organizations must manage the cost of hiring large teams of human labelers and factor in possible annotation errors.
    

Data labeling platforms like Kili Technology help organizations overcome hurdles when preparing datasets for machine learning projects. Our software provides automated [labeling tools](https://kili-technology.com/data-labeling/data-labeling-tool-guide) that improve annotation efficiency and reduce the number of human-generated errors.

## **Popular Open Source Datasets for Training LLMs**

These [open-source datasets](https://kili-technology.com/datasets) are pivotal in training or [fine-tuning many LLMs](https://kili-technology.com/large-language-models-llms/how-to-fine-tune-large-language-models-llms-with-kili-technology) that ML engineers use today.

### 1. Common Crawl

[The Common Crawl](https://commoncrawl.org/) dataset comprises terabytes of raw web data extracted from billions of web pages. It releases new data files that the crawler obtains each month. Several large language models, including GPT-3, LLaMA, OpenLLaMa, and T5, were trained with CommonCrawl.

![](https://a.storyblok.com/f/139616/1200x800/e66f483877/downstream-filtering.webp)

### 2. RefinedWeb

[RefinedWeb](https://kili-technology.com/datasets/refinedweb) is a massive corpus of deduplicated and filtered tokens from the Common Crawl dataset. In natural language processing (NLP), a token is a unit of text that is meaningful to the language being processed. Tokens can be words, punctuation marks, or other symbols. The dataset has more than 5 trillion tokens of textual data, of which 600 billion are made publicly available. It was developed as an initiative to train the Falcon-40B model with smaller-sized but high-quality datasets.

![](https://a.storyblok.com/f/139616/1200x800/b6fbb07bf1/pile-dataset.webp)

_Source:_ [_The Pile_](https://paperswithcode.com/dataset/the-pile)

### 3. The Pile

[The Pile](https://pile.eleuther.ai/) is an 800 GB corpus that enhances a model’s generalization capability across a broader context. It was curated from 22 diverse datasets, mostly from academic or professional sources. The Pile was instrumental in training various LLMs, including GPT-Neo, LLaMA, and OPT.

### 4. C4

[C4, which stands for (Colossal Clean Crawled Corpus)](https://kili-technology.com/datasets/C4), is a 750 GB English corpus derived from the Common Crawl. It uses heuristic methods to extract only natural language data while removing all gibberish text. C4 has also undergone heavy deduplication to improve its quality. Language models like MPT-7B and T5 are pre-trained with C4.

![](https://a.storyblok.com/f/139616/2000x1125/7ae15d867e/uggingface-faq.webp)

_Source:_ [_HuggingFace_](https://huggingface.co/blog/starcoder)

### 5. Starcoder Data

[Starcoder Data](https://kili-technology.com/datasets/Starcoder%20Data) is a programming-centric dataset built from 783 GB of code written in 86 programming languages. It also contains 250 billion tokens extracted from GitHub and Jupyter Notebooks. Salesforce CodeGen, Starcoder, and StableCode were trained with Starcoder Data to enable better program synthesis.

![](https://a.storyblok.com/f/139616/1200x800/ca02998496/bookcorpus-genre-breakdown.webp)

_Source:_ [_Jack Bandy_](https://github.com/jackbandy/bookcorpus-datasheet)

### 6. BookCorpus

[BookCorpus](https://kili-technology.com/datasets/Book%20Corpus) turned scraped data of 11,000 unpublished books into a 985 million-word dataset. It was initially created to align storylines in books to their movie interpretations. The dataset was used for training LLMs like RoBERTA, XLNET, and T5.

### 7. ROOTS

[ROOTS](https://arxiv.org/abs/2303.03915) is a 1.6TB multilingual dataset curated from text sourced in 59 languages. Created to train the BigScience Large Open-science Open-access Multilingual (BLOOM) language model. ROOTS uses heavily deduplicated and filtered data from Common Crawl, GitHub Code, and other crowdsourced initiatives.

### 8. Wikipedia

The [Wikipedia](https://kili-technology.com/datasets/Wikipedia) dataset is curated from cleaned text data derived from the Wikipedia site and presented in all languages. The default English Wikipedia dataset contains 19.88 GB of vast examples of complete articles that help with language modeling tasks. It was used to train larger models like Roberta, XLNet, and LLaMA.

### 9. Red Pajama

[Red Pajama](https://kili-technology.com/datasets/Red%20Pajama) is an open-source effort to replicate the LLaMa dataset. It comprises 1.2 trillion tokens extracted from Common Crawl, C4, GitHub, books, and other sources. Red Pajama’s transparent approach helps train MPT-7B and OpenLLaMA.

## **Why Data Preprocessing is Important when Using Open Source Datasets**

Never assume that open-source datasets are optimal for training deep learning models. As comprehensive as they are, such datasets often contain redundant, missing, or improperly formatted data that a deep neural network couldn’t process. This draws our attention to data processing.

Data preprocessing is a step that ML teams take to ensure the model trains with clean and consistent data. In practical AI development, language models have a low tolerance for data outliers. An outlier is a data point that differs significantly from other observations. Outliers can be problematic for machine learning models because they can skew the results of the model. For example, a language model that is trained on a dataset with a few outliers may learn to associate those outliers with the wrong words or phrases. This can lead to the model generating incorrect or nonsensical text.

If you apply open-source datasets as they are, the language model will extract, learn and embed the noise within. As a result, the model training process and eventual performance suffer in several aspects.

- The presence of redundant data prolongs the time it takes to train a model, which increases computational resources and costs.
    
- Data anomalies might lead to erratic model behavior when exposed to real-world data.
    
- When you forgo data preprocessing, performance issues such as underfitting or overfitting might occur.
    

So, it’s essential to preprocess your datasets, whether they’re downloaded from sources we listed or curated from your internal databases.

![](https://a.storyblok.com/f/139616/1200x800/ef2e8edc0b/data-pre-processing-techniques.webp)

### Data Pre-Processing Techniques

We share several common data preprocessing techniques that help you prepare clean, consistent, and quality training datasets.

### **_Cleaning and normalization_**

[Data cleaning](https://kili-technology.com/data-labeling/machine-learning/data-cleaning-guide) removes noisy data or outliers from the raw data. When doing so, ML teams use techniques like binning and regression to filter out noise from the training data. Then, they cluster similar groups of data and remove outliers that don’t belong to any.  For example, Technology Innovation Institute uses [RefinedWeb](https://arxiv.org/pdf/2306.01116.pdf), which applies extensive data cleaning, such as URL filtering and deduplication, to train a high-performing Falcon-40B model.

Normalization is helpful to ensure features in datasets are uniformly structured to a common scale. When normalizing data, ML engineers use techniques like min-max scaling, log transformation, and z-score standardization. Normalized data are distributed over a narrower scale, which enables a model to converge faster. In this [study](https://www.mdpi.com/2227-7390/10/11/1942), data science researchers have shown that normalizing datasets can improve multiclass classification by up to 6%.

### **_Tokenization and vectorization_**

Tokenization and vectorization are closely related data preprocessing methods that enable NLP models to extract features from textual sources. Tokenization segregates words or phrases in a sentence into separate textual entities or tokens organized as n-grams. An n-gram is a contiguous sequence of n items from a given sample of text or speech. The items can be letters, words, or base pairs according to the application. N-grams are used to group words together to be processed as a single unit. This can help to improve the accuracy of NLP models by reducing the number of unique tokens that need to be considered.

Meanwhile, vectorization, or word embeddings, is a process that assigns each token a unique number. Common vectorization techniques include bags of words, Term Frequency–Inverse Document Frequency (TF-IDF), and Word2Vec. In this [paper](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050920X00160/1-s2.0-S1877050920323954/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLWVhc3QtMSJGMEQCIF9OIUqVdZBnDI3bEDGp1IK%2FZby1hymoWmFwJog4wb6NAiA3aWrP1hAbok8ql6ILduQPiFZ3I4%2F9yLAytBetbRNw3Sq8BQjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDA1OTAwMzU0Njg2NSIMT7NzgwPwcH2tAd8IKpAFkJTzujCEg4MiW5xY2v6yDSARnw10Xz9aPCVu%2Fe3CrwXcwaReSAbIG2gjWJbQLOQSFI3jCtKa3rPSJhhxq1LxwcGQCP6q39YiO%2BrdKbvqlNR9Wamvw%2F7vFo2rpiT%2Fa2%2FtAq%2BnXMZT438EM5LE85NH7HII7n1pyIHX94vg1%2BRBAHfszW%2FabVh5hCc63qR7xhfrmPR8sCcBpCaThFEyH9VE3cdCsAWEWpGHSji2wSXWSZHFGFdO6M%2BF14%2Fb6VpUjaWUw3esoNmibwWrEyp3WifFTNCHoB%2Fx96G2VOsJ6FfAR9EgcSpVt%2B2Y30cismISWkrSyTGwlb9mDFMn652Aj9hPzOFGpXgm4r4w0cciG5CBBS7%2B1yBCo5ykLxyLQRLEicCG2tEbUVI%2Fb%2FnAZlrNsbsy6PchWAWeKfBSiSwHjgY%2FG4CKxo2SOGcMc6HOR75CBqEc8jRMojV%2BnpY6kNVQAB2cYj4TXJjhvaSVocuUVwdidXkyWc1A3duF1XYYDp4DJbjgOWXIFVbHOcLmsT3QNoSWFyLSQxQvta%2FyJFEjLBWEi94eqM8wKjaaSEcVw4OCG%2FfSJT4fwgF%2BBwQzUJHW4zQrQ899bcaQuSxSezwummpcHqyly7ua6zFxBcod25zttXSom1%2FkwAMqdKK7%2Bi3nsQ9PmE4jmUD8NwSHXwKQZdGLS7ztzxpDW94fBqMu8MXIO%2BWy%2F4NeSrjfUZI4YGK5hEQNQVmuniJpnNkRxYUDaAw%2BdF8X6VLhun4RnlmL20gdhQqkrKfmhP8N7efzCTbJhsroDHlUz9E93f%2FKIP9FkftGZg8qrQnd%2BxSqqY6tpie34sC6j1Q5IWTEo6LAIEjCZh2lRWD6MP2s9xAZ0Kw0U1mR22owltXcpgY6sgEeKodathPDVCrtpZkDd6rQaiwo2A1fOvuOt8q815I%2Bd7nonfMLwnVnBJF7PcISi80FTk%2F6v6dzz8WkHOrj%2BvUtjJipTAD32l2P6XpR8Lr6D9A259lVha7WuWl6K0JUflsH3diqxJ7EyG8YMPEE687G4R%2BT2Gya0Hg4iGQtqwS6z8dhURF6%2BJOW8JuZKdOqMA2L98mEXr2UfEAs9JWRjGgoBt8drJ2f7g6ELkOlg2Lo%2FCHN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T072639Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYSW55KHHD%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=879400a7317aaf690ddc69a8e2f2412ec1f8dd66ee6e3123f6862c404e25f194&hash=5b9bdacfba01b55cf6712b6b717ef7f3b49b6ff22da3f6cc0409f182c3472a20&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877050920323954&tid=spdf-20c04635-f3c9-4377-a27f-d664ff7731de&sid=8c6ca9946be7e041877b41d45160666e8d6egxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=171f590457530703055f59&rr=7f56fdc96c9b13e0&cc=my), researchers found that applying TF-IDF improved the accuracy of a sentiment analysis model.

### **_Handling of missing data_**

When your dataset contains missing values, you can either remove or replace them. Removing missing or null data is straightforward but decreases the available data to train the model. Alternatively, impute or replace the data with arithmetic approximation such as mean and median or regression techniques to predict the likely values. Machine learning-driven imputation techniques like [missForest and the k-nearest neighbor](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-021-00516-9) have shown promising in a comparative study.

### **_Data augmentation_**

[Data augmentation](https://kili-technology.com/data-labeling/machine-learning/data-augmentation-guide) allows you to overcome the limitations of dataset scarcity by transforming existing datasets into new and realistic ones. Because of its cost-efficiency, data augmentation is commonly used when training machine translation and computer vision models. For example, applying transformation methods like flipping, rotating, and scaling enables ML teams to create sufficient datasets for disciplines like medical imaging. [Deep AutoAugment](https://paperswithcode.com/paper/deep-autoaugment-1) is one of the latest efforts to improve data augmentation performance benchmarked with ImageNet.

## **Ethical Considerations and Challenges When Applying Datasets in Machine Learning**

As LLMs usage becomes increasingly prevalent, the spotlight now shines on ethical concerns around the models, as some have reportedly exhibited bias when making predictions. For example, researchers discovered that an [AI-powered automated captioning feature](http://www.ethicsinnlp.org/workshop/pdf/EthNLP06.pdf) on a popular video platform performs less accurately when a Scottish women's accent is chosen.

While model bias may occur because of the model’s architecture, such incidence is equally likely caused by underrepresentation in the training data. For example, ML teams need help creating sufficiently large and diverse datasets for implementing AI systems in Europe. There, the GPDR regulation limits the type of healthcare data one can assemble to train deep learning models.

The dataset's quality has vast implications for the model that trains on it, especially as it can cause undesirable behaviors in AI systems. [MIT researchers](https://www.theregister.com/2020/07/01/mit_dataset_removed) permanently removed a dataset that caused AI models to describe people with potentially degrading terms. Such abusive behaviors happen because researchers fail to filter racist and sexist labels of images when compiling the dataset.

Besides ensuring fairness, ML teams must strive to safeguard data privacy as AI models gain access to enormous amounts of data. Industries that manage sensitive data, such as healthcare and finance, are particularly concerned about the lack of explainability and data risks that deep learning models might pose. [Apple’s recent move to ban its employees](https://www.computerworld.com/article/3697000/apple-bans-employees-from-using-chatgpt-should-you.html) from using ChatGPT underscored the risk of leaking confidential data.

Preventing data leakages, whether intentional or not, requires a coordinated effort in policy compliance, data security measures, and software development best practices. It’s imperative to secure the entire ML pipeline, including data labeling tools, from breaches. In this sense, organizations choose Kili because of the [security measures our platform provides.](https://docs.kili-technology.com/docs/kili-security-measures)

## **How Datasets are used in Fine-Tuning and Evaluating LLMs**

While open-source datasets contribute to the birth of many large language models and their variants, they are equally relevant in other machine-learning tasks applied to a pre-trained model. As you might have realized, pre-trained models cannot infer reliably beyond the data distribution they were trained on. Without further fine-tuning, you can’t use a general language model like GPT-3 for downstream tasks.

[Fine-tuning a pre-trained model](https://kili-technology.com/large-language-models-llms/how-to-fine-tune-large-language-models-llms-with-kili-technology) enables it to learn domain-specific knowledge and unique instructions while maintaining its linguistic capabilities. For example, Google AI used instruction fine-tuning to develop MedPaLM from its base model PaLM. In instruction fine-tuning, the model is trained on a set of examples that are prefixed with instructions. The instructions tell the model what kind of response is expected. For example, an instruction might be "Answer this question in a complete sentence.” The dataset used for fine-tuning is called MultiMedQA and consists of over 100,000 questions and answers from various sources, including the US Medical Licensing Examination (USMLE), PubMed, and clinical trials.

[Annotated datasets](https://kili-technology.com/platform/label-annotate/) are also helpful in [evaluating a model](https://kili-technology.com/large-language-models-llms/webinar-recap-evaluating-large-language-models-llms-using-kili-technology) after fine-tuning. Before deploying the model, ML teams compare its performance with third-party benchmarks to get an objective insight. For example, you can evaluate a model’s tendency to hallucinate with [HaluEval](https://github.com/RUCAIBox/HaluEval), which contains 35,000 question-answer pairs for general and task-specific scenarios. [Hallucination](https://kili-technology.com/large-language-models-llms/understanding-llm-hallucinations-and-how-to-mitigate-them) refers to the phenomenon where a language model generates text that is incorrect, nonsensical, or not based on the input given. Meanwhile, [BOLD](https://github.com/amazon-science/bold) was developed by Amazon to measure fairness across different domains.

Language models must also be able to infer with strong confidence and consistency in the domain it was trained for. Hence, ML engineers feed the model with a ground truth test dataset to ensure it can replicate its training results. For instance, [IBEM](https://zenodo.org/record/4757865) is an open-source ground truth dataset that helps evaluate a model’s capability in finding mathematical expressions.

Stay tuned for more blogs about applying datasets for evaluating and fine-tuning LLMs.